import React from 'react';
import { Helmet } from 'react-helmet-async';
import PageWrapper from '@/components/PageWrapper';

const FairUsePage = () => {
  return (
    <PageWrapper>
      <Helmet>
        <title>Fair Use Policy | Elite Concierge</title>
        <meta name="description" content="Fair Use Policy für die ELITE- und BESPOKE-Mitgliedschaftspakete bei Elite Concierge." />
        <link rel="canonical" href="https://elconci.de/fair-use-policy" />
        <meta name="robots" content="noindex, follow" />
      </Helmet>
      <div className="bg-background text-platinum min-h-screen">
        <div className="container mx-auto py-24 px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-black mb-4 text-center">Fair Use Policy</h1>
            <p className="text-xl md:text-2xl text-gold font-serif text-center mb-16">
              Für die ELITE- und BESPOKE-Mitgliedschaftspakete
            </p>

            <div className="text-lg text-platinum/80 space-y-6">
              <section>
                <h2 className="text-2xl font-bold text-gold mt-4 mb-3">1. Ziel der Fair Use Policy</h2>
                <p>
                  Unsere ELITE- und BESPOKE-Mitgliedschaften bieten unbegrenzte Anfragen, um Ihnen maximale Flexibilität und Komfort zu gewährleisten. Diese Fair Use Policy soll sicherstellen, dass die Servicequalität für alle unsere ELITE- und BESPOKE-Mitglieder konstant hoch und fair bleibt. Sie verhindert eine übermäßige Nutzung, die die Verfügbarkeit und Reaktionszeit unseres Concierge-Teams für andere Mitglieder beeinträchtigen könnte.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold text-gold mt-8 mb-3">2. Richtlinie zur fairen Nutzung</h2>
                <p>
                  Die unbegrenzten Anfragen sind für den persönlichen und geschäftlichen Gebrauch im üblichen Rahmen vorgesehen. Wir verstehen, dass der Bedarf variieren kann. Eine Nutzung wird als übermäßig angesehen, wenn sie dauerhaft und erheblich über dem Durchschnitt liegt.
                </p>
                <p>
                  Als Richtwert gilt für beide Pakete: Eine dauerhafte Nutzung von <strong>mehr als 30 Anfragen pro Monat</strong> (basierend auf durchschnittlich einer Anfrage pro Kalendertag) kann als übermäßig betrachtet werden.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gold mt-8 mb-3">3. Vorgehen bei übermäßiger Nutzung</h2>
                <p>
                  Sollte Ihre Nutzung dauerhaft die in der Fair Use Policy definierten Grenzen überschreiten, werden wir wie folgt vorgehen:
                </p>
                <ol className="list-decimal list-inside space-y-3 mt-4 pl-4">
                  <li>
                    <strong>Information:</strong> Wir werden Sie proaktiv kontaktieren, um Ihren Bedarf zu besprechen und Sie über die übermäßige Nutzung zu informieren.
                  </li>
                  <li>
                    <strong>Optionen:</strong> Für jede weitere Anfrage, die über die Grenze von 30 Anfragen pro Monat hinausgeht, wird eine Pauschale von <strong>50,00 € (inkl. gesetzlicher Mehrwertsteuer)</strong> pro Anfrage berechnet. Diese Gebühr fällt zusätzlich zur monatlichen Pauschale (ELITE) bzw. zur stundenbasierten Abrechnung (BESPOKE) an.
                  </li>
                  <li>
                    <strong>Entscheidungsfreiheit:</strong> Sie werden rechtzeitig über anfallende Zusatzkosten informiert und können für jede Anfrage entscheiden, ob Sie diese kostenpflichtig in Anspruch nehmen möchten.
                  </li>
                </ol>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold text-gold mt-8 mb-3">4. Sonderkündigungsrecht</h2>
                <p>
                  Im Falle einer dauerhaften, übermäßigen Nutzung, die eine Zusatzberechnung erforderlich macht, gewähren wir beiden Parteien (Kunde und Anbieter) ein Sonderkündigungsrecht. Der Vertrag kann mit einer Frist von <strong>einem (1) Tag</strong> gekündigt werden.
                </p>
                <p>
                  Im Falle einer Kündigung durch den Kunden gilt: Für das ELITE-Paket wird der bereits bezahlte Monatsbeitrag anteilig und tagesgenau für den verbleibenden Vertragszeitraum zurückerstattet. Für das BESPOKE-Paket werden die bis zum Kündigungszeitpunkt erbrachten Leistungen vollständig abgerechnet.
                </p>
                <p>
                  Erfolgt die Kündigung aus diesem Grund durch den Anbieter, entfällt für ELITE-Mitglieder der Anspruch auf eine anteilige Rückerstattung.
                </p>
              </section>
              
              <p className="mt-12 text-gold italic text-center">
                Wir setzen auf eine offene Kommunikation und sind zuversichtlich, gemeinsam eine Lösung zu finden, die Ihren Bedürfnissen entspricht. Bei Fragen zu dieser Policy stehen wir Ihnen jederzeit zur Verfügung.
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default FairUsePage;