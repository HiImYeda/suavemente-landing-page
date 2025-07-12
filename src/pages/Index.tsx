
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ScrollytellingSection from "@/components/ScrollytellingSection";
import InnovationSection from "@/components/InnovationSection";
import InteractiveQuiz from "@/components/InteractiveQuiz";
import CorporateDashboard from "@/components/CorporateDashboard";
import LeadMagnet from "@/components/LeadMagnet";
import VideoSection from "@/components/VideoSection";
import FounderSection from "@/components/FounderSection";
import PillarsSection from "@/components/PillarsSection";
import ContactFAQ from "@/components/ContactFAQ";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      {/* Comentando todas as outras seções para exibir apenas o cabeçalho e a barra de navegação
      <ScrollytellingSection />
      <InnovationSection />
      <InteractiveQuiz />
      <CorporateDashboard />
      <LeadMagnet />
      <VideoSection />
      <FounderSection />
      <PillarsSection />
      <ContactFAQ />
      <Footer />
      */}
    </main>
  );
};

export default Index;
