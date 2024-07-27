import React from 'react';
import Image from 'next/image';

const athletes = [
  {
    name: "Muriz Izmirlija",
    title: "Ehemaliger Fußballprofi & MMA Coach",
    description: "Muriz ist ein ehemaliger Fußballprofi und hat 2019 den dritten Platz im Bodybuilding in Holland belegt. Heute ist er ein angesehener Online-Coach für MMA, der UFC-, PFL- und GLORY-Athleten trainiert und begleitet. Mit seiner langjährigen Erfahrung und seinem umfassenden Wissen hilft er Athleten, ihre Ziele zu erreichen und ihre Leistung kontinuierlich zu verbessern.",
    image: "https://res.cloudinary.com/dd0kypcrk/image/upload/v1719429579/361397238_634129768456543_7192542947895908387_n_o5qpp8.jpg",
  },
  {
    name: "Demir Hadžić",
    title: "Fußballer & Personal Coach",
    description: "Seit seinem vierten Lebensjahr betreibt Demir Leistungssport. Er war Teil der Fußballakademie Ried und hat sich auch international im Fußball bewährt. Mit 17 Jahren spielte er in der oberösterreichischen Liga und der Regionalliga. Neben dem Fußball hat er auch im Kampfsport Erfahrungen gesammelt. Derzeit konzentriert er sich auf das Personal Coaching und hat bereits Tausenden von Menschen geholfen, ihre Traumfigur zu erreichen.",
    image: "https://res.cloudinary.com/dd0kypcrk/image/upload/v1719429148/412654386_644371004344040_7758380307718690296_n_q6f3td.jpg",
  },
  {
    name: "Akhmed Arsaev",
    title: "Kampfsportler & MMA-Staatsmeister",
    description: "Akhmed ist seit seinem vierten Lebensjahr im Kampfsport aktiv. Er ist mehrfacher Staats-, Landes- und Bundesmeister im Ringen und hat internationale Erfolge im Sambo erzielt. Zudem hat er in der BJJ no Gi-Kategorie mehrfach Gold geholt und ist in dieser Kategorie auch Staatsmeister. Als MMA-Staatsmeister im Amateurbereich ist er ein herausragender Athlet mit einer beeindruckenden Karriere und einer erfolgsversprechenden Zukunft.",
    image: "https://res.cloudinary.com/dd0kypcrk/image/upload/v1719428610/356672173_17963523368550485_4707707710506912293_n_jddz2i.jpg",
  },
  {
    name: "Magomed Arsaev",
    title: "Kampfsportler & MMA-Staatsmeister",
    description: "Magomed, der Zwillingsbruder von Akhmed, ist ebenfalls seit seinem vierten Lebensjahr im Kampfsport aktiv. Er ist mehrfacher Staats-, Landes- und Bundesmeister im Ringen und hat internationale Siege im Sambo errungen. In der BJJ Gi- und no Gi-Kategorie hat er Goldmedaillen gewonnen. Als MMA-Staatsmeister im Amateurbereich hat auch Magomed eine bemerkenswerte sportliche Laufbahn hinter sich und herausragende Zukunftsaussichten.",
    image: "https://res.cloudinary.com/dd0kypcrk/image/upload/v1719428345/425679073_17924609243835560_4696942332228121857_n_upbdap.jpg",
  }
];

const AthleteSection = ({ athlete, isEven }: { athlete: typeof athletes[0], isEven: boolean }) => (
  <div className={`flex flex-col md:flex-row items-center ${isEven ? 'md:flex-row-reverse ' : ''} my-16 bg-white rounded-lg shadow-lg overflow-hidden`}>
    <div className="md:w-1/2">
      <Image
        src={athlete.image}
        alt={athlete.name}
        width={1600}
        height={1400}
        objectFit="cover"
        className={`w-[600px] h-full ${isEven ? 'float-right ' : ''}`}
      />
    </div>
    <div className="md:w-1/2 p-8">
      <h2 className="text-3xl font-bold mb-2">{athlete.name}</h2>
      <h3 className="text-xl text-gray-600 mb-4">{athlete.title}</h3>
      <p className="text-gray-700">{athlete.description}</p>
    </div>
  </div>
);

const AboutUs = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
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
          <h1 className="text-5xl font-bold text-white uppercase absolute">Über uns</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className=" mx-auto px-4 py-1  max-w-7xl px-8 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <h1 className='text-center font-bold text-3xl mt-12 mb-6'> Z-NUTRITION | Made for Athletes </h1> 
          <p className="text-xl mb-8">
            <span className='font-bold'>Was uns ausmacht?</span> <br/> Unsere hochwertigen Nahrungsergänzungsmittel und Proteinpulver wurden <span className='font-semibold'>von Sportlern für Sportler</span> entwickelt. <br/> Wir sind nicht nur Verkäufer eines Produkts – wir sind selbst engagierte Athleten, die unsere Produkte täglich nutzen und die Vorteile aus erster Hand erleben.
          </p>
          <p className="text-xl mb-8">
            Unsere Produkte werden von zahlreichen Profisportlern verwendet und haben sich als optimale Unterstützung in deren sportlichen Erfolgen bewährt. Die positiven Erfahrungen und Erfolge sprechen für sich.<br/><br/> Mit Stolz können wir verkünden, dass wir uns nun nach Österreich erweitern und bereits auch hier großen Erfolg erzielt haben.
          </p>
        </div>

        {/* Athletes Sections */}
        <div className="mt-16">
          <h2 className="text-4xl font-bold mb-12 text-center">Unsere Sportler</h2>
          {athletes.map((athlete, index) => (
            <AthleteSection key={athlete.name} athlete={athlete} isEven={index % 2 !== 0} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;