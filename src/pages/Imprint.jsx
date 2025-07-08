import React from 'react';
import { Helmet } from 'react-helmet-async';
import PageWrapper from '@/components/PageWrapper';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ImprintPage = () => {
  return (
    <PageWrapper>
      <Helmet>
        <title>Impressum | Elite Concierge</title>
        <meta name="description" content="Unser Impressum." />
        <link rel="canonical" href="https://elconci.de/impressum" />
        <meta name="robots" content="noindex, follow" />
      </Helmet>
      <div className="bg-background text-platinum min-h-[calc(100vh-200px)]">
        <div className="container mx-auto py-24 px-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl md:text-7xl font-black mb-4">Impressum</h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl mx-auto bg-secondary p-8 md:p-12 text-platinum/80"
          >
            <h2 className="text-2xl font-bold text-gold mb-6">Angaben gemäß § 5 TMG</h2>
            <p className="mb-4">
              Johannes Friedl<br />
              Elite Concierge<br />
              c/o MDC Management#1682<br />
              Welserstraße 3<br />
              87463 Dietmannsried
            </p>

            <h3 className="text-xl font-bold text-gold mt-8 mb-4">Kontakt</h3>
            <p className="mb-4">
              Telefon: 06102 5746244<br />
              <span className="text-xs text-platinum/60 italic">(Kein telefonischer Kundensupport)</span><br /><br />
              Direktkontakt: <Link to="/kontakt" className="text-gold hover:underline">Kontaktformular</Link><br />
              E-Mail: info@elconci.de<br />
              Web: www.elconci.de
            </p>

            <h3 className="text-xl font-bold text-gold mt-8 mb-4">Umsatzsteuer-ID</h3>
            <p className="mb-4">
              Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
              DE363853494
            </p>

            <h3 className="text-xl font-bold text-gold mt-8 mb-4">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h3>
            <p className="mb-4">
              Johannes Friedl<br />
              Anschrift wie oben
            </p>

            <h3 className="text-xl font-bold text-gold mt-8 mb-4">Online-Streitbeilegung</h3>
            <p className="mb-4">
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit, die Sie unter <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">https://ec.europa.eu/consumers/odr/</a> finden.
            </p>
            <p>
              Wir sind zur Teilnahme an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle weder verpflichtet noch bereit.
            </p>

            <h3 className="text-xl font-bold text-gold mt-8 mb-4">Haftungsausschluss (Disclaimer)</h3>
            <h4 className="text-lg font-semibold text-gold mt-4 mb-2">Haftung für Inhalte</h4>
            <p className="mb-4">
              Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
            </p>

            <h4 className="text-lg font-semibold text-gold mt-4 mb-2">Haftung für Links</h4>
            <p className="mb-4">
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
            </p>

            <h4 className="text-lg font-semibold text-gold mt-4 mb-2">Urheberrecht</h4>
            <p>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
            </p>
          </motion.div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default ImprintPage;