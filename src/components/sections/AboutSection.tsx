
import React from 'react';
import SectionTitle from '@/components/ui/SectionTitle';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle title="О буром медведе" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-lg mb-6 font-roboto text-[#333]">
              Бурый медведь (<em>Ursus arctos</em>) - крупный хищник семейства медвежьих. 
              В Калужской области обитает небольшая, но стабильная популяция этих величественных животных.
            </p>
            <p className="text-lg mb-6 font-roboto text-[#333]">
              Медведи предпочитают смешанные леса с густым подлеском, болотистые участки и малопосещаемые людьми места. 
              Их численность в области оценивается примерно в 60-70 особей.
            </p>
            <p className="text-lg font-roboto text-[#333]">
              Благодаря мерам охраны и восстановлению лесных массивов, популяция медведей в Калужской области 
              медленно, но стабильно увеличивается в последние десятилетия.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1568162603664-fcd658421851?ixlib=rb-1.2.1&auto=format&fit=crop" 
              alt="Бурый медведь в лесу" 
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
