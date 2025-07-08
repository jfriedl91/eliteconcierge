import React from 'react';
import { Helmet } from 'react-helmet-async';
import PageWrapper from '@/components/PageWrapper';
import { motion } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Briefcase, Plane, Home, Star } from 'lucide-react';

const services = {
  private: [
    { icon: <Home className="w-6 h-6 mb-4 text-gold" />, title: "Private Anliegen", description: "Arzttermine bei Koryphäen, Private Shopping, Haushaltsmanagement und exklusive Kinderbetreuung." },
    { icon: <Plane className="w-6 h-6 mb-4 text-gold" />, title: "Reisen & Events", description: "Buchung von Privatjets & Yachten, Reservierungen in Luxushotels und Tickets für ausverkaufte Events." },
    { icon: <Briefcase className="w-6 h-6 mb-4 text-gold" />, title: "Business Support", description: "Effizientes Termin- & Reisemanagement, Organisation von Meetings und exklusive VIP-Geschenke." },
    { icon: <Star className="w-6 h-6 mb-4 text-gold" />, title: "Sonderwünsche", description: "Zugang zu limitierter Kunst, Organisation einmaliger Erlebnisse und die Beschaffung seltener Objekte." },
  ],
  travel: [
    { icon: <Plane className="w-5 h-5 mr-2" />, text: "Buchung von Privatjets & Yachten" },
    { icon: <Plane className="w-5 h-5 mr-2" />, text: "Reservierung in Luxushotels & Villen" },
    { icon: <Plane className="w-5 h-5 mr-2" />, text: "Tickets für ausverkaufte Events & Galas" },
    { icon: <Plane className="w-5 h-5 mr-2" />, text: "Kuratierte, einmalige Reiseerlebnisse" },
  ],
  business: [
    { icon: <Briefcase className="w-5 h-5 mr-2" />, text: "Effizientes Termin- & Reisemanagement" },
    { icon: <Briefcase className="w-5 h-5 mr-2" />, text: "Organisation von Board-Meetings & Konferenzen" },
    { icon: <Briefcase className="w-5 h-5 mr-2" />, text: "Exklusive VIP-Kundengeschenke" },
    { icon: <Briefcase className="w-5 h-5 mr-2" />, text: "Corporate Hospitality & Eventplanung" },
  ],
  special: [
    { icon: <Star className="w-5 h-5 mr-2" />, text: "Zugang zu limitierter Kunst & Sammlerstücken" },
    { icon: <Star className="w-5 h-5 mr-2" />, text: "Organisation von einmaligen Lifestyle-Erlebnissen" },
    { icon: <Star className="w-5 h-5 mr-2" />, text: "Beschaffung seltener und begehrter Objekte" },
    { icon: <Star className="w-5 h-5 mr-2" />, text: "Das Unmögliche möglich machen" },
  ]
};

const ServiceCard = ({ icon, title, description }) => (
  <motion.div 
    className="bg-secondary p-8 text-center flex flex-col items-center rounded-lg border border-gold/10"
    whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(207, 174, 87, 0.1)" }}
    transition={{ duration: 0.3 }}
  >
    {icon}
    <h3 className="text-xl font-serif text-platinum mb-2">{title}</h3>
    <p className="text-platinum/70">{description}</p>
  </motion.div>
);

const ServicesPage = () => {
  return (
    <PageWrapper>
      <Helmet>
        <title>Leistungen | Elite Concierge</title>
        <meta name="description" content="Entdecken Sie unsere maßgeschneiderten Concierge-Services, von privaten Anliegen über Reisen bis hin zu Business Support." />
        <link rel="canonical" href="https://elconci.de/leistungen" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <div className="bg-background text-platinum pt-32 pb-24">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-serif text-gold mb-4">Maßgeschneiderte Leistungen</h1>
            <p className="text-lg md:text-xl text-platinum/80 max-w-3xl mx-auto">Ihr Wunsch ist unser Auftrag. Wir bieten einen Service, der so einzigartig ist wie Sie selbst – diskret, effizient und absolut exklusiv.</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.private.map((service, index) => (
               <ServiceCard key={index} {...service} />
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mt-24"
          >
            <h2 className="text-3xl md:text-4xl font-serif text-gold mb-4">Detailübersicht unserer Services</h2>
            <p className="text-lg text-platinum/80 mb-12 max-w-3xl mx-auto">Wählen Sie eine Kategorie, um die detaillierten Leistungen zu entdecken, die wir für Sie bereithalten.</p>
            
            <Tabs defaultValue="private" className="w-full max-w-4xl mx-auto">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 h-auto md:h-12 bg-secondary rounded-md md:rounded-none">
                <TabsTrigger value="private" className="flex-col md:flex-row h-16 md:h-auto"><Home className="w-4 h-4 mb-1 md:mb-0 md:mr-2"/>Private Services</TabsTrigger>
                <TabsTrigger value="travel" className="flex-col md:flex-row h-16 md:h-auto"><Plane className="w-4 h-4 mb-1 md:mb-0 md:mr-2"/>Reisen & Events</TabsTrigger>
                <TabsTrigger value="business" className="flex-col md:flex-row h-16 md:h-auto"><Briefcase className="w-4 h-4 mb-1 md:mb-0 md:mr-2"/>Business Support</TabsTrigger>
                <TabsTrigger value="special" className="flex-col md:flex-row h-16 md:h-auto"><Star className="w-4 h-4 mb-1 md:mb-0 md:mr-2"/>Sonderwünsche</TabsTrigger>
              </TabsList>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <TabsContent value="private" className="mt-8 text-left">
                  <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
                    <div className="flex items-start p-4"><Home className="w-5 h-5 mr-3 mt-1 text-gold flex-shrink-0" /> <span>Arzttermine bei Koryphäen und Spezialisten</span></div>
                    <div className="flex items-start p-4"><Home className="w-5 h-5 mr-3 mt-1 text-gold flex-shrink-0" /> <span>Private Shopping & persönliche Stilberatung</span></div>
                    <div className="flex items-start p-4"><Home className="w-5 h-5 mr-3 mt-1 text-gold flex-shrink-0" /> <span>Management von Haushalt, Personal und Immobilien</span></div>
                    <div className="flex items-start p-4"><Home className="w-5 h-5 mr-3 mt-1 text-gold flex-shrink-0" /> <span>Exklusive Kinderbetreuung & Schulplatzsuche</span></div>
                  </div>
                </TabsContent>
                <TabsContent value="travel" className="mt-8 text-left">
                  <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
                    <div className="flex items-start p-4"><Plane className="w-5 h-5 mr-3 mt-1 text-gold flex-shrink-0" /> <span>Buchung von Privatjets, Helikoptern & Yachten</span></div>
                    <div className="flex items-start p-4"><Plane className="w-5 h-5 mr-3 mt-1 text-gold flex-shrink-0" /> <span>Reservierung in den besten Luxushotels & Privatvillen</span></div>
                    <div className="flex items-start p-4"><Plane className="w-5 h-5 mr-3 mt-1 text-gold flex-shrink-0" /> <span>Tickets für ausverkaufte Events, Konzerte & Galas</span></div>
                    <div className="flex items-start p-4"><Plane className="w-5 h-5 mr-3 mt-1 text-gold flex-shrink-0" /> <span>Planung kuratierter, einmaliger Reiseerlebnisse</span></div>
                  </div>
                </TabsContent>
                <TabsContent value="business" className="mt-8 text-left">
                  <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
                    <div className="flex items-start p-4"><Briefcase className="w-5 h-5 mr-3 mt-1 text-gold flex-shrink-0" /> <span>Effizientes und proaktives Termin- & Reisemanagement</span></div>
                    <div className="flex items-start p-4"><Briefcase className="w-5 h-5 mr-3 mt-1 text-gold flex-shrink-0" /> <span>Organisation von Board-Meetings, Konferenzen & Incentives</span></div>
                    <div className="flex items-start p-4"><Briefcase className="w-5 h-5 mr-3 mt-1 text-gold flex-shrink-0" /> <span>Beschaffung exklusiver VIP-Kundengeschenke</span></div>
                    <div className="flex items-start p-4"><Briefcase className="w-5 h-5 mr-3 mt-1 text-gold flex-shrink-0" /> <span>Corporate Hospitality und strategische Eventplanung</span></div>
                  </div>
                </TabsContent>
                <TabsContent value="special" className="mt-8 text-left">
                  <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
                    <div className="flex items-start p-4"><Star className="w-5 h-5 mr-3 mt-1 text-gold flex-shrink-0" /> <span>Zugang zu limitierter Kunst und seltenen Sammlerstücken</span></div>
                    <div className="flex items-start p-4"><Star className="w-5 h-5 mr-3 mt-1 text-gold flex-shrink-0" /> <span>Organisation von einmaligen Lifestyle-Erlebnissen</span></div>
                    <div className="flex items-start p-4"><Star className="w-5 h-5 mr-3 mt-1 text-gold flex-shrink-0" /> <span>Beschaffung seltener und weltweit begehrter Objekte</span></div>
                    <div className="flex items-start p-4"><Star className="w-5 h-5 mr-3 mt-1 text-gold flex-shrink-0" /> <span>Wir machen das Unmögliche für Sie möglich</span></div>
                  </div>
                </TabsContent>
              </motion.div>
            </Tabs>
          </motion.div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default ServicesPage;