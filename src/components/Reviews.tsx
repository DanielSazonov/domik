import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Александр М.",
    location: "г. Саратов",
    rating: 5,
    text: "Отличная работа! Дом построили быстро и качественно. Зимой действительно тепло, экономия на отоплении ощутимая.",
  },
  {
    name: "Екатерина С.",
    location: "Энгельсский район",
    rating: 5,
    text: "Очень довольны результатом. Бригада профессиональная, все сделано аккуратно. Рекомендуем!",
  },
  {
    name: "Дмитрий П.",
    location: "г. Саратов, Кумысная поляна",
    rating: 5,
    text: "Построили дом с гаражом под ключ. Качество отличное, сроки соблюдены. Спасибо команде!",
  },
];

export const Reviews = () => {
  return (
    <section id="reviews" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Отзывы наших клиентов</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <Card key={index}>
              <CardContent className="pt-6">
                <div className="flex items-center mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mb-4">{review.text}</p>
                <div>
                  <p className="font-bold">{review.name}</p>
                  <p className="text-sm text-muted-foreground">{review.location}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
