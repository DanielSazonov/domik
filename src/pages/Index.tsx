import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { HouseCategories } from "@/components/HouseCategories";
import { Projects } from "@/components/Projects";
import { ProjectComparison } from "@/components/ProjectComparison";
import { CostCalculator } from "@/components/CostCalculator";
import { ConsultationBooking } from "@/components/ConsultationBooking";
import { Materials } from "@/components/Materials";
import { BuildingStages } from "@/components/BuildingStages";
import { About } from "@/components/About";
import { Mortgage } from "@/components/Mortgage";
import { Reviews } from "@/components/Reviews";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { MobileCallButton } from "@/components/MobileCallButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <HouseCategories />
        <Projects />
        <ProjectComparison />
        <CostCalculator />
        <Mortgage />
        <BuildingStages />
        <Materials />
        <About />
        <Reviews />
        <ConsultationBooking />
        <ContactForm />
      </main>
      <Footer />
      <MobileCallButton />
    </div>
  );
};

export default Index;
