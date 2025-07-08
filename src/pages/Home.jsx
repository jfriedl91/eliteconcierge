import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ShieldCheck, Globe, Clock, ArrowRight } from 'lucide-react';
import PageWrapper from '@/components/PageWrapper';
import { Link } from 'react-router-dom';

const Home = () => {
  return <PageWrapper>
      <Helmet>
        <title>Elite Concierge - Ihr Leben. Unser Service.</title>
        <meta name="description" content="Exklusiver Concierge-Service. Ihr Leben. Unser Service. Ihre Zeit zählt. Buchen Sie noch heute Ihre Erstberatung." />
        <link rel="canonical" href="https://elconci.de/" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center text-white px-4">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <img className="absolute inset-0 w-full h-full object-cover" alt="Elegante Stadt bei Nacht" src="https://images.unsplash.com/photo-1604059375634-556d99ae929f?fm=webp&q=80&w=1920&fit=crop" />
        
        <div className="relative z-20 container mx-auto">
          <motion.h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-4 tracking-tight" initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }}>
            Ihr Leben. Unser Service.
          </motion.h1>
          <motion.p className="text-3xl md:text-5xl font-serif text-gold mb-8" initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.2
        }}>
            Ihre Zeit zählt.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{
              opacity: 0,
              y: 20
            }} 
            animate={{
              opacity: 1,
              y: 0
            }} 
            transition={{
              duration: 0.8,
              delay: 0.4
            }}
          >
            <Link to="/mitgliedschaften">
              <Button size="lg" className="bg-gold text-background font-bold text-lg px-10 py-8 rounded-none hover:bg-platinum hover:shadow-[0_0_20px_theme(colors.gold)] transition-all duration-300 w-full sm:w-auto">
                Mitgliedschaften entdecken <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/kontakt">
              <Button size="lg" variant="outline" className="text-white border-white/50 font-bold text-lg px-10 py-8 rounded-none hover:bg-white hover:text-background transition-all duration-300 w-full sm:w-auto">
                Kostenlose Erstberatung
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.p className="text-xl md:text-2xl text-platinum/80 leading-relaxed" initial={{
          opacity: 0
        }} whileInView={{
          opacity: 1
        }} viewport={{
          once: true,
          amount: 0.5
        }} transition={{
          duration: 0.8
        }}>
            Elite Concierge ist Ihr Schlüssel zu einer Welt ohne Grenzen. Wir bieten einen beispiellosen, persönlichen Service, der darauf ausgelegt ist, Ihr Leben zu bereichern, Ihnen wertvolle Zeit zu sparen und Ihnen Zugang zu exklusiven Erlebnissen zu verschaffen, die sonst unerreichbar bleiben würden.
          </motion.p>
        </div>
      </section>

      {/* Trust Anchors Section */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.5,
            delay: 0.1
          }}>
              <ShieldCheck className="mx-auto h-12 w-12 text-gold mb-4" />
              <h3 className="text-2xl font-bold mb-2">Absolute Diskretion</h3>
              <p className="text-platinum/70">Ihre Privatsphäre ist unser höchstes Gut. Wir garantieren 100% Vertraulichkeit.</p>
            </motion.div>
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.5,
            delay: 0.2
          }}>
              <Clock className="mx-auto h-12 w-12 text-gold mb-4" />
              <h3 className="text-2xl font-bold mb-2">24/7 Erreichbarkeit</h3>
              <p className="text-platinum/70">Rund um die Uhr, an jedem Tag des Jahres. Wir sind immer für Sie da.</p>
            </motion.div>
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.5,
            delay: 0.3
          }}>
              <Globe className="mx-auto h-12 w-12 text-gold mb-4" />
              <h3 className="text-2xl font-bold mb-2">Weltweite Kontakte</h3>
              <p className="text-platinum/70">Unser globales Netzwerk öffnet Türen, die anderen verschlossen bleiben.</p>
            </motion.div>
          </div>
        </div>
      </section>
    </PageWrapper>;
};
export default Home;