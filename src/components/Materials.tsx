import { Layers, Wrench, TreePine, Droplets, Wind, Shield, Home } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import materialSip from "@/assets/material-sip.jpg";
import materialFoundation from "@/assets/material-foundation.jpg";
import materialWood from "@/assets/material-wood.jpg";
import materialRoofing from "@/assets/material-roofing.jpg";
import materialFinishing from "@/assets/material-finishing.jpg";

const materials = [
  {
    id: "sip",
    name: "SIP-панели",
    icon: Layers,
    image: materialSip,
    description: "Структурно-изолированные панели - основной материал для строительства",
    features: [
      "ОСП-3 толщиной до 12мм",
      "Пенополистирол до 250мм",
      "Полиуретановый клей",
      "Высокая прочность",
    ],
    benefits: [
      { icon: Shield, text: "Морозо и ветро устойчивость" },
      { icon: Droplets, text: "Экономия на отоплении" },
      { icon: Wind, text: "Отличная теплоизоляция" },
    ],
  },
  {
    id: "foundation",
    name: "Фундамент",
    icon: Shield,
    image: materialFoundation,
    description: "Надежное основание для вашего дома",
    features: [
      "Свайно-винтовой фундамент",
      "Ленточный фундамент",
      "Монолитная плита",
      "Быстрый монтаж",
    ],
    benefits: [
      { icon: Shield, text: "Надежность конструкции" },
      { icon: Wrench, text: "Простота установки" },
      { icon: Wind, text: "Подходит для любого грунта" },
    ],
  },
  {
    id: "wood",
    name: "Древесина",
    icon: TreePine,
    image: materialWood,
    description: "Натуральные материалы высокого качества",
    features: [
      "Обвязочный брус",
      "Стропильная система",
      "Перекрытия",
      "Экологичность",
    ],
    benefits: [
      { icon: TreePine, text: "Экологичность" },
      { icon: Shield, text: "Прочность" },
      { icon: Wind, text: "Дышащий материал" },
    ],
  },
  {
    id: "roofing",
    name: "Кровельные материалы",
    icon: Home,
    image: materialRoofing,
    description: "Защита вашего дома от непогоды",
    features: [
      "Металлочерепица",
      "Мягкая кровля",
      "Гидроизоляция",
      "Долговечность",
    ],
    benefits: [
      { icon: Droplets, text: "Защита от влаги" },
      { icon: Shield, text: "Долговечность" },
      { icon: Wind, text: "Ветроустойчивость" },
    ],
  },
  {
    id: "finishing",
    name: "Отделочные материалы",
    icon: Wrench,
    image: materialFinishing,
    description: "Качественная отделка внутри и снаружи",
    features: [
      "Фасадные панели",
      "Гипсокартон",
      "Напольные покрытия",
      "Широкий выбор",
    ],
    benefits: [
      { icon: Shield, text: "Износостойкость" },
      { icon: TreePine, text: "Эстетичность" },
      { icon: Wrench, text: "Простота монтажа" },
    ],
  },
];

export const Materials = () => {
  const { elementRef, isVisible } = useScrollAnimation();
  
  return (
    <section id="materials" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div 
          ref={elementRef}
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Материалы</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Мы используем только качественные и проверенные материалы для строительства вашего дома
          </p>
        </div>

        <Tabs defaultValue="sip" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 mb-8">
            {materials.map((material) => {
              const Icon = material.icon;
              return (
                <TabsTrigger 
                  key={material.id} 
                  value={material.id} 
                  className="flex flex-col items-center gap-2 py-4"
                >
                  <Icon className="h-6 w-6" />
                  <span className="text-xs md:text-sm">{material.name}</span>
                </TabsTrigger>
              );
            })}
          </TabsList>

          {materials.map((material) => (
            <TabsContent key={material.id} value={material.id}>
              <Card>
                <CardContent className="pt-6">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div 
                      className="relative aspect-video rounded-lg overflow-hidden bg-cover bg-center"
                      style={{ backgroundImage: `url(${material.image})` }}
                    />

                    <div className="flex flex-col">
                      <h3 className="text-2xl font-bold mb-4">{material.name}</h3>
                      <p className="text-muted-foreground mb-6">{material.description}</p>
                      
                      <h4 className="font-bold mb-3">Характеристики:</h4>
                      <ul className="space-y-2 mb-6">
                        {material.features.map((feature, index) => (
                          <li key={index} className="flex items-center gap-2">
                            <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <h4 className="font-bold mb-4">Преимущества:</h4>
                      <div className="space-y-4">
                        {material.benefits.map((benefit, index) => {
                          const Icon = benefit.icon;
                          return (
                            <div key={index} className="flex items-center gap-3">
                              <Icon className="h-8 w-8 text-primary flex-shrink-0" />
                              <span className="text-sm">{benefit.text}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};
