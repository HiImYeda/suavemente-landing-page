
import { useEffect, useState } from "react";
import { Lightbulb, Heart, Shield, Target, Key } from "lucide-react";

const PsychoanalysisSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const insights = [
    {
      icon: Lightbulb,
      title: "Compreender a origem de seus padrões",
      description: "Desvende os mecanismos inconscientes que governam suas decisões e comportamentos."
    },
    {
      icon: Shield,
      title: "Navegar por ansiedade e depressão com clareza",
      description: "Encontre caminhos através da névoa emocional com ferramentas psicanalíticas profundas."
    },
    {
      icon: Heart,
      title: "Construir relacionamentos mais autênticos",
      description: "Transforme suas conexões através do autoconhecimento genuíno e da presença consciente."
    },
    {
      icon: Key,
      title: "Ressignificar traumas e desbloquear seu potencial",
      description: "Liberte-se das amarras do passado e acesse sua verdadeira capacidade de crescimento."
    },
    {
      icon: Target,
      title: "Encontrar propósito além do superficial",
      description: "Descubra sua missão autêntica através da exploração profunda de seus desejos inconscientes."
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % insights.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [insights.length]);

  return (
    <section className="py-24 bg-gradient-to-b from-slate-900 to-slate-950 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-indigo-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-slate-200 to-indigo-400 bg-clip-text text-transparent mb-6 leading-tight">
            A psicanálise não oferece respostas. Ela revela as suas.
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left column - Trigger list */}
          <div className="space-y-6">
            {insights.map((insight, index) => {
              const Icon = insight.icon;
              const isActive = index === activeIndex;
              
              return (
                <div
                  key={index}
                  className={`flex items-start space-x-4 p-6 rounded-xl transition-all duration-500 cursor-pointer ${
                    isActive 
                      ? 'bg-gradient-to-r from-blue-900/50 to-purple-900/50 border border-blue-500/30 shadow-lg shadow-blue-500/20' 
                      : 'bg-slate-800/30 border border-slate-700/50 hover:bg-slate-800/50'
                  }`}
                  onClick={() => setActiveIndex(index)}
                >
                  <div className={`flex-shrink-0 p-3 rounded-full transition-all duration-300 ${
                    isActive 
                      ? 'bg-gradient-to-br from-blue-500 to-purple-600 shadow-lg shadow-blue-500/25' 
                      : 'bg-slate-700'
                  }`}>
                    <Icon className={`h-6 w-6 ${isActive ? 'text-white' : 'text-slate-300'}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className={`text-xl font-semibold mb-2 transition-colors duration-300 ${
                      isActive ? 'text-white' : 'text-slate-200'
                    }`}>
                      {insight.title}
                    </h3>
                    <p className={`text-slate-400 transition-all duration-300 ${
                      isActive ? 'opacity-100' : 'opacity-70'
                    }`}>
                      {insight.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right column - Visual representation */}
          <div className="flex justify-center">
            <div className="relative w-96 h-96">
              {/* Central core */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-600 rounded-full flex items-center justify-center shadow-2xl shadow-purple-500/25 relative">
                  <div className="w-20 h-20 bg-gradient-to-br from-white/20 to-white/10 rounded-full backdrop-blur-sm"></div>
                  {/* Pulse effect */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 animate-ping opacity-20"></div>
                </div>
              </div>

              {/* Orbiting elements */}
              {insights.map((_, index) => {
                const angle = (index * 72) - 90; // 360/5 = 72 degrees between each
                const radius = 140;
                const x = Math.cos(angle * Math.PI / 180) * radius;
                const y = Math.sin(angle * Math.PI / 180) * radius;
                const isActive = index === activeIndex;

                return (
                  <div
                    key={index}
                    className="absolute transition-all duration-500"
                    style={{
                      left: '50%',
                      top: '50%',
                      transform: `translate(${x}px, ${y}px) translate(-50%, -50%) scale(${isActive ? 1.2 : 1})`,
                    }}
                  >
                    <div className={`w-12 h-12 rounded-full transition-all duration-500 ${
                      isActive 
                        ? 'bg-gradient-to-br from-cyan-400 to-blue-500 shadow-lg shadow-cyan-400/50' 
                        : 'bg-slate-600'
                    }`}>
                      {isActive && (
                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 animate-ping opacity-30"></div>
                      )}
                    </div>
                    {/* Connection line to center */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{
                      width: Math.abs(x) + 100,
                      height: Math.abs(y) + 100,
                      left: x < 0 ? x - 50 : -50,
                      top: y < 0 ? y - 50 : -50,
                    }}>
                      <line
                        x1={x < 0 ? Math.abs(x) + 50 : 50}
                        y1={y < 0 ? Math.abs(y) + 50 : 50}
                        x2={x < 0 ? 50 : Math.abs(x) + 50}
                        y2={y < 0 ? 50 : Math.abs(y) + 50}
                        stroke={isActive ? "#06b6d4" : "#475569"}
                        strokeWidth={isActive ? "2" : "1"}
                        opacity={isActive ? "0.8" : "0.3"}
                        className="transition-all duration-500"
                      />
                    </svg>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PsychoanalysisSection;
