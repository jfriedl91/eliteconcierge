import React from 'react';
import { Helmet } from 'react-helmet-async';
import PageWrapper from '@/components/PageWrapper';

const WiderrufPage = () => {
  return (
    <PageWrapper>
      <Helmet>
        <title>Widerrufsbelehrung | ELCONCI</title>
        <meta name="description" content="Lesen Sie die Widerrufsbelehrung von ELCONCI. Erfahren Sie mehr über Ihr Widerrufsrecht bei unseren exklusiven Dienstleistungen." />
        <meta name="robots" content="noindex, follow" />
      </Helmet>
      <div className="bg-background text-platinum pt-32 pb-16">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-serif text-gold mb-8 text-center">Widerrufsbelehrung</h1>
          
          <div className="max-w-4xl mx-auto space-y-8 text-platinum/80 text-base">

            <section>
                <h2 className="text-2xl font-semibold text-gold mb-4">Geltungsbereich: Verbraucher</h2>
                <p>
                    Das nachfolgend beschriebene Widerrufsrecht gilt ausschließlich für Verbraucher.
                </p>
                <p className="mt-2">
                    Verbraucher im Sinne des § 13 BGB ist jede natürliche Person, die ein Rechtsgeschäft zu Zwecken abschließt, die überwiegend weder ihrer gewerblichen noch ihrer selbständigen beruflichen Tätigkeit zugerechnet werden können.
                </p>
                 <p className="mt-2">
                    Das Widerrufsrecht besteht daher nicht für Unternehmer, Gewerbetreibende, Freiberufler oder juristische Personen, die in Ausübung ihrer gewerblichen oder selbständigen beruflichen Tätigkeit handeln.
                </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gold mb-4">Widerrufsrecht</h2>
              <p>
                Sie haben das Recht, binnen vierzehn Tagen ohne Angabe von Gründen diesen Vertrag zu widerrufen.
              </p>
              <p>
                Die Widerrufsfrist beträgt vierzehn Tage ab dem Tag des Vertragsabschlusses.
              </p>
              <p>Um Ihr Widerrufsrecht auszuüben, müssen Sie uns (Johannes Friedl, Elite Concierge, c/o MDC Management#1682, Welserstraße 3, 87463 Dietmannsried, E-Mail: info@elconci.de) mittels einer eindeutigen Erklärung (z. B. ein mit der Post versandter Brief oder eine E-Mail) über Ihren Entschluss, diesen Vertrag zu widerrufen, informieren. Sie können dafür das beigefügte Muster-Widerrufsformular verwenden, das jedoch nicht vorgeschrieben ist.</p>
              <p>
                Zur Wahrung der Widerrufsfrist reicht es aus, dass Sie die Mitteilung über die Ausübung des Widerrufsrechts vor Ablauf der Widerrufsfrist absenden.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold text-gold mb-4">Folgen des Widerrufs</h2>
              <p>
                Wenn Sie diesen Vertrag widerrufen, haben wir Ihnen alle Zahlungen, die wir von Ihnen erhalten haben, einschließlich der Lieferkosten (mit Ausnahme der zusätzlichen Kosten, die sich daraus ergeben, dass Sie eine andere Art der Lieferung als die von uns angebotene, günstigste Standardlieferung gewählt haben), unverzüglich und spätestens binnen vierzehn Tagen ab dem Tag zurückzuzahlen, an dem die Mitteilung über Ihren Widerruf dieses Vertrags bei uns eingegangen ist. Für diese Rückzahlung verwenden wir dasselbe Zahlungsmittel, das Sie bei der ursprünglichen Transaktion eingesetzt haben, es sei denn, mit Ihnen wurde ausdrücklich etwas anderes vereinbart; in keinem Fall werden Ihnen wegen dieser Rückzahlung Entgelte berechnet.
              </p>
              <p>
                Haben Sie verlangt, dass die Dienstleistungen während der Widerrufsfrist beginnen sollen, so haben Sie uns einen angemessenen Betrag zu zahlen, der dem Anteil der bis zu dem Zeitpunkt, zu dem Sie uns von der Ausübung des Widerrufsrechts hinsichtlich dieses Vertrags unterrichten, bereits erbrachten Dienstleistungen im Vergleich zum Gesamtumfang der im Vertrag vorgesehenen Dienstleistungen entspricht.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gold mb-4">Vorzeitiges Erlöschen des Widerrufsrechts</h2>
              <p>
                Das Widerrufsrecht erlischt bei einem Vertrag zur Erbringung von Dienstleistungen auch dann, wenn der Unternehmer die Dienstleistung vollständig erbracht hat und mit der Ausführung der Dienstleistung erst begonnen hat, nachdem der Verbraucher dazu seine ausdrückliche Zustimmung gegeben hat und gleichzeitig seine Kenntnis davon bestätigt hat, dass er sein Widerrufsrecht bei vollständiger Vertragserfüllung durch den Unternehmer verliert.
              </p>
              <div className="bg-secondary/20 border-l-4 border-gold p-4 mt-4 rounded-r-lg">
                <p className="font-semibold text-gold">Wichtiger Hinweis zur Zustimmung:</p>
                <p className="mt-2">
                  Mit der Beauftragung einer konkreten Dienstleistung (z.B. einer Anfrage im Rahmen Ihrer Mitgliedschaft) erklären Sie: „Ich bin einverstanden und verlange ausdrücklich, dass Sie vor Ende der Widerrufsfrist mit der Ausführung der beauftragten Dienstleistung beginnen. Mir ist bekannt, dass ich bei vollständiger Vertragserfüllung durch Sie mein Widerrufsrecht verliere.“
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gold mt-12 mb-6">Muster-Widerrufsformular</h2>
              <div className="border border-gold/30 p-6 rounded-lg bg-secondary/10">
                <p>(Wenn Sie den Vertrag widerrufen wollen, dann füllen Sie bitte dieses Formular aus und senden Sie es zurück.)</p>
                <br />
                <p>An</p>
                <p>Johannes Friedl</p>
                <p>Elite Concierge</p>
                <p>c/o MDC Management#1682</p>
                <p>Welserstraße 3</p>
                <p>87463 Dietmannsried</p>
                <p>E-Mail: info@elconci.de</p>
                <br />
                <p>Hiermit widerrufe(n) ich/wir (*) den von mir/uns (*) abgeschlossenen Vertrag über den Kauf der folgenden Waren (*)/die Erbringung der folgenden Dienstleistung (*)</p>
                <br />
                <p>Bestellt am (*)/erhalten am (*)</p>
                <br />
                <p>Name des/der Verbraucher(s)</p>
                <br />
                <p>Anschrift des/der Verbraucher(s)</p>
                <br />
                <p>Unterschrift des/der Verbraucher(s) (nur bei Mitteilung auf Papier)</p>
                <br />
                <p>Datum</p>
                <br />
                <p>(*) Unzutreffendes streichen.</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default WiderrufPage;