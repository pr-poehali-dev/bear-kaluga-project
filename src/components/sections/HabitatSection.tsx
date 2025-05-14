
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import SectionTitle from '@/components/ui/SectionTitle';
import { HabitatInfo } from '@/data/bearData';

const HabitatSection: React.FC = () => {
  return (
    <section className="py-20 bg-[#2D3E40] text-white">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Ареал обитания" 
          textColor="text-white"
          subtitle="В Калужской области медведи встречаются в основном в северных и восточных районах, где сохранились обширные лесные массивы"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {HabitatInfo.map((habitat, index) => (
            <Card key={index} className="bg-[#3a4e50] border-none shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="text-xl font-oswald font-bold mb-3">{habitat.title}</h3>
                <p className="font-roboto">{habitat.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-[#243234] p-6 rounded-lg shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-oswald font-bold mb-4">Сезонные перемещения</h3>
              <p className="text-lg mb-4 font-roboto">
                Весной медведи чаще появляются на опушках и полянах, где раньше сходит снег и появляется первая зелень.
              </p>
              <p className="text-lg mb-4 font-roboto">
                Летом перемещаются по лесным массивам в поисках ягодников и других источников пищи.
              </p>
              <p className="text-lg font-roboto">
                Осенью концентрируются в местах произрастания дуба и лещины, запасая жир перед зимней спячкой.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1610035974356-3e1aaf7151af?ixlib=rb-1.2.1&auto=format&fit=crop" 
                alt="Лесной ландшафт Калужской области" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HabitatSection;
