import { Phone, Mail, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">ДОМиК</h3>
            <p className="text-sm opacity-90 mb-4">
              ИНДИВИДУАЛЬНЫЙ ПРЕДПРИНИМАТЕЛЬ САЗОНОВ ВАДИМ АНАТОЛЬЕВИЧ
            </p>
            <p className="text-sm opacity-90">ИНН: 644915935175</p>
            <p className="text-sm opacity-90">ОГРНИП: 314644915500080</p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Контакты</h4>
            <div className="space-y-3">
              <a href="tel:89172087471" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
                <Phone className="h-4 w-4" />
                <span>8 (917) 208-74-71</span>
              </a>
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                <span className="text-sm">413122, РОССИЯ, САРАТОВСКАЯ ОБЛ, Г ЭНГЕЛЬС, УЛ 1-Я БЕРЕГОВАЯ, Д 93</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Банковские реквизиты</h4>
            <div className="space-y-2 text-sm opacity-90">
              <p>Р/с: 40802810200001637013</p>
              <p>Банк: АО «ТБанк»</p>
              <p>ИНН банка: 7710140679</p>
              <p>БИК банка: 044525974</p>
              <p>К/с: 30101810145250000974</p>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8">
          <p className="text-center text-sm opacity-80">
            © {new Date().getFullYear()} ДОМиК. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};
