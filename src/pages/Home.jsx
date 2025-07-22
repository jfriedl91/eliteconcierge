import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  ShieldCheck,
  Globe,
  Clock,
  ArrowRight,
  Phone,
  ContactIcon,
  MessageCircleIcon,
  Send,
  Headphones,
} from "lucide-react";
import PageWrapper from "@/components/PageWrapper";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <PageWrapper>
      <Helmet>
        <title>Elite Concierge - Ihr Leben. Unser Service.</title>
        <meta
          name="description"
          content="Exklusiver Concierge-Service. Ihr Leben. Unser Service. Ihre Zeit zählt. Buchen Sie noch heute Ihre Erstberatung."
        />
        <link rel="canonical" href="https://elconci.de/" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center text-white px-4">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <img
          className="absolute inset-0 w-full h-full object-cover"
          alt="Elegante Stadt bei Nacht"
          src="https://images.unsplash.com/photo-1604059375634-556d99ae929f?fm=webp&q=80&w=1920&fit=crop"
        />

        <div className="relative z-20 container mx-auto">
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-black mb-4 tracking-tight"
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
            }}
          >
            Ihr Leben. Unser Service
          </motion.h1>
          <motion.p
            className="text-3xl md:text-5xl font-serif text-gold mb-8"
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.2,
            }}
          >
            Ihre Zeit zählt.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.4,
            }}
          >
            <Link to="/mitgliedschaften">
              <Button
                size="lg"
                className="bg-gold text-background font-bold text-lg px-10 py-8 rounded-none hover:bg-platinum hover:shadow-[0_0_20px_theme(colors.gold)] transition-all duration-300 w-full sm:w-auto"
              >
                Mitgliedschaften entdecken{" "}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/kontakt">
              <Button
                size="lg"
                variant="outline"
                className="text-white border-white/50 font-bold text-lg px-10 py-8 rounded-none hover:bg-white hover:text-background transition-all duration-300 w-full sm:w-auto"
              >
                Kostenlose Erstberatung
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <section
        className="relative uppercase"
        style={{
          backgroundImage: `url(
            "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          )`,
          backgroundSize: "cover",
        }}
      >
        <div className="absolute w-full h-full bg-[#967B4F] opacity-80"></div>
        <div className="relative">
          <motion.h1
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.5,
            }}
            transition={{
              duration: 0.8,
            }}
            className="text-center lg:text-5xl py-14 text-3xl lg:px-0 px-4"
          >
            Wie funktioniert der Service von <br className="md:block hidden" />{" "}
            Elite Concierge?
          </motion.h1>
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.5,
            }}
            transition={{
              duration: 0.8,
            }}
            className="grid lg:grid-cols-3 sm:grid-cols-2 gap-10 max-w-[60rem] mx-auto lg:p-0 px-10  "
          >
            <div>
              <div className="bg-white w-14 h-14 flex items-center justify-center rounded-full">
                <Send color="#967B4F" size={34} />
              </div>
              <h1 className="mt-6 mb-2 text-2xl">Kontakt</h1>
              <p className="text-sm  leading-6">
                Ein Anruf oder eine E-Mail genügt. Sie kontaktieren uns ganz
                unkompliziert und schildern uns Ihr Anliegen.
              </p>
            </div>
            <div>
              <div className="bg-white w-14 h-14 flex items-center justify-center rounded-full">
                <Headphones color="#967B4F" size={34} />
              </div>
              <h1 className="mt-6 mb-2 text-2xl">RÜCKMELDUNG</h1>
              <p className="text-sm  leading-6">
                Ein Personal Assistant aus unserem Team meldet sich bei Ihnen
                und bespricht mit Ihnen die Möglichkeiten.
              </p>
            </div>
            <div>
              <div className="bg-white w-14 h-14 flex items-center justify-center rounded-full">
                <Clock color="#967B4F" size={34} />
              </div>
              <h1 className="mt-6 mb-2 text-2xl">ZEIT SPAREN</h1>
              <p className="text-sm  leading-6">
                Schon kann es losgehen, in puncto Zeit sparen und mehr Freiheit
                gewinnen.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.5,
            }}
            transition={{
              duration: 0.8,
            }}
            className="text-center pb-14"
          >
            <Link to="/kontakt">
              <Button
                size="lg"
                className="text-white mt-14 border-black border-2 font-bold bg-[#967B4F] text-lg px-10 py-8 rounded-none hover:bg-white hover:text-background transition-all duration-300 w-auto mx-auto"
              >
                JETZT KONTAKTIEREN
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.p
            className="text-xl md:text-2xl text-platinum/80 leading-relaxed"
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            viewport={{
              once: true,
              amount: 0.5,
            }}
            transition={{
              duration: 0.8,
            }}
          >
            Elite Concierge ist Ihr Schlüssel zu einer Welt ohne Grenzen. Wir
            bieten einen beispiellosen, persönlichen Service, der darauf
            ausgelegt ist, Ihr Leben zu bereichern, Ihnen wertvolle Zeit zu
            sparen und Ihnen Zugang zu exklusiven Erlebnissen zu verschaffen,
            die sonst unerreichbar bleiben würden.
          </motion.p>
        </div>
      </section>

      {/* Trust Anchors Section */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <motion.div
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.5,
                delay: 0.1,
              }}
            >
              <ShieldCheck className="mx-auto h-12 w-12 text-gold mb-4" />
              <h3 className="text-2xl font-bold mb-2">Absolute Diskretion</h3>
              <p className="text-platinum/70">
                Ihre Privatsphäre ist unser höchstes Gut. Wir garantieren 100%
                Vertraulichkeit.
              </p>
            </motion.div>
            <motion.div
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.5,
                delay: 0.2,
              }}
            >
              <Clock className="mx-auto h-12 w-12 text-gold mb-4" />
              <h3 className="text-2xl font-bold mb-2">24/7 Erreichbarkeit</h3>
              <p className="text-platinum/70">
                Rund um die Uhr, an jedem Tag des Jahres. Wir sind immer für Sie
                da.
              </p>
            </motion.div>
            <motion.div
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.5,
                delay: 0.3,
              }}
            >
              <Globe className="mx-auto h-12 w-12 text-gold mb-4" />
              <h3 className="text-2xl font-bold mb-2">Weltweite Kontakte</h3>
              <p className="text-platinum/70">
                Unser globales Netzwerk öffnet Türen, die anderen verschlossen
                bleiben.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
};
export default Home;
