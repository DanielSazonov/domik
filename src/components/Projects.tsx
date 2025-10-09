import { Card, CardContent } from "@/components/ui/card";
import project1 from "@/assets/project1.jpg";
import project2 from "@/assets/project2.jpg";
import project3 from "@/assets/project3.jpg";
import project4 from "@/assets/project4.jpg";
import project5 from "@/assets/project5.jpg";
import { Button } from "@/components/ui/button";

const projects = [
  {
    id: 1,
    title: "Дом 8х8 м. с гаражом и террасой",
    image: project1,
    dimensions: "8 х 8 м",
    area: "160 м²",
    ceiling: "2,8 м",
    kitchen: "22,5 м²",
    bedrooms: 3,
    location: "г. Саратов",
    price: "6 128 000 руб.",
  },
  {
    id: 2,
    title: "Проект S.Dom-164-2",
    image: project5,
    dimensions: "105 м²",
    area: "164 м²",
    ceiling: "2,8 м",
    kitchen: "26,9 м²",
    bedrooms: 3,
    location: "с. Шумейка, Энгельсский район",
    price: "6 900 000 руб.",
  },
  {
    id: 3,
    title: "Двухэтажный дом 7,5 х 7,5 м. с террасой",
    image: project2,
    dimensions: "7,5 х 7,5 м",
    area: "117 м²",
    ceiling: "2,8 м",
    kitchen: "18,6 м²",
    bedrooms: 2,
    location: "г. Саратов, Заводской район",
    price: "5 525 000 руб.",
  },
  {
    id: 4,
    title: "Одноэтажный дом 10х11 м. с гаражом",
    image: project3,
    dimensions: "10 х 11 м",
    area: "189 м²",
    ceiling: "2,8 м",
    kitchen: "26,9 м²",
    bedrooms: 3,
    location: "г. Саратов, Кумысная поляна",
    price: "6 836 500 руб.",
  },
  {
    id: 5,
    title: "Одноэтажный дом 7 х 9 м.",
    image: project4,
    dimensions: "7 х 9 м",
    area: "77 м²",
    ceiling: "2,8 м",
    kitchen: "20,7 м²",
    bedrooms: 2,
    location: "г. Саратов, Кумысная поляна",
    price: "3 355 000 руб.",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Дома, построенные с любовью и заботой компанией
          </h2>
          <Button variant="outline">все проекты</Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">{project.title}</h3>
                
                <div className="space-y-2 text-sm mb-4">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Габаритные размеры</span>
                    <span className="font-medium">{project.dimensions}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Площадь</span>
                    <span className="font-medium">{project.area}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Высота потолка</span>
                    <span className="font-medium">{project.ceiling}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Кухня-гостиная</span>
                    <span className="font-medium">{project.kitchen}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Количество спален</span>
                    <span className="font-medium">{project.bedrooms}</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-border">
                  <p className="text-sm text-muted-foreground mb-2">
                    Место постройки: {project.location}
                  </p>
                  <p className="text-lg font-bold text-primary">
                    {project.price}
                  </p>
                </div>

                <Button variant="outline" className="w-full mt-4">
                  Подробнее о проекте
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
