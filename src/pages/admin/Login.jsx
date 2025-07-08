import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import PageWrapper from '@/components/PageWrapper';
import { motion } from 'framer-motion';

const AdminLoginPage = () => {
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();

  const from = location.state?.from?.pathname || '/admin/dashboard';

  const handleSubmit = (e) => {
    e.preventDefault();
    if (login(password)) {
      toast({
        title: 'Anmeldung erfolgreich!',
        description: 'Sie werden zum Dashboard weitergeleitet.',
        variant: 'success',
      });
      navigate(from, { replace: true });
    } else {
      toast({
        title: 'Anmeldung fehlgeschlagen',
        description: 'Das eingegebene Passwort ist falsch.',
        variant: 'destructive',
      });
    }
  };

  return (
    <PageWrapper>
      <Helmet>
        <title>Admin Login | Elite Concierge</title>
      </Helmet>
      <div className="flex items-center justify-center min-h-screen bg-background px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="w-full max-w-md bg-secondary border-gold/20">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-serif text-gold">Admin-Bereich</CardTitle>
              <CardDescription className="text-platinum/70">
                Bitte geben Sie das Passwort ein, um fortzufahren.
              </CardDescription>
            </CardHeader>
            <form onSubmit={handleSubmit}>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="password-admin" className="text-platinum">Passwort</Label>
                  <Input
                    id="password-admin"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="bg-background border-gold/30 text-platinum focus:border-gold"
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button type="submit" className="w-full bg-gold text-background hover:bg-gold/90">
                  Anmelden
                </Button>
              </CardFooter>
            </form>
          </Card>
        </motion.div>
      </div>
    </PageWrapper>
  );
};

export default AdminLoginPage;