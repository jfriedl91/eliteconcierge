import React, { useState, useEffect, useCallback } from 'react';
    import { Helmet } from 'react-helmet-async';
    import { useNavigate } from 'react-router-dom';
    import { useToast } from '@/components/ui/use-toast';
    import { Button } from '@/components/ui/button';
    import { Input } from '@/components/ui/input';
    import { Label } from '@/components/ui/label';
    import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
    import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
    import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
    import { useMemberAuth } from '@/contexts/MemberAuthContext';
    import PageWrapper from '@/components/PageWrapper';
    import { PlusCircle, Trash2, Users, Loader2 } from 'lucide-react';
    import {
      Dialog,
      DialogContent,
      DialogHeader,
      DialogTitle,
      DialogDescription,
      DialogFooter,
      DialogTrigger,
      DialogClose,
    } from '@/components/ui/dialog';
    import { ScrollArea } from '@/components/ui/scroll-area';

    const MemberManagementPage = () => {
      const { toast } = useToast();
      const { users, addUser, deleteUser, fetchAllUsers, loadingUsers } = useMemberAuth();
      const navigate = useNavigate();
      const [isAddUserDialogOpen, setIsAddUserDialogOpen] = useState(false);
      const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
      const [userToDelete, setUserToDelete] = useState(null);
      const [isSubmitting, setIsSubmitting] = useState(false);

      const initialNewUserState = {
        email: '',
        password: '',
        first_name: '',
        last_name: '',
        street: '',
        house_number: '',
        postal_code: '',
        city: '',
        contract: {
          package: 'Smart 100',
          start_date: new Date().toISOString().split('T')[0],
        }
      };

      const [newUser, setNewUser] = useState(initialNewUserState);

      const stableFetchAllUsers = useCallback(fetchAllUsers, []);

      useEffect(() => {
        stableFetchAllUsers();
      }, [stableFetchAllUsers]);

      const handleInputChange = (e) => {
        const { id, value } = e.target;
        setNewUser(prev => ({ ...prev, [id]: value }));
      };

      const handlePackageChange = (value) => {
        setNewUser(prev => ({ ...prev, contract: { ...prev.contract, package: value } }));
      };
      
      const handleStartDateChange = (e) => {
        setNewUser(prev => ({ ...prev, contract: { ...prev.contract, start_date: e.target.value } }));
      };

      const handleAddUser = async (e) => {
        e.preventDefault();
        if (!newUser.email || !newUser.password || !newUser.first_name || !newUser.last_name) {
          toast({
            title: 'Fehler',
            description: 'Bitte füllen Sie alle erforderlichen Felder aus.',
            variant: 'destructive',
          });
          return;
        }
        setIsSubmitting(true);
        const success = await addUser(newUser);
        setIsSubmitting(false);
        if (success) {
          toast({
            title: 'Benutzer erstellt',
            description: `Der Benutzer für ${newUser.email} wurde erfolgreich angelegt.`,
            variant: 'success',
          });
          setNewUser(initialNewUserState);
          setIsAddUserDialogOpen(false);
        }
      };
      
      const openDeleteDialog = (e, user) => {
        e.stopPropagation();
        setUserToDelete(user);
        setIsDeleteDialogOpen(true);
      };

      const handleDeleteUser = async () => {
        if (userToDelete) {
          await deleteUser(userToDelete.user_id);
          setIsDeleteDialogOpen(false);
          setUserToDelete(null);
        }
      };
      
      const getStatusBadge = (status) => {
        switch (status) {
          case 'active':
            return 'bg-green-500/20 text-green-300';
          case 'cancelled':
            return 'bg-red-500/20 text-red-300';
          case 'pending_review':
            return 'bg-yellow-500/20 text-yellow-300';
          default:
            return 'bg-gray-500/20 text-gray-300';
        }
      };
      
      const getStatusText = (status) => {
        switch (status) {
          case 'active': return 'Aktiv';
          case 'cancelled': return 'Gekündigt';
          case 'pending_review': return 'Zur Prüfung';
          default: return 'Unbekannt';
        }
      }


      return (
        <PageWrapper>
          <Helmet>
            <title>Mitgliederverwaltung | Admin</title>
          </Helmet>
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
              <div className="flex items-center gap-4">
                <Users className="w-8 h-8 sm:w-10 sm:h-10 text-gold" />
                <div>
                  <h1 className="text-3xl sm:text-4xl font-serif font-bold text-gold">
                    Mitgliederverwaltung
                  </h1>
                  <p className="text-platinum/70">Benutzer anlegen, einsehen und verwalten.</p>
                </div>
              </div>
              <Dialog open={isAddUserDialogOpen} onOpenChange={setIsAddUserDialogOpen}>
                <DialogTrigger asChild>
                  <Button className="bg-gold text-background hover:bg-gold/90 w-full sm:w-auto">
                    <PlusCircle className="mr-2 h-4 w-4" />
                    Neuen Benutzer anlegen
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-lg">
                  <DialogHeader>
                    <DialogTitle>Neuen Benutzer anlegen</DialogTitle>
                    <DialogDescription>
                      Füllen Sie die Details aus, um einen neuen Mitgliedszugang zu erstellen.
                    </DialogDescription>
                  </DialogHeader>
                  <form onSubmit={handleAddUser}>
                    <ScrollArea className="h-[60vh] pr-6">
                      <div className="space-y-4 py-4">
                        <h4 className="text-lg font-semibold text-gold mb-2 border-b border-gold/20 pb-2">Zugangsdaten</h4>
                        <div className="flex flex-col space-y-2">
                          <Label htmlFor="email">E-Mail</Label>
                          <Input id="email" type="email" value={newUser.email} onChange={handleInputChange} required />
                        </div>
                        <div className="flex flex-col space-y-2">
                          <Label htmlFor="password">Kundennummer (Passwort)</Label>
                          <Input id="password" type="text" value={newUser.password} onChange={handleInputChange} required />
                          <p className="text-xs text-platinum/60">Mindestens 10 Zeichen mit Sonderzeichen.</p>
                        </div>

                        <h4 className="text-lg font-semibold text-gold mt-6 mb-2 border-b border-gold/20 pb-2">Kontaktdaten</h4>
                        <div className="flex flex-col space-y-2">
                          <Label htmlFor="first_name">Vorname</Label>
                          <Input id="first_name" value={newUser.first_name} onChange={handleInputChange} required />
                        </div>
                        <div className="flex flex-col space-y-2">
                          <Label htmlFor="last_name">Nachname</Label>
                          <Input id="last_name" value={newUser.last_name} onChange={handleInputChange} required />
                        </div>
                        <div className="grid grid-cols-3 gap-4">
                          <div className="col-span-2 flex flex-col space-y-2">
                            <Label htmlFor="street">Straße</Label>
                            <Input id="street" value={newUser.street} onChange={handleInputChange} />
                          </div>
                           <div className="flex flex-col space-y-2">
                            <Label htmlFor="house_number">Hausnr.</Label>
                            <Input id="house_number" value={newUser.house_number} onChange={handleInputChange} />
                          </div>
                        </div>
                        <div className="grid grid-cols-3 gap-4">
                          <div className="flex flex-col space-y-2">
                            <Label htmlFor="postal_code">PLZ</Label>
                            <Input id="postal_code" value={newUser.postal_code} onChange={handleInputChange} />
                          </div>
                          <div className="col-span-2 flex flex-col space-y-2">
                            <Label htmlFor="city">Stadt</Label>
                            <Input id="city" value={newUser.city} onChange={handleInputChange} />
                          </div>
                        </div>

                        <h4 className="text-lg font-semibold text-gold mt-6 mb-2 border-b border-gold/20 pb-2">Vertragsdetails</h4>
                        <div className="flex flex-col space-y-2">
                          <Label htmlFor="package">Paket</Label>
                          <Select onValueChange={handlePackageChange} defaultValue={newUser.contract.package}>
                            <SelectTrigger>
                              <SelectValue placeholder="Paket auswählen" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="Smart 100">Smart 100</SelectItem>
                              <SelectItem value="Smart Plus">Smart Plus</SelectItem>
                              <SelectItem value="Smart Flex">Smart Flex</SelectItem>
                              <SelectItem value="PRIME">PRIME</SelectItem>
                              <SelectItem value="ELITE">ELITE</SelectItem>
                              <SelectItem value="BESPOKE">BESPOKE</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="flex flex-col space-y-2">
                          <Label htmlFor="start_date">Startdatum</Label>
                          <Input id="start_date" type="date" value={newUser.contract.start_date} onChange={handleStartDateChange} />
                        </div>
                      </div>
                    </ScrollArea>
                    <DialogFooter className="pt-4 border-t border-gold/20 mt-4">
                      <DialogClose asChild>
                         <Button variant="outline">Abbrechen</Button>
                      </DialogClose>
                      <Button type="submit" disabled={isSubmitting}>
                        {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                        Benutzer speichern
                      </Button>
                    </DialogFooter>
                  </form>
                </DialogContent>
              </Dialog>
            </div>
            
            <Card className="bg-secondary border-gold/20">
              <CardHeader>
                <CardTitle>Mitgliederliste</CardTitle>
                <CardDescription>Eine Übersicht aller registrierten Mitglieder.</CardDescription>
              </CardHeader>
              <CardContent>
                {loadingUsers ? (
                  <div className="flex justify-center items-center py-16">
                    <Loader2 className="h-8 w-8 animate-spin text-gold" />
                  </div>
                ) : (
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow className="hover:bg-secondary">
                          <TableHead>Kundennr.</TableHead>
                          <TableHead>Name</TableHead>
                          <TableHead className="hidden md:table-cell">E-Mail</TableHead>
                          <TableHead className="hidden lg:table-cell">Paket</TableHead>
                          <TableHead className="hidden lg:table-cell">Antrag am</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead className="text-right">Aktionen</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {users.map(user => (
                          <TableRow key={user.user_id} className="cursor-pointer hover:bg-gold/5" onClick={() => navigate(`/admin/mitglieder/${user.user_id}`)}>
                             <TableCell className="font-mono text-xs">{user.customer_number}</TableCell>
                            <TableCell className="font-medium">
                              <span className="hover:underline text-gold">
                                {(user.first_name || user.last_name) ? `${user.first_name || ''} ${user.last_name || ''}`.trim() : user.email}
                              </span>
                            </TableCell>
                            <TableCell className="hidden md:table-cell">{user.email}</TableCell>
                            <TableCell className="hidden lg:table-cell">{user.package}</TableCell>
                            <TableCell className="hidden lg:table-cell">{user.contract_created_at ? new Date(user.contract_created_at).toLocaleDateString('de-DE') : '-'}</TableCell>
                            <TableCell>
                              {user.status && (
                                <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getStatusBadge(user.status)}`}>
                                  {getStatusText(user.status)}
                                </span>
                              )}
                            </TableCell>
                            <TableCell className="text-right">
                              <Button variant="ghost" size="icon" onClick={(e) => openDeleteDialog(e, user)}>
                                <Trash2 className="h-4 w-4 text-red-400" />
                              </Button>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                )}
                 {!loadingUsers && users.length === 0 && (
                  <p className="text-center text-platinum/60 py-8">Noch keine Benutzer angelegt.</p>
                )}
              </CardContent>
            </Card>
          </div>
           <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Benutzer wirklich löschen?</DialogTitle>
                <DialogDescription>
                 Möchten Sie den Benutzer "{userToDelete?.first_name} {userToDelete?.last_name}" wirklich endgültig löschen? Alle zugehörigen Daten (Profil, Vertrag, Login) werden unwiderruflich entfernt. Diese Aktion kann nicht rückgängig gemacht werden.
                </DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <DialogClose asChild>
                  <Button variant="outline">Abbrechen</Button>
                </DialogClose>
                <Button variant="destructive" onClick={handleDeleteUser}>Endgültig Löschen</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </PageWrapper>
      );
    };

    export default MemberManagementPage;