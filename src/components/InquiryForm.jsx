import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Send, CheckCircle, Loader2, AlertTriangle } from 'lucide-react';
import { PrivacyDialog } from '@/components/PrivacyDialog';
import { useToast } from '@/components/ui/use-toast';
import { useForm, ValidationError } from '@formspree/react';

const InquiryFormInner = ({ selectedPackage, onClose }) => {
  const { toast } = useToast();
  const formspreeKey = import.meta.env.VITE_FORMSPREE_KEY;
  const [state, formspreeSubmit] = useForm(formspreeKey);

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    package: selectedPackage || '',
    message: '',
    callbackTime: '',
    foundVia: '',
    nda: false,
    privacy: false,
  });
  const [errors, setErrors] = useState({});

  const packages = ['Smart 100', 'Smart Plus', 'Smart Flex', 'Prime', 'Elite', 'Bespoke', 'Allgemeine Beratung'];
  const foundViaOptions = ['Empfehlung', 'Suchmaschine', 'Social Media', 'Presse', 'Sonstiges'];

  useEffect(() => {
    if (state.errors && state.errors.length > 0) {
      toast({
        variant: "destructive",
        title: 'Fehler beim Senden',
        description: 'Ein unbekannter Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.',
      });
    }
  }, [state.errors, toast]);

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Bitte geben Sie Ihren vollständigen Namen an.';
    if (!formData.email.trim()) {
      newErrors.email = 'Bitte geben Sie Ihre E-Mail-Adresse an.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Bitte geben Sie eine gültige E-Mail-Adresse an.';
    }
    if (!formData.package) newErrors.package = 'Bitte wählen Sie ein Paket aus.';
    if (!formData.privacy) newErrors.privacy = 'Bitte stimmen Sie der Datenschutzerklärung zu.';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleSelectChange = (name, value) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleCheckboxChange = (name, checked) => {
    setFormData(prev => ({ ...prev, [name]: checked }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) {
      toast({
        variant: "destructive",
        title: 'Fehlende Angaben',
        description: 'Bitte füllen Sie alle Pflichtfelder aus und akzeptieren Sie die Datenschutzerklärung.',
      });
      return;
    }
    
    const submissionData = {
      ...formData,
      _subject: `Mitgliedschaftsanfrage: ${formData.package}`,
    };
    formspreeSubmit(submissionData);
  };

  const isFormValid = formData.fullName && formData.email && formData.package && formData.privacy;

  const formVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } },
    exit: { opacity: 0, y: -20 }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0 }
  };

  if (state.succeeded) {
    return (
      <motion.div
        key="success"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="text-center py-16 flex flex-col items-center justify-center"
      >
        <CheckCircle className="w-16 h-16 text-gold mb-6" />
        <h3 className="text-2xl font-serif text-gold mb-2">Vielen Dank für Ihre Anfrage.</h3>
        <p className="text-platinum/80 mb-8">Wir melden uns innerhalb von 24 Stunden bei Ihnen.</p>
        <Button onClick={onClose} variant="outline" className="text-gold border-gold/50 hover:bg-gold hover:text-background">
          Schließen
        </Button>
      </motion.div>
    );
  }

  return (
    <div className="p-2 sm:p-4">
      <motion.form
        id="inquiry-form"
        key="form"
        variants={formVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        onSubmit={handleSubmit}
        noValidate
        className="space-y-6"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6">
          <motion.div variants={itemVariants} className="space-y-2">
            <Label htmlFor="fullName">Vollständiger Name <span className="text-gold">*</span></Label>
            <Input id="fullName" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="Max Mustermann" required />
            {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>}
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-2">
            <Label htmlFor="email">E-Mail-Adresse <span className="text-gold">*</span></Label>
            <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="max.mustermann@mail.com" required />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
            <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500 text-xs mt-1" />
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-2">
            <Label htmlFor="phone">Telefonnummer</Label>
            <Input id="phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="+49 123 456789" />
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-2">
            <Label htmlFor="package">Paketauswahl <span className="text-gold">*</span></Label>
            <Select name="package" required value={formData.package} onValueChange={(value) => handleSelectChange('package', value)}>
              <SelectTrigger id="package">
                <SelectValue placeholder="Bitte wählen Sie ein Paket" />
              </SelectTrigger>
              <SelectContent>
                {packages.map(p => <SelectItem key={p} value={p}>{p}</SelectItem>)}
              </SelectContent>
            </Select>
            {errors.package && <p className="text-red-500 text-xs mt-1">{errors.package}</p>}
          </motion.div>
          
          <motion.div variants={itemVariants} className="md:col-span-2 space-y-2">
              <Label htmlFor="message">Ihr Anliegen in Kürze</Label>
              <Textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="z.B. Ticket für ausverkauftes Konzert, Arzttermin in Berlin..." />
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-2">
              <Label htmlFor="callbackTime">Wunschzeit für Rückruf</Label>
              <Input id="callbackTime" name="callbackTime" value={formData.callbackTime} onChange={handleChange} placeholder="z.B. Morgen, 14-16 Uhr" />
          </motion.div>
          
          <motion.div variants={itemVariants} className="space-y-2">
            <Label htmlFor="foundVia">Wie haben Sie uns gefunden?</Label>
            <Select name="foundVia" value={formData.foundVia} onValueChange={(value) => handleSelectChange('foundVia', value)}>
              <SelectTrigger id="foundVia">
                <SelectValue placeholder="Bitte auswählen" />
              </SelectTrigger>
              <SelectContent>
                {foundViaOptions.map(opt => <SelectItem key={opt} value={opt}>{opt}</SelectItem>)}
              </SelectContent>
            </Select>
          </motion.div>
        </div>

        <motion.div variants={itemVariants} className="space-y-4 pt-4">
          <div className="flex items-start space-x-3">
            <Checkbox id="privacy" name="privacy" required checked={formData.privacy} onCheckedChange={(checked) => handleCheckboxChange('privacy', checked)} />
            <div className="grid gap-1.5 leading-none">
              <Label htmlFor="privacy" className="text-sm font-normal text-platinum/80">
                 Ich stimme der Verarbeitung meiner Daten gemäß der{' '}
                <PrivacyDialog>
                    <span className="underline hover:text-gold cursor-pointer">Datenschutzerklärung</span>
                </PrivacyDialog>
                {' '}zu. <span className="text-gold">*</span>
              </Label>
              {errors.privacy && <p className="text-red-500 text-xs mt-1">{errors.privacy}</p>}
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <Checkbox id="nda" name="nda" checked={formData.nda} onCheckedChange={(checked) => handleCheckboxChange('nda', checked)} />
            <div className="grid gap-1.5 leading-none">
              <label htmlFor="nda" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Ich wünsche eine Verschwiegenheitserklärung (NDA) vor dem Erstkontakt.
              </label>
            </div>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="flex justify-end pt-4">
          <Button type="submit" size="lg" className="bg-gold text-background hover:bg-gold/90 rounded-none w-full md:w-auto" disabled={state.submitting || !isFormValid}>
            {state.submitting ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Wird gesendet...
              </>
            ) : (
              <>
                <Send className="w-4 h-4 mr-2" />
                Jetzt Anfrage unverbindlich senden
              </>
            )}
          </Button>
        </motion.div>
      </motion.form>
    </div>
  );
};


const InquiryForm = ({ selectedPackage, onClose }) => {
  const formspreeKey = import.meta.env.VITE_FORMSPREE_KEY;

  if (!formspreeKey) {
    return (
      <div className="p-8 text-center">
        <AlertTriangle className="w-16 h-16 text-yellow-400 mb-6 mx-auto" />
        <h3 className="text-2xl font-serif text-gold">Formular nicht verfügbar</h3>
        <p className="text-platinum/80 mt-4">
          Das Anfrageformular ist derzeit nicht konfiguriert. Bitte kontaktieren Sie uns direkt für eine Mitgliedschaftsanfrage.
        </p>
        <Button onClick={onClose} variant="outline" className="mt-8 text-gold border-gold/50 hover:bg-gold hover:text-background">
          Schließen
        </Button>
      </div>
    );
  }
  
  return <InquiryFormInner selectedPackage={selectedPackage} onClose={onClose} />;
}

export default InquiryForm;