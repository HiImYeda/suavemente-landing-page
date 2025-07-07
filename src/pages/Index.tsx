
import Hero from "@/components/Hero";
import ScrollytellingSection from "@/components/ScrollytellingSection";
import InteractiveQuiz from "@/components/InteractiveQuiz";
import CorporateDashboard from "@/components/CorporateDashboard";
import LeadMagnet from "@/components/LeadMagnet";
import ContactFAQ from "@/components/ContactFAQ";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <ScrollytellingSection />
      <InteractiveQuiz />
      <CorporateDashboard />
      <LeadMagnet />
      <ContactFAQ />
      <Footer />
    </main>
  );
};

export default Index;
