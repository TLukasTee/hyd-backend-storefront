import React from 'react';

const impressum: React.FC = () => {
  return (
    <div className=" mx-auto max-w-7xl px-4 sm:px-6 lg:px-12  pb-12 pt-12">
      <h1 className="text-3xl font-bold mb-6 text-red-500">Impressum</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Angaben gemäß § 5 TMG</h2>
        <p>Haumand Altalbani</p>
        <p>Traunfeldstraße 3</p>
        <p>4050 Traun</p>
        <p>Österreich</p>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Kontakt</h2>
        <p>Telefon: +436765108888</p>
        <p>E-Mail: office@z-nutrition.at</p>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Vertreten durch</h2>
        <p>Inhaber: Haumand Altalbani</p>
      </section>
      
     
      
      <section>
        <h2 className="text-2xl font-semibold mb-4">Umsatzsteuer-ID</h2>
        <p>Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz: ATU80264704 </p>
      </section>
    </div>
  );
};

export default impressum;