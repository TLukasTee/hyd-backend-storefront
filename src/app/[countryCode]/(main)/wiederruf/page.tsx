import React from 'react';

const WithdrawalNotice: React.FC = () => {
  return (
    <div className=" mx-auto max-w-7xl px-4 sm:px-6 lg:px-12  pb-12 pt-12">
      <h1 className="text-3xl font-bold mb-6">Widerrufsbelehrung</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Widerrufsrecht</h2>
        <p>Sie haben das Recht, binnen vierzehn Tagen ohne Angabe von Gründen diesen Vertrag zu widerrufen. Die Widerrufsfrist beträgt vierzehn Tage ab dem Tag, an dem Sie oder ein von Ihnen benannter Dritter, der nicht der Beförderer ist, die Waren in Besitz genommen haben bzw. hat.</p>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Ausübung des Widerrufsrechts</h2>
        <p>Um Ihr Widerrufsrecht auszuüben, müssen Sie uns (Z-Nutrition, [Vollständige Adresse], Tel.: [Telefonnummer], E-Mail: office@z-nutrition.at) mittels einer eindeutigen Erklärung (z.B. ein mit der Post versandter Brief oder E-Mail) über Ihren Entschluss, diesen Vertrag zu widerrufen, informieren.</p>
      </section>
      
      <section>
        <h2 className="text-2xl font-semibold mb-4">Folgen des Widerrufs</h2>
        <p>Wenn Sie diesen Vertrag widerrufen, haben wir Ihnen alle Zahlungen, die wir von Ihnen erhalten haben, einschließlich der Lieferkosten (mit Ausnahme der zusätzlichen Kosten, die sich daraus ergeben, dass Sie eine andere Art der Lieferung als die von uns angebotene, günstigste Standardlieferung gewählt haben), unverzüglich und spätestens binnen vierzehn Tagen ab dem Tag zurückzuzahlen, an dem die Mitteilung über Ihren Widerruf dieses Vertrags bei uns eingegangen ist.</p>
      </section>
    </div>
  );
};

export default WithdrawalNotice;