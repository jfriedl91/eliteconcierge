import React, { useEffect, useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { useMemberAuth } from '@/contexts/MemberAuthContext';
import PageWrapper from '@/components/PageWrapper';
import { Helmet } from 'react-helmet-async';
import { Loader2, User, FileText, CheckCircle, AlertTriangle, KeyRound, Copy, RefreshCw, ShieldAlert } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { useToast } from '@/components/ui/use-toast';
import { Input } from '@/components/ui/input';
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

const DetailItem = ({ label, value, className = '' }) => (
  <div className={className}>
    <p className="text-sm text-platinum/60 font-light">{label}</p>
    <p className="text-base text-platinum font-medium break-words">{value || '–'}</p>
  </div>
);

const AdminMemberDetailPage = () => {
  const { id } = useParams();
  const { toast } = useToast();
  const { users, loadingUsers, fetchAllUsers, activateMember, resetMemberPassword } = useMemberAuth();
  const [member, setMember] = useState(null);
  const [isActivating, setIsActivating] = useState(false);
  const [generatedPassword, setGeneratedPassword] = useState('');
  const [isResetting, setIsResetting] = useState(false);
  const [newPassword, setNewPassword] = useState('');
  const [isResetDialogOpen, setIsResetDialogOpen] = useState(false);

  const stableFetchAllUsers = useCallback(fetchAllUsers, []);

  useEffect(() => {
    if (users.length === 0 && !loadingUsers) {
      stableFetchAllUsers();
    }
  }, [users.length, loadingUsers, stableFetchAllUsers]);

  useEffect(() => {
    const foundMember = users.find(u => u.user_id === id);
    if (foundMember) {
      setMember(foundMember);
      if (foundMember.status === 'pending_review' && !generatedPassword) {
        generateSecurePassword();
      }
    }
  }, [id, users, generatedPassword]);

  const generateSecurePassword = () => {
    const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    const specialChars = '!@#$%^&*()-_=+[]{}|;:,.<>?';
    let password = '';
    for (let i = 0; i < 8; i++) {
      password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    password += specialChars.charAt(Math.floor(Math.random() * specialChars.length));
    password += specialChars.charAt(Math.floor(Math.random() * specialChars.length));
    
    const shuffledPassword = password.split('').sort(() => 0.5 - Math.random()).join('');

    setGeneratedPassword(shuffledPassword);
  };

  const copyToClipboard = (text) => {
    if(!text) return;
    navigator.clipboard.writeText(text);
    toast({ title: 'Kopiert!', description: 'Kundennummer wurde in die Zwischenablage kopiert.' });
  };
  
  const handleActivate = async () => {
    if (!member || !generatedPassword) {
       toast({ title: 'Fehler', description: 'Keine Kundennummer generiert.', variant: 'destructive' });
       return;
    };
    setIsActivating(true);
    await activateMember(member.user_id, member.email, generatedPassword);
    setIsActivating(false);
  };

  const handleResetPassword = async () => {
    if (!member) return;
    setIsResetting(true);
    const result = await resetMemberPassword(member.user_id);
    if (result.success) {
      setNewPassword(result.newPassword);
      setIsResetDialogOpen(true);
    }
    setIsResetting(false);
  };
  
  const getStatusBadge = (status) => {
    switch (status) {
      case 'active': return 'bg-green-600/20 text-green-300 border border-green-500/30';
      case 'cancelled': return 'bg-red-600/20 text-red-300 border border-red-500/30';
      case 'pending_review': return 'bg-yellow-600/20 text-yellow-300 border border-yellow-500/30';
      default: return 'bg-gray-600/20 text-gray-300 border border-gray-500/30';
    }
  };
  
  const getStatusText = (status) => {
    switch (status) {
      case 'active': return 'Aktiv';
      case 'cancelled': return 'Gekündigt';
      case 'pending_review': return 'Zur Prüfung';
      default: return 'Unbekannt';
    }
  };
  
  if (loadingUsers || !member) {
    return (
      <PageWrapper>
        <div className="flex justify-center items-center min-h-[calc(100vh-200px)]">
          <Loader2 className="h-12 w-12 animate-spin text-gold" />
        </div>
      </PageWrapper>
    );
  }
  
  return (
    <PageWrapper>
      <Helmet>
        <title>Mitgliedsdetails | {member.first_name} {member.last_name}</title>
      </Helmet>
      <div className="max-w-4xl mx-auto">
            {member.status === 'pending_review' && (
              <Card className="mb-8 bg-yellow-900/30 border-yellow-400/50">
                <CardHeader className="flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
                  <AlertTriangle className="h-8 w-8 text-yellow-300 flex-shrink-0" />
                  <div>
                    <CardTitle className="text-yellow-300">Aktion erforderlich</CardTitle>
                    <CardDescription className="text-yellow-300/80">Dieses Mitglied wartet auf Freischaltung.</CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <p className="text-yellow-200/90 mb-4">
                      1. Generieren Sie eine sichere Kundennummer (Passwort) für den Kunden.
                    </p>
                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
                       <div className="flex items-center gap-2 flex-grow">
                         <KeyRound className="h-5 w-5 text-gold flex-shrink-0" />
                         <Input
                           id="generatedPassword"
                           type="text"
                           readOnly
                           value={generatedPassword}
                           className="font-mono bg-background/50 border-gold/30 w-full"
                         />
                       </div>
                       <div className="flex items-center gap-2 self-end sm:self-center">
                         <Button variant="ghost" size="icon" onClick={generateSecurePassword}>
                           <RefreshCw className="h-4 w-4" />
                         </Button>
                         <Button variant="ghost" size="icon" onClick={() => copyToClipboard(generatedPassword)}>
                           <Copy className="h-4 w-4" />
                         </Button>
                       </div>
                     </div>
                  </div>
                   <div>
                    <p className="text-yellow-200/90 mb-4">
                      2. Teilen Sie dem Kunden die Kundennummer mit und aktivieren Sie den Account.
                    </p>
                    <Button onClick={handleActivate} disabled={isActivating || !generatedPassword}>
                      {isActivating ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <CheckCircle className="mr-2 h-4 w-4" />}
                      Mitglied aktivieren
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-1">
                <Card className="bg-secondary border-gold/20 sticky top-24">
                  <CardHeader className="text-center">
                    <div className="w-24 h-24 bg-gold/10 rounded-full mx-auto flex items-center justify-center border-2 border-gold/30 mb-4">
                       <User className="h-12 w-12 text-gold" />
                    </div>
                    <CardTitle className="text-2xl break-words">{member.first_name} {member.last_name}</CardTitle>
                    <CardDescription className="break-words">{member.email}</CardDescription>
                     <div>
                       <span className={`mt-2 inline-block px-3 py-1 rounded-full text-sm font-semibold ${getStatusBadge(member.status)}`}>
                         {getStatusText(member.status)}
                       </span>
                     </div>
                  </CardHeader>
                  <CardContent className="text-center space-y-4 pt-4 border-t border-gold/20">
                     <DetailItem label="Kundennummer (ID)" value={member.customer_number} />
                     <DetailItem label="Firma" value={member.company_name} />
                     <DetailItem label="Telefon" value={member.phone} />
                  </CardContent>
                </Card>
              </div>

              <div className="lg:col-span-2">
                 <Card className="bg-secondary border-gold/20">
                    <CardHeader>
                      <div className="flex items-center space-x-3">
                        <FileText className="h-6 w-6 text-gold" />
                        <CardTitle className="text-xl sm:text-2xl">Vertrags- & Profildaten</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      
                      <div className="border-t border-gold/10 pt-6">
                        <h4 className="text-lg font-semibold text-gold mb-4">Zugangsverwaltung</h4>
                        <p className="text-sm text-platinum/70 mb-4">
                          Wenn ein Mitglied sein Passwort (Kundennummer) vergessen hat, können Sie es hier zurücksetzen. Es wird eine neue, sichere Kundennummer generiert, die Sie dem Mitglied mitteilen müssen.
                        </p>
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button variant="destructive" disabled={isResetting}>
                              {isResetting ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <ShieldAlert className="mr-2 h-4 w-4" />}
                              Passwort zurücksetzen
                            </Button>
                          </DialogTrigger>
                          <DialogContent>
                            <DialogHeader>
                              <DialogTitle>Passwort wirklich zurücksetzen?</DialogTitle>
                              <DialogDescription>
                                Sind Sie sicher, dass Sie das Passwort für {member.email} zurücksetzen möchten? Das alte Passwort wird sofort ungültig.
                              </DialogDescription>
                            </DialogHeader>
                            <DialogFooter>
                              <DialogClose asChild>
                                <Button variant="outline">Abbrechen</Button>
                              </DialogClose>
                              <DialogClose asChild>
                                <Button variant="destructive" onClick={handleResetPassword}>Ja, zurücksetzen</Button>
                              </DialogClose>
                            </DialogFooter>
                          </DialogContent>
                        </Dialog>
                      </div>

                      <div className="border-t border-gold/10 pt-6">
                        <h4 className="text-lg font-semibold text-gold mb-4">Profilinformationen</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
                          <DetailItem label="Adresse" value={`${member.street || ''} ${member.house_number || ''}`} />
                          <DetailItem label="Ort" value={`${member.postal_code || ''} ${member.city || ''}`} />
                        </div>
                      </div>

                      <div className="border-t border-gold/10 pt-6">
                        <h4 className="text-lg font-semibold text-gold mb-4">Vertragsdetails</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
                          <DetailItem label="Paket" value={member.package} />
                          <DetailItem label="Antragsdatum" value={member.contract_created_at ? new Date(member.contract_created_at).toLocaleString('de-DE') : '-'} />
                          <DetailItem label="Startdatum" value={member.start_date ? new Date(member.start_date).toLocaleDateString('de-DE') : '-'} />
                          <DetailItem label="Zahlungsmethode" value={member.payment_method} />
                          <DetailItem label="Promo Code" value={member.promo_code} />
                        </div>
                      </div>
                    </CardContent>
                 </Card>
              </div>
            </div>
      </div>
      <Dialog open={isResetDialogOpen} onOpenChange={setIsResetDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Passwort erfolgreich zurückgesetzt</DialogTitle>
            <DialogDescription>
              Die neue Kundennummer (Passwort) für {member.email} lautet:
            </DialogDescription>
          </DialogHeader>
          <div className="flex items-center space-x-2 my-4">
            <KeyRound className="h-5 w-5 text-gold" />
            <Input
              id="newPassword"
              type="text"
              readOnly
              value={newPassword}
              className="font-mono bg-background/50 border-gold/30"
            />
            <Button variant="ghost" size="icon" onClick={() => copyToClipboard(newPassword)}>
              <Copy className="h-4 w-4" />
            </Button>
          </div>
          <p className="text-xs text-yellow-400/80">Bitte kopieren Sie diese Kundennummer und teilen Sie sie dem Mitglied mit. Aus Sicherheitsgründen wird sie nicht gespeichert und kann nicht erneut angezeigt werden.</p>
          <DialogFooter>
            <DialogClose asChild>
              <Button>Schließen</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </PageWrapper>
  );
};

export default AdminMemberDetailPage;