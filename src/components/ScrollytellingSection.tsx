
import { useEffect, useState, useRef } from "react";

const ScrollytellingSection = () => {
  const [currentAct, setCurrentAct] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  const acts = [
    {
      title: "O Ruído do Mundo",
      content: "Vivemos em um mundo que exige muito. A pressão por performance, as incertezas, as relações complexas... Em meio a tanto ruído, a voz mais importante muitas vezes se perde: a sua."
    },
    {
      title: "A Pausa para a Escuta",
      content: "Acreditamos que a transformação começa com a pausa. Com a coragem de olhar para dentro, guiado por uma escuta qualificada, empática e livre de julgamentos. Este é o coração da psicanálise."
    },
    {
      title: "A Tecnologia como Aliada",
      content: "Para nós, a inovação não substitui o humano; ela o potencializa. Usamos a tecnologia para tornar o cuidado mais acessível e para oferecer novas ferramentas de autoconhecimento, como nosso diagnóstico de burnout."
    },
    {
      title: "O Florescer",
      content: "Nosso objetivo final é um só: que você se reconecte com sua essência, encontre clareza para seus dilemas e tenha as ferramentas para construir uma vida mais autêntica e significativa. Sua jornada é única. Nós estamos aqui para caminhá-la com você."
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionHeight = rect.height;
      const scrollProgress = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / (window.innerHeight + sectionHeight)));
      
      const newAct = Math.floor(scrollProgress * acts.length);
      if (newAct !== currentAct && newAct < acts.length) {
        setCurrentAct(newAct);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentAct, acts.length]);

  return (
    <section id="nossa-abordagem" ref={sectionRef} className="min-h-screen bg-gray-50 relative">
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-light text-slate-800 mb-6">
            Nossa Abordagem
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[600px]">
          {/* Left column - Text content */}
          <div className="space-y-8">
            {acts.map((act, index) => (
              <div 
                key={index}
                className={`transition-all duration-700 ${
                  index === currentAct 
                    ? 'opacity-100 transform translate-x-0' 
                    : 'opacity-30 transform translate-x-4'
                }`}
              >
                <h3 className="text-2xl font-semibold text-slate-800 mb-4">
                  {act.title}
                </h3>
                <p className="text-lg text-slate-600 leading-relaxed">
                  {act.content}
                </p>
              </div>
            ))}
          </div>

          {/* Right column - Visual evolution */}
          <div className="flex items-center justify-center">
            <div className="relative w-80 h-80">
              {/* Base circle that evolves */}
              <div className={`absolute inset-0 transition-all duration-1000 ${
                currentAct >= 0 ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
              }`}>
                <div className="w-4 h-4 bg-blue-500 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
              </div>

              {/* Connecting lines */}
              <svg className={`absolute inset-0 w-full h-full transition-all duration-1000 ${
                currentAct >= 1 ? 'opacity-100' : 'opacity-0'
              }`}>
                <line x1="50%" y1="50%" x2="25%" y2="25%" stroke="#3b82f6" strokeWidth="2" opacity="0.7"/>
                <line x1="50%" y1="50%" x2="75%" y2="25%" stroke="#3b82f6" strokeWidth="2" opacity="0.7"/>
                <line x1="50%" y1="50%" x2="25%" y2="75%" stroke="#3b82f6" strokeWidth="2" opacity="0.7"/>
                <line x1="50%" y1="50%" x2="75%" y2="75%" stroke="#3b82f6" strokeWidth="2" opacity="0.7"/>
              </svg>

              {/* Technology nodes */}
              <div className={`absolute inset-0 transition-all duration-1000 ${
                currentAct >= 2 ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
              }`}>
                <div className="w-3 h-3 bg-cyan-500 rounded-full absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2"></div>
                <div className="w-3 h-3 bg-cyan-500 rounded-full absolute top-1/4 right-1/4 transform translate-x-1/2 -translate-y-1/2"></div>
                <div className="w-3 h-3 bg-cyan-500 rounded-full absolute bottom-1/4 left-1/4 transform -translate-x-1/2 translate-y-1/2"></div>
                <div className="w-3 h-3 bg-cyan-500 rounded-full absolute bottom-1/4 right-1/4 transform translate-x-1/2 translate-y-1/2"></div>
              </div>

              {/* Flourishing pattern */}
              <div className={`absolute inset-0 transition-all duration-1000 ${
                currentAct >= 3 ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
              }`}>
                <div className="absolute inset-0 border-2 border-indigo-400 rounded-full opacity-30 animate-pulse"></div>
                <div className="absolute inset-4 border-2 border-purple-400 rounded-full opacity-40 animate-pulse delay-500"></div>
                <div className="absolute inset-8 border-2 border-pink-400 rounded-full opacity-50 animate-pulse delay-1000"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScrollytellingSection;
