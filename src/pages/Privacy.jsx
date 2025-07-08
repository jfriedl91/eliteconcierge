import React from 'react';
import { Helmet } from 'react-helmet-async';
import PageWrapper from '@/components/PageWrapper';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const PrivacyPage = () => {
  return (
    <PageWrapper>
      <Helmet>
        <title>Datenschutz | Elite Concierge</title>
        <meta name="description" content="Unsere Datenschutzbestimmungen." />
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
            <h1 className="text-5xl md:text-7xl font-black mb-4">Datenschutzerklärung</h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl mx-auto bg-secondary p-8 md:p-12 text-platinum/80 space-y-8"
          >
            <p>Stand: 27. Juni 2025</p>

            <section>
              <h2 className="text-2xl font-bold text-gold mb-4">1. Datenschutz auf einen Blick</h2>
              <h3 className="text-xl font-semibold text-gold mt-4 mb-2">Allgemeine Hinweise</h3>
              <p>
                Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gold mb-4">2. Allgemeine Hinweise und Pflichtinformationen</h2>
              <h3 className="text-xl font-semibold text-gold mt-4 mb-2">Verantwortliche Stelle</h3>
              <p>
                Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
                <br /><br />
                Johannes Friedl<br />
                Elite Concierge<br />
                c/o MDC Management#1682<br />
                Welserstraße 3<br />
                87463 Dietmannsried<br />
                Direktkontakt: <Link to="/kontakt" className="text-gold hover:underline">Kontaktformular</Link><br />
                E-Mail: info@elconci.de
              </p>
              <p className="mt-4">
                Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z. B. Namen, E-Mail-Adressen o. Ä.) entscheidet.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-gold mt-4 mb-2">Speicherdauer</h3>
              <p>
                Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde, verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt. Wenn Sie ein berechtigtes Löschersuchen geltend machen oder eine Einwilligung zur Datenverarbeitung widerrufen, werden Ihre Daten gelöscht, sofern wir keine anderen rechtlich zulässigen Gründe für die Speicherung Ihrer personenbezogenen Daten haben (z.B. steuer- oder handelsrechtliche Aufbewahrungsfristen); im letztgenannten Fall erfolgt die Löschung nach Fortfall dieser Gründe.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-gold mt-4 mb-2">SSL- bzw. TLS-Verschlüsselung</h3>
              <p>
                Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, wie zum Beispiel Bestellungen oder Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von „http://“ auf „https://“ wechselt und an dem Schloss-Symbol in Ihrer Browserzeile. Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die Daten, die Sie an uns übermitteln, nicht von Dritten mitgelesen werden.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gold mb-4">3. Ihre Rechte nach der DSGVO</h2>
              <p>Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen folgende Rechte:</p>
              <ul className="list-disc list-inside mt-4 space-y-2">
                <li>Recht auf Auskunft über Ihre bei uns gespeicherten Daten (Art. 15 DSGVO).</li>
                <li>Recht auf Berichtigung unrichtiger Daten (Art. 16 DSGVO).</li>
                <li>Recht auf Löschung Ihrer Daten („Recht auf Vergessenwerden“) (Art. 17 DSGVO).</li>
                <li>Recht auf Einschränkung der Verarbeitung Ihrer Daten (Art. 18 DSGVO).</li>
                <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO).</li>
                <li><strong>Widerspruchsrecht gegen die Verarbeitung Ihrer Daten (Art. 21 DSGVO).</strong></li>
              </ul>
              <p className="mt-4">
                Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit an uns wenden.
              </p>
              <h3 className="text-xl font-semibold text-gold mt-4 mb-2">Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>
              <p>
                Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.
              </p>
              <h3 className="text-xl font-semibold text-gold mt-4 mb-2">Recht auf Beschwerde bei der zuständigen Aufsichtsbehörde</h3>
              <p>
                Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes zu. Das Beschwerderecht besteht unbeschadet anderweitiger verwaltungsrechtlicher oder gerichtlicher Rechtsbehelfe.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gold mb-4">4. Datenerfassung auf dieser Website</h2>
              <h3 className="text-xl font-semibold text-gold mt-4 mb-2">Cookies</h3>
              <p>
                Unsere Internetseiten verwenden so genannte „Cookies“. Cookies sind kleine Datenpakete und richten auf Ihrem Endgerät keinen Schaden an. Sie werden entweder vorübergehend für die Dauer einer Sitzung (Session-Cookies) oder dauerhaft (permanente Cookies) auf Ihrem Endgerät gespeichert. Session-Cookies werden nach Ende Ihres Besuchs automatisch gelöscht. Permanente Cookies bleiben auf Ihrem Endgerät gespeichert, bis Sie diese selbst löschen oder eine automatische Löschung durch Ihren Webbrowser erfolgt.
              </p>
              <p className="mt-4">
                Technisch notwendige Cookies werden auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO gespeichert. Wir haben ein berechtigtes Interesse an der Speicherung von Cookies zur technisch fehlerfreien und optimierten Bereitstellung unserer Dienste. Andere Cookies (z.B. für Analyse- oder Marketingfunktionen) werden nur mit Ihrer Einwilligung auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO gespeichert; die Einwilligung ist jederzeit widerrufbar.
              </p>

              <h3 className="text-xl font-semibold text-gold mt-4 mb-2">Server-Log-Dateien</h3>
              <p>
                Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind: Browsertyp und Browserversion, verwendetes Betriebssystem, Referrer URL, Hostname des zugreifenden Rechners, Uhrzeit der Serveranfrage und IP-Adresse. Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse an der technisch fehlerfreien Darstellung und der Optimierung seiner Website – hierzu müssen die Server-Log-Files erfasst werden.
              </p>

              <h3 className="text-xl font-semibold text-gold mt-4 mb-2">Hosting</h3>
              <p>
                Diese Website wird bei einem externen Dienstleister (Hoster) gehostet. Die personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den Servern des Hosters gespeichert. Hierbei kann es sich v. a. um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe und sonstige Daten, die über eine Website generiert werden, handeln.
              </p>
              <p className="mt-4">
                Der Einsatz des Hosters erfolgt zum Zwecke der Vertragserfüllung gegenüber unseren potenziellen und bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse einer sicheren, schnellen und effizienten Bereitstellung unseres Online-Angebots durch einen professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO).
              </p>
              <p className="mt-4">
                Unser Hoster ist:
                <br /><br />
                Hostinger International Ltd.<br />
                Jonavos g. 60C<br />
                44192 Kaunas, Litauen
              </p>
              <p className="mt-4">
                Wir haben einen Vertrag über Auftragsverarbeitung (AVV) mit dem oben genannten Anbieter geschlossen.
              </p>

              <h3 className="text-xl font-semibold text-gold mt-4 mb-2">Kontaktformulare</h3>
              <p>
                Auf unserer Webseite werden unterschiedliche Formulare verwendet, die über die Drittanbieter Web3Forms und Formspree abgewickelt werden.
              </p>
              
              <h4 className="text-lg font-semibold text-gold/90 mt-6 mb-2">Allgemeines Kontaktformular (via Web3Forms)</h4>
              <p>
                Wenn Sie uns über das allgemeine Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Wir nutzen für dieses Formular den Dienst „Web3Forms“, ein Dienst von anwalli.com. Eine physische Adresse des Anbieters ist nicht öffentlich bekannt. Wenn Sie das Formular absenden, werden die Daten an Web3Forms zur Verarbeitung übermittelt.
              </p>
              <p className="mt-4">
                Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO). Wir haben mit dem Anbieter von Web3Forms einen Vertrag zur Auftragsverarbeitung (AVV) abgeschlossen.
              </p>

              <h4 className="text-lg font-semibold text-gold/90 mt-6 mb-2">Anfrageformular für Mitgliedschaften (via Formspree)</h4>
              <p>
                Für Anfragen zu unseren Mitgliedschaftspaketen nutzen wir den Dienst „Formspree“. Anbieter ist die Formspree, Inc., 1201 N Orange St, Ste 7185, Wilmington, DE 19801, USA. Wenn Sie das entsprechende Formular ausfüllen und absenden, werden die von Ihnen eingegebenen Daten zur Bearbeitung an Formspree übermittelt.
              </p>
               <p className="mt-4">
                Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO (Vertragsanbahnung) und unserem berechtigten Interesse (Art. 6 Abs. 1 lit. f DSGVO) an einer effizienten Bearbeitung Ihrer spezifischen Mitgliedschaftsanfrage. Die Datenübertragung in die USA wird auf die Standardvertragsklauseln der EU-Kommission gestützt. Wir haben mit Formspree einen entsprechenden Vertrag (Data Processing Addendum) abgeschlossen, um den Schutz Ihrer Daten zu gewährleisten.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold text-gold mb-4">5. Analyse-Tools und Werbung</h2>
              <h3 className="text-xl font-semibold text-gold mt-4 mb-2">Meta Pixel (ehemals Facebook Pixel)</h3>
              <p>
                Diese Website nutzt zur Konversionsmessung das Besucheraktions-Pixel von Meta. Anbieter dieses Dienstes ist die Meta Platforms Ireland Limited, 4 Grand Canal Square, Grand Canal Harbour, Dublin 2, Irland. Die erfassten Daten werden nach Aussage von Facebook jedoch auch in die USA und in andere Drittländer übertragen.
              </p>
              <p className="mt-4">
                So kann das Verhalten der Seitenbesucher nachverfolgt werden, nachdem diese durch Klick auf eine Facebook-Werbeanzeige auf die Website des Anbieters weitergeleitet wurden. Dadurch können die Wirksamkeit der Facebook-Werbeanzeigen für statistische und Marktforschungszwecke ausgewertet werden und zukünftige Werbemaßnahmen optimiert werden.
              </p>
              <p className="mt-4">
                Die erhobenen Daten sind für uns als Betreiber dieser Website anonym, wir können keine Rückschlüsse auf die Identität der Nutzer ziehen. Die Daten werden aber von Facebook gespeichert und verarbeitet, sodass eine Verbindung zum jeweiligen Nutzerprofil möglich ist und Facebook die Daten für eigene Werbezwecke, gemäß der <a href="https://www.facebook.com/about/privacy/" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">Facebook-Datenverwendungsrichtlinie</a>, verwenden kann. Dadurch kann Facebook das Schalten von Werbeanzeigen auf Seiten von Facebook sowie außerhalb von Facebook ermöglichen. Diese Verwendung der Daten kann von uns als Seitenbetreiber nicht beeinflusst werden.
              </p>
              <p className="mt-4">
                Die Nutzung von Meta Pixel erfolgt auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TTDSG; die Einwilligung ist jederzeit widerrufbar. Die Datenübertragung in die USA wird auf die Standardvertragsklauseln der EU-Kommission gestützt. Details finden Sie hier: <a href="https://www.facebook.com/legal/EU_data_transfer_addendum" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">https://www.facebook.com/legal/EU_data_transfer_addendum</a> und <a href="https://de-de.facebook.com/help/566994660333381" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">https://de-de.facebook.com/help/566994660333381</a>.
              </p>
              <p className="mt-4">
                In den Datenschutzhinweisen von Facebook finden Sie weitere Hinweise zum Schutz Ihrer Privatsphäre: <a href="https://de-de.facebook.com/about/privacy/" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">https://de-de.facebook.com/about/privacy/</a>.
              </p>
            </section>
          </motion.div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default PrivacyPage;