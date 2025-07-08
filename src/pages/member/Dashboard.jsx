import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useMemberAuth } from '@/contexts/MemberAuthContext';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { FileText, BellOff, AlertTriangle, Loader2, Undo2 } from 'lucide-react';
import PageWrapper from '@/components/PageWrapper';
import { useNavigate } from 'react-router-dom';
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

const MemberDashboardPage = () => {
  const { currentMember, updateUserContract, loading } = useMemberAuth();
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleCancelContract = () => {
    if (currentMember?.contract) {
      const updatedContract = { status: 'cancelled' };
      updateUserContract(currentMember.id, updatedContract);
      toast({
        title: 'Vertrag gekündigt',
        description: 'Ihre Mitgliedschaft wurde zum nächstmöglichen Zeitpunkt gekündigt.',
        variant: 'success'
      });
    }
  };

  const handleReactivateContract = () => {
    if (currentMember?.contract) {
      const updatedContract = { status: 'active' };
      updateUserContract(currentMember.id, updatedContract);
      toast({
        title: 'Kündigung zurückgenommen',
        description: 'Ihre Mitgliedschaft ist wieder aktiv. Willkommen zurück!',
        variant: 'success'
      });
    }
  };

  if (loading) {
    return (
      <PageWrapper>
        <div className="flex justify-center items-center min-h-[calc(100vh-200px)]">
          <Loader2 className="h-16 w-16 animate-spin text-gold" />
        </div>
      </PageWrapper>
    );
  }

  if (!currentMember) {
    // This can happen briefly on load before session is confirmed.
    // Instead of navigating away, show loader until loading is false.
    return (
        <PageWrapper>
            <div className="flex justify-center items-center min-h-[calc(100vh-200px)]">
              <Loader2 className="h-16 w-16 animate-spin text-gold" />
            </div>
        </PageWrapper>
    );
  }

  const { profile, contract } = currentMember;
  const displayName = profile?.first_name && profile?.last_name ? `${profile.first_name} ${profile.last_name}` : (profile?.username || currentMember.email);
  const startDate = contract ? new Date(contract.start_date) : null;
  
  const getCancellationDate = () => {
      const today = new Date();
      today.setHours(0,0,0,0);
      const cancellationDeadline = new Date(today.getFullYear(), today.getMonth(), 15);
      if(today <= cancellationDeadline) {
          return new Date(today.getFullYear(), today.getMonth() + 1, 0);
      } else {
          return new Date(today.getFullYear(), today.getMonth() + 2, 0);
      }
  };

  const cancellationDate = getCancellationDate();

  return (
    <PageWrapper>
      <Helmet>
        <title>Dashboard | ELCONCI Mitgliederbereich</title>
      </Helmet>
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-start mb-8">
          <div>
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-gold break-words">Willkommen, {displayName}!</h1>
            <p className="text-platinum/70">Dies ist Ihr persönlicher Mitgliederbereich.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <Card className="bg-secondary border-gold/20">
            <CardHeader>
              <div className="flex items-center gap-4">
                <FileText className="w-8 h-8 text-gold" />
                <div>
                  <CardTitle>Ihre Mitgliedschaft</CardTitle>
                  <CardDescription>Details zu Ihrem aktuellen Vertrag</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4 pt-2">
              {contract ? (
                <>
                  <div className="flex justify-between items-center border-t border-gold/10 pt-4">
                     <span className="text-platinum/80">Kundennummer:</span>
                     <span className="font-bold text-gold font-mono">{profile?.customer_number || 'N/A'}</span>
                   </div>
                  <div className="flex justify-between items-center border-t border-gold/10 pt-4">
                    <span className="text-platinum/80">Paket:</span>
                    <span className="font-bold text-gold">{contract.package}</span>
                  </div>
                  <div className="flex justify-between items-center border-t border-gold/10 pt-4">
                    <span className="text-platinum/80">Vertragsbeginn:</span>
                    <span className="font-semibold">{startDate ? startDate.toLocaleDateString('de-DE') : '-'}</span>
                  </div>
                  <div className="flex justify-between items-center border-t border-gold/10 pt-4">
                    <span className="text-platinum/80">Status:</span>
                    <span className={`px-2 py-1 rounded-full text-sm ${contract.status === 'active' ? 'bg-green-500/20 text-green-300' : 'bg-red-500/20 text-red-300'}`}>
                      {contract.status === 'active' ? 'Aktiv' : 'Gekündigt'}
                    </span>
                  </div>
                </>
              ) : (
                <p className="text-platinum/70 text-center pt-4">Keine Vertragsdaten gefunden.</p>
              )}
            </CardContent>
          </Card>

          <Card className="bg-secondary border-gold/20">
            <CardHeader>
              <div className="flex items-center gap-4">
                <BellOff className="w-8 h-8 text-gold" />
                 <div>
                  <CardTitle>Vertragsverwaltung</CardTitle>
                  <CardDescription>Ihre Kündigungsoptionen</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4 pt-2">
              {contract && contract.status === 'active' ? (
                <>
                  <div className="border-t border-gold/10 pt-4">
                    <p className="text-platinum/80">
                      Sie können Ihre Mitgliedschaft monatlich mit einer Frist von zwei Wochen zum Monatsende kündigen.
                    </p>
                    <p className="font-semibold mt-2">
                      Kündigung möglich zum: {cancellationDate.toLocaleDateString('de-DE')}
                    </p>
                  </div>
                   <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="destructive" className="w-full mt-4">
                        <AlertTriangle className="mr-2 h-4 w-4" />
                        Mitgliedschaft kündigen
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Mitgliedschaft wirklich kündigen?</DialogTitle>
                        <DialogDescription>
                          Ihre Mitgliedschaft wird zum nächstmöglichen Zeitpunkt beendet. Möchten Sie wirklich fortfahren?
                        </DialogDescription>
                      </DialogHeader>
                      <DialogFooter>
                        <DialogClose asChild>
                          <Button variant="outline">Abbrechen</Button>
                        </DialogClose>
                        <DialogClose asChild>
                          <Button variant="destructive" onClick={handleCancelContract}>Ja, kündigen</Button>
                        </DialogClose>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </>
              ) : contract && contract.status === 'cancelled' ? (
                <div className="border-t border-gold/10 pt-4">
                  <p className="text-platinum/80">
                    Ihre Mitgliedschaft ist gekündigt. Sie können die Kündigung jederzeit zurücknehmen, um Ihre Vorteile weiterhin zu nutzen.
                  </p>
                  <Button onClick={handleReactivateContract} className="w-full mt-4" variant="gold">
                    <Undo2 className="mr-2 h-4 w-4" />
                    Kündigung zurücknehmen
                  </Button>
                </div>
              ) : (
                <div className="border-t border-gold/10 pt-4">
                  <p className="text-platinum/80">
                    Kein aktiver Vertrag zur Verwaltung vorhanden.
                  </p>
                   <p className="font-semibold mt-2 text-gold">Wir würden uns freuen, Sie bald wieder begrüßen zu dürfen!</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

      </div>
    </PageWrapper>
  );
};

export default MemberDashboardPage;