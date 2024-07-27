import React from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

const FooterCustom: React.FC = () => {
  return (
    <footer className="bg-white  mx-auto max-w-7xl px-8 sm:px-12 lg:px-12  pb-12 pt-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <h2 className="font-bold text-lg mb-4">Informationen</h2>
            <ul className="space-y-2">
              <li><a href="/zahlungundversand" className="text-gray-600 hover:text-gray-900">Zahlungs- und Versandinformationen</a></li>
              <li><a href="/wiederruf" className="text-gray-600 hover:text-gray-900">Widerrufsbelehrung</a></li>
              <li><a href="/agbs" className="text-gray-600 hover:text-gray-900">Allgemeine Geschäftsbedingungen</a></li>
              <li><a href="/dsgvo" className="text-gray-600 hover:text-gray-900">Datenschutzerklärung</a></li>
              <li><a href="/impressum" className="text-gray-600 hover:text-gray-900">Impressum</a></li>
            </ul>
          </div>
          <div>
            <h2 className="font-bold text-lg mb-4">Über Uns</h2>
            <p className="text-gray-600">
              Aus Österreich für Österreich! <br/> Erreiche mit unseren Supplements bester Qualität deine
              Fitnesssziele.<br/><br/>  ✓  Faire Preise <br/> ✓ VERSANDKOSTENFREI bestellen <br/>✓ Lieferung 
              innerhalb von 2-3 Tagen 
            </p>
          </div>
        </div>
        <div className="flex justify-between items-center border-t border-gray-200 pt-8">
          <div className="flex space-x-4">
         
            <a href="https://www.instagram.com/znutrition.austria/" className="text-gray-400 hover:text-gray-600">
              <FaInstagram size={24} />
            </a>
          </div>
          <p className="text-sm text-gray-500">© 2024, Z-NUTRITION</p>
        </div>
      
      </div>
    </footer>
  );
};

export default FooterCustom;