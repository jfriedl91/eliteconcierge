import React from 'react';
import { Helmet } from 'react-helmet-async';
import PageWrapper from '@/components/PageWrapper';
import { motion } from 'framer-motion';
import { Shield, Target, Award, Star, CheckCircle, Brain, Users, Lock, Zap, Clock } from 'lucide-react';
const ValueCard = ({
  icon,
  title,
  description
}) => <motion.div className="bg-secondary p-6 text-center flex flex-col items-center rounded-lg border border-gold/10" whileHover={{
  y: -5,
  boxShadow: "0 10px 20px rgba(207, 174, 87, 0.1)"
}} transition={{
  duration: 0.3
}}>
    {icon}
    <h3 className="text-xl font-serif text-platinum mt-4 mb-2">{title}</h3>
    <p className="text-platinum/70">{description}</p>
  </motion.div>;
const AboutPage = () => {
  return <PageWrapper>
      <Helmet>
        <title>Über uns | Elite Concierge</title>
        <meta name="description" content="Erfahren Sie mehr über die Mission und die Werte von Elite Concierge. Persönlicher. Diskreter. Zeitlos exklusiv." />
        <link rel="canonical" href="https://elconci.de/ueber-uns" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <div className="bg-background text-platinum pt-32 pb-24">
        <div className="container mx-auto px-4">
          <motion.div initial={{
          opacity: 0,
          y: -20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }} className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-serif text-gold mb-4">Über Elite Concierge </h1>
            <p className="text-xl md:text-2xl text-platinum/80">Persönlicher. Diskreter. Zeitlos exklusiv.</p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div className="mb-12" initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }}>
              <h2 className="text-3xl font-serif text-gold mb-4 flex items-center"><Star className="w-6 h-6 mr-3" />Unsere Mission</h2>
              <p className="text-lg text-platinum/80 leading-relaxed">Bei Elite Concierge glauben wir, dass wahre Freiheit nicht durch Reichtum entsteht, sondern durch Zeit. Unser Ziel ist es, für Sie das Kostbarste zu bewahren – Ihre Aufmerksamkeit für das Wesentliche. Ob Reisen, Arzttermine, exklusive Events oder diskrete Spezialwünsche: Wir kümmern uns. 24/7. Weltweit.</p>
            </motion.div>

            <motion.div className="mb-12" initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6,
            delay: 0.2
          }}>
              <h2 className="text-3xl font-serif text-gold mb-4 flex items-center"><Target className="w-6 h-6 mr-3" />Was uns besonders macht</h2>
              <ul className="space-y-3 text-lg text-platinum/80">
                <li className="flex items-start"><CheckCircle className="w-5 h-5 mr-3 mt-1 text-gold flex-shrink-0" /><span>Maßgeschneiderte Betreuung – kein Callcenter</span></li>
                <li className="flex items-start"><CheckCircle className="w-5 h-5 mr-3 mt-1 text-gold flex-shrink-0" /><span>Absolute Diskretion & Vertraulichkeit</span></li>
                <li className="flex items-start"><CheckCircle className="w-5 h-5 mr-3 mt-1 text-gold flex-shrink-0" /><span>Zugang zu exklusiven Veranstaltungen & Produkten</span></li>
                <li className="flex items-start"><CheckCircle className="w-5 h-5 mr-3 mt-1 text-gold flex-shrink-0" /><span>Persönliche Ansprechpartner – keine wechselnden Kontakte</span></li>
                <li className="flex items-start"><CheckCircle className="w-5 h-5 mr-3 mt-1 text-gold flex-shrink-0" /><span>Höchste Standards bei Service und Netzwerkpartnern</span></li>
              </ul>
            </motion.div>
            
            <motion.div className="my-16 bg-secondary p-8 md:p-12 rounded-lg border border-gold/10 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12" initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.8,
            delay: 0.3
          }}>
              <div className="flex-shrink-0">
                <img className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-gold/50 filter grayscale brightness-110" src="https://storage.googleapis.com/hostinger-horizons-assets-prod/96999a35-6dd1-45e4-b1bf-8f7d1dca9d2a/5d6b11c277a2c964ac7ddaf205fb59d0.jpg" alt="Porträt des Gründers von Elite Concierge" />
              </div>
              <blockquote className="text-center md:text-left max-w-lg">
                <p className="text-xl md:text-2xl italic text-platinum/90 font-serif leading-relaxed">
                  „Unser Ziel ist es nicht, Erwartungen zu erfüllen, sondern sie zu übertreffen. Jeden Tag.“
                </p>
                <cite className="block text-gold mt-4 text-lg not-italic">
                  - Der Gründer
                </cite>
              </blockquote>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 my-16">
              <ValueCard icon={<Shield className="w-10 h-10 text-gold" />} title="Diskretion" description="Absolute Vertraulichkeit als Fundament unserer Beziehung." />
              <ValueCard icon={<Zap className="w-10 h-10 text-gold" />} title="Effizienz" description="Präzise und schnelle Umsetzung Ihrer Wünsche." />
              <ValueCard icon={<Award className="w-10 h-10 text-gold" />} title="Erfahrung" description="Langjährige Expertise und ein unübertroffenes Netzwerk." />
            </div>

            <motion.div className="mb-12" initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6,
            delay: 0.4
          }}>
              <h2 className="text-3xl font-serif text-gold mb-4 flex items-center"><Brain className="w-6 h-6 mr-3" />Wer wir sind</h2>
              <p className="text-lg text-platinum/80 leading-relaxed mb-6">Elite Concierge wurde von Menschen gegründet, die selbst das Leben zwischen Business, Reisen, Familie und Verantwortung kennen. Mit jahrzehntelanger Erfahrung in Premium-Service, Eventmanagement, Mediation und internationalen Netzwerken wissen wir genau, worauf es ankommt.</p>
              <blockquote className="border-l-4 border-gold pl-6 py-2 text-xl italic text-platinum">
                „Diskretion ist für uns nicht nur ein Prinzip – sie ist Teil unserer Identität.“
              </blockquote>
            </motion.div>

            <motion.div className="mb-12" initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6,
            delay: 0.6
          }}>
              <h2 className="text-3xl font-serif text-gold mb-4 flex items-center"><Users className="w-6 h-6 mr-3" />Für wen wir da sind</h2>
              <p className="text-lg text-platinum/80 leading-relaxed">Wir begleiten eine ausgewählte Klientel – darunter Unternehmer, Investoren, Mediziner, Künstler und anspruchsvolle Privatpersonen – in Deutschland, Europa und weltweit. Ob tägliche Entlastung oder diskrete Unterstützung bei außergewöhnlichen Vorhaben: Als Ihr unsichtbarer Hebel schaffen wir Raum für das Wesentliche – und für das Außergewöhnliche.</p>
            </motion.div>
            
            <motion.div className="bg-secondary p-8 rounded-lg border border-gold/10" initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6,
            delay: 0.8
          }}>
              <h2 className="text-3xl font-serif text-gold mb-4 flex items-center"><Lock className="w-6 h-6 mr-3" />Vertrauen & Sicherheit</h2>
              <p className="text-lg text-platinum/80 leading-relaxed">Für Klienten ausgewählter Mitgliedschaftspakete bieten wir auf Wunsch eine individuelle Verschwiegenheitserklärung (NDA) sowie eine persönliche Ansprechperson. Mit allen Mitgliedern kommunizieren wir über verschlüsselte, sichere Kanäle – Ihre Daten und Anliegen behandeln wir mit größter Diskretion.</p>
            </motion.div>
          </div>
        </div>
      </div>
    </PageWrapper>;
};
export default AboutPage;