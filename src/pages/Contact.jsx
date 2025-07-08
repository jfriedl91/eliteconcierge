import React from 'react';
import { Helmet } from 'react-helmet-async';
import PageWrapper from '@/components/PageWrapper';
import { motion } from 'framer-motion';
import ContactForm from '@/components/ContactForm';

const ContactPage = () => {
  return (
    <PageWrapper>
      <Helmet>
        <title>Kontakt | Elite Concierge</title>
        <meta name="description" content="Kontaktieren Sie uns für eine diskrete und unverbindliche Erstberatung. Wir sind 24/7 für Sie erreichbar." />
        <link rel="canonical" href="https://elconci.de/kontakt" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <div className="bg-background text-platinum">
        <div className="container mx-auto py-16 md:py-24 px-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h1 className="text-5xl md:text-7xl font-black mb-4">Kontaktieren Sie uns</h1>
            <p className="text-xl md:text-2xl text-gold font-serif">Diskrete & unverbindliche Erstberatung.</p>
          </motion.div>
          
          <ContactForm />

        </div>
      </div>
    </PageWrapper>
  );
};

export default ContactPage;