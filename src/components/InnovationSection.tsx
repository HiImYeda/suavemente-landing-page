
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const InnovationSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const rect = document.querySelector('#innovation-section')?.getBoundingClientRect();
      if (rect) {
        setMousePosition({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height,
        });
      }
    };

    const section = document.querySelector('#innovation-section');
    section?.addEventListener('mousemove', handleMouseMove);
    
    return () => section?.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToCorporate = () => {
    const corporateSection = document.getElementById('solucoes-corporativas');
    if (corporateSection) {
      corporateSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="innovation-section" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        {/* Central Visual Element */}
        <div className="mb-12 flex justify-center">
          <div className="relative w-80 h-80">
            {/* Main sphere */}
            <div 
              className="absolute inset-0 rounded-full border border-blue-500/30 transition-transform duration-1000 ease-out"
              style={{
                transform: `perspective(1000px) rotateX(${mousePosition.y * 20 - 10}deg) rotateY(${mousePosition.x * 20 - 10}deg)`,
              }}
            >
              {/* Inner networks */}
              <div className="absolute inset-4 rounded-full border border-cyan-400/20 animate-pulse">
                <div className="absolute inset-8 rounded-full border border-indigo-400/30 animate-pulse delay-500">
                  <div className="absolute inset-12 rounded-full bg-gradient-to-br from-blue-600/20 to-indigo-600/20 animate-pulse delay-1000"></div>
                </div>
              </div>
              
              {/* Floating particles */}
              <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
              <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-cyan-300 rounded-full animate-ping delay-700"></div>
              <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-indigo-400 rounded-full animate-ping delay-1000"></div>
              <div className="absolute bottom-1/3 right-1/4 w-1 h-1 bg-purple-400 rounded-full animate-ping delay-500"></div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-8">
          <h2 className="text-5xl font-light text-slate-100 mb-6">
            A Inovação a Serviço da Escuta
          </h2>
          
          <p className="text-xl text-slate-300 leading-relaxed max-w-4xl mx-auto">
            Para ir além do óbvio, desenvolvemos uma metodologia pioneira. Unimos a profundidade da análise psicanalítica com a capacidade da inteligência artificial para oferecer uma compreensão mais clara e precoce sobre os desafios da saúde mental, como o burnout. É a nossa forma de potencializar o cuidado humano com precisão e respeito absoluto à sua individualidade.
          </p>
          
          <Button 
            onClick={scrollToCorporate}
            size="lg"
            className="bg-gradient-to-r from-blue-600 via-cyan-600 to-indigo-600 hover:from-blue-700 hover:via-cyan-700 hover:to-indigo-700 text-white px-10 py-6 text-lg rounded-full shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105 border border-cyan-500/20"
          >
            Conheça a Metodologia
          </Button>
        </div>
      </div>
    </section>
  );
};

export default InnovationSection;
