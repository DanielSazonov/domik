import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-house.jpg";
import { CheckCircle } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const Hero = () => {
  const { elementRef, isVisible } = useScrollAnimation();
  
  return (
    <section className="relative min-h-[100svh] flex items-center">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(rgba(45, 45, 45, 0.7), rgba(45, 45, 45, 0.7)), url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div 
          ref={elementRef}
          className={`max-w-3xl transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
            Дома из любых материалов
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

          <div className="flex justify-start">
            <Button size="lg" variant="secondary" asChild>
              <a href="#projects" onClick={(e) => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth', block: 'start' }); if (window.location.hash && window.location.hash !== '#/') { window.location.hash = '#/'; } }}>Посмотреть проекты</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
