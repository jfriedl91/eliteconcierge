import React, { useState, useRef, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useNavigate } from 'react-router-dom';
import PageWrapper from '@/components/PageWrapper';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, FileText, HelpCircle, Gift } from 'lucide-react';
import SmartPackagesTable from '@/components/SmartPackagesTable';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import InquiryForm from '@/components/InquiryForm';
import { FairUseDialog } from '@/components/FairUseDialog';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';

const tiers = [
  {
    name: 'SMART',
    priceGross: 119,
    priceSuffix: '/ Monat',
    description: 'Für Berufstätige & Familien, die Zeit sparen möchten.',
    features: [
      'Diskret • Effizient • Erschwinglich',
      'Termin-, Reise- & Alltagsorganisation',
      <span>Behördenhilfe & <span className="whitespace-nowrap">KFZ-Angelegenheiten</span></span>,
      'Unterstützung bei Wohnungssuche & WG-Zimmer-Suche',
      <span>Geschenk- & <span className="whitespace-nowrap">Event-Planung</span></span>,
    ],
    borderColor: 'border-amber-700/60',
    isSmart: true,
  },
  {
    name: 'PRIME',
    packageName: 'PRIME',
    priceGross: 690,
    priceSuffix: '/ Monat',
    description: 'Für Unternehmer & Vielreisende mit hohem Organisationsbedarf.',
    features: [
      'Bis zu 10 Anfragen pro Monat (privat & geschäftlich)',
      'Bearbeitung von Anfragen innerhalb von 48 Stunden',
      'Komplexe Organisationen & Premium-Ticketing',
      <span>Monatlicher <span className="whitespace-nowrap">Strategie-Call</span></span>,
      <span>Kontakt via Telefon, <span className="whitespace-nowrap">E-Mail</span> und Messenger</span>,
      'Erreichbarkeit innerhalb der Geschäftszeiten (Werktags 08:00 - 18:00 Uhr)',
    ],
    borderColor: 'border-amber-500/80',
  },
  {
    name: 'ELITE',
    packageName: 'ELITE',
    priceGross: 2400,
    priceSuffix: '/ Monat',
    description: 'Für Unternehmer:innen, VIPs & Führungskräfte.',
    features: [
      { isFairUse: true },
      'Bearbeitung von Anfragen innerhalb von 24 Stunden',
      '24/7 Erreichbarkeit & persönlicher Ansprechpartner',
      <span>Kontakt via Telefon, <span className="whitespace-nowrap">E-Mail</span> und Messenger</span>,
      'Bevorzugter Zugang zu begehrten Events, Restaurants & Shows',
      <span>Spezialisierter Reise & <span className="whitespace-nowrap">Immobilien-Concierge</span></span>,
      'Wöchentliche Strategiemeetings & proaktive Vorschläge',
    ],
    featured: true,
    borderColor: 'border-gold',
  },
  {
    name: 'BESPOKE',
    packageName: 'BESPOKE',
    price: 'Preis auf Anfrage',
    priceNet: 130,
    priceSuffix: '/ Stunde',
    description: 'Für UHNWI, Celebrities & Family Offices.',
    features: [
      'Wie ELITE, plus:',
      'Bearbeitung von Anfragen innerhalb von max. 12 Stunden',
      'Vollindividualisierte Betreuung',
      <span>Business Concierge für <span className="whitespace-nowrap">Backoffice & Koordination</span></span>,
      <span>Eigenes <span className="whitespace-nowrap">Backoffice-Team</span></span>,
      'Eigene Assistenz im Einsatz (auch vor Ort)',
      'Internationale Abdeckung & multilinguale Betreuung',
      'Höchste Diskretion mit NDA & Ghost-Service',
    ],
    borderColor: 'border-platinum/50',
  },
];

const PROMO_DISCOUNT = 20;

const VisitenkartePage = () => {
  const smartDetailsRef = useRef(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isFairUseOpen, setIsFairUseOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState('');
  const [customerType, setCustomerType] = useState('private');
  const navigate = useNavigate();

  const handleInquire = (packageName) => {
    setSelectedPackage(packageName);
    setIsFormOpen(true);
  };

  const handleCreateContract = (packageName) => {
    if (packageName) {
      navigate(`/dienstleistungsauftrag?package=${encodeURIComponent(packageName)}&customerType=${customerType}&promo=visitenkarte20`);
    }
  };

  const handleScrollToDetails = () => {
    smartDetailsRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  const getPriceDisplay = useMemo(() => (tier) => {
    if (tier.name === 'BESPOKE') {
      return {
        price: tier.price,
        suffix: '',
        originalPrice: null,
        subPrice: null
      };
    }

    const originalPrice = tier.priceGross;
    const discountedPriceGross = originalPrice - PROMO_DISCOUNT;

    if (customerType === 'business') {
      const originalNet = originalPrice / 1.19;
      const discountedNet = discountedPriceGross / 1.19;
      return {
        price: `${discountedNet.toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}€`,
        suffix: 'netto / 1. Monat',
        originalPrice: `${originalNet.toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}€`,
        subPrice: `(${discountedPriceGross.toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}€ inkl. USt.)`
      };
    }
    
    return {
      price: `${discountedPriceGross.toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}€`,
      suffix: 'inkl. MwSt. / 1. Monat',
      originalPrice: `${originalPrice.toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}€`,
      subPrice: null,
    };
  }, [customerType]);

  return (
    <PageWrapper>
      <Helmet>
        <title>Exklusives Angebot | ELCONCI</title>
        <meta name="description" content="Ein exklusives Angebot für ausgewählte Kontakte. Erhalten Sie 20€ Rabatt auf Ihren ersten Monat bei ELCONCI." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <div className="bg-background text-platinum">
        <div className="container mx-auto py-24 px-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <div className="flex justify-center items-center gap-4 mb-4">
              <Gift className="w-12 h-12 text-gold" />
            </div>
            <h1 className="text-5xl md:text-7xl font-black mb-4">Ein exklusives Angebot</h1>
            <p className="text-xl md:text-2xl text-gold font-serif">Wir schenken Ihnen 20€ auf Ihren ersten Monat.</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col items-center justify-center space-y-4 mb-16"
          >
            <div className="flex items-center space-x-4">
              <Label htmlFor="customer-type-switch" className={`transition-colors ${customerType === 'private' ? 'text-gold' : 'text-platinum/70'}`}>Privatkunde</Label>
              <Switch
                id="customer-type-switch"
                checked={customerType === 'business'}
                onCheckedChange={(checked) => setCustomerType(checked ? 'business' : 'private')}
                aria-label="Kundentyp wechseln"
              />
              <Label htmlFor="customer-type-switch" className={`transition-colors ${customerType === 'business' ? 'text-gold' : 'text-platinum/70'}`}>Geschäftskunde</Label>
            </div>
            {customerType === 'business' && (
              <p className="text-xs text-platinum/60">Alle Preise für Geschäftskunden verstehen sich zzgl. der gesetzlichen Umsatzsteuer.</p>
            )}
          </motion.div>

          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch max-w-7xl">
              {tiers.filter(t => t.name !== 'BESPOKE').map((tier, index) => {
                const { price, suffix, originalPrice, subPrice } = getPriceDisplay(tier);
                return (
                  <motion.div
                    key={tier.name}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="h-full"
                  >
                    <Card className={`bg-secondary rounded-none h-full flex flex-col transition-all duration-300 hover:-translate-y-2.5 ${tier.featured ? 'border-2 border-gold transform lg:scale-105 shadow-2xl shadow-gold/20 hover:lg:scale-110' : 'border ' + tier.borderColor + ' hover:scale-103'}`}>
                      <CardHeader className="text-center p-6">
                        <CardTitle className={`text-2xl md:text-3xl font-serif ${tier.featured ? 'text-gold' : 'text-platinum'}`}>{tier.name}</CardTitle>
                        <CardDescription className="text-platinum/70 min-h-[3rem] pt-1">{tier.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="flex-grow flex flex-col justify-between p-6">
                        <div>
                          <div className="text-center my-6 min-h-[7rem] flex flex-col justify-center">
                            {originalPrice && <span className="text-2xl text-platinum/50 line-through">{originalPrice}</span>}
                            <span className="text-3xl md:text-4xl font-bold">{price}</span>
                            {suffix && <span className="text-base md:text-lg text-platinum/60 ml-1">{suffix}</span>}
                            {subPrice && <span className="text-xs text-platinum/50 mt-1">{subPrice}</span>}
                          </div>
                          <ul className="space-y-3">
                            {tier.features.map((feature, i) => (
                               <li key={i} className={`flex items-start ${i === 0 && tier.name === 'SMART' ? 'justify-center text-center' : ''}`}>
                               {!(i === 0 && tier.name === 'SMART') && !feature.isFairUse && <Check className="h-5 w-5 text-gold mr-3 mt-1 flex-shrink-0" />}
                               {feature.isFairUse ? (
                                 <>
                                   <Check className="h-5 w-5 text-gold mr-3 mt-1 flex-shrink-0" />
                                   <span className="text-platinum/90 text-sm">
                                     Unlimitierte Anfragen (
                                     <button onClick={() => setIsFairUseOpen(true)} className="text-gold hover:underline">Fair Use</button>
                                     )
                                   </span>
                                 </>
                               ) : (
                                 <span className={`text-platinum/90 text-sm ${i === 0 && tier.name === 'SMART' ? 'font-semibold text-gold' : ''}`}>{feature}</span>
                               )}
                             </li>
                            ))}
                          </ul>
                        </div>
                        <Button
                          onClick={
                            tier.isSmart ? handleScrollToDetails :
                            tier.name === 'BESPOKE' ? () => handleInquire(tier.name) :
                            () => handleCreateContract(tier.packageName)
                          }
                          className={`w-full mt-8 rounded-none text-base md:text-lg py-4 md:py-6 transition-all duration-300 ${tier.featured ? 'bg-gold text-background hover:bg-platinum hover:shadow-lg hover:shadow-gold/50' : 'bg-transparent border border-gold/50 text-gold/80 hover:bg-gold hover:text-background hover:border-gold'}`}
                        >
                          {tier.isSmart ? 'Details anzeigen' : tier.name === 'BESPOKE' ? 'Anfragen' : 'Angebot sichern'}
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                )
              })}
            </div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center text-platinum/80 mt-16 max-w-3xl mx-auto"
          >
              <div className="flex justify-center items-center gap-3">
                  <FileText className="w-6 h-6 text-gold"/>
                  <h3 className="text-2xl font-serif text-gold">Flexible Konditionen</h3>
              </div>
              <p className="mt-4 text-base">
                  Keine langen Vertragslaufzeiten, keine Verpflichtungen. Alle unsere Mitgliedschaften sind monatlich mit einer Frist von nur zwei Wochen zum Monatsende kündbar. Genießen Sie volle Flexibilität und erstklassigen Service, der sich Ihrem Leben anpasst.
              </p>
              <p className="mt-4 text-sm text-platinum/70">
                Der Rabatt gilt nur für den ersten Monat. Danach gelten die regulären Preise.
              </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-center bg-secondary py-10 my-16 max-w-3xl mx-auto border border-gold/20"
          >
            <div className="flex justify-center items-center gap-3">
              <HelpCircle className="w-6 h-6 text-gold"/>
              <h3 className="text-2xl font-serif text-gold">Beratung gewünscht?</h3>
            </div>
            <p className="mt-4 text-base max-w-xl mx-auto text-platinum/80">
              Sie sind unsicher, welches Paket das richtige für Sie ist? Wir beraten Sie gerne. Kontaktieren Sie uns für ein unverbindliches Erstgespräch.
            </p>
            <Button 
              onClick={() => handleInquire('Allgemeine Beratung')}
              variant="outline"
              className="mt-6 text-gold border-gold/50 hover:bg-gold hover:text-background rounded-none"
            >
              Beratung anfragen
            </Button>
          </motion.div>

          <motion.div
            ref={smartDetailsRef}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <SmartPackagesTable onInquire={handleCreateContract} customerType={customerType} promoDiscount={PROMO_DISCOUNT} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mt-20 py-10 border-t border-b border-gold/20"
          >
            <h3 className="text-3xl font-serif text-gold mb-4">Bereit zu starten?</h3>
            <p className="text-lg text-platinum/80 max-w-2xl mx-auto mb-8">
              Erstellen Sie jetzt direkt Ihren persönlichen Dienstleistungsauftrag und sichern Sie sich Ihren exklusiven Rabatt.
            </p>
            <Link to={`/dienstleistungsauftrag?customerType=${customerType}&promo=visitenkarte20`}>
              <Button size="lg" className="bg-gold text-background hover:bg-platinum rounded-none">
                Jetzt Mitglied werden
              </Button>
            </Link>
          </motion.div>

        </div>
      </div>
      <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
        <DialogContent className="max-w-3xl p-0 flex flex-col w-[95%] sm:w-full max-h-[90vh] sm:max-h-[85vh]">
          <DialogHeader className="p-6 pb-4 flex-shrink-0">
            <DialogTitle>Anfrage für eine Elite Concierge Mitgliedschaft</DialogTitle>
            <DialogDescription>
              Füllen Sie das Formular aus, um Ihr Interesse zu bekunden. Wir setzen uns umgehend mit Ihnen in Verbindung.
            </DialogDescription>
          </DialogHeader>
          <div className="flex-grow overflow-y-auto min-h-0">
            <div className="p-6 pt-0">
              <InquiryForm selectedPackage={selectedPackage} onClose={() => setIsFormOpen(false)} />
            </div>
          </div>
        </DialogContent>
      </Dialog>
      <FairUseDialog open={isFairUseOpen} onOpenChange={setIsFairUseOpen} />
    </PageWrapper>
  );
};

export default VisitenkartePage;