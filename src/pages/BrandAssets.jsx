import React from 'react';
import { Helmet } from 'react-helmet-async';
import PageWrapper from '@/components/PageWrapper';
import { motion } from 'framer-motion';
import { Download, Image as ImageIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';

const BrandAssetsPage = () => {
  return (
    <PageWrapper>
      <Helmet>
        <title>Brand Assets | Elite Concierge</title>
        <meta name="description" content="Download logos and other brand assets for Elite Concierge." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <div className="bg-background text-platinum min-h-screen">
        <div className="container mx-auto py-24 px-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-7xl font-black mb-4">Brand Assets</h1>
            <p className="text-xl md:text-2xl text-gold font-serif">
              Offizielle Logos und Design-Elemente.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-secondary p-8 border border-gold/20 flex flex-col items-center justify-center text-center"
            >
              <ImageIcon className="w-16 h-16 text-gold mb-6" />
              <h2 className="text-2xl font-serif text-platinum mb-2">Primärlogo</h2>
              <p className="text-platinum/70 mb-6">Für die meisten Anwendungsfälle geeignet.</p>
              <img src="/logo.svg" alt="Elite Concierge Logo" className="h-16 bg-background p-3 my-4" />
              <Button asChild variant="outline" className="mt-4 text-gold border-gold/50 hover:bg-gold hover:text-background">
                <a href="/logo.svg" download="elconci_logo.svg">
                  <Download className="mr-2 h-4 w-4" /> SVG Herunterladen
                </a>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-secondary p-8 border border-gold/20 flex flex-col items-center justify-center text-center"
            >
              <ImageIcon className="w-16 h-16 text-gold mb-6" />
              <h2 className="text-2xl font-serif text-platinum mb-2">Icon</h2>
              <p className="text-platinum/70 mb-6">Für kleine Formate wie Favicons oder Avatare.</p>
              <img src="/logo-icon.svg" alt="Elite Concierge Icon" className="h-16 bg-background p-3 rounded-full my-4" />
              <Button asChild variant="outline" className="mt-4 text-gold border-gold/50 hover:bg-gold hover:text-background">
                <a href="/logo-icon.svg" download="elconci_icon.svg">
                  <Download className="mr-2 h-4 w-4" /> SVG Herunterladen
                </a>
              </Button>
            </motion.div>
          </div>

           <div className="max-w-4xl mx-auto mt-12 text-center text-platinum/60">
                <h3 className="text-xl font-semibold text-gold mb-4">Nutzungsrichtlinien</h3>
                <p>
                    Bitte verwenden Sie unsere Marken-Assets nur in Übereinstimmung mit unseren Richtlinien. Verändern Sie die Logos nicht in Farbe, Form oder Proportion. Bei Fragen zur Nutzung wenden Sie sich bitte an uns.
                </p>
            </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default BrandAssetsPage;