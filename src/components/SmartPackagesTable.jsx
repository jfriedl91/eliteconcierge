import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const smartPackages = [
  {
    name: 'Smart 100',
    priceGross: 119,
    requests: '1',
    availability: 'Mo–Fr, 10–16 Uhr',
    services: [
      <span>Arzttermine, Behördenhilfe & <span className="whitespace-nowrap">KFZ-Angelegenheiten</span></span>,
      'Reiseplanung (Flug + Hotel)',
      'Alltagsorganisation'
    ],
    contact: 'E-Mail',
  },
  {
    name: 'Smart Plus',
    priceGross: 195,
    requests: '3',
    availability: 'Mo–Fr, 9–17 Uhr',
    services: [
      'Alle Leistungen von Smart 100',
      'Geschenkideen & Bestellung',
      'Restaurant- & Eventbuchungen (Standard)'
    ],
    contact: 'E-Mail',
  },
  {
    name: 'Smart Flex',
    priceGross: 295,
    requests: '6',
    availability: 'Mo–Fr, 9–18 Uhr',
    services: [
      'Alle Leistungen von Smart Plus',
      'Premium-Reiseplanung',
      'Unterstützung bei Wohnungssuche & Umzug',
      'Leichte Sonderwünsche auf Anfrage'
    ],
    contact: 'E-Mail',
  },
];

const SmartPackagesTable = ({ onInquire, customerType, promoDiscount }) => {

  const getPrice = (priceGross) => {
    const originalPriceGross = priceGross;
    const discountedPriceGross = promoDiscount ? priceGross - promoDiscount : priceGross;

    if (customerType === 'business') {
      const netPrice = discountedPriceGross / 1.19;
      const originalNetPrice = originalPriceGross / 1.19;
      return (
        <div className="text-right">
          {promoDiscount && <span className="text-base line-through text-platinum/50 mr-2">{originalNetPrice.toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}€</span>}
          <span className="text-2xl font-bold">{netPrice.toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}€</span>
          <p className="text-xs text-platinum/50 font-normal">zzgl. USt. / {promoDiscount ? '1. Monat' : 'Monat'}</p>
          <p className="text-xs text-platinum/50 font-normal">
            ({discountedPriceGross.toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}€ inkl. USt.)
          </p>
        </div>
      );
    }
    return (
      <div className="text-right">
        {promoDiscount && <span className="text-base line-through text-platinum/50 mr-2">{originalPriceGross.toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}€</span>}
        <span className="text-2xl font-bold">{discountedPriceGross.toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}€</span>
        <p className="text-xs text-platinum/50 font-normal">inkl. MwSt. / {promoDiscount ? '1. Monat' : 'Monat'}</p>
      </div>
    );
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: i => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  };

  return (
    <div className="mt-24 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-black mb-2">SMART Pakete im Detail</h2>
        <p className="text-lg md:text-xl text-gold font-serif">Diskret. Effizient. Erschwinglich.</p>
      </motion.div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {smartPackages.map((pkg, index) => (
          <motion.div
            key={pkg.name}
            custom={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Card className="bg-secondary border-amber-700/40 rounded-none h-full flex flex-col">
              <CardHeader className="text-center">
                <CardTitle className="text-gold text-2xl">{pkg.name}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col flex-grow p-6">
                <div className="flex-grow space-y-6">
                  <div className="flex justify-between items-start border-b border-t border-white/10 py-4 min-h-[4.5rem]">
                    <span className="font-semibold text-platinum/80 pt-1">Preis</span>
                    {getPrice(pkg.priceGross)}
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-platinum/80">Anfragen / Monat</span>
                      <span className="font-bold text-lg">{pkg.requests}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-platinum/80">Erreichbarkeit</span>
                      <span className="text-right">{pkg.availability}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-platinum/80">Kontakt via</span>
                      <span className="text-right">{pkg.contact}</span>
                    </div>
                  </div>

                  <div className="pt-4">
                    <p className="font-semibold text-platinum/80 mb-3">Leistungen:</p>
                    <ul className="space-y-2">
                      {pkg.services.map((service, i) => (
                        <li key={i} className="flex items-start">
                          <Check className="h-4 w-4 text-gold mr-3 mt-1 flex-shrink-0" />
                          <span className="text-platinum/90 text-sm">{service}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <Button
                  onClick={() => onInquire(pkg.name)}
                  className="w-full mt-8 bg-transparent border border-gold/50 text-gold/80 hover:bg-gold hover:text-background hover:border-gold rounded-none"
                >
                  {promoDiscount ? 'Angebot sichern' : 'Auftrag erstellen'}
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
      
      <p className="text-center text-platinum/70 mt-8 text-sm">
        * Anfragen in den Smart-Paketen werden innerhalb von maximal 72 Stunden bearbeitet.
        {promoDiscount && " Der Rabatt gilt nur für den ersten Monat."}
      </p>
    </div>
  );
};

export default SmartPackagesTable;