import React, { createContext, useState, useContext, useEffect, useCallback } from 'react';
import { supabase } from '@/lib/customSupabaseClient';
import { useToast } from '@/components/ui/use-toast';

const MemberAuthContext = createContext();

export const MemberAuthProvider = ({ children }) => {
  const { toast } = useToast();
  const [session, setSession] = useState(null);
  const [currentMember, setCurrentMember] = useState(null);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingUsers, setLoadingUsers] = useState(false);

  const memberIsAuthenticated = !!session;

  const fetchAllUsers = useCallback(async () => {
    setLoadingUsers(true);
    try {
      const { data, error } = await supabase.rpc('get_all_members');
      if (error) {
        console.error('Error fetching users:', error);
        toast({ 
          title: 'Fehler', 
          description: `Mitglieder konnten nicht geladen werden. Details: ${error.message}`, 
          variant: 'destructive' 
        });
        setUsers([]);
      } else {
        setUsers(data || []);
      }
    } catch (e) {
      console.error('Unhandled exception in fetchAllUsers:', e);
      toast({
        title: 'Unerwarteter Fehler',
        description: 'Ein kritischer Fehler ist beim Laden der Mitgliederliste aufgetreten.',
        variant: 'destructive',
      });
      setUsers([]);
    } finally {
      setLoadingUsers(false);
    }
  }, [toast]);

  const fetchMemberData = useCallback(async (user, retries = 5, delay = 500) => {
    if (!user) {
      setCurrentMember(null);
      return null;
    }

    try {
      const { data: profile, error: profileError } = await supabase
        .from('profiles')
        .select('username, first_name, last_name, customer_number')
        .eq('id', user.id)
        .single();
        
      if (profileError && profileError.code !== 'PGRST116') { // 'PGRST116' means 0 rows found
        throw profileError;
      }
      
      const { data: contract, error: contractError } = await supabase
        .from('contracts')
        .select('*')
        .eq('user_id', user.id)
        .single();

      if (contractError && contractError.code === 'PGRST116') {
        if (retries > 0) {
          console.warn(`Contract or profile not found for user ${user.id}, retrying... (${retries} left)`);
          await new Promise(res => setTimeout(res, delay));
          return fetchMemberData(user, retries - 1, delay * 1.5);
        } else {
          console.error('Critical: Contract or profile not found after multiple retries.');
          throw new Error('Ihre Vertragsdaten konnten nicht gefunden werden. Bitte kontaktieren Sie den Support.');
        }
      } else if (contractError) {
        throw contractError;
      }

      const memberData = { id: user.id, email: user.email, profile, contract };
      setCurrentMember(memberData);
      return memberData;

    } catch (error) {
      console.error('Error fetching member data:', error);
      toast({
        title: 'Fehler beim Laden der Daten',
        description: error.message,
        variant: 'destructive',
      });
      setCurrentMember(null);
      return null;
    }
  }, [toast]);

  useEffect(() => {
    const fetchSession = async () => {
        setLoading(true);
        const { data: { session: currentSession } } = await supabase.auth.getSession();
        setSession(currentSession);
        if (currentSession) {
            await fetchMemberData(currentSession.user);
        }
        setLoading(false);
    };

    fetchSession();

    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (_event, session) => {
      setSession(session);
      if (session) {
        setLoading(true);
        await fetchMemberData(session.user);
        setLoading(false);
      } else {
        setCurrentMember(null);
      }
    });

    return () => {
      subscription?.unsubscribe();
    };
}, [fetchMemberData]);


  const memberLogin = useCallback(async (email, password) => {
    setLoading(true);
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    
    if (error) {
        setLoading(false);
        return { success: false, error: 'E-Mail oder Kundennummer ist ungültig.' };
    }
    
    if (data.user) {
        const { data: contract, error: contractError } = await supabase
            .from('contracts')
            .select('status')
            .eq('user_id', data.user.id)
            .single();

        if (contractError || !contract) {
            await supabase.auth.signOut();
            setLoading(false);
            return { success: false, error: 'Vertragsdaten konnten nicht gefunden werden.' };
        }

        if (contract.status !== 'active') {
            await supabase.auth.signOut();
            setLoading(false);
            return { success: false, error: 'Konto nicht aktiviert.', reason: 'not_activated' };
        }
    }
    
    // onAuthStateChange will trigger fetchMemberData and setLoading(false)
    return { success: !!data.session };
  }, []);


  const memberLogout = useCallback(async () => {
    await supabase.auth.signOut();
  }, []);

  const addUser = useCallback(async (newUser) => {
    const { data, error } = await supabase.functions.invoke('create-member', {
      body: JSON.stringify({ newUser }),
    });

    if (error) {
      let description = 'Ein unerwarteter Fehler ist aufgetreten. Bitte versuchen Sie es erneut.';
      try {
        const errorBody = await error.context.json();
        if (errorBody && errorBody.error) {
          description = errorBody.error;
        } else {
           description = `Server-Antwort: ${error.message}`;
        }
      } catch (e) {
        description = `Kommunikationsfehler: ${error.message}`;
      }
      toast({
        title: 'Fehler beim Erstellen',
        description,
        variant: 'destructive',
      });
      return false;
    }

    if (data && data.error) {
      toast({
        title: 'Fehler beim Erstellen',
        description: data.error,
        variant: 'destructive',
      });
      return false;
    }

    await fetchAllUsers();
    return true;
  }, [toast, fetchAllUsers]);

  const deleteUser = useCallback(async (userId) => {
    const { error } = await supabase.rpc('delete_user_by_admin', { user_id_to_delete: userId });
    if (error) {
      toast({ title: 'Fehler beim Löschen', description: `Der Benutzer konnte nicht gelöscht werden: ${error.message}`, variant: 'destructive' });
    } else {
      toast({ title: 'Benutzer gelöscht', description: 'Der Benutzer wurde erfolgreich und endgültig entfernt.', variant: 'success' });
      await fetchAllUsers();
    }
  }, [toast, fetchAllUsers]);

  const updateUserContract = useCallback(async (userId, updatedContract) => {
    const { error } = await supabase
      .from('contracts')
      .update(updatedContract)
      .eq('user_id', userId);

    if (error) {
      toast({ title: 'Fehler', description: 'Vertrag konnte nicht aktualisiert werden.', variant: 'destructive' });
    } else {
      await fetchAllUsers();
      if (session?.user?.id === userId) {
        setLoading(true);
        await fetchMemberData(session.user);
        setLoading(false);
      }
    }
  }, [toast, session, fetchMemberData, fetchAllUsers]);
  
  const activateMember = useCallback(async (userId, email, password) => {
    const { data, error } = await supabase.functions.invoke('activate-member', {
      body: { userId, email, password }
    });
    
    if (error) {
      let description = 'Ein unerwarteter Fehler ist aufgetreten.';
      try {
        const errorBody = await error.context.json();
        if (errorBody && errorBody.error) {
          description = errorBody.error;
        } else {
          description = `Server-Fehler: ${error.message}`;
        }
      } catch (e) {
        description = `Kommunikationsfehler: ${error.message}`;
      }
      toast({
        title: 'Fehler bei der Aktivierung',
        description,
        variant: 'destructive'
      });
      return { success: false };
    }

    if (data && data.error) {
      toast({
        title: 'Fehler bei der Aktivierung',
        description: data.error,
        variant: 'destructive'
      });
      return { success: false };
    }

    toast({
      title: 'Erfolg!',
      description: data.message || 'Mitglied wurde erfolgreich aktiviert.',
      variant: 'success'
    });
    await fetchAllUsers();
    return { success: true, data };
  }, [toast, fetchAllUsers]);


  const changeMemberPassword = useCallback(async (newPassword) => {
    const { error } = await supabase.auth.updateUser({ password: newPassword });
    if (error) {
      toast({
        title: 'Fehler',
        description: 'Kundennummer konnte nicht geändert werden: ' + error.message,
        variant: 'destructive',
      });
      return false;
    }
    toast({
      title: 'Erfolg',
      description: 'Ihre Kundennummer wurde erfolgreich geändert.',
      variant: 'success',
    });
    return true;
  }, [toast]);

  const resetMemberPassword = useCallback(async (userId) => {
    const { data, error } = await supabase.functions.invoke('reset-member-password', {
      body: { userId }
    });

    if (error) {
      toast({ title: 'Fehler', description: 'Passwort konnte nicht zurückgesetzt werden.', variant: 'destructive' });
      return { success: false };
    }
    if (data.error) {
      toast({ title: 'Fehler', description: data.error, variant: 'destructive' });
      return { success: false };
    }
    
    toast({ title: 'Erfolg!', description: 'Passwort wurde erfolgreich zurückgesetzt.', variant: 'success' });
    await fetchAllUsers();
    return { success: true, newPassword: data.newPassword };
  }, [toast, fetchAllUsers]);

  const value = {
    session,
    currentMember,
    memberIsAuthenticated,
    loading,
    users,
    loadingUsers,
    fetchAllUsers,
    memberLogin,
    memberLogout,
    addUser,
    deleteUser,
    updateUserContract,
    changeMemberPassword,
activateMember,
    resetMemberPassword,
  };

  return (
    <MemberAuthContext.Provider value={value}>
      {children}
    </MemberAuthContext.Provider>
  );
};

export const useMemberAuth = () => {
  return useContext(MemberAuthContext);
};