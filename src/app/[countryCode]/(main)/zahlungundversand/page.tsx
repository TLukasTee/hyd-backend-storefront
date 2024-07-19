import React from 'react';

const zahlungundversand: React.FC = () => {
  return (
    <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8  pb-12 pt-44">
      <h1 className="text-3xl font-bold mb-6">Zahlungs- und Versandinformationen</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Zahlungsmöglichkeiten</h2>
        <ul className="list-disc pl-5">
          <li>Kreditkarte (Visa, Mastercard)</li>
          <li>PayPal</li>
          <li>Sofortüberweisung</li>
          <li>Vorkasse per Banküberweisung</li>
        </ul>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Versandinformationen</h2>
        <p>Wir versenden unsere Produkte innerhalb Österreichs und in die EU.</p>
        <ul className="list-disc pl-5 mt-2">
          <li>Standardversand Österreich: 3-5 Werktage, 4,90 €</li>
          <li>Express-Versand Österreich: 1-2 Werktage, 9,90 €</li>
          <li>EU-Versand: 5-10 Werktage, ab 9,90 €</li>
        </ul>
        <p className="mt-2">Ab einem Bestellwert von 50 € liefern wir innerhalb Österreichs versandkostenfrei.</p>
      </section>
      
      <section>
        <h2 className="text-2xl font-semibold mb-4">Lieferzeit</h2>
        <p>Die Lieferzeit beträgt in der Regel 3-5 Werktage nach Zahlungseingang. Bei Vorkasse beginnt die Lieferzeit nach Eingang der Zahlung auf unserem Konto.</p>
      </section>
    </div>
  );
};

export default zahlungundversand;