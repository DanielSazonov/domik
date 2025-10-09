import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-house.jpg";
import { ArrowRight, CheckCircle } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-[600px] md:min-h-[700px] flex items-center">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(rgba(45, 45, 45, 0.7), rgba(45, 45, 45, 0.7)), url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
            Теплосберегающие дома из SIP-панелей
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8">
            по цене однокомнатной квартиры
          </p>
          
          <div className="space-y-4 mb-8">
            <div className="flex items-center space-x-3 text-primary-foreground">
              <CheckCircle className="h-6 w-6 flex-shrink-0" />
              <span className="text-lg">Мы даем гарантию на наши дома пять лет</span>
            </div>
            <div className="flex items-center space-x-3 text-primary-foreground">
              <CheckCircle className="h-6 w-6 flex-shrink-0" />
              <span className="text-lg">А также сопровождаем объекты после сдачи</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" variant="default" className="group">
              Рассчитать стоимость
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="secondary">
              Посмотреть проекты
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
