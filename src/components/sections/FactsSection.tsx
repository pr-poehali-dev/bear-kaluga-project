
import React from 'react';
import SectionTitle from '@/components/ui/SectionTitle';
import { BearFacts } from '@/data/bearData';
import { Separator } from "@/components/ui/separator";

const FactsSection: React.FC = () => {
  return (
    <section className="py-20 bg-[#D3C4A3]">
      <div className="container mx-auto px-4">
        <SectionTitle title="Интересные факты" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {BearFacts.map((fact, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg flex items-start hover:shadow-xl transition-all duration-300"
            >
              <div className="bg-[#A37C40] text-white rounded-full w-10 h-10 flex items-center justify-center shrink-0 mr-4">
                <span className="font-bold">{index + 1}</span>
              </div>
              <p className="text-lg font-roboto text-[#2D3E40]">{fact}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-xl text-[#2D3E40] font-roboto max-w-3xl mx-auto italic">
            "Медведь — не просто крупный хищник, это символ мощи русской природы и важный элемент экосистемы наших лесов"
          </p>
        </div>
      </div>
    </section>
  );
};

export default FactsSection;
