import React from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

export const CustomerDataSection = ({ formData, setFormData, errors, setErrors, customerType }) => {
  const handleInputChange = e => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
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
      <h2 className="text-2xl font-semibold text-gold border-b border-gold/20 pb-2">2. Ihre Daten</h2>
      {customerType === 'business' && (
        <div>
          <Label htmlFor="companyName" className="text-gold">Firmenname*</Label>
          <Input type="text" id="companyName" value={formData.companyName} onChange={handleInputChange} required />
          {errors.companyName && <p className="text-red-500 text-xs mt-1">{errors.companyName}</p>}
        </div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="firstName" className="text-gold">Vorname*</Label>
          <Input type="text" id="firstName" value={formData.firstName} onChange={handleInputChange} required />
          {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
        </div>
        <div>
          <Label htmlFor="lastName" className="text-gold">Nachname*</Label>
          <Input type="text" id="lastName" value={formData.lastName} onChange={handleInputChange} required />
          {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
        </div>
      </div>
      <div>
        <Label htmlFor="street" className="text-gold">Straße und Hausnummer*</Label>
        <Input type="text" id="street" value={formData.street} onChange={handleInputChange} required />
        {errors.street && <p className="text-red-500 text-xs mt-1">{errors.street}</p>}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="zipCode" className="text-gold">Postleitzahl*</Label>
          <Input type="text" id="zipCode" value={formData.zipCode} onChange={handleInputChange} required />
          {errors.zipCode && <p className="text-red-500 text-xs mt-1">{errors.zipCode}</p>}
        </div>
        <div>
          <Label htmlFor="city" className="text-gold">Stadt*</Label>
          <Input type="text" id="city" value={formData.city} onChange={handleInputChange} required />
          {errors.city && <p className="text-red-500 text-xs mt-1">{errors.city}</p>}
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="email" className="text-gold">E-Mail-Adresse*</Label>
          <Input type="email" id="email" value={formData.email} onChange={handleInputChange} required />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
        </div>
        <div>
          <Label htmlFor="phone" className="text-gold">Telefonnummer</Label>
          <Input type="tel" id="phone" value={formData.phone} onChange={handleInputChange} />
        </div>
      </div>
    </div>
  );
};