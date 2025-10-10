import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Home, Percent, Shield } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const features = [
  {
    icon: Home,
    title: "Семейная ипотека",
    description: "Специальные условия для семей с детьми",
  },
  {
    icon: Percent,
    title: "От 3% годовых",
    description: "Выгодные процентные ставки",
  },
  {
    icon: Shield,
    title: "С эскроу счетом",
    description: "Безопасность ваших средств",
  },
];

export const Mortgage = () => {
  const { elementRef, isVisible } = useScrollAnimation();
  
  return (
    <section id="mortgage" className="py-16 md:py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div 
          ref={elementRef}
          className={`text-center mb-12 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Строительство в ипотеку
          </h2>
          <p className="text-4xl md:text-5xl font-bold mb-6">от 2-3%</p>
          <p className="text-xl opacity-90">Подробности уточняйте по телефону</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="bg-primary-foreground text-card-foreground">
                <CardContent className="pt-6 text-center">
                  <Icon className="h-12 w-12 mx-auto mb-3 text-primary" />
                  <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

      </div>
    </section>
  );
};
