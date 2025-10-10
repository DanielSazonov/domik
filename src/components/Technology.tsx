import { Shield, Zap, Home, Leaf, Flame, Bug } from "lucide-react";
import sipPanel from "@/assets/sip-panel.jpg";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const features = [
  {
    icon: Shield,
    title: "Морозо и ветро устойчивость",
  },
  {
    icon: Zap,
    title: "Экономия на отоплении",
  },
  {
    icon: Home,
    title: "Надежная конструкция",
  },
  {
    icon: Leaf,
    title: "Экологичность",
  },
  {
    icon: Flame,
    title: "Огнезащита",
  },
  {
    icon: Bug,
    title: "Защита от грызунов",
  },
];

export const Technology = () => {
  const { elementRef, isVisible } = useScrollAnimation();
  
  return (
    <section id="technology" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div 
          ref={elementRef}
          className={`text-center mb-12 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Технологии SIP</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Современные канадские сэндвич-панели представляют собой две плиты ОСП-3 толщиной до 12мм 
            и вклеенную между ними плиту пенополистирола толщиной до 250мм. 
            «Сэндвич» надежно скреплен полиуретановым клеем под давлением.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="relative aspect-video rounded-lg overflow-hidden">
            <img src={sipPanel} alt="SIP панель" className="w-full h-full object-cover" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="text-center">
                  <CardContent className="pt-6 pb-6">
                    <Icon className="h-12 w-12 mx-auto mb-3 text-primary" />
                    <p className="text-sm font-medium">{feature.title}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
