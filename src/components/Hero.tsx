
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { useEffect, useState } from "react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contato');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-950 to-black"></div>
        {/* Neural network-like animated elements */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-cyan-300 rounded-full animate-ping"></div>
        <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-indigo-400 rounded-full animate-pulse delay-500"></div>
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-blue-300 rounded-full animate-ping delay-1000"></div>
        
        {/* Connection lines */}
        <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
          <line x1="20%" y1="20%" x2="80%" y2="40%" stroke="url(#gradient1)" strokeWidth="0.5" className="animate-pulse">
            <animate attributeName="opacity" values="0;1;0" dur="3s" repeatCount="indefinite"/>
          </line>
          <line x1="80%" y1="70%" x2="20%" y2="80%" stroke="url(#gradient2)" strokeWidth="0.5" className="animate-pulse delay-1000">
            <animate attributeName="opacity" values="0;1;0" dur="4s" repeatCount="indefinite"/>
          </line>
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0"/>
              <stop offset="50%" stopColor="#06b6d4" stopOpacity="1"/>
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0"/>
            </linearGradient>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#6366f1" stopOpacity="0"/>
              <stop offset="50%" stopColor="#8b5cf6" stopOpacity="1"/>
              <stop offset="100%" stopColor="#6366f1" stopOpacity="0"/>
            </linearGradient>
          </defs>
        </svg>
      </div>
      
      <div className={`relative z-10 max-w-5xl mx-auto px-6 text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <h1 className="text-6xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-slate-200 via-blue-400 to-cyan-400 bg-clip-text text-transparent leading-tight">
          Decifre sua mente. Transforme seu futuro.
        </h1>
        <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed">
          A união pioneira entre a profundidade da psicanálise e a precisão da inteligência artificial. Uma jornada exclusiva de autoconhecimento começa aqui.
        </p>
        <Button 
          onClick={scrollToContact}
          size="lg" 
          className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 text-white px-10 py-6 text-lg rounded-full shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 border border-blue-500/20"
        >
          Inicie sua jornada
          <ArrowDown className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </section>
  );
};

export default Hero;
