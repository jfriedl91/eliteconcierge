import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/components/ui/use-toast';
import { ArrowRight, Loader2, CheckCircle, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PrivacyDialog } from '@/components/PrivacyDialog';
import { useForm, ValidationError } from '@formspree/react';

const ContactFormInner = () => {
  const { toast } = useToast();
  const formspreeKey = import.meta.env.VITE_FORMSPREE_KEY;
  const [state, handleSubmit] = useForm(formspreeKey);
  const [termsChecked, setTermsChecked] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    callback_time: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    if (state.errors && state.errors.length > 0) {
      toast({
        variant: "destructive",
        title: 'Fehler beim Senden.',
        description: 'Bitte überprüfen Sie Ihre Eingaben und versuchen Sie es erneut.',
      });
    }
  }, [state.errors, toast]);

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast({
        variant: "destructive",
        title: 'Fehlende Pflichtfelder',
        description: 'Bitte füllen Sie alle mit * markierten Felder aus.',
      });
      return;
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      toast({
        variant: "destructive",
        title: 'Ungültige E-Mail',
        description: 'Bitte geben Sie eine gültige E-Mail-Adresse ein.',
      });
      return;
    }

    if (!termsChecked) {
      toast({
        variant: "destructive",
        title: 'Zustimmung erforderlich',
        description: 'Bitte stimmen Sie der Datenschutzerklärung zu.',
      });
      return;
    }
    handleSubmit(formData);
  };

  if (state.succeeded) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center bg-secondary max-w-2xl w-full mx-auto p-6 sm:p-8 md:p-12"
      >
        <CheckCircle className="w-16 h-16 text-gold mb-6 mx-auto" />
        <h1 className="text-3xl font-serif text-gold mb-2">Vielen Dank!</h1>
        <p className="text-platinum/80 mb-8">Ihre Nachricht wurde erfolgreich versendet. Wir werden uns so schnell wie möglich bei Ihnen melden.</p>
        <Link to="/">
          <Button variant="outline" className="text-gold border-gold/50 hover:bg-gold hover:text-background">
            Zurück zur Startseite
          </Button>
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="max-w-2xl mx-auto bg-secondary p-6 sm:p-8 md:p-12"
    >
      <form onSubmit={handleFormSubmit} className="space-y-6" noValidate>
        <input type="hidden" name="_subject" value="Neue Kontaktanfrage von Ihrer Webseite" />
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="name">Name <span className="text-gold">*</span></Label>
            <Input id="name" name="name" type="text" placeholder="Ihr Name" required value={formData.name} onChange={handleChange} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">E-Mail <span className="text-gold">*</span></Label>
            <Input id="email" name="email" type="email" placeholder="Ihre E-Mail Adresse" required value={formData.email} onChange={handleChange} />
            <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500 text-xs mt-1" />
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="phone">Telefonnummer</Label>
            <Input id="phone" name="phone" type="tel" placeholder="Ihre Telefonnummer" value={formData.phone} onChange={handleChange} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="callback_time">Wunschzeit für Rückruf</Label>
            <Input id="callback_time" name="callback_time" type="text" placeholder="z.B. Morgen, 10:00 Uhr" value={formData.callback_time} onChange={handleChange} />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="message">Ihre Nachricht <span className="text-gold">*</span></Label>
          <Textarea id="message" name="message" placeholder="Wie können wir Ihnen behilflich sein?" required rows={5} value={formData.message} onChange={handleChange} />
          <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-500 text-xs mt-1" />
        </div>
        <div className="flex items-start space-x-3">
          <Checkbox id="terms" name="terms" required checked={termsChecked} onCheckedChange={setTermsChecked} />
          <div className="grid gap-1.5 leading-none">
            <Label htmlFor="terms" className="text-sm font-normal text-platinum/80">
              Ich stimme der Verarbeitung meiner Daten gemäß der{' '}
              <PrivacyDialog>
                <span className="underline hover:text-gold cursor-pointer">Datenschutzerklärung</span>
              </PrivacyDialog>
              {' '}zu. <span className="text-gold">*</span>
            </Label>
          </div>
        </div>
        
        <div className="text-right pt-4">
          <Button
            type="submit"
            size="lg"
            className="bg-gold text-background font-bold text-lg px-10 py-7 rounded-none hover:bg-platinum hover:shadow-[0_0_20px_theme(colors.gold)] transition-all duration-300 flex items-center justify-center min-w-[220px]"
            disabled={state.submitting || !termsChecked}
          >
            {state.submitting ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Sende...
              </>
            ) : (
              <>
                Anfrage senden <ArrowRight className="ml-2 h-5 w-5" />
              </>
            )}
          </Button>
        </div>
      </form>
    </motion.div>
  );
};

const ContactForm = () => {
  const formspreeKey = import.meta.env.VITE_FORMSPREE_KEY;

  if (!formspreeKey) {
    return (
      <div className="max-w-2xl mx-auto bg-secondary p-8 md:p-12 text-center">
        <AlertTriangle className="w-16 h-16 text-yellow-400 mb-6 mx-auto" />
        <h3 className="text-2xl font-serif text-gold">Formular vorübergehend nicht verfügbar</h3>
        <p className="text-platinum/80 mt-4">
          Das Kontaktformular ist derzeit nicht konfiguriert. Bitte kontaktieren Sie uns direkt per E-Mail oder versuchen Sie es später erneut.
        </p>
      </div>
    );
  }

  return <ContactFormInner />;
}

export default ContactForm;