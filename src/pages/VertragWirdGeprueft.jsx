import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageWrapper from '@/components/PageWrapper';
import { Button } from '@/components/ui/button';
import { CheckCircle, Mail } from 'lucide-react';

const VertragWirdGeprueftPage = () => {
  const location = useLocation();
  const { success, clientData, selectedPackage, customerNumber } = location.state || {};

  if (!success || !clientData) {
    return (
      <PageWrapper>
        <Helmet>
          <title>Fehler | ELCONCI</title>
          <meta name="robots" content="noindex, nofollow" />
        </Helmet>
        <div className="flex items-center justify-center min-h-screen bg-background text-platinum">
          <div className="text-center p-8">
            <h1 className="text-2xl font-bold text-gold">Keine Daten gefunden.</h1>
            <p className="mt-4 text-platinum/80">Bitte schließen Sie zuerst einen Vertrag ab.</p>
            <Button asChild variant="gold" className="mt-8">
              <Link to="/dienstleistungsauftrag">Zurück zum Auftrag</Link>
            </Button>
          </div>
        </div>
      </PageWrapper>
    );
  }

  return (
    <PageWrapper>
      <Helmet>
        <title>Vertrag wird geprüft | ELCONCI</title>
        <meta name="description" content="Ihr Dienstleistungsvertrag wird geprüft. Wir melden uns in Kürze bei Ihnen." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <div className="flex items-center justify-center min-h-screen bg-background text-platinum px-4 py-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-2xl text-center bg-secondary p-8 sm:p-12 border border-gold/20 shadow-lg"
        >
          <CheckCircle className="h-16 w-16 text-green-400 mx-auto mb-6" />
          <h1 className="text-3xl md:text-4xl font-serif text-gold mb-4">Vielen Dank, {clientData.firstName}!</h1>
          <p className="text-lg text-platinum/80 mb-8">
            Ihr Antrag für die <span className="font-bold text-gold">{selectedPackage}</span> Mitgliedschaft ist bei uns eingegangen und wird nun geprüft.
          </p>
          
          <div className="text-left bg-background/30 p-6 border border-gold/10 space-y-4 mb-8">
            <h2 className="text-xl font-semibold text-gold">Wie geht es weiter?</h2>
            <p className="text-platinum/80">
              1. Wir prüfen Ihre Angaben sorgfältig.
            </p>
            <p className="text-platinum/80">
              2. Nach erfolgreicher Prüfung erhalten Sie von uns eine Bestätigungs-E-Mail mit Ihrer persönlichen Kundennummer und allen weiteren Informationen für Ihren Login.
            </p>
             <p className="text-platinum/80">
              3. Dieser Prozess dauert in der Regel nur wenige Stunden.
            </p>
          </div>

          <div className="text-left bg-background/30 p-6 border border-gold/10 space-y-2 mb-8">
             <h3 className="text-lg font-semibold text-gold">Ihre vorläufige Kundennummer</h3>
             <p className="font-mono text-2xl text-gold tracking-wider">{customerNumber}</p>
             <p className="text-sm text-platinum/70">
               Bitte notieren Sie sich Ihre Kundennummer. Diese wird für Anfragen für unseren Kundenservice benötigt.
             </p>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button asChild variant="gold" size="lg">
              <Link to="/">Zur Startseite</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/kontakt">
                <Mail className="mr-2 h-4 w-4" />
                Kontakt aufnehmen
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </PageWrapper>
  );
};

export default VertragWirdGeprueftPage;