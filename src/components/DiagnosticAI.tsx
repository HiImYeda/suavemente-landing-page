
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { BrainCircuit } from "lucide-react";

const DiagnosticAI = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contato');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-slate-200 to-blue-400 bg-clip-text text-transparent mb-6">
            Pioneirismo, Precisão e Psicanálise
          </h2>
          <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Nossa metodologia proprietária de IA não apenas identifica o risco de burnout. Ela revela os padrões inconscientes e os mecanismos de defesa que moldam sua vida profissional.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left column - Interactive visualization */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 relative">
                {/* Central brain icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl shadow-blue-500/25">
                    <BrainCircuit className="h-16 w-16 text-white" />
                  </div>
                </div>
                
                {/* Animated connection nodes */}
                <div className="absolute top-0 left-1/2 w-4 h-4 bg-cyan-400 rounded-full animate-pulse transform -translate-x-1/2"></div>
                <div className="absolute top-1/4 right-0 w-3 h-3 bg-blue-400 rounded-full animate-pulse delay-500"></div>
                <div className="absolute bottom-1/4 right-0 w-3 h-3 bg-indigo-400 rounded-full animate-pulse delay-1000"></div>
                <div className="absolute bottom-0 left-1/2 w-4 h-4 bg-purple-400 rounded-full animate-pulse delay-150 transform -translate-x-1/2"></div>
                <div className="absolute bottom-1/4 left-0 w-3 h-3 bg-violet-400 rounded-full animate-pulse delay-700"></div>
                <div className="absolute top-1/4 left-0 w-3 h-3 bg-cyan-400 rounded-full animate-pulse delay-300"></div>
                
                {/* Connection lines */}
                <svg className="absolute inset-0 w-full h-full">
                  <line x1="50%" y1="12%" x2="50%" y2="40%" stroke="#06b6d4" strokeWidth="1" opacity="0.6" className="animate-pulse"/>
                  <line x1="88%" y1="25%" x2="65%" y2="45%" stroke="#3b82f6" strokeWidth="1" opacity="0.6" className="animate-pulse delay-500"/>
                  <line x1="88%" y1="75%" x2="65%" y2="55%" stroke="#6366f1" strokeWidth="1" opacity="0.6" className="animate-pulse delay-1000"/>
                  <line x1="50%" y1="88%" x2="50%" y2="60%" stroke="#8b5cf6" strokeWidth="1" opacity="0.6" className="animate-pulse delay-150"/>
                  <line x1="12%" y1="75%" x2="35%" y2="55%" stroke="#a855f7" strokeWidth="1" opacity="0.6" className="animate-pulse delay-700"/>
                  <line x1="12%" y1="25%" x2="35%" y2="45%" stroke="#06b6d4" strokeWidth="1" opacity="0.6" className="animate-pulse delay-300"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Right column - Accordion */}
          <div>
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="border border-slate-800 rounded-lg bg-slate-900/50 backdrop-blur-sm">
                <AccordionTrigger className="text-slate-200 hover:text-blue-400 px-6 py-4 text-lg font-semibold">
                  Diagnóstico Precoce e Profundo
                </AccordionTrigger>
                <AccordionContent className="text-slate-300 px-6 pb-4 leading-relaxed">
                  Nossa IA não apenas detecta sinais de burnout, mas mapeia os padrões inconscientes que levam ao esgotamento antes mesmo dos primeiros sintomas aparecerem.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border border-slate-800 rounded-lg bg-slate-900/50 backdrop-blur-sm">
                <AccordionTrigger className="text-slate-200 hover:text-blue-400 px-6 py-4 text-lg font-semibold">
                  Intervenções Personalizadas
                </AccordionTrigger>
                <AccordionContent className="text-slate-300 px-6 pb-4 leading-relaxed">
                  Cada diagnóstico gera um plano de ação único, baseado nos mecanismos de defesa específicos identificados pela análise psicanalítica integrada.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border border-slate-800 rounded-lg bg-slate-900/50 backdrop-blur-sm">
                <AccordionTrigger className="text-slate-200 hover:text-blue-400 px-6 py-4 text-lg font-semibold">
                  Prevenção Sistêmica para Empresas
                </AccordionTrigger>
                <AccordionContent className="text-slate-300 px-6 pb-4 leading-relaxed">
                  Identificamos padrões organizacionais tóxicos e fornecemos estratégias estruturais para transformar o ambiente de trabalho em um espaço de crescimento.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border border-slate-800 rounded-lg bg-slate-900/50 backdrop-blur-sm">
                <AccordionTrigger className="text-slate-200 hover:text-blue-400 px-6 py-4 text-lg font-semibold">
                  Sigilo Absoluto. Sem Julgamentos.
                </AccordionTrigger>
                <AccordionContent className="text-slate-300 px-6 pb-4 leading-relaxed">
                  Nossa análise técnica mantém total confidencialidade, oferecendo insights profundos sem exposição pessoal ou julgamentos corporativos.
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <div className="mt-8">
              <Button 
                onClick={scrollToContact}
                variant="outline" 
                size="lg"
                className="border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white px-8 py-6 text-lg rounded-full transition-all duration-300 bg-transparent"
              >
                Conheça a metodologia para empresas
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiagnosticAI;
