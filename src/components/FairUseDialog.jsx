import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';

export const FairUseDialog = ({ open, onOpenChange, children }) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      {children}
      <DialogContent className="max-w-4xl h-[90vh] flex flex-col">
        <DialogHeader>
          <DialogTitle>Fair Use Policy</DialogTitle>
          <DialogDescription>
            Für die ELITE- und BESPOKE-Mitgliedschaftspakete
          </DialogDescription>
        </DialogHeader>
        <div className="flex-grow overflow-hidden">
          <ScrollArea className="h-full pr-6">
            <div className="text-sm text-platinum/80 prose prose-invert prose-p:mb-4 prose-h2:text-gold prose-h2:text-xl prose-h2:font-bold prose-h2:mt-6 prose-h2:mb-2 prose-strong:text-gold prose-ol:list-decimal prose-ol:list-inside prose-li:mb-2">
              <h2>1. Ziel der Fair Use Policy</h2>
              <p>
                Unsere ELITE- und BESPOKE-Mitgliedschaften bieten unbegrenzte Anfragen, um Ihnen maximale Flexibilität und Komfort zu gewährleisten. Diese Fair Use Policy soll sicherstellen, dass die Servicequalität für alle unsere ELITE- und BESPOKE-Mitglieder konstant hoch und fair bleibt. Sie verhindert eine übermäßige Nutzung, die die Verfügbarkeit und Reaktionszeit unseres Concierge-Teams für andere Mitglieder beeinträchtigen könnte.
              </p>
              
              <h2>2. Richtlinie zur fairen Nutzung</h2>
              <p>
                Die unbegrenzten Anfragen sind für den persönlichen und geschäftlichen Gebrauch im üblichen Rahmen vorgesehen. Wir verstehen, dass der Bedarf variieren kann. Eine Nutzung wird als übermäßig angesehen, wenn sie dauerhaft und erheblich über dem Durchschnitt liegt.
              </p>
              <p>
                Als Richtwert gilt für beide Pakete: Eine dauerhafte Nutzung von <strong>mehr als 30 Anfragen pro Monat</strong> (basierend auf durchschnittlich einer Anfrage pro Kalendertag) kann als übermäßig betrachtet werden.
              </p>

              <h2>3. Vorgehen bei übermäßiger Nutzung</h2>
              <p>
                Sollte Ihre Nutzung dauerhaft die in der Fair Use Policy definierten Grenzen überschreiten, werden wir wie folgt vorgehen:
              </p>
              <ol>
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
              
              <h2>4. Sonderkündigungsrecht</h2>
              <p>
                Im Falle einer dauerhaften, übermäßigen Nutzung, die eine Zusatzberechnung erforderlich macht, gewähren wir beiden Parteien (Kunde und Anbieter) ein Sonderkündigungsrecht. Der Vertrag kann mit einer Frist von <strong>einem (1) Tag</strong> gekündigt werden.
              </p>
              <p>
                  Im Falle einer Kündigung durch den Kunden gilt: Für das ELITE-Paket wird der bereits bezahlte Monatsbeitrag anteilig und tagesgenau für den verbleibenden Vertragszeitraum zurückerstattet. Für das BESPOKE-Paket werden die bis zum Kündigungszeitpunkt erbrachten Leistungen vollständig abgerechnet.
              </p>
              <p>
                  Erfolgt die Kündigung aus diesem Grund durch den Anbieter, entfällt für ELITE-Mitglieder der Anspruch auf eine anteilige Rückerstattung.
              </p>
              
              <p className="mt-8 italic text-center text-gold/90">
                Wir setzen auf eine offene Kommunikation und sind zuversichtlich, gemeinsam eine Lösung zu finden, die Ihren Bedürfnissen entspricht. Bei Fragen zu dieser Policy stehen wir Ihnen jederzeit zur Verfügung.
              </p>
            </div>
          </ScrollArea>
        </div>
        <div className="pt-4 flex justify-end">
            <DialogClose asChild>
                <Button type="button" variant="outline" className="text-gold border-gold/50 hover:bg-gold hover:text-background">
                    Schließen
                </Button>
            </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
};