
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Separator } from "@/components/ui/separator";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const BearFacts = [
  "Бурый медведь может весить до 350-400 кг",
  "Продолжительность жизни в дикой природе - 20-30 лет",
  "Скорость бега достигает 50 км/ч",
  "Зимняя спячка длится 3-5 месяцев",
  "Рацион питания включает ягоды, орехи, корни, насекомых и мелких животных"
];

const HabitatInfo = [
  { 
    title: "Угорский лесной массив", 
    description: "Один из крупнейших лесных массивов области, где регулярно фиксируют следы медведей"
  },
  { 
    title: "Национальный парк «Угра»", 
    description: "Особо охраняемая природная территория с устойчивой популяцией бурых медведей"
  },
  { 
    title: "Калужские засеки", 
    description: "Заповедник, где созданы идеальные условия для обитания медведей"
  }
];

const BearGallery = [
  "https://images.unsplash.com/photo-1530595467537-0b5996c41f2d?ixlib=rb-1.2.1&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1575221251252-9a894b148b0a?ixlib=rb-1.2.1&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1641150938736-d333ff2c1fe1?ixlib=rb-1.2.1&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1615485290382-441e4d49c319?ixlib=rb-1.2.1&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?ixlib=rb-1.2.1&auto=format&fit=crop"
];

const Index = () => {
  return (
    <div className="min-h-screen bg-[#f8f5f0]">
      {/* Герой-секция */}
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
            onClick={() => {
              const aboutSection = document.getElementById('about');
              aboutSection?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Узнать больше <Icon name="ArrowDown" className="ml-2" />
          </Button>
        </div>
      </section>

      {/* О буром медведе */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-oswald font-bold text-[#2D3E40] mb-4">О буром медведе</h2>
            <Separator className="mx-auto w-24 bg-[#A37C40] h-1 mb-8" />
          </div>
          
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

      {/* Ареал обитания */}
      <section className="py-20 bg-[#2D3E40] text-white">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-oswald font-bold mb-4">Ареал обитания</h2>
            <Separator className="mx-auto w-24 bg-[#A37C40] h-1 mb-8" />
            <p className="text-xl max-w-3xl mx-auto font-roboto">
              В Калужской области медведи встречаются в основном в северных и восточных районах, 
              где сохранились обширные лесные массивы
            </p>
          </div>

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

      {/* Интересные факты */}
      <section className="py-20 bg-[#D3C4A3]">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-oswald font-bold text-[#2D3E40] mb-4">Интересные факты</h2>
            <Separator className="mx-auto w-24 bg-[#A37C40] h-1 mb-8" />
          </div>

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

      {/* Фотогалерея */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-oswald font-bold text-[#2D3E40] mb-4">Фотогалерея</h2>
            <Separator className="mx-auto w-24 bg-[#A37C40] h-1 mb-8" />
            <p className="text-xl max-w-3xl mx-auto text-[#555] mb-12 font-roboto">
              Фотографии бурых медведей в естественной среде обитания
            </p>
          </div>

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

      {/* Футер */}
      <footer className="bg-[#2D3E40] text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-oswald font-bold mb-6">Бурый медведь Калужской области</h2>
          <p className="text-lg max-w-2xl mx-auto mb-8 font-roboto">
            Сохраним природное богатство нашего края для будущих поколений
          </p>
          <Separator className="mx-auto w-24 bg-[#A37C40] h-1 mb-8" />
          <p className="font-roboto">&copy; {new Date().getFullYear()} Все права защищены</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
