
import React from 'react';
import SectionTitle from '@/components/ui/SectionTitle';
import { BearGallery } from '@/data/bearData';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const GallerySection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Фотогалерея" 
          subtitle="Фотографии бурых медведей в естественной среде обитания"
        />

        <Carousel className="w-full max-w-4xl mx-auto">
          <CarouselContent>
            {BearGallery.map((image, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <div className="overflow-hidden rounded-lg shadow-xl aspect-video">
                    <img 
                      src={image} 
                      alt={`Бурый медведь ${index + 1}`} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2" />
          <CarouselNext className="right-2" />
        </Carousel>
      </div>
    </section>
  );
};

export default GallerySection;
