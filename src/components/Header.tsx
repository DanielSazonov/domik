import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import { Link } from "react-router-dom";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: "Категории", href: "#categories" },
    { label: "Проекты", href: "#projects" },
    { label: "Сравнение", href: "#comparison" },
    { label: "Калькулятор", href: "#calculator" },
    { label: "Ипотека", href: "#mortgage" },
    { label: "Этапы", href: "#stages" },
    { label: "О нас", href: "#about" },
    { label: "Контакты", href: "#contacts" },
  ];

  const handleAnchorClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    e.preventDefault();
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    // Keep HashRouter route at root to avoid 404
    if (window.location.hash && window.location.hash !== "#/") {
      window.location.hash = "#/";
    }
    setIsMenuOpen(false);
  };

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
                onClick={(e) => handleAnchorClick(e, item.href.substring(1))}
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
            <Button
              className="hidden md:flex"
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById('contacts');
                if (el) {
                  el.scrollIntoView({ behavior: "smooth", block: "start" });
                }
              }}
            >
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
                onClick={(e) => handleAnchorClick(e, item.href.substring(1))}
              >
                {item.label}
              </a>
            ))}
            <a href="tel:89172087471" className="flex items-center space-x-2 py-2 text-sm font-medium">
              <Phone className="h-4 w-4" />
              <span>8 (917) 208-74-71</span>
            </a>
            <Button
              className="w-full"
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById('contacts');
                if (el) {
                  el.scrollIntoView({ behavior: "smooth", block: "start" });
                }
                setIsMenuOpen(false);
              }}
            >
              Оставить заявку
            </Button>
          </div>
        )}
      </div>
    </header>
  );
};
