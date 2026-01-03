import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Calculator, Home, Ruler, Layers } from "lucide-react";

const houseTypes = [
  { id: "economy", name: "Эконом", pricePerSqm: 45000, description: "Базовая комплектация" },
  { id: "standard", name: "Стандарт", pricePerSqm: 55000, description: "Оптимальное решение" },
  { id: "comfort", name: "Комфорт", pricePerSqm: 70000, description: "Расширенная комплектация" },
  { id: "premium", name: "Премиум", pricePerSqm: 90000, description: "Максимальное качество" },
];

const foundationTypes = [
  { id: "slab", name: "Плита", multiplier: 1.0 },
  { id: "pile", name: "Свайный", multiplier: 0.85 },
  { id: "strip", name: "Ленточный", multiplier: 0.9 },
];

export const CostCalculator = () => {
  const { elementRef, isVisible } = useScrollAnimation();
  const [area, setArea] = useState([100]);
  const [floors, setFloors] = useState([2]);
  const [selectedType, setSelectedType] = useState("standard");
  const [selectedFoundation, setSelectedFoundation] = useState("slab");

  const calculatePrice = () => {
    const type = houseTypes.find((t) => t.id === selectedType);
    const foundation = foundationTypes.find((f) => f.id === selectedFoundation);
    if (!type || !foundation) return 0;
    
    const basePrice = area[0] * type.pricePerSqm;
    const floorMultiplier = floors[0] === 1 ? 1.1 : 1;
    const totalPrice = basePrice * foundation.multiplier * floorMultiplier;
    
    return Math.round(totalPrice);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("ru-RU").format(price);
  };

  const handleConsultation = () => {
    const el = document.getElementById("contacts");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="calculator" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div
          ref={elementRef}
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center gap-3">
            <Calculator className="h-8 w-8" />
            Калькулятор стоимости
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Рассчитайте примерную стоимость строительства вашего дома
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card>
            <CardContent className="p-6 md:p-8">
              <div className="grid gap-8">
                {/* Area Slider */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <label className="text-sm font-medium flex items-center gap-2">
                      <Ruler className="h-4 w-4" />
                      Площадь дома
                    </label>
                    <span className="text-lg font-bold">{area[0]} м²</span>
                  </div>
                  <Slider
                    value={area}
                    onValueChange={setArea}
                    min={50}
                    max={300}
                    step={10}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground mt-2">
                    <span>50 м²</span>
                    <span>300 м²</span>
                  </div>
                </div>

                {/* Floors Slider */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <label className="text-sm font-medium flex items-center gap-2">
                      <Layers className="h-4 w-4" />
                      Количество этажей
                    </label>
                    <span className="text-lg font-bold">{floors[0]}</span>
                  </div>
                  <Slider
                    value={floors}
                    onValueChange={setFloors}
                    min={1}
                    max={3}
                    step={1}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground mt-2">
                    <span>1 этаж</span>
                    <span>3 этажа</span>
                  </div>
                </div>

                {/* House Type Selection */}
                <div>
                  <label className="text-sm font-medium mb-4 block flex items-center gap-2">
                    <Home className="h-4 w-4" />
                    Тип комплектации
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {houseTypes.map((type) => (
                      <button
                        key={type.id}
                        onClick={() => setSelectedType(type.id)}
                        className={`p-4 rounded-lg border-2 transition-all text-left ${
                          selectedType === type.id
                            ? "border-primary bg-primary/5"
                            : "border-border hover:border-primary/50"
                        }`}
                      >
                        <div className="font-medium">{type.name}</div>
                        <div className="text-xs text-muted-foreground mt-1">
                          {type.description}
                        </div>
                        <div className="text-sm font-bold mt-2">
                          {formatPrice(type.pricePerSqm)} ₽/м²
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Foundation Type Selection */}
                <div>
                  <label className="text-sm font-medium mb-4 block">
                    Тип фундамента
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {foundationTypes.map((foundation) => (
                      <button
                        key={foundation.id}
                        onClick={() => setSelectedFoundation(foundation.id)}
                        className={`p-4 rounded-lg border-2 transition-all ${
                          selectedFoundation === foundation.id
                            ? "border-primary bg-primary/5"
                            : "border-border hover:border-primary/50"
                        }`}
                      >
                        <div className="font-medium">{foundation.name}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Result */}
                <div className="bg-muted rounded-lg p-6 text-center">
                  <div className="text-sm text-muted-foreground mb-2">
                    Примерная стоимость строительства
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-primary">
                    {formatPrice(calculatePrice())} ₽
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">
                    *Точную стоимость уточняйте у менеджера
                  </p>
                </div>

                <Button size="lg" className="w-full" onClick={handleConsultation}>
                  Получить точный расчёт
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
