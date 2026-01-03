import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Home, ArrowRight } from "lucide-react";

const categories = [
  {
    id: "compact",
    name: "Компактные",
    areaRange: "50–80 м²",
    priceRange: "от 3,5 млн ₽",
    bedrooms: "1–2",
    description: "Идеально для небольшой семьи или дачи",
    features: ["Экономичные", "Быстрое строительство", "Низкие затраты на отопление"],
  },
  {
    id: "standard",
    name: "Стандартные",
    areaRange: "80–120 м²",
    priceRange: "от 6 млн ₽",
    bedrooms: "2–3",
    description: "Оптимальное решение для семьи",
    features: ["Сбалансированная планировка", "2 санузла", "Просторная гостиная"],
  },
  {
    id: "comfort",
    name: "Комфорт",
    areaRange: "120–180 м²",
    priceRange: "от 9 млн ₽",
    bedrooms: "3–4",
    description: "Просторный дом для большой семьи",
    features: ["Гараж", "Терраса", "Гардеробная", "Кабинет"],
  },
  {
    id: "premium",
    name: "Премиум",
    areaRange: "180–300 м²",
    priceRange: "от 15 млн ₽",
    bedrooms: "4–5",
    description: "Максимальный комфорт и престиж",
    features: ["Бассейн", "Сауна", "Умный дом", "Ландшафтный дизайн"],
  },
];

export const HouseCategories = () => {
  const { elementRef, isVisible } = useScrollAnimation();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleViewProjects = () => {
    const el = document.getElementById("projects");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="categories" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div
          ref={elementRef}
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center gap-3">
            <Home className="h-8 w-8" />
            Категории домов
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Выберите подходящую категорию дома по площади и бюджету
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Card
              key={category.id}
              className={`cursor-pointer transition-all hover:shadow-lg ${
                selectedCategory === category.id
                  ? "ring-2 ring-primary shadow-lg"
                  : ""
              }`}
              onClick={() =>
                setSelectedCategory(
                  selectedCategory === category.id ? null : category.id
                )
              }
            >
              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <h3 className="text-xl font-bold mb-1">{category.name}</h3>
                  <div className="text-2xl font-bold text-primary">
                    {category.areaRange}
                  </div>
                </div>

                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Спальни</span>
                    <span className="font-medium">{category.bedrooms}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Стоимость</span>
                    <span className="font-medium">{category.priceRange}</span>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground mt-4 mb-4">
                  {category.description}
                </p>

                {selectedCategory === category.id && (
                  <div className="pt-4 border-t border-border animate-fade-in">
                    <div className="text-sm font-medium mb-2">Особенности:</div>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {category.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <Button size="lg" onClick={handleViewProjects}>
            Смотреть все проекты
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};
