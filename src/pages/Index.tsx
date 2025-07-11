
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ScrollytellingSection from "@/components/ScrollytellingSection";
import InnovationSection from "@/components/InnovationSection";
import InteractiveQuiz from "@/components/InteractiveQuiz";
import CorporateDashboard from "@/components/CorporateDashboard";
import LeadMagnet from "@/components/LeadMagnet";
import FounderSection from "@/components/FounderSection";
import PillarsSection from "@/components/PillarsSection";
import ContactFAQ from "@/components/ContactFAQ";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <ScrollytellingSection />
      <InnovationSection />
      <InteractiveQuiz />
      <CorporateDashboard />
      <LeadMagnet />
      <FounderSection />
      <PillarsSection />
      <ContactFAQ />
      <Footer />
    </main>
  );
};

export default Index;
