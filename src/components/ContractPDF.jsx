import React from 'react';

const ContractPDF = ({ clientData, packageData }) => {
  const currentDate = new Date().toLocaleDateString('de-DE');

  return (
    <div style={{ fontFamily: 'Times, serif', fontSize: '12pt', lineHeight: '1.5' }}>
      <header style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1 style={{ fontSize: '24pt', fontWeight: 'bold', margin: '0' }}>ELCONCI</h1>
        <p style={{ margin: '5px 0' }}>Musterstraße 1, 12345 Musterstadt</p>
        <p>info@elconci.de</p>
      </header>
      
      <h2 style={{ fontSize: '18pt', textAlign: 'center', marginBottom: '30px' }}>Dienstleistungsauftrag & Mitgliedschaft</h2>
      
      <section style={{ marginBottom: '20px' }}>
        <h3 style={{ fontSize: '14pt', borderBottom: '1px solid black', paddingBottom: '5px', marginBottom: '10px' }}>Vertragsparteien</h3>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div>
            <strong>Auftragnehmer:</strong><br />
            ELCONCI GmbH<br />
            Musterstraße 1<br />
            12345 Musterstadt
          </div>
          <div>
            <strong>Auftraggeber:</strong><br />
            {clientData.companyName && <span>{clientData.companyName}<br /></span>}
            {clientData.firstName} {clientData.lastName}<br />
            {clientData.street} {clientData.house_number}<br />
            {clientData.zipCode} {clientData.city}
          </div>
        </div>
      </section>

      <section style={{ marginBottom: '20px' }}>
        <h3 style={{ fontSize: '14pt', borderBottom: '1px solid black', paddingBottom: '5px', marginBottom: '10px' }}>Vertragsgegenstand</h3>
        <p>
          Hiermit beauftragt der Auftraggeber den Auftragnehmer mit der Erbringung von Concierge-Dienstleistungen im Rahmen der Mitgliedschaft
          <strong>"{packageData.name}"</strong>. Die Details der im Paket enthaltenen Leistungen sind den AGB und der Leistungsbeschreibung auf der Webseite des Auftragnehmers zu entnehmen.
        </p>
        <p><strong>Startdatum:</strong> {currentDate}</p>
        <p><strong>Zahlungsart:</strong> Rechnung</p>
      </section>

      <section style={{ marginBottom: '40px' }}>
        <h3 style={{ fontSize: '14pt', borderBottom: '1px solid black', paddingBottom: '5px', marginBottom: '10px' }}>Bestätigungen</h3>
        <p>Der Auftraggeber bestätigt, die folgenden Dokumente zur Kenntnis genommen und akzeptiert zu haben:</p>
        <ul>
          <li>Allgemeine Geschäftsbedingungen (AGB)</li>
          <li>Datenschutzerklärung</li>
          <li>Widerrufsbelehrung</li>
        </ul>
        <p style={{marginTop: '20px'}}>Dieser Vertrag wird mit dem Absenden des digitalen Antragsformulars wirksam. Eine physische Unterschrift ist nicht erforderlich.</p>
      </section>
    </div>
  );
};

export default ContractPDF;