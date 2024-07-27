import React from 'react';
import Image from 'next/image';
import { ClockIcon, PhoneIcon } from '@heroicons/react/24/outline';
import { LuMail, LuMailX } from 'react-icons/lu';

const kontakt = () => {
  return (
    <div className="bg-gray-100 ">
      {/* Hero Section */}
      <div className="relative h-96 ">
        <Image
          src="https://hyd-ecommerce-bucket.fra1.digitaloceanspaces.com/425171587_1745003869337636_8535349068185820178_n.jpg"
          alt="Z-Nutrition Team"
          layout="fill"
          objectFit="cover"
          className="brightness-50 "
        />
        <div className="absolute inset-0 flex items-center justify-center">
 
                     <Image
                  src="https://res.cloudinary.com/dcfburp7p/image/upload/v1719253729/z-nutritionlogo_qmtyta.png"
                  alt="Z-Nutrition Logo"
          height={300}
          width={300}
          objectFit="cover"
          className=" w-44 h-44"/>
          <h1 className="text-5xl font-bold text-white uppercase absolute">Kontakt</h1>
        </div>
      </div>

      {/* Contact Content */}
      <div className=" mx-auto  sm:pt-16  sm:pb-16 pb-0 pt:0 ">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-12">
          <h2 className="sm:text-3xl  text-xl font-bold mb-6 text-center">24/7 Support</h2>
          <p className="sm:text-xl  text-base text-gray-600 mb-8 text-center">
            Wir sind rund um die Uhr für Sie da. Zögern Sie nicht, uns zu kontaktieren!
          </p>

          <div className="space-y-6">
            <div className="flex items-center">
              <PhoneIcon className="w-8 h-8 text-red-600 mr-4" />
              <div>
                <h3 className="text-xl font-semibold">Telefon</h3>
                <p className="sm:text-lg  text-base text-gray-600">+43 6702024825</p>
              </div>
            </div>

            <div className="flex items-center">
              <LuMail className="w-8 h-8 text-red-600 mr-4" />
              <div>
                <h3 className="text-xl font-semibold">E-Mail</h3>
                <p className="sm:text-lg  text-base text-gray-600">office@z-nutrition.at</p>
              </div>
            </div>

            <div className="flex items-center">
              <ClockIcon className="w-8 h-8 text-red-600 mr-4" />
              <div>
                <h3 className="text-xl font-semibold">Verfügbarkeit</h3>
                <p className="sm:text-lg  text-base text-gray-600">24 Stunden, 7 Tage die Woche</p>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg text-gray-600">
              Unser engagiertes Team steht Ihnen jederzeit zur Verfügung, um all Ihre Fragen zu beantworten und Ihnen bei Ihren Anliegen zu helfen.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default kontakt;