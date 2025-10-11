import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Home, Percent, Shield } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const mortgagePrograms = [
  {
    icon: Home,
    title: "Сельская ипотека",
    rate: "от 2-3%",
    initialPayment: "от 30%",
    amount: "до 6 млн ₽",
    term: "до 25 лет",
  },
  {
    icon: Home,
    title: "Семейная ипотека",
    rate: "от 2-3%",
    initialPayment: "от 30%",
    amount: "до 12 млн ₽",
    term: "до 30 лет",
  },
  {
    icon: Percent,
    title: "Ипотечное кредитование",
    rate: "от 2-3%",
    initialPayment: "от 30%",
    amount: "до 60 млн ₽",
    term: "до 30 лет",
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
          <p className="text-xl opacity-90 mb-8">Доступные ипотечные программы для строительства вашего дома</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {mortgagePrograms.map((program, index) => {
            const Icon = program.icon;
            return (
              <Card key={index} className="bg-primary-foreground text-card-foreground">
                <CardContent className="pt-6">
                  <Icon className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-bold mb-4 text-center">{program.title}</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Ставка:</span>
                      <span className="font-semibold text-primary">{program.rate}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Первоначальный взнос:</span>
                      <span className="font-medium">{program.initialPayment}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Сумма:</span>
                      <span className="font-medium">{program.amount}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Срок:</span>
                      <span className="font-medium">{program.term}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <p className="text-center text-lg opacity-90">
          Подробности уточняйте по телефону: <a href="tel:89172087471" className="font-bold hover:underline">8 (917) 208-74-71</a>
        </p>

      </div>
    </section>
  );
};
