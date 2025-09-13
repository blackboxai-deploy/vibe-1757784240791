import Navigation from "@/components/Navigation";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navigation />
      
      <div className="flex-1">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ServicesSection />
        <ContactSection />
      </div>
      
      <Footer />
    </main>
  );
}