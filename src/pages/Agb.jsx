import React from 'react';
import { Helmet } from 'react-helmet-async';
import PageWrapper from '@/components/PageWrapper';
import { Link } from 'react-router-dom';

const packages = {
  smart: [{
    name: 'Smart 100',
    price: '119,00 € inkl. MwSt.',
    details: <>1 Anfrage/Monat, Erreichbarkeit Mo-Fr 10-16 Uhr. Bearbeitung von Anfragen i.d.R. innerhalb von 72 Stunden. Leistungen: Arzttermine & Behördenhilfe (z.B. bei Anträgen), <span className="whitespace-nowrap">KFZ-Zulassungsangelegenheiten</span>, Reiseplanung (Flug+Hotel), Alltagsorganisation. Kontakt via <span className="whitespace-nowrap">E-Mail</span>.</>
  }, {
    name: 'Smart Plus',
    price: '195,00 € inkl. MwSt.',
    details: <>3 Anfragen/Monat, Erreichbarkeit Mo-Fr 9-17 Uhr. Bearbeitung von Anfragen i.d.R. innerhalb von 72 Stunden. Leistungen wie Smart 100 + Geschenkideen, Restaurant- & Eventbuchungen (Standard). Kontakt via <span className="whitespace-nowrap">E-Mail</span>.</>
  }, {
    name: 'Smart Flex',
    price: '295,00 € inkl. MwSt.',
    details: <>6 Anfragen/Monat, Erreichbarkeit Mo-Fr 9-18 Uhr. Bearbeitung von Anfragen i.d.R. innerhalb von 72 Stunden. Leistungen wie Smart Plus + Premium-Reiseplanung, Unterstützung bei Wohnungssuche, WG-Zimmer-Suche & Umzug, leichte Sonderwünsche. Kontakt via <span className="whitespace-nowrap">E-Mail</span>.</>
  }],
  premium: [{
    name: 'PRIME',
    price: '690,00 € inkl. MwSt.',
    details: <>10 Anfragen/Monat (privat & geschäftlich), Erreichbarkeit Mo-Fr 8-18 Uhr. Bearbeitung von Anfragen i.d.R. innerhalb von 48 Stunden. Komplexe Organisationen, Premium-Ticketing, monatlicher <span className="whitespace-nowrap">Strategie-Call</span>. Kontakt via Telefon, <span className="whitespace-nowrap">E-Mail</span> und Messenger.</>
  }, {
    name: 'ELITE',
    price: '2.400,00 € inkl. MwSt.',
    details: <>Unlimitierte Anfragen (gem. <Link to="/fair-use-policy" className="text-gold hover:underline">Fair Use Policy</Link>), 24/7 Erreichbarkeit. Bearbeitung von Anfragen i.d.R. innerhalb von 24 Stunden. Persönlicher Ansprechpartner, Zugang zu Events/Restaurants, spezialisierter Reise- & Immobilien-Concierge, wöchentliche Strategie-Calls. Kontakt via Telefon, <span className="whitespace-nowrap">E-Mail</span> und Messenger.</>
  }, {
    name: 'BESPOKE',
    price: '130,00 € / Stunde zzgl. USt.',
    details: <>Vollindividualisierte Betreuung nach Aufwand (gem. <Link to="/fair-use-policy" className="text-gold hover:underline">Fair Use Policy</Link>). Bearbeitung von Anfragen i.d.R. innerhalb von 12 Stunden. Alle Leistungen von ELITE plus: Business Concierge für Backoffice & Koordination, eigenes Backoffice-Team, persönliche Assistenz vor Ort, internationale Abdeckung, NDA & Ghost-Service. Kontakt via Telefon, <span className="whitespace-nowrap">E-Mail</span> und Messenger.</>
  }]
};
const PriceTable = () => <div className="w-full">
    {/* Desktop Table */}
    <div className="hidden md:block overflow-x-auto">
      <table className="w-full text-left text-sm border-collapse border border-gold/30">
        <thead className="bg-gold/10">
          <tr>
            <th className="border border-gold/30 p-3 font-semibold text-gold">Paket</th>
            <th className="border border-gold/30 p-3 font-semibold text-gold">Preis (pro Monat)</th>
            <th className="border border-gold/30 p-3 font-semibold text-gold">Leistungsumfang</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-secondary/30"><td colSpan="3" className="p-3 font-bold text-gold/80">SMART-Mitgliedschaften</td></tr>
          {packages.smart.map(pkg => <tr key={pkg.name}>
              <td className="border border-gold/30 p-3">{pkg.name}</td>
              <td className="border border-gold/30 p-3">{pkg.price}</td>
              <td className="border border-gold/30 p-3">{pkg.details}</td>
            </tr>)}
          <tr className="bg-secondary/30"><td colSpan="3" className="p-3 font-bold text-gold/80">PREMIUM-Mitgliedschaften</td></tr>
          {packages.premium.map(pkg => <tr key={pkg.name}>
              <td className="border border-gold/30 p-3">{pkg.name}</td>
              <td className="border border-gold/30 p-3">{pkg.price}</td>
              <td className="border border-gold/30 p-3">{pkg.details}</td>
            </tr>)}
        </tbody>
      </table>
    </div>

    {/* Mobile Cards */}
    <div className="md:hidden space-y-6">
      <div>
        <h3 className="p-3 font-bold text-gold/80 bg-secondary/30 rounded-t-lg">SMART-Mitgliedschaften</h3>
        <div className="space-y-4">
          {packages.smart.map(pkg => <div key={pkg.name} className="bg-secondary/20 border border-gold/30 p-4 rounded-b-lg">
              <p className="font-bold text-gold">{pkg.name}</p>
              <p className="text-platinum/90"><strong className="text-platinum/70">Preis:</strong> {pkg.price}</p>
              <p className="text-platinum/90 mt-2"><strong className="text-platinum/70">Leistungen:</strong> {pkg.details}</p>
            </div>)}
        </div>
      </div>
       <div>
        <h3 className="p-3 font-bold text-gold/80 bg-secondary/30 rounded-t-lg">PREMIUM-Mitgliedschaften</h3>
        <div className="space-y-4">
          {packages.premium.map(pkg => <div key={pkg.name} className="bg-secondary/20 border border-gold/30 p-4 rounded-b-lg">
              <p className="font-bold text-gold">{pkg.name}</p>
              <p className="text-platinum/90"><strong className="text-platinum/70">Preis:</strong> {pkg.price}</p>
              <p className="text-platinum/90 mt-2"><strong className="text-platinum/70">Leistungen:</strong> {pkg.details}</p>
            </div>)}
        </div>
      </div>
    </div>
  </div>;
const AgbPage = () => {
  return <PageWrapper>
      <Helmet>
        <title>Allgemeine Geschäftsbedingungen | ELCONCI</title>
        <meta name="description" content="Lesen Sie die Allgemeinen Geschäftsbedingungen (AGB) von ELCONCI. Erfahren Sie mehr über die Nutzungsbedingungen unserer exklusiven Dienstleistungen." />
        <link rel="canonical" href="https://elconci.de/agb" />
        <meta name="robots" content="noindex, follow" />
      </Helmet>
      <div className="bg-background text-platinum pt-32 pb-16">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-serif text-gold mb-8 text-center">Allgemeine Geschäftsbedingungen</h1>
          <p className="text-center text-platinum/60 mb-12">Stand: 02. Juli 2025</p>

          <div className="max-w-4xl mx-auto space-y-8 text-platinum/80 text-base">
            <section>
              <h2 className="text-2xl font-semibold text-gold mb-4">§ 1 Geltungsbereich und Anbieter</h2>
              <p>(1) Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Verträge über Dienstleistungen, die zwischen Johannes Friedl, Elite Concierge, c/o MDC Management#1682, Welserstraße 3,  87463 Dietmannsried (nachfolgend „Anbieter“) und ihren Kunden (nachfolgend „Kunde“) geschlossen werden.</p>
              <p>
                (2) Abweichende, entgegenstehende oder ergänzende AGB des Kunden werden nur dann und insoweit Vertragsbestandteil, als der Anbieter ihrer Geltung ausdrücklich schriftlich zugestimmt hat.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold text-gold mb-4">§ 2 Leistungsgegenstand und Vertragsschluss</h2>
              <p>
                (1) Der Anbieter erbringt für den Kunden persönliche Assistenz- und Concierge-Dienstleistungen im Rahmen der gewählten Mitgliedschaft (Paket). Der konkrete Leistungsumfang der einzelnen Pakete ist im Preis- und Leistungsverzeichnis (Anhang 1 dieser AGB) detailliert aufgeführt.
              </p>
              <p>
                (2) Die Darstellung der Mitgliedschaftspakete auf der Webseite des Anbieters ist unverbindlich und stellt kein rechtlich bindendes Angebot dar. Der vom Kunden ausgefüllte und unterzeichnet an den Anbieter zurückgesandte Dienstleistungsauftrag stellt ein verbindliches Angebot des Kunden zum Abschluss eines Vertrages dar. Ein rechtsverbindlicher Vertrag kommt erst zustande, wenn der Anbieter dieses Angebot annimmt. Die Annahme kann durch eine ausdrückliche Erklärung (z.B. Auftragsbestätigung per E-Mail) oder durch den Beginn der Leistungserbringung erfolgen. Der Anbieter behält sich das Recht vor, Angebote ohne Angabe von Gründen abzulehnen.
              </p>
              <p>
                (3) Nicht verbrauchte Anfragen aus den Paketen SMART und PRIME verfallen zum Ende des jeweiligen Kalendermonats und sind nicht auf Folgemonate übertragbar.
              </p>
              <p>
                (4) Die Pakete ELITE und BESPOKE beinhalten eine unbegrenzte Anzahl von Anfragen, die einer <Link to="/fair-use-policy" className="text-gold hover:underline">Fair Use Policy</Link> unterliegt. Diese stellt sicher, dass die Servicequalität für alle Kunden auf höchstem Niveau gehalten wird.
              </p>
              <p>
                (5) Die vom Anbieter erbrachten Leistungen stellen einen Dienstvertrag im Sinne des § 611 BGB dar. Der Anbieter verpflichtet sich zum sorgfältigen Bemühen, die Wünsche des Kunden zu erfüllen, schuldet jedoch keinen bestimmten Erfolg (z.B. die erfolgreiche Reservierung eines ausgebuchten Restaurants oder die Beschaffung vergriffener Tickets). Die Leistung des Anbieters gilt als erbracht, wenn die zur Erfüllung des Auftrags notwendigen Handlungen vorgenommen wurden. Der Anbieter kann nicht garantieren, dass eine Anfrage erfolgreich durchgeführt werden kann, insbesondere wenn die Durchführung von der Verfügbarkeit oder den Kapazitäten Dritter abhängt.
              </p>
               <p>
                (6) Der Anbieter bemüht sich um eine zeitnahe Bearbeitung der Kundenanfragen. Die hierfür angegebenen Bearbeitungszeiten (SMART: max. 72h, PRIME: 48h, ELITE: 24h, BESPOKE: max. 12h) sind angestrebte Richtwerte und keine vertraglich zugesicherten Fristen.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gold mb-4">§ 3 Mitwirkungspflichten des Kunden</h2>
              <p>(1) Der Kunde ist verpflichtet, dem Anbieter alle für die Erbringung der Dienstleistung erforderlichen Informationen und Unterlagen rechtzeitig, vollständig und wahrheitsgemäß zur Verfügung zu stellen.</p>
              <p>(2) Der Kunde trägt die Verantwortung für die Richtigkeit der von ihm gemachten Angaben. Verzögerungen oder Mehraufwand, die durch unrichtige oder unvollständige Angaben des Kunden entstehen, gehen zu dessen Lasten.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gold mb-4">§ 4 Preise, Zahlungsbedingungen und Aufrechnung</h2>
              <p>
                (1) Es gelten die im Preis- und Leistungsverzeichnis (Anhang 1) aufgeführten Preise zum Zeitpunkt des Vertragsschlusses.
              </p>
              <p>
                (2) Die für die Pakete SMART, PRIME und ELITE ausgewiesenen Preise sind Bruttopreise in Euro (€) und enthalten die gesetzliche Mehrwertsteuer. Diese Preise richten sich an Verbraucher. Für Kunden, die Unternehmer im Sinne des § 14 BGB sind, verstehen sich alle Preise als Nettopreise zuzüglich der gesetzlichen Umsatzsteuer. Die Unternehmereigenschaft ist vom Kunden bei Vertragsschluss anzugeben.
              </p>
               <p>
                (3) Das BESPOKE-Paket wird nicht zu einem Festpreis, sondern nach tatsächlichem Aufwand abgerechnet. Der Stundensatz beträgt 130,00 € zuzüglich der gesetzlichen Umsatzsteuer. Die Abrechnung erfolgt monatlich auf Basis eines detaillierten Leistungsnachweises.
              </p>
               <p>
                (4) Die Gebühr für die Mitgliedschaft (SMART, PRIME, ELITE) ist monatlich im Voraus zu entrichten. Die Zahlung erfolgt per Banküberweisung oder einem anderen vom Anbieter angebotenen Zahlungsverfahren.
              </p>
              <p>
                (5) Kosten für Dienstleistungen oder Waren Dritter, die im Auftrag des Kunden beschafft werden (z.B. Tickets, Hotelbuchungen, Handwerker), sind nicht in der Mitgliedsgebühr oder dem Stundensatz enthalten und werden dem Kunden separat in Rechnung gestellt bzw. sind direkt vom Kunden zu begleichen.
              </p>
              <p>
                (6) Kommt der Kunde in Zahlungsverzug, ist der Anbieter berechtigt, Verzugszinsen in Höhe von 5 % p.a. zu fordern. Die Geltendmachung eines weitergehenden Verzugsschadens bleibt unberührt.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gold mb-4">§ 4a Sonderaktionen und Rabatte</h2>
              <p>(1) Der Anbieter kann zeitlich begrenzte oder zielgruppenspezifische Sonderaktionen und Rabatte gewähren.</p>
              <p>(2) Solche Rabatte, wie beispielsweise der "Visitenkarte"-Aktionsrabatt, gelten, sofern nicht anders angegeben, ausschließlich für den ersten Vertragsmonat. Ab dem zweiten Monat wird der reguläre, vertraglich vereinbarte Paketpreis fällig.</p>
              <p>(3) Aktionsrabatte sind nicht mit anderen Rabatten oder Aktionen kombinierbar und können nicht in bar ausgezahlt werden.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gold mb-4">§ 5 Vertragslaufzeit und Kündigung</h2>
              <p>
                (1) Die Mitgliedschaftsverträge werden auf unbestimmte Zeit geschlossen und sind monatlich kündbar.
              </p>
              <p>
                (2) Der Vertrag kann von beiden Parteien ordentlich mit einer Frist von zwei (2) Wochen zum Ende eines Kalendermonats gekündigt werden.
              </p>
              <p>
                (3) Das Recht zur außerordentlichen Kündigung aus wichtigem Grund bleibt unberührt.
              </p>
              <p>(4) Jede Kündigung bedarf der Schriftform (z.B. E-Mail).</p>
              <p>(5) Im Falle einer dauerhaften, übermäßigen Nutzung der Pakete ELITE oder BESPOKE gemäß der <Link to="/fair-use-policy" className="text-gold hover:underline">Fair Use Policy</Link>, steht beiden Parteien ein Sonderkündigungsrecht mit einer Frist von einem (1) Tag zu. Für das ELITE-Paket gilt: Im Falle einer Kündigung durch den Kunden wird der bereits entrichtete Monatsbeitrag anteilig und tagesgenau für den nicht genutzten Zeitraum zurückerstattet. Erfolgt die Kündigung aus diesem Grund durch den Anbieter, entfällt der Anspruch auf Rückerstattung.</p>
              <p>(6) Ein wichtiger Grund zur fristlosen Kündigung durch den Anbieter liegt insbesondere vor, wenn der Kunde mit der Zahlung der vereinbarten Vergütung für einen Zeitraum von 30 Tagen in Verzug ist.</p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold text-gold mb-4">§ 6 Vertraulichkeit</h2>
              <p>(1) Beide Parteien verpflichten sich, alle ihnen im Rahmen der Vertragsdurchführung bekannt werdenden Geschäfts- und Betriebsgeheimnisse sowie sonstige vertrauliche Informationen der anderen Partei streng vertraulich zu behandeln.</p>
              <p>(2) Diese Verpflichtung gilt auch über die Beendigung des Vertragsverhältnisses hinaus.</p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold text-gold mb-4">§ 7 Haftung</h2>
              <p>
                (1) Der Anbieter haftet unbeschränkt für Schäden aus der Verletzung des Lebens, des Körpers oder der Gesundheit, die auf einer vorsätzlichen oder fahrlässigen Pflichtverletzung des Anbieters beruhen, sowie für sonstige Schäden, die auf einer vorsätzlichen oder grob fahrlässigen Pflichtverletzung des Anbieters beruhen.
              </p>
              <p>
                (2) Bei der Verletzung wesentlicher Vertragspflichten (Kardinalpflichten) durch einfache Fahrlässigkeit ist die Haftung auf den vertragstypischen, vorhersehbaren Schaden begrenzt. Wesentliche Vertragspflichten sind solche, deren Erfüllung die ordnungsgemäße Durchführung des Vertrags überhaupt erst ermöglicht und auf deren Einhaltung der Kunde regelmäßig vertrauen darf.
              </p>
               <p>
                (3) Der Anbieter haftet nicht für die Erbringung von Leistungen durch Dritte, die er im Namen des Kunden vermittelt. In diesen Fällen tritt der Anbieter lediglich als Vermittler auf.
              </p>
              <p>
                (4) Die im Leistungsverzeichnis oder an anderer Stelle kommunizierten Bearbeitungszeiten dienen als Richtwerte. Eine Nichteinhaltung dieser Richtwerte begründet keinen Anspruch auf Schadensersatz oder Minderung, sofern die Verzögerung nicht auf grober Fahrlässigkeit oder Vorsatz des Anbieters beruht.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gold mb-4">§ 8 Datenschutz</h2>
              <p>
                Der Anbieter erhebt, verarbeitet und nutzt personenbezogene Daten des Kunden im Rahmen der gesetzlichen Bestimmungen. Details hierzu sind der gesonderten Datenschutzerklärung zu entnehmen, die auf der Webseite des Anbieters abrufbar ist.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gold mb-4">§ 9 Widerrufsrecht für Verbraucher</h2>
              <p>(1) Schließt der Kunde den Vertrag als Verbraucher, steht ihm ein gesetzliches Widerrufsrecht zu. Verbraucher ist jede natürliche Person, die ein Rechtsgeschäft zu Zwecken abschließt, die überwiegend weder ihrer gewerblichen noch ihrer selbständigen beruflichen Tätigkeit zugerechnet werden können (§ 13 BGB).</p>
              <p>(2) Das Widerrufsrecht gilt nicht für Kunden, die Unternehmer, Gewerbetreibende, Freiberufler oder juristische Personen sind und in Ausübung ihrer gewerblichen oder selbständigen beruflichen Tätigkeit handeln.</p>
              <p>(3) Die Einzelheiten zum Widerrufsrecht, insbesondere zu Fristen, Vorgehen und Folgen, sind der gesonderten <Link to="/widerruf" className="text-gold hover:underline">Widerrufsbelehrung</Link> zu entnehmen.</p>
            </section>

            <section>
                <h2 className="text-2xl font-semibold text-gold mb-4">§ 10 Änderung dieser AGB</h2>
                <p>(1) Der Anbieter behält sich vor, diese AGB jederzeit mit Wirkung für die Zukunft zu ändern, sofern dies aus triftigen Gründen, insbesondere aufgrund einer geänderten Rechtslage oder technischer Weiterentwicklungen, erforderlich ist und den Kunden nicht unangemessen benachteiligt.</p>
                <p>(2) Die geänderten Bedingungen werden dem Kunden spätestens vier Wochen vor ihrem Inkrafttreten in Textform (z.B. per E-Mail) mitgeteilt. Widerspricht der Kunde der Geltung der neuen AGB nicht innerhalb dieser Frist, gelten die geänderten AGB als angenommen. Der Anbieter wird den Kunden in der Mitteilung auf sein Widerspruchsrecht und die Bedeutung der Widerspruchsfrist gesondert hinweisen.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gold mb-4">§ 11 Online-Streitbeilegung</h2>
              <p>(1) Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit, die Sie unter <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">https://ec.europa.eu/consumers/odr/</a> finden.</p>
              <p>(2) Der Anbieter ist zur Teilnahme an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle weder verpflichtet noch bereit.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gold mb-4">§ 12 Schlussbestimmungen</h2>
              <p>
                (1) Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts.
              </p>
              <p>
                (2) Ist der Kunde Kaufmann, eine juristische Person des öffentlichen Rechts oder ein öffentlich-rechtliches Sondervermögen, ist Gerichtsstand für alle Streitigkeiten aus diesem Vertrag der Geschäftssitz des Anbieters.
              </p>
              <p>
                (3) Sollten einzelne Bestimmungen dieser AGB unwirksam sein oder werden, so wird dadurch die Wirksamkeit der übrigen Bestimmungen nicht berührt.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gold mt-12 mb-6">Anhang 1: Preis- und Leistungsverzeichnis</h2>
              <PriceTable />
            </section>
          </div>
        </div>
      </div>
    </PageWrapper>;
};
export default AgbPage;