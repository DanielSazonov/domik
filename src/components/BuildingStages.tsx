import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import stageFoundation from "@/assets/stage-foundation.jpg";
import stageAssembly from "@/assets/stage-assembly.jpg";
import stageRoof from "@/assets/stage-roof.jpg";
import stageWindows from "@/assets/stage-windows.jpg";
import stageFinishing from "@/assets/stage-finishing.jpg";
import { Home, Hammer, Building, DoorOpen, Paintbrush } from "lucide-react";

const stages = [
  {
    id: "foundation",
    title: "Возведение фундамента",
    icon: Home,
    image: stageFoundation,
    description: "Монтаж фундамента и обвязочного бруса. Дома из СИП панелей легкие, поэтому чаще всего возводятся на свайных фундаментах, что значительно ускоряет процесс строительства.",
    duration: "от 3-7 дней",
  },
  {
    id: "assembly",
    title: "Сборка дома",
    icon: Hammer,
    image: stageAssembly,
    description: "Монтаж стен, перекрытий и межкомнатных перегородок",
    duration: "от 20-30 дней",
  },
  {
    id: "roof",
    title: "Монтаж крыши",
    icon: Building,
    image: stageRoof,
    description: "Установка кровельной системы",
    duration: "от 7-14 дней",
  },
  {
    id: "windows",
    title: "Установка окон и дверей",
    icon: DoorOpen,
    image: stageWindows,
    description: "с соблюдением норм по ГОСТу",
    duration: "от 2-3 дней",
  },
  {
    id: "finishing",
    title: "Отделочные работы",
    icon: Paintbrush,
    image: stageFinishing,
    description: "Внутренняя и внешняя отделка",
    duration: "от 15-25 дней",
  },
];

export const BuildingStages = () => {
  const { elementRef, isVisible } = useScrollAnimation();
  
  return (
    <section id="stages" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div 
          ref={elementRef}
          className={`text-center mb-12 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Этапы строительства</h2>
          <p className="text-lg text-muted-foreground">
            Строительство домов из SIP панелей производится в кратчайшие сроки (от 5 дней). 
            Технологии строительства довольно просты и предполагают несколько этапов:
          </p>
        </div>

        <Tabs defaultValue="foundation" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 mb-8">
            {stages.map((stage) => {
              const Icon = stage.icon;
              return (
                <TabsTrigger key={stage.id} value={stage.id} className="flex flex-col items-center gap-2 py-4">
                  <Icon className="h-6 w-6" />
                  <span className="text-xs md:text-sm">{stage.title}</span>
                </TabsTrigger>
              );
            })}
          </TabsList>

          {stages.map((stage) => (
            <TabsContent key={stage.id} value={stage.id}>
              <Card>
                <CardContent className="pt-6">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="relative aspect-video rounded-lg overflow-hidden">
                      <img src={stage.image} alt={stage.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex flex-col justify-center">
                      <h3 className="text-2xl font-bold mb-4">{stage.title}</h3>
                      <p className="text-muted-foreground mb-4">{stage.description}</p>
                      <p className="text-lg font-medium">
                        Срок реализации: <span className="text-primary">{stage.duration}</span>
                      </p>
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
