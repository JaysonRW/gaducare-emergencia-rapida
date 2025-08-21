import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CredibilitySection from "@/components/CredibilitySection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import DifferentialsSection from "@/components/DifferentialsSection";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <CredibilitySection />
      <ServicesSection />
      <TestimonialsSection />
      <DifferentialsSection />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;