import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import { Link } from "react-router-dom";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: "О компании", href: "#about" },
    { label: "Построенные дома", href: "#projects" },
    { label: "Проекты", href: "#catalog" },
    { label: "Технологии SIP", href: "#technology" },
    { label: "Кредитование", href: "#mortgage" },
    { label: "Отзывы", href: "#reviews" },
    { label: "Контакты", href: "#contacts" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-primary">
              ДОМиК
            </div>
          </Link>

          <nav className="hidden md:flex items-center space-x-6">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <a href="tel:89172087471" className="hidden md:flex items-center space-x-2 text-sm font-medium">
              <Phone className="h-4 w-4" />
              <span>8 (917) 208-74-71</span>
            </a>
            <Button variant="default" size="sm" className="hidden md:inline-flex">
              Оставить заявку
            </Button>
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block py-2 text-sm font-medium text-foreground/80 hover:text-foreground"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a href="tel:89172087471" className="flex items-center space-x-2 py-2 text-sm font-medium">
              <Phone className="h-4 w-4" />
              <span>8 (917) 208-74-71</span>
            </a>
            <Button variant="default" size="sm" className="w-full">
              Оставить заявку
            </Button>
          </div>
        )}
      </div>
    </header>
  );
};
