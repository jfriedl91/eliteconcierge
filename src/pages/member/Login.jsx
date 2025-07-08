import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useNavigate, Link } from 'react-router-dom';
import PageWrapper from '@/components/PageWrapper';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import { useMemberAuth } from '@/contexts/MemberAuthContext';
import { Loader2, LockKeyhole } from 'lucide-react';

const MemberLoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();
  const { memberLogin } = useMemberAuth();

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const { success, error, reason } = await memberLogin(email, password);
    setIsLoading(false);
    if (success) {
      toast({
        title: 'Anmeldung erfolgreich',
        description: 'Willkommen zurück!',
        variant: 'success',
      });
      navigate('/mitglieder/dashboard');
    } else {
      let description = error || 'Bitte überprüfen Sie Ihre Eingaben.';
      if (reason === 'not_activated') {
        description = 'Ihr Konto wurde noch nicht von einem Administrator freigeschaltet. Bitte haben Sie etwas Geduld.';
      }
      toast({
        title: 'Anmeldung fehlgeschlagen',
        description: description,
        variant: 'destructive',
      });
    }
  };

  return (
    <PageWrapper>
      <Helmet>
        <title>Mitglieder-Login | Elite Concierge</title>
        <meta name="description" content="Loggen Sie sich in Ihren exklusiven Mitgliederbereich bei ELCONCI ein." />
        <link rel="canonical" href="https://elconci.de/mitglieder/login" />
      </Helmet>
      <div className="flex items-center justify-center min-h-screen bg-background text-platinum px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-md"
        >
          <div className="text-center mb-8">
            <Link to="/" className="inline-block font-serif text-4xl font-bold text-gold tracking-wider">
              Elite Concierge
            </Link>
            <h1 className="text-4xl font-serif text-gold mt-6 mb-2">Mitglieder-Login</h1>
            <p className="text-platinum/70">Zugang zu Ihrem exklusiven Bereich.</p>
          </div>
          <Card className="bg-secondary border-gold/20 p-8 shadow-lg">
            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <Label htmlFor="email" className="text-gold">E-Mail-Adresse</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="name@email.com"
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="password" className="text-gold">Kundennummer</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="Ihre persönliche Kundennummer"
                  className="mt-1"
                />
              </div>
              <Button type="submit" variant="gold" className="w-full text-lg py-6" disabled={isLoading}>
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Anmeldung wird verarbeitet...
                  </>
                ) : (
                  <>
                    <LockKeyhole className="mr-2 h-5 w-5" />
                    Sicher Anmelden
                  </>
                )}
              </Button>
            </form>
          </Card>
           <p className="text-center text-sm text-platinum/60 mt-8">
            Probleme beim Login?{' '}
            <Link to="/kontakt" className="font-semibold text-gold hover:underline">
              Kontaktieren Sie den Support
            </Link>
          </p>
        </motion.div>
      </div>
    </PageWrapper>
  );
};

const Card = ({ className, children }) => (
  <div className={`rounded-lg border bg-card text-card-foreground shadow-sm ${className}`}>
    {children}
  </div>
);

export default MemberLoginPage;