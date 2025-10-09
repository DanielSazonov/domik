import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Home, Percent, Shield } from "lucide-react";

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
  return (
    <section id="mortgage" className="py-16 md:py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Строительство в ипотеку
          </h2>
          <p className="text-xl mb-2">семейная, сельская</p>
          <p className="text-xl mb-4">с ЭСКРОУ счётом</p>
          <p className="text-4xl md:text-5xl font-bold">от 3-6%</p>
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

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" variant="secondary">
            Читать подробнее
          </Button>
          <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
            Оставить заявку на ипотеку
          </Button>
        </div>
      </div>
    </section>
  );
};
