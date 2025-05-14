import React from "react";

// Импортируем все созданные секции
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import HabitatSection from "@/components/sections/HabitatSection";
import FactsSection from "@/components/sections/FactsSection";
import GallerySection from "@/components/sections/GallerySection";
import FooterSection from "@/components/sections/FooterSection";

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#f8f5f0]">
      <HeroSection />
      <AboutSection />
      <HabitatSection />
      <FactsSection />
      <GallerySection />
      <FooterSection />
    </div>
  );
};

export default Index;
