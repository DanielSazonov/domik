import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Technology } from "@/components/Technology";
import { BuildingStages } from "@/components/BuildingStages";
import { About } from "@/components/About";
import { Mortgage } from "@/components/Mortgage";
import { Reviews } from "@/components/Reviews";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Projects />
        <Mortgage />
        <BuildingStages />
        <Technology />
        <About />
        <Reviews />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
