import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { motion } from 'framer-motion';
import { useConsent } from '@/contexts/ConsentContext';

const CookieConsentBanner = () => {
  const { hasConsented, updateConsent } = useConsent();
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState({
    functional: true,
    analytics: false,
    marketing: false,
  });

  if (hasConsented) {
    return null;
  }

  const handleAcceptAll = () => {
    updateConsent(true);
  };
  
  const handleDeclineAll = () => {
    updateConsent(false);
  };

  const handleSaveSettings = () => {
    updateConsent(true);
  };

  const handlePreferenceChange = (key, value) => {
    setPreferences(prev => ({ ...prev, [key]: value }));
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
    >
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 50, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 100, damping: 20 }}
        className="bg-secondary text-platinum p-6 sm:p-8 max-w-lg w-full border border-gold/30"
      >
        {!showSettings ? (
          <div>
            <h3 className="text-2xl font-bold text-gold mb-4">Ihre Privatsphäre ist uns wichtig</h3>
            <div className="text-sm text-platinum/80">
              <p>Wir verwenden Cookies, um Ihr Erlebnis zu verbessern. Indem Sie auf "Akzeptieren" klicken, stimmen Sie der Verwendung aller Cookies zu. Sie können Ihre Auswahl anpassen, indem Sie auf "Einstellungen" klicken.</p>
              <div className="mt-4">
                  <Link to="/datenschutz" className="text-gold underline hover:text-gold/80">Datenschutz</Link>
                  <span className="mx-2">|</span>
                  <Link to="/impressum" className="text-gold underline hover:text-gold/80">Impressum</Link>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row shrink-0 gap-3 mt-8">
              <Button onClick={() => setShowSettings(true)} className="w-full bg-transparent border border-white/30 text-white/70 hover:bg-white/10 hover:text-white rounded-none">Einstellungen</Button>
              <Button onClick={handleDeclineAll} className="w-full bg-secondary text-platinum hover:bg-secondary/80 rounded-none">Ablehnen</Button>
              <Button onClick={handleAcceptAll} className="w-full bg-gold text-background hover:bg-gold/90 rounded-none">Akzeptieren</Button>
            </div>
          </div>
        ) : (
          <div>
            <h3 className="text-2xl font-bold text-gold mb-4">Cookie-Einstellungen</h3>
            <p className="text-platinum/80 mb-6">
              Passen Sie Ihre Cookie-Einstellungen an. Notwendige Cookies sind immer aktiviert, um die Funktionalität der Website zu gewährleisten.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Checkbox id="necessary" checked disabled />
                <Label htmlFor="necessary" className="font-bold text-platinum">Notwendige Cookies</Label>
              </div>
              <p className="text-sm text-platinum/60 ml-6">Diese Cookies sind für den Betrieb der Seite unerlässlich.</p>
              
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="functional" 
                  checked={preferences.functional}
                  onCheckedChange={(checked) => handlePreferenceChange('functional', checked)}
                />
                <Label htmlFor="functional" className="font-bold text-platinum">Funktionale Cookies</Label>
              </div>
              <p className="text-sm text-platinum/60 ml-6">Ermöglichen die Nutzung von Diensten wie Kontaktformularen.</p>

              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="analytics" 
                  checked={preferences.analytics}
                  onCheckedChange={(checked) => handlePreferenceChange('analytics', checked)}
                />
                <Label htmlFor="analytics" className="font-bold text-platinum">Analyse-Cookies</Label>
              </div>
              <p className="text-sm text-platinum/60 ml-6">Helfen uns zu verstehen, wie Besucher mit unserer Website interagieren.</p>

              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="marketing" 
                  checked={preferences.marketing}
                  onCheckedChange={(checked) => handlePreferenceChange('marketing', checked)}
                />
                <Label htmlFor="marketing" className="font-bold text-platinum">Marketing-Cookies</Label>
              </div>
              <p className="text-sm text-platinum/60 ml-6">Werden für personalisierte Werbung verwendet, z.B. über das Meta Pixel.</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button onClick={handleSaveSettings} className="w-full bg-transparent border border-gold/50 text-gold/80 hover:bg-gold hover:text-background hover:border-gold rounded-none">Einstellungen speichern</Button>
              <Button onClick={handleAcceptAll} className="w-full bg-gold text-background hover:bg-gold/90 rounded-none">Alle akzeptieren</Button>
            </div>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default CookieConsentBanner;