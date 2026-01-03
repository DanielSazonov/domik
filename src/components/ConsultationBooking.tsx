import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Calendar, Clock, Phone, MessageCircle } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

const timeSlots = [
  { id: "morning", label: "09:00 – 13:00", icon: "🌅" },
  { id: "afternoon", label: "13:00 – 17:00", icon: "☀️" },
  { id: "evening", label: "17:00 – 20:00", icon: "🌆" },
];

const contactMethods = [
  { id: "phone", label: "Звонок", icon: Phone },
  { id: "whatsapp", label: "WhatsApp", icon: MessageCircle },
  { id: "telegram", label: "Telegram", icon: MessageCircle },
];

const consultationTypes = [
  { id: "general", label: "Общая консультация", description: "Расскажем о компании и процессе строительства" },
  { id: "project", label: "Подбор проекта", description: "Поможем выбрать оптимальный проект" },
  { id: "cost", label: "Расчёт стоимости", description: "Детальный расчёт под ваши требования" },
  { id: "site", label: "Выезд на участок", description: "Оценка участка специалистом" },
];

export const ConsultationBooking = () => {
  const { toast } = useToast();
  const { elementRef, isVisible } = useScrollAnimation();
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    consultationType: "",
    timeSlot: "",
    contactMethod: "",
    name: "",
    phone: "",
  });

  const handleSubmit = async () => {
    if (!formData.name || !formData.phone) {
      toast({
        title: "Заполните все поля",
        description: "Пожалуйста, укажите имя и телефон",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const consultationType = consultationTypes.find(t => t.id === formData.consultationType);
      const timeSlot = timeSlots.find(t => t.id === formData.timeSlot);
      const contactMethod = contactMethods.find(m => m.id === formData.contactMethod);

      const message = `
Бронирование консультации:
- Тип: ${consultationType?.label || "Не указан"}
- Время: ${timeSlot?.label || "Не указано"}
- Способ связи: ${contactMethod?.label || "Не указан"}
      `.trim();

      const { error } = await supabase.functions.invoke("send-contact-email", {
        body: {
          name: formData.name,
          phone: formData.phone,
          message,
        },
      });

      if (error) throw error;

      toast({
        title: "Консультация забронирована!",
        description: "Мы свяжемся с вами в выбранное время.",
      });

      setFormData({
        consultationType: "",
        timeSlot: "",
        contactMethod: "",
        name: "",
        phone: "",
      });
      setStep(1);
    } catch (error) {
      console.error("Ошибка бронирования:", error);
      toast({
        title: "Ошибка бронирования",
        description: "Попробуйте позже или позвоните нам напрямую.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="booking" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div
          ref={elementRef}
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center gap-3">
            <Calendar className="h-8 w-8" />
            Записаться на консультацию
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Выберите удобное время и способ связи
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-xl">
                  Шаг {step} из 3
                </CardTitle>
                <div className="flex gap-2">
                  {[1, 2, 3].map((s) => (
                    <div
                      key={s}
                      className={`w-8 h-2 rounded-full transition-colors ${
                        s <= step ? "bg-primary" : "bg-muted"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </CardHeader>
            <CardContent>
              {/* Step 1: Consultation Type */}
              {step === 1 && (
                <div className="space-y-4">
                  <h3 className="font-medium mb-4">Выберите тип консультации</h3>
                  <div className="grid gap-3">
                    {consultationTypes.map((type) => (
                      <button
                        key={type.id}
                        onClick={() => {
                          setFormData({ ...formData, consultationType: type.id });
                          setStep(2);
                        }}
                        className={`p-4 rounded-lg border-2 text-left transition-all hover:border-primary/50 ${
                          formData.consultationType === type.id
                            ? "border-primary bg-primary/5"
                            : "border-border"
                        }`}
                      >
                        <div className="font-medium">{type.label}</div>
                        <div className="text-sm text-muted-foreground mt-1">
                          {type.description}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 2: Time & Contact Method */}
              {step === 2 && (
                <div className="space-y-6">
                  <div>
                    <h3 className="font-medium mb-4 flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      Удобное время для связи
                    </h3>
                    <div className="grid grid-cols-3 gap-3">
                      {timeSlots.map((slot) => (
                        <button
                          key={slot.id}
                          onClick={() =>
                            setFormData({ ...formData, timeSlot: slot.id })
                          }
                          className={`p-4 rounded-lg border-2 text-center transition-all ${
                            formData.timeSlot === slot.id
                              ? "border-primary bg-primary/5"
                              : "border-border hover:border-primary/50"
                          }`}
                        >
                          <div className="text-2xl mb-1">{slot.icon}</div>
                          <div className="text-sm font-medium">{slot.label}</div>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-medium mb-4">Способ связи</h3>
                    <div className="grid grid-cols-3 gap-3">
                      {contactMethods.map((method) => (
                        <button
                          key={method.id}
                          onClick={() =>
                            setFormData({ ...formData, contactMethod: method.id })
                          }
                          className={`p-4 rounded-lg border-2 text-center transition-all ${
                            formData.contactMethod === method.id
                              ? "border-primary bg-primary/5"
                              : "border-border hover:border-primary/50"
                          }`}
                        >
                          <method.icon className="h-6 w-6 mx-auto mb-2" />
                          <div className="text-sm font-medium">{method.label}</div>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Button
                      variant="outline"
                      onClick={() => setStep(1)}
                      className="flex-1"
                    >
                      Назад
                    </Button>
                    <Button
                      onClick={() => setStep(3)}
                      className="flex-1"
                      disabled={!formData.timeSlot || !formData.contactMethod}
                    >
                      Далее
                    </Button>
                  </div>
                </div>
              )}

              {/* Step 3: Contact Info */}
              {step === 3 && (
                <div className="space-y-4">
                  <h3 className="font-medium mb-4">Контактные данные</h3>
                  <Input
                    placeholder="Ваше имя"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                  <Input
                    type="tel"
                    placeholder="Телефон"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                  />

                  <div className="bg-muted rounded-lg p-4 text-sm">
                    <div className="font-medium mb-2">Ваша заявка:</div>
                    <div className="text-muted-foreground space-y-1">
                      <div>
                        Тип:{" "}
                        {consultationTypes.find(
                          (t) => t.id === formData.consultationType
                        )?.label || "—"}
                      </div>
                      <div>
                        Время:{" "}
                        {timeSlots.find((t) => t.id === formData.timeSlot)
                          ?.label || "—"}
                      </div>
                      <div>
                        Связь:{" "}
                        {contactMethods.find(
                          (m) => m.id === formData.contactMethod
                        )?.label || "—"}
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Button
                      variant="outline"
                      onClick={() => setStep(2)}
                      className="flex-1"
                    >
                      Назад
                    </Button>
                    <Button
                      onClick={handleSubmit}
                      className="flex-1"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Отправка..." : "Забронировать"}
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
