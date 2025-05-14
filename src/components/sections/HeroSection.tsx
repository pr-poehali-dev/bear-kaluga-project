
import React from 'react';
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const HeroSection: React.FC = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1525203486075-ff1d6253262b?ixlib=rb-1.2.1&auto=format&fit=crop')",
          filter: "brightness(0.7)"
        }}
      />
      <div className="container mx-auto text-center relative z-10 px-4">
        <h1 className="text-5xl md:text-7xl font-oswald text-white mb-6 font-bold tracking-wide">
          Бурый медведь<br />Калужской области
        </h1>
        <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto font-roboto">
          Величественный хозяин лесов, редкий и охраняемый обитатель наших земель
        </p>
        <Button
          className="bg-[#5E6B58] hover:bg-[#4a5646] text-white px-8 py-6 text-lg"
          onClick={scrollToAbout}
        >
          Узнать больше <Icon name="ArrowDown" className="ml-2" />
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
