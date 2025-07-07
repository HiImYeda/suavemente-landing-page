
import Hero from "@/components/Hero";
import TherapySection from "@/components/TherapySection";
import DiagnosticAI from "@/components/DiagnosticAI";
import VideoSection from "@/components/VideoSection";
import FounderSection from "@/components/FounderSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <TherapySection />
      <DiagnosticAI />
      <VideoSection />
      <FounderSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
