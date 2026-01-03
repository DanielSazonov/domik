import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { GitCompare, X, Check } from "lucide-react";
import { ProgressiveImage } from "./ProgressiveImage";
import project1 from "@/assets/project1.jpg";
import project2 from "@/assets/project2.jpg";
import project3 from "@/assets/project3.jpg";
import project4 from "@/assets/project4.jpg";
import project5 from "@/assets/project5.jpg";

const projects = [
  {
    id: 1,
    title: "Дом 8х8 м. с гаражом и террасой",
    image: project1,
    area: 160,
    bedrooms: 3,
    floors: 2,
    garage: true,
    terrace: true,
    price: 12256000,
  },
  {
    id: 2,
    title: "Проект S.Dom-164-2",
    image: project5,
    area: 164,
    bedrooms: 3,
    floors: 2,
    garage: false,
    terrace: true,
    price: 13800000,
  },
  {
    id: 3,
    title: "Двухэтажный дом 7,5 х 7,5 м.",
    image: project2,
    area: 117,
    bedrooms: 2,
    floors: 2,
    garage: false,
    terrace: true,
    price: 11050000,
  },
  {
    id: 4,
    title: "Двухэтажный дом 10х11 м. с гаражом",
    image: project3,
    area: 189,
    bedrooms: 3,
    floors: 2,
    garage: true,
    terrace: false,
    price: 13673000,
  },
  {
    id: 5,
    title: "Двухэтажный дом 7 х 9 м.",
    image: project4,
    area: 77,
    bedrooms: 2,
    floors: 2,
    garage: false,
    terrace: false,
    price: 6710000,
  },
];

export const ProjectComparison = () => {
  const { elementRef, isVisible } = useScrollAnimation();
  const [selectedProjects, setSelectedProjects] = useState<number[]>([]);

  const toggleProject = (id: number) => {
    setSelectedProjects((prev) =>
      prev.includes(id)
        ? prev.filter((p) => p !== id)
        : prev.length < 3
        ? [...prev, id]
        : prev
    );
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("ru-RU").format(price);
  };

  const selectedProjectsData = projects.filter((p) =>
    selectedProjects.includes(p.id)
  );

  return (
    <section id="comparison" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div
          ref={elementRef}
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center gap-3">
            <GitCompare className="h-8 w-8" />
            Сравнение проектов
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Выберите до 3 проектов для сравнения характеристик
          </p>
        </div>

        {/* Project Selection */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
          {projects.map((project) => (
            <button
              key={project.id}
              onClick={() => toggleProject(project.id)}
              className={`relative rounded-lg overflow-hidden border-2 transition-all ${
                selectedProjects.includes(project.id)
                  ? "border-primary ring-2 ring-primary/30"
                  : "border-border hover:border-primary/50"
              }`}
            >
              <ProgressiveImage
                src={project.image}
                alt={project.title}
                className="aspect-[4/3]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-2">
                <div className="text-white text-xs font-medium line-clamp-2">
                  {project.title}
                </div>
              </div>
              <div
                className={`absolute top-2 right-2 w-6 h-6 rounded-full flex items-center justify-center ${
                  selectedProjects.includes(project.id)
                    ? "bg-primary text-primary-foreground"
                    : "bg-background/80"
                }`}
              >
                {selectedProjects.includes(project.id) && (
                  <Check className="h-4 w-4" />
                )}
              </div>
            </button>
          ))}
        </div>

        {/* Comparison Table */}
        {selectedProjectsData.length > 0 && (
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Сравнение выбранных проектов</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4 font-medium">
                        Характеристика
                      </th>
                      {selectedProjectsData.map((project) => (
                        <th key={project.id} className="text-center py-3 px-4">
                          <div className="font-medium text-sm">
                            {project.title}
                          </div>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-3 px-4 text-muted-foreground">
                        Площадь
                      </td>
                      {selectedProjectsData.map((project) => (
                        <td
                          key={project.id}
                          className="text-center py-3 px-4 font-medium"
                        >
                          {project.area} м²
                        </td>
                      ))}
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4 text-muted-foreground">
                        Спальни
                      </td>
                      {selectedProjectsData.map((project) => (
                        <td
                          key={project.id}
                          className="text-center py-3 px-4 font-medium"
                        >
                          {project.bedrooms}
                        </td>
                      ))}
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4 text-muted-foreground">
                        Этажи
                      </td>
                      {selectedProjectsData.map((project) => (
                        <td
                          key={project.id}
                          className="text-center py-3 px-4 font-medium"
                        >
                          {project.floors}
                        </td>
                      ))}
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4 text-muted-foreground">
                        Гараж
                      </td>
                      {selectedProjectsData.map((project) => (
                        <td key={project.id} className="text-center py-3 px-4">
                          {project.garage ? (
                            <Check className="h-5 w-5 text-green-600 mx-auto" />
                          ) : (
                            <X className="h-5 w-5 text-muted-foreground mx-auto" />
                          )}
                        </td>
                      ))}
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4 text-muted-foreground">
                        Терраса
                      </td>
                      {selectedProjectsData.map((project) => (
                        <td key={project.id} className="text-center py-3 px-4">
                          {project.terrace ? (
                            <Check className="h-5 w-5 text-green-600 mx-auto" />
                          ) : (
                            <X className="h-5 w-5 text-muted-foreground mx-auto" />
                          )}
                        </td>
                      ))}
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4 text-muted-foreground">
                        Цена за м²
                      </td>
                      {selectedProjectsData.map((project) => (
                        <td
                          key={project.id}
                          className="text-center py-3 px-4 font-medium"
                        >
                          {formatPrice(Math.round(project.price / project.area))} ₽
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-medium">Стоимость</td>
                      {selectedProjectsData.map((project) => (
                        <td
                          key={project.id}
                          className="text-center py-3 px-4 font-bold text-primary"
                        >
                          {formatPrice(project.price)} ₽
                        </td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        )}

        {selectedProjectsData.length === 0 && (
          <div className="text-center text-muted-foreground py-8">
            Выберите проекты для сравнения
          </div>
        )}
      </div>
    </section>
  );
};
