import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
  DialogClose,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Link } from 'react-router-dom';

export const WiderrufsbelehrungDialog = ({ children }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-4xl h-[90vh] flex flex-col p-0">
        <DialogHeader className="p-6 pb-4 border-b border-gold/20">
          <DialogTitle>Widerrufsbelehrung</DialogTitle>
          <DialogDescription>
            Stand: 03. Juli 2025
          </DialogDescription>
        </DialogHeader>
        <div className="flex-grow overflow-hidden">
          <ScrollArea className="h-full px-6 py-4">
            <div className="text-sm text-platinum/80 prose prose-invert prose-p:mb-4 prose-h3:text-gold prose-h3:text-lg prose-h3:font-semibold prose-h3:mt-4 prose-h3:mb-2 prose-strong:text-gold prose-a:text-gold prose-a:hover:underline">
                <h3>Widerrufsrecht</h3>
                <p>Sie haben das Recht, binnen vierzehn Tagen ohne Angabe von Gründen diesen Vertrag zu widerrufen.</p>
                <p>Die Widerrufsfrist beträgt vierzehn Tage ab dem Tag des Vertragsabschlusses.</p>
                <p>Um Ihr Widerrufsrecht auszuüben, müssen Sie uns (Elite Concierge, Inh. Johannes Friedl, c/o MDC Management #1682, Welserstraße 3, 87463 Dietmannsried, Deutschland, E-Mail: info@elconci.de) mittels einer eindeutigen Erklärung (z. B. ein mit der Post versandter Brief oder eine E-Mail) über Ihren Entschluss, diesen Vertrag zu widerrufen, informieren. Sie können dafür das beigefügte Muster-Widerrufsformular verwenden, das jedoch nicht vorgeschrieben ist.</p>
                <p>Zur Wahrung der Widerrufsfrist reicht es aus, dass Sie die Mitteilung über die Ausübung des Widerrufsrechts vor Ablauf der Widerrufsfrist absenden.</p>
                
                <h3>Folgen des Widerrufs</h3>
                <p>Wenn Sie diesen Vertrag widerrufen, haben wir Ihnen alle Zahlungen, die wir von Ihnen erhalten haben, einschließlich der Lieferkosten (mit Ausnahme der zusätzlichen Kosten, die sich daraus ergeben, dass Sie eine andere Art der Lieferung als die von uns angebotene, günstigste Standardlieferung gewählt haben), unverzüglich und spätestens binnen vierzehn Tagen ab dem Tag zurückzuzahlen, an dem die Mitteilung über Ihren Widerruf dieses Vertrags bei uns eingegangen ist. Für diese Rückzahlung verwenden wir dasselbe Zahlungsmittel, das Sie bei der ursprünglichen Transaktion eingesetzt haben, es sei denn, mit Ihnen wurde ausdrücklich etwas anderes vereinbart; in keinem Fall werden Ihnen wegen dieser Rückzahlung Entgelte berechnet.</p>
                <p>Haben Sie verlangt, dass die Dienstleistungen während der Widerrufsfrist beginnen sollen, so haben Sie uns einen angemessenen Betrag zu zahlen, der dem Anteil der bis zu dem Zeitpunkt, zu dem Sie uns von der Ausübung des Widerrufsrechts hinsichtlich dieses Vertrags unterrichten, bereits erbrachten Dienstleistungen im Vergleich zum Gesamtumfang der im Vertrag vorgesehenen Dienstleistungen entspricht.</p>

                <h3>Muster-Widerrufsformular</h3>
                <p>(Wenn Sie den Vertrag widerrufen wollen, dann füllen Sie bitte dieses Formular aus und senden Sie es zurück.)</p>
                <div className="border border-gold/20 p-4 my-4">
                    <p>An<br />Elite Concierge<br />Inh. Johannes Friedl<br />c/o MDC Management #1682<br />Welserstraße 3<br />87463 Dietmannsried<br />Deutschland<br />E-Mail: info@elconci.de</p>
                    <p>Hiermit widerrufe(n) ich/wir (*) den von mir/uns (*) abgeschlossenen Vertrag über den Kauf der folgenden Waren (*)/die Erbringung der folgenden Dienstleistung (*)</p>
                    <p>Bestellt am (*)/erhalten am (*)</p>
                    <p>Name des/der Verbraucher(s)</p>
                    <p>Anschrift des/der Verbraucher(s)</p>
                    <p>Unterschrift des/der Verbraucher(s) (nur bei Mitteilung auf Papier)</p>
                    <p>Datum</p>
                    <p>(*) Unzutreffendes streichen.</p>
                </div>

                <h3>Besondere Hinweise zum vorzeitigen Erlöschen des Widerrufsrechts</h3>
                <p>Ihr Widerrufsrecht erlischt bei einem Vertrag zur Erbringung von Dienstleistungen vorzeitig, wenn wir die Dienstleistung vollständig erbracht haben und mit der Ausführung der Dienstleistung erst begonnen haben, nachdem Sie dazu Ihre ausdrückliche Zustimmung gegeben haben und gleichzeitig Ihre Kenntnis davon bestätigt haben, dass Sie Ihr Widerrufsrecht bei vollständiger Vertragserfüllung durch uns verlieren.</p>

                <p className="mt-6">Die vollständige und rechtlich bindende Widerrufsbelehrung finden Sie auf unserer <DialogClose asChild><Link to="/widerruf" className="text-gold hover:underline">Widerrufsseite</Link></DialogClose>.</p>
            </div>
          </ScrollArea>
        </div>
        <div className="p-6 pt-4 flex justify-end border-t border-gold/20">
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

export default WiderrufsbelehrungDialog;