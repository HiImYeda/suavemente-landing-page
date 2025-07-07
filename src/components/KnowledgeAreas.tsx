
import { Button } from "@/components/ui/button";
import { BrainCircuit, Briefcase, Heart, Lightbulb, Key, ExternalLink } from "lucide-react";

const KnowledgeAreas = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contato');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const areas = [
    {
      icon: BrainCircuit,
      title: "Depressão e Ansiedade",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Briefcase,
      title: "Burnout e Estresse Crônico",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Heart,
      title: "Relacionamentos",
      color: "from-red-500 to-rose-500"
    },
    {
      icon: Lightbulb,
      title: "Autoconhecimento e Propósito",
      color: "from-amber-500 to-orange-500"
    },
    {
      icon: Key,
      title: "Traumas e Bloqueios",
      color: "from-indigo-500 to-purple-500"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-slate-950 to-slate-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-slate-200 to-purple-400 bg-clip-text text-transparent mb-6">
            Temas que acolhemos em terapia e exploramos em nosso canal
          </h2>
          <p className="text-xl text-slate-300 max-w-4xl mx-auto">
            Acreditamos que o primeiro passo para a mudança é a compreensão. Em nossas sessões e em nossos conteúdos, abordamos as questões centrais que afetam sua vida e seu bem-estar.
          </p>
        </div>

        {/* Areas grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {areas.map((area, index) => {
            const Icon = area.icon;
            return (
              <div 
                key={index}
                className="group relative bg-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-800 hover:border-slate-700 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="text-center">
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${area.color} mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-200 group-hover:text-white transition-colors duration-300">
                    {area.title}
                  </h3>
                </div>
                
                {/* Hover effect overlay */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-transparent via-transparent to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            );
          })}
        </div>

        {/* Call to action */}
        <div className="text-center space-y-8">
          <p className="text-xl text-slate-300">
            Quer se aprofundar nesses temas ou iniciar sua jornada de cuidado?
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-2xl mx-auto">
            <Button 
              onClick={() => window.open('https://youtube.com/@institutosuavemente', '_blank')}
              variant="outline"
              size="lg"
              className="border-2 border-red-500 text-red-400 hover:bg-red-500 hover:text-white px-8 py-6 text-lg rounded-full transition-all duration-300 bg-transparent flex-1 sm:flex-none"
            >
              Assistir aos conteúdos no YouTube
              <ExternalLink className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              onClick={scrollToContact}
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-6 text-lg rounded-full shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 border border-blue-500/20 flex-1 sm:flex-none"
            >
              Quero iniciar minha terapia
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KnowledgeAreas;
