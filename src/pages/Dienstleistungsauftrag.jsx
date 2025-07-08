import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom';
import PageWrapper from '@/components/PageWrapper';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { AlertCircle, Loader2, Send } from 'lucide-react';
import { supabase } from '@/lib/customSupabaseClient';
import { MembershipSection } from '@/components/order/MembershipSection';
import { CustomerDataSection } from '@/components/order/CustomerDataSection';
import { PaymentSection } from '@/components/order/PaymentSection';
import { LegalSection } from '@/components/order/LegalSection';

const packages = {
  'Smart 100': 119,
  'Smart Plus': 195,
  'Smart Flex': 295,
  'PRIME': 690,
  'ELITE': 2400,
};

const initialFormData = {
  companyName: '',
  firstName: '',
  lastName: '',
  street: '',
  zipCode: '',
  city: '',
  email: '',
  phone: '',
};

const initialConsent = {
  agb: false,
  widerruf: false,
  startRequest: false
};

const DienstleistungsauftragPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { toast } = useToast();

  const [selectedPackage, setSelectedPackage] = useState(Object.keys(packages)[0]);
  const [customerType, setCustomerType] = useState('private');
  const [promoCode, setPromoCode] = useState(null);
  const [formData, setFormData] = useState(initialFormData);
  const [consent, setConsent] = useState(initialConsent);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const packageFromUrl = queryParams.get('package');
    const customerTypeFromUrl = queryParams.get('customerType');
    const promoFromUrl = queryParams.get('promo');
    
    if (packageFromUrl && Object.keys(packages).includes(packageFromUrl)) {
      setSelectedPackage(packageFromUrl);
    }
    if (customerTypeFromUrl && ['private', 'business'].includes(customerTypeFromUrl)) {
      setCustomerType(customerTypeFromUrl);
    }
    if (promoFromUrl) {
      setPromoCode(promoFromUrl);
    }
  }, [location.search]);

  useEffect(() => {
    if (customerType === 'business') {
      setConsent(prev => ({ ...prev, widerruf: true, startRequest: true }));
    } else {
      setConsent(prev => ({ ...prev, widerruf: false, startRequest: false }));
    }
  }, [customerType]);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = 'Vorname ist ein Pflichtfeld.';
    if (!formData.lastName) newErrors.lastName = 'Nachname ist ein Pflichtfeld.';
    if (!formData.street) newErrors.street = 'Straße ist ein Pflichtfeld.';
    if (!formData.zipCode) newErrors.zipCode = 'PLZ ist ein Pflichtfeld.';
    if (!formData.city) newErrors.city = 'Stadt ist ein Pflichtfeld.';
    if (!formData.email) newErrors.email = 'E-Mail ist ein Pflichtfeld.';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Bitte geben Sie eine gültige E-Mail-Adresse ein.';

    if (customerType === 'business' && !formData.companyName) {
      newErrors.companyName = 'Firmenname ist ein Pflichtfeld.';
    }

    if (!consent.agb) newErrors.agb = 'Sie müssen den AGB zustimmen.';
    if (customerType === 'private' && !consent.widerruf) {
      newErrors.widerruf = 'Sie müssen die Widerrufsbelehrung zur Kenntnis nehmen.';
    }
    if (customerType === 'private' && !consent.startRequest) {
      newErrors.startRequest = 'Sie müssen dem vorzeitigen Beginn zustimmen.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async e => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast({
        title: 'Fehlende Angaben',
        description: 'Bitte füllen Sie alle Pflichtfelder aus und bestätigen Sie die Bedingungen.',
        variant: 'destructive'
      });
      return;
    }
    
    setIsSubmitting(true);

    const submissionData = {
      email: formData.email,
      first_name: formData.firstName,
      last_name: formData.lastName,
      company_name: formData.companyName || null,
      phone: formData.phone || null,
      street: formData.street,
      postal_code: formData.zipCode,
      city: formData.city,
      packageName: selectedPackage,
      customer_type: customerType,
      promo_code: promoCode || null,
    };
    
    try {
      const { data, error } = await supabase.functions.invoke('create-contract-and-member', {
          body: submissionData,
      });
      
      if (error) {
        let errorMessage = 'Ihr Auftrag konnte nicht übermittelt werden. Bitte versuchen Sie es später erneut oder kontaktieren Sie uns.';
        if (error.message.includes('Function returned non-2xx status')) {
            try {
                const errorBody = JSON.parse(error.message.substring(error.message.indexOf('{')));
                if (errorBody && errorBody.error) {
                    errorMessage = errorBody.error;
                }
            } catch (parseError) {
                console.error("Could not parse edge function error:", parseError);
            }
        } else {
            errorMessage = error.message;
        }
        throw new Error(errorMessage);
      }
      
      if (data && data.error) {
          throw new Error(data.error);
      }
      
      navigate('/vertrag-wird-geprueft', {
        state: { 
          success: true,
          clientData: { firstName: formData.firstName },
          selectedPackage: selectedPackage,
          customerNumber: data.customer_number,
        }
      });

    } catch(err) {
        console.error("Submission error:", err);
        toast({
            title: 'Fehler beim Senden',
            description: err.message,
            variant: 'destructive',
        });
    } finally {
        setIsSubmitting(false);
    }
  };

  return (
    <PageWrapper>
      <Helmet>
        <title>Dienstleistungsauftrag | ELCONCI</title>
        <meta name="description" content="Schließen Sie Ihren persönlichen Dienstleistungsvertrag für unsere exklusiven Concierge-Services digital ab." />
        <link rel="canonical" href="https://elconci.de/dienstleistungsauftrag" />
        <meta name="robots" content="noindex, follow" />
      </Helmet>
      <div className="bg-background text-platinum pt-32 pb-16">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div 
            initial={{ opacity: 0, y: -20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }} 
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-serif text-gold mb-4">Digitaler Dienstleistungsauftrag</h1>
            <p className="text-lg text-platinum/80 max-w-3xl mx-auto">Willkommen bei Elite Concierge. Schließen Sie hier Ihre Mitgliedschaft schnell, sicher und vollständig digital ab.</p>
          </motion.div>

          <form onSubmit={handleSubmit} className="max-w-3xl mx-auto space-y-8 bg-secondary p-6 sm:p-10 border border-gold/20" noValidate>
            
            <MembershipSection
              packages={packages}
              selectedPackage={selectedPackage}
              setSelectedPackage={setSelectedPackage}
              customerType={customerType}
              setCustomerType={setCustomerType}
            />

            <CustomerDataSection
              formData={formData}
              setFormData={setFormData}
              errors={errors}
              setErrors={setErrors}
              customerType={customerType}
            />
            
            <PaymentSection />

            <LegalSection
              consent={consent}
              setConsent={setConsent}
              errors={errors}
              setErrors={setErrors}
              customerType={customerType}
            />

            <div className="pt-6 border-t border-gold/20">
                <Button type="submit" variant="gold" className="w-full text-base sm:text-lg py-4 sm:py-6" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Bitte warten...
                    </>
                  ) : (
                    <span className="flex items-center justify-center text-center">
                      <Send className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                      Jetzt kostenpflichtig bestellen & Vertrag abschließen
                    </span>
                  )}
                </Button>
                <p className="text-xs text-platinum/60 mt-4 text-center">* Pflichtfeld</p>
                {Object.keys(errors).length > 0 && !isSubmitting && (
                  <p className="text-sm text-yellow-400 mt-4 text-center flex items-center justify-center gap-2">
                     <AlertCircle className="h-4 w-4" />
                     Bitte füllen Sie alle erforderlichen Felder aus.
                   </p>
                )}
            </div>
          </form>
        </div>
      </div>
    </PageWrapper>
  );
};

export default DienstleistungsauftragPage;