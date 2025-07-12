
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToNext = () => {
    const nextSection = document.getElementById('nossa-abordagem');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-900">
      {/* Organic video background simulation */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-900 to-black"></div>
        
        {/* Suavemente Drop with fade effect */}
        <div className="absolute inset-0 flex items-center justify-center opacity-10">
          <img 
            src="/lovable-uploads/492a733a-fb1b-46ce-86d1-98dab11cdbae.png" 
            alt="Suavemente Drop" 
            className="w-96 h-96 object-contain animate-pulse"
            style={{
              filter: 'blur(1px)',
              animation: 'fadeInOut 8s ease-in-out infinite'
            }}
          />
        </div>
        
        {/* Floating organic particles */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400/40 rounded-full animate-pulse"></div>
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-cyan-300/60 rounded-full animate-ping delay-1000"></div>
          <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-indigo-400/50 rounded-full animate-pulse delay-500"></div>
          <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-blue-300/50 rounded-full animate-ping delay-2000"></div>
          <div className="absolute bottom-1/4 right-1/2 w-2 h-2 bg-cyan-400/30 rounded-full animate-pulse delay-1500"></div>
        </div>

        {/* Gentle water-like waves */}
        <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,300 Q200,200 400,300 T800,300" stroke="url(#gradient1)" strokeWidth="1" fill="none" className="animate-pulse">
            <animate attributeName="opacity" values="0.2;0.4;0.2" dur="6s" repeatCount="indefinite"/>
          </path>
          <path d="M0,500 Q300,400 600,500 T1200,500" stroke="url(#gradient2)" strokeWidth="1" fill="none" className="animate-pulse delay-1000">
            <animate attributeName="opacity" values="0.1;0.3;0.1" dur="8s" repeatCount="indefinite"/>
          </path>
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#06b6d4" stopOpacity="0"/>
              <stop offset="50%" stopColor="#3b82f6" stopOpacity="1"/>
              <stop offset="100%" stopColor="#06b6d4" stopOpacity="0"/>
            </linearGradient>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#6366f1" stopOpacity="0"/>
              <stop offset="50%" stopColor="#06b6d4" stopOpacity="1"/>
              <stop offset="100%" stopColor="#6366f1" stopOpacity="0"/>
            </linearGradient>
          </defs>
        </svg>
      </div>
      
      <div className={`relative z-10 max-w-5xl mx-auto px-6 text-center transition-all duration-1000 pt-16 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <h1 className="text-6xl md:text-7xl font-light mb-8 text-slate-100 leading-tight">
          É hora de se ouvir.
        </h1>
        <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
          Um espaço de acolhimento e escuta profunda para você compreender suas questões, ressignificar suas histórias e florescer.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            onClick={() => window.open('https://www.institutosuavemente.com.br/', '_blank')}
            size="lg" 
            className="bg-gradient-to-r from-blue-600 via-cyan-600 to-indigo-600 hover:from-blue-700 hover:via-cyan-700 hover:to-indigo-700 text-white px-10 py-6 text-lg rounded-full shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105 border border-cyan-500/20"
          >
            Conheça o Instituto
          </Button>
          
          <Button 
            onClick={() => window.open('https://portalsuavemente.com.br/login', '_blank')}
            size="lg" 
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-10 py-6 text-lg rounded-full shadow-2xl hover:shadow-pink-500/25 transition-all duration-300 transform hover:scale-105 border border-pink-500/20"
          >
            Acessar o Portal
          </Button>
        </div>
        
        {/* Scroll indicator */}

      </div>

      <style>{`
        @keyframes fadeInOut {
          0%, 100% { opacity: 0.05; }
          50% { opacity: 0.15; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
