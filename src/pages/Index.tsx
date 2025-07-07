
import Hero from "@/components/Hero";
import DiagnosticAI from "@/components/DiagnosticAI";
import KnowledgeAreas from "@/components/KnowledgeAreas";
import PsychoanalysisSection from "@/components/PsychoanalysisSection";
import VideoSection from "@/components/VideoSection";
import FounderSection from "@/components/FounderSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <DiagnosticAI />
      <KnowledgeAreas />
      <PsychoanalysisSection />
      <VideoSection />
      <FounderSection />
      <ContactSection />
    </main>
  );
};

export default Index;
