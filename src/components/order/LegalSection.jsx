import React from 'react';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { AgbDialog } from '@/components/AgbDialog';
import { PrivacyDialog } from '@/components/PrivacyDialog';
import { WiderrufsbelehrungDialog } from '@/components/WiderrufsbelehrungDialog';

export const LegalSection = ({ consent, setConsent, errors, setErrors, customerType }) => {
  const handleConsentChange = (id, checked) => {
    setConsent(prev => ({ ...prev, [id]: !!checked }));
     if (errors[id]) {
        setErrors(prev => {
            const newErrors = { ...prev };
            delete newErrors[id];
            return newErrors;
        });
    }
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-gold border-b border-gold/20 pb-2">4. Rechtliches & Bestätigung</h2>
      <div className="space-y-4">
        <div className="flex items-start space-x-3">
          <Checkbox id="agb" checked={consent.agb} onCheckedChange={checked => handleConsentChange('agb', checked)} className="mt-1" />
          <div className="grid gap-1.5">
            <Label htmlFor="agb">
              Ich habe die{' '}
              <AgbDialog>
                <span className="text-gold hover:underline cursor-pointer">AGB</span>
              </AgbDialog>
              {' '}und die{' '}
              <PrivacyDialog>
                <span className="text-gold hover:underline cursor-pointer">Datenschutzerklärung</span>
              </PrivacyDialog>
              {' '}gelesen und stimme ihnen zu.*
            </Label>
             {errors.agb && <p className="text-red-500 text-xs">{errors.agb}</p>}
          </div>
        </div>
        {customerType === 'private' && (
          <>
            <div className="flex items-start space-x-3">
              <Checkbox id="widerruf" checked={consent.widerruf} onCheckedChange={checked => handleConsentChange('widerruf', checked)} className="mt-1" />
               <div className="grid gap-1.5">
                <Label htmlFor="widerruf">
                  Ich habe die{' '}
                  <WiderrufsbelehrungDialog>
                    <span className="text-gold hover:underline cursor-pointer">Widerrufsbelehrung</span>
                  </WiderrufsbelehrungDialog>
                  {' '}zur Kenntnis genommen.*
                </Label>
                 {errors.widerruf && <p className="text-red-500 text-xs">{errors.widerruf}</p>}
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Checkbox id="startRequest" checked={consent.startRequest} onCheckedChange={checked => handleConsentChange('startRequest', checked)} className="mt-1" />
              <div className="grid gap-1.5">
                <Label htmlFor="startRequest">
                  Ich verlange ausdrücklich und stimme zu, dass Sie mit der in Auftrag gegebenen Dienstleistung vor Ablauf der Widerrufsfrist beginnen. Mir ist bekannt, dass mein Widerrufsrecht bei vollständiger Vertragserfüllung durch Sie erlischt.*
                </Label>
                {errors.startRequest && <p className="text-red-500 text-xs">{errors.startRequest}</p>}
               </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};