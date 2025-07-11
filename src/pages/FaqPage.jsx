// src/pages/FaqPage.jsx
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'Was ist Elite Concierge?',
    answer:
      'Elite Concierge ist Ihr persönlicher 24/7-Service, der Sie bei Organisation, Reisen, Events und allen Alltagsaufgaben diskret unterstützt.',
  },
  {
    question: 'Wie buche ich meine Erstberatung?',
    answer:
      'Besuchen Sie einfach den Kontakt-Button oben rechts, füllen Sie das Formular aus – unser Team meldet sich umgehend bei Ihnen. Oder rufen Sie direkt unseren rund um die Uhr erreichbaren Concierge-Service unter 0800 775 50 07 (gebührenfrei) an.',
  },
  {
    question: 'Welche Mitgliedschaftspakete gibt es?',
    answer:
      'Wir bieten vier Modelle: SMART (Basis-Services), PRIME (Unternehmer-Features), ELITE (VIP-Betreuung) und BESPOKE (vollständige Individualbetreuung).',
  },
  {
    question: 'Worin unterscheidet sich das SMART-Paket?',
    answer:
      'SMART ist ideal für Berufstätige & Familien: Termin-, Reise- und Alltagsorganisation sowie Behördenhilfe und Event-Planung.',
  },
  {
    question: 'Was steckt hinter dem PRIME Paket ?',
    answer:
      'PRIME richtet sich an Unternehmer & Vielreisende mit Premium-Ticketing, Strategie-Calls und Erreichbarkeit während der Geschäftszeiten.',
  },
  {
    question: 'Welche Vorteile bietet ELITE?',
    answer:
      'ELITE garantiert 24/7-Erreichbarkeit, persönlichen Ansprechpartner, bevorzugten Zugang zu Events, Shows und Hospitality-Services.',
  },
  {
    question: 'Was ist das BESPOKE-Modell?',
    answer:
      'BESPOKE ist komplett maßgeschneidert: eigenes Backoffice-Team, internationale Assistenz, Ghost-Service und höchste Diskretion per NDA.',
  },
  {
    question: 'Gibt es eine Mindestlaufzeit?',
    answer:
      'Nein. Alle Mitgliedschaften sind monatlich mit einer Frist von zwei Wochen zum Monatsende kündbar – ohne Mindestbindung.',
  },
  {
    question: 'Wie kann ich meine Mitgliedschaft kündigen?',
    answer:
      'Sie können Ihren Vertrag mit nur einem Klick in Ihrem persönlichen Mitgliederbereich kündigen. Alternativ können Sie eine E-Mail an kontakt@elconci.de senden oder unser Kontaktformular nutzen. Eine postalische Kündigung (z. B. per Einschreiben) ist ebenfalls möglich, aber nicht erforderlich. Die vollständigen Kontaktdaten entnehmen Sie bitte unserem Impressum. Wir bestätigen den Eingang Ihrer Kündigung innerhalb von 24 Stunden per E-Mail.',
  },
  {
    question: 'Wo ist Elite Concierge verfügbar?',
    answer:
      'Dank unseres globalen Netzwerks betreuen wir Sie weltweit – in allen wichtigen Metropolen Europas, Nord- und Südamerikas sowie Asiens.',
  },
  {
    question: 'Welche Sprachen spricht Ihr Team?',
    answer:
      'Unsere Consultants sprechen fließend Deutsch und Englisch, weitere Sprachen können wir bei Bedarf über Partner abdecken.',
  },
  {
    question: 'Wie sicher sind meine Daten?',
    answer:
      'Datenschutz und Diskretion haben bei uns oberste Priorität. Wir arbeiten nach deutschem Datenschutzrecht mit modernster Verschlüsselung und speichern lediglich die für die Leistungserbringung erforderlichen Daten. Auf Wunsch stellen wir Ihnen gerne eine Vertraulichkeitsvereinbarung (NDA) aus.',
  },
  {
    question: 'Welche Zahlungsmethoden akzeptieren Sie?',
    answer:
      'Als Zahlungsmethoden stehen Ihnen alle gängigen Kreditkarten (Visa, Mastercard, American Express), SEPA-Lastschrift und Banküberweisung zur Verfügung. Neukunden bitten wir um Vorauszahlung der ersten Rechnung.',
  },
  {
    question: 'Wie erhalte ich meine Rechnung?',
    answer:
      'Nach jedem Abrechnungszeitraum senden wir Ihnen automatisch eine digitale Rechnung per E-Mail, inklusive ausgewiesener Mehrwertsteuer.',
  },
  {
    question: 'Kann ich mein Paket jederzeit wechseln?',
    answer:
      'Ja. Sie können Ihr Modell mit zwei Wochen Frist zum Monatsende upgraden oder downgraden – flexibel und transparent.',
  },
  {
    question: 'Wie priorisiere ich meine Anfragen?',
    answer:
      'ELITE- und BESPOKE-Kunden erhalten automatisch höchste Priorität. PRIME-Anfragen werden innerhalb von 48 Stunden bearbeitet.',
  },
  {
    question: 'Bieten Sie proaktiv Vorschläge an?',
    answer:
      'Im ELITE- und BESPOKE-Paket erstellen wir proaktiv Empfehlungen für Reisen, Events und Lifestyle-Optimierung.',
  },
  {
    question: 'Gibt es ein Test- oder Probeangebot?',
    answer:
      'Leider bieten wir kein Testpaket an. Sollten Sie einmal nicht vollumfänglich mit unserem Service zufrieden sein, kontaktieren Sie bitte unsere 24/7-Hotline unter 0800 775 50 07 (gebührenfrei). Wir garantieren Ihnen, gemeinsam eine Lösung zu finden, die Ihren Erwartungen zu 100 % entspricht.',
  },
  {
    question: 'Wie erreiche ich Sie im Notfall?',
    answer:
      'Nutzen Sie unsere 24/7-Hotline unter 0800 775 50 07 (Ortstarif).',
  },
  {
    question: 'Kann ich auch Einzelaufträge buchen?',
    answer:
      'Ja. Neben den Abonnements bieten wir auch einmalige Concierge-Aufträge ohne Mitgliedschaft an – sprechen Sie uns einfach an.',
  },
];

export default function FaqPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <React.Fragment>
      <Helmet>
        <title>FAQ | Elite Concierge</title>
        <meta
          name="description"
          content="Häufig gestellte Fragen zu Elite Concierge – Service, Mitgliedschaften, Preise und mehr."
        />
        <link rel="canonical" href="https://elconci.de/faq" />
          <meta name="robots" content="index, follow" />
      </Helmet>

      {/* Hero-Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-black text-gold mb-4">
            Häufig gestellte Fragen
          </h1>
          <p className="text-xl md:text-2xl text-platinum/80 max-w-2xl mx-auto">
            Hier finden Sie Antworten auf alle wichtigen Fragen zu unserem Service.
          </p>
        </div>
      </section>

      {/* Accordion-Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto max-w-3xl">
          {faqs.map((item, idx) => {
            const isOpen = idx === openIndex;
            return (
              <div key={idx} className="border-b border-gold/20">
                <button
                  onClick={() => toggle(idx)}
                  className="w-full flex items-center justify-between py-4 text-left"
                >
                  <span className="text-lg font-semibold text-gold">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 text-gold transition-transform ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="pb-6 text-platinum/80 leading-relaxed">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </React.Fragment>
  );
}
