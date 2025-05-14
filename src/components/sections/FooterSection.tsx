
import React from 'react';
import { Separator } from "@/components/ui/separator";

const FooterSection: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[#2D3E40] text-white py-12">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-oswald font-bold mb-6">Бурый медведь Калужской области</h2>
        <p className="text-lg max-w-2xl mx-auto mb-8 font-roboto">
          Сохраним природное богатство нашего края для будущих поколений
        </p>
        <Separator className="mx-auto w-24 bg-[#A37C40] h-1 mb-8" />
        <p className="font-roboto">&copy; {currentYear} Все права защищены</p>
      </div>
    </footer>
  );
};

export default FooterSection;
