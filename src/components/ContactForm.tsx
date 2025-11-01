import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { supabase } from "@/integrations/supabase/client";

export const ContactForm = () => {
  const { toast } = useToast();
  const { elementRef, isVisible } = useScrollAnimation();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase.functions.invoke('send-contact-email', {
        body: formData,
      });

      if (error) throw error;

      toast({
        title: "Спасибо за заявку!",
        description: "Мы свяжемся с вами в ближайшее время.",
      });
      setFormData({ name: "", phone: "", message: "" });
    } catch (error) {
      console.error("Ошибка отправки заявки:", error);
      toast({
        title: "Ошибка отправки",
        description: "Попробуйте позже или позвоните нам напрямую.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contacts" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div 
          ref={elementRef}
          className={`max-w-2xl mx-auto transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl md:text-3xl text-center">
                Оставьте заявку
              </CardTitle>
              <p className="text-center text-muted-foreground">
                и мы свяжемся с вами для расчета стоимости вашего дома
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    placeholder="Ваше имя"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Input
                    type="tel"
                    placeholder="Телефон"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Сообщение (необязательно)"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                  />
                </div>
                <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Отправка..." : "Отправить заявку"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
