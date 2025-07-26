import React, { useState } from "react";
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
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Link } from "react-router-dom";
import { heroSection, mountain } from "../assets";

const Home = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <PageWrapper>
      <Helmet>
        <title>Exklusiver Concierge Service - Persönlicher Service bei Elite Concierge .</title>
        <meta
          name="description"
          content="Exklusiver Concierge-Service. Ihr Leben. Unser Service. Ihre Zeit zählt. Buchen Sie noch heute Ihre Erstberatung."
        />
        <link rel="canonical" href="https://elconci.de/" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative sm:h-screen flex sm:items-center sm:py-0 py-20 justify-center text-center text-white px-4">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <img
          className="absolute inset-0 w-full h-full object-cover"
          alt="Elegante Stadt bei Nacht"
          src={heroSection}
        />

        <motion.div
          className=" fixed z-30 left-4 bottom-5"
          initial={{
            opacity: 0,
            bottom: 0,
          }}
          animate={{
            opacity: 1,
            bottom: 20,
          }}
          transition={{
            duration: 0.8,
          }}
          onClick={() => setIsFormOpen(true)}
        >
          <Button
            size="lg"
            variant="outline"
            className="text-white border-[3px] font-bold text-lg px-10 py-8 rounded-full  transition-all duration-300 w-full sm:w-auto glow-border"
          >
            Was wir bieten
          </Button>
        </motion.div>

        <div className="relative z-20 container mx-auto">
          <motion.h1
            className="text-4xl md:text-7xl lg:text-8xl font-black mb-4 tracking-tight"
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
            className="text-2xl md:text-5xl font-serif text-gold mb-8"
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
                className="bg-gold text-background font-bold sm:text-lg px-10 py-8 rounded-none hover:bg-platinum hover:shadow-[0_0_20px_theme(colors.gold)] transition-all duration-300 w-full sm:w-auto"
              >
                Mitgliedschaften entdecken{" "}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/kontakt">
              <Button
                size="lg"
                variant="outline"
                className="text-white border-white/50 font-bold sm:text-lg px-10 py-8 rounded-none hover:bg-white min-w-[291px] hover:text-background transition-all duration-300 w-full sm:w-auto"
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
            ${mountain}
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
              <h1 className="mt-6 mb-2 text-2xl">ANFRAGE</h1>
              <p className="text-sm  leading-6">
                Ein kurzer Anruf oder eine E-Mail reicht aus. Kontaktieren Sie
                uns ganz einfach und teilen uns Ihr Anliegen mit.
              </p>
            </div>
            <div>
              <div className="bg-white w-14 h-14 flex items-center justify-center rounded-full">
                <Headphones color="#967B4F" size={34} />
              </div>
              <h1 className="mt-6 mb-2 text-2xl">FEEDBACK</h1>
              <p className="text-sm  leading-6">
                Ihr persönlicher Concierge setzt sich mit Ihnen in Verbindung,
                um die Möglichkeiten mit Ihnen zu besprechen.
              </p>
            </div>
            <div>
              <div className="bg-white w-14 h-14 flex items-center justify-center rounded-full">
                <Clock color="#967B4F" size={34} />
              </div>
              <h1 className="mt-6 mb-2 text-2xl">ZEIT SPAREN</h1>
              <p className="text-sm  leading-6">
                Und schon profitieren Sie von Zeitersparnis und größerer
                Flexibilität.
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
      <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
        <DialogContent className="max-w-3xl p-0 flex flex-col w-[95%] sm:w-full max-h-[90vh] sm:max-h-[85vh]">
          <DialogHeader className="p-6 pb-4 flex-shrink-0">
            <DialogTitle>
              Exklusive Zeitgewinne durch den Service von Elite Concierge
            </DialogTitle>
            <DialogDescription>
              Im Zeitalter von Geschwindigkeit und ständiger Erreichbarkeit ist
              Zeit der wahre Luxus.
            </DialogDescription>
          </DialogHeader>
          <div className="flex-grow overflow-y-auto min-h-0">
            <div className="p-6 pt-0 space-y-4 text-sm leading-relaxed text-muted-foreground">
              <p>
                Unser <strong>Elite Concierge Service</strong> verschafft Ihnen
                Zugang zu dieser wertvollsten Ressource –{" "}
                <em>diskret, effizient und auf höchstem Niveau</em>.
              </p>

              <p>
                Als anspruchsvolle Persönlichkeit wissen Sie:{" "}
                <strong>Zeit ist ein Privileg</strong>, das sich nicht vermehren
                lässt.
              </p>

              <blockquote className="border-l-2 pl-4 italic text-muted-foreground">
                Wie schon Seneca erkannte:
                <br />
                <strong>„Tempus fugit.“</strong>
                <br />
                <em>Die Zeit flieht.</em>
              </blockquote>

              <p>
                Unser exklusiver Concierge Service ist darauf ausgerichtet,
                Ihnen diese Freiheit zu schenken.
              </p>

              <p>
                Wir übernehmen für Sie sämtliche zeitintensive Aufgaben und
                Wünsche – individuell, zuverlässig und mit größter Sorgfalt. So
                gewinnen Sie Freiräume für das, was Ihnen wirklich am Herzen
                liegt: Ihre persönlichen Prioritäten, Ihre Leidenschaft, Ihr
                Leben.
              </p>

              <p className="font-semibold text-foreground">
                Genießen Sie mit dem Elite Concierge Service eine neue Dimension
                von Zeit und Lebensqualität – maßgeschneidert, erstklassig,{" "}
                <em>unvergleichlich</em>.
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </PageWrapper>
  );
};
export default Home;
