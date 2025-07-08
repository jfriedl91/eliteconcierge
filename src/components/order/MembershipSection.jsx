import React from 'react';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

export const MembershipSection = ({ packages, selectedPackage, setSelectedPackage, customerType, setCustomerType }) => {
  return (
    <div className="space-y-6">
       <h2 className="text-2xl font-semibold text-gold border-b border-gold/20 pb-2">1. Ihre Mitgliedschaft</h2>
       <div>
        <Label htmlFor="package-select" className="text-gold">Gewähltes Paket</Label>
        <Select value={selectedPackage} onValueChange={setSelectedPackage}>
          <SelectTrigger id="package-select" className="w-full">
            <SelectValue placeholder="Paket auswählen" />
          </SelectTrigger>
          <SelectContent>
            {Object.keys(packages).map(pkg => <SelectItem key={pkg} value={pkg}>{pkg}</SelectItem>)}
          </SelectContent>
        </Select>
      </div>
      <div>
        <Label className="text-gold">Kundentyp</Label>
        <RadioGroup value={customerType} onValueChange={setCustomerType} className="flex items-center space-x-4 mt-2">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="private" id="r-private" />
            <Label htmlFor="r-private" className="font-normal">Privatkunde</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="business" id="r-business" />
            <Label htmlFor="r-business" className="font-normal">Geschäftskunde</Label>
          </div>
        </RadioGroup>
      </div>
    </div>
  );
};