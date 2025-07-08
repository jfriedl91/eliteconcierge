import React from 'react';

export const PaymentSection = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-gold border-b border-gold/20 pb-2">3. Zahlungsdetails</h2>
      <div className="bg-background/30 p-4 border border-gold/10">
        <p className="text-platinum/80">Zahlungsart: <span className="font-semibold text-gold">Rechnung</span></p>
        <p className="text-xs text-platinum/60 mt-1">Die monatliche Gebühr ist im Voraus fällig. Sie erhalten Ihre Rechnung per E-Mail.</p>
      </div>
    </div>
  );
};