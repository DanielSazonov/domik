import { Phone } from "lucide-react";

export const MobileCallButton = () => {
  return (
    <a
      href="tel:89172087471"
      className="fixed bottom-6 right-6 z-50 md:hidden flex items-center justify-center w-14 h-14 bg-primary text-primary-foreground rounded-full shadow-lg hover:scale-110 transition-transform active:scale-95"
      aria-label="Позвонить"
    >
      <Phone className="h-6 w-6" />
    </a>
  );
};
