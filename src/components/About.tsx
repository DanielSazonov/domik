import { Card, CardContent } from "@/components/ui/card";
import { Building2, Clock, Users, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

const stats = [
  {
    icon: Building2,
    value: "395+",
    label: "Построенных домов",
  },
  {
    icon: Clock,
    value: "30",
    label: "дней на строительство",
  },
  {
    icon: Users,
    value: "15",
    label: "лет на рынке",
  },
  {
    icon: Home,
    value: "27 000 ₽",
    label: "за кв.м.",
  },
];

const advantages = [
  {
    title: "Построим дом за 30 дней",
    description: "Строим быстро и недорого относительно рынка за счет арсенала оборудования и бригады строителей с 30 летним опытом.",
  },
  {
    title: "Наши дома без теплопотерь",
    description: "Качество сборки проверяем тепловизором и сдаем при значениях 250-300. При этих значениях экономия на отоплении 25% в год.",
  },
  {
    title: "Профессиональные строительные бригады",
    description: "Построили 320 домов, знаем как делать это быстро и так, чтобы не переделывать.",
  },
  {
    title: "Стены в домах абсолютно ровные",
    description: "Не нужно дополнительно выравнивать и тратить деньги и время на доп. отделку",
  },
  {
    title: "Собственное производство SIP-панелей",
    description: "Контролируем качество на всех этапах производства и можем предложить конкурентные цены",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Мы строим дома уже 15 лет
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            «ДОМиК» — это надежный партнер в строительстве. Мы воплощаем в жизнь строительные проекты 
            любой сложности на основе канадской SIP-технологии. Собственное производство готовых 
            домокомплектов и SIP-панелей позволяет нам успешно сотрудничать с подрядчиками по всей стране.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index}>
                <CardContent className="pt-6 text-center">
                  <Icon className="h-12 w-12 mx-auto mb-3 text-primary" />
                  <p className="text-3xl font-bold mb-2">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {advantages.map((advantage, index) => (
            <Card key={index}>
              <CardContent className="pt-6">
                <div className="flex items-start space-x-2 mb-2">
                  <span className="text-2xl font-bold text-primary">{index + 1}.</span>
                  <h3 className="text-lg font-bold">{advantage.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground ml-8">{advantage.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg">Подробнее о нас</Button>
        </div>
      </div>
    </section>
  );
};
