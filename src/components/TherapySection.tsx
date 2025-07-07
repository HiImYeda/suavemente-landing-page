
import { Button } from "@/components/ui/button";
import { Ear, Lock, BrainCircuit } from "lucide-react";

const TherapySection = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contato');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="terapia-individual" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-slate-800 mb-6">
            Um espaço seguro para ser quem você é.
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Acreditamos no poder da escuta qualificada e do vínculo terapêutico. Em um ambiente de sigilo absoluto e sem julgamentos, te ajudamos a explorar suas questões, ressignificar suas histórias e construir um futuro mais leve e autêntico.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left column - Nossa Abordagem */}
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-slate-200">
            <h3 className="text-2xl font-bold text-slate-800 mb-8">Nossa Abordagem</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 p-3 bg-blue-100 rounded-xl">
                  <Ear className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-slate-800 mb-2">Escuta Ativa e Acolhedora</h4>
                  <p className="text-slate-600">Mais do que ouvir, buscamos compreender a fundo suas dores e desejos.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 p-3 bg-green-100 rounded-xl">
                  <Lock className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-slate-800 mb-2">Sigilo e Confiança</h4>
                  <p className="text-slate-600">Um ambiente protegido para você se expressar livremente.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 p-3 bg-purple-100 rounded-xl">
                  <BrainCircuit className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-slate-800 mb-2">Profundidade Psicanalítica</h4>
                  <p className="text-slate-600">Vamos além dos sintomas para encontrar as raízes das suas questões.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right column - Benefícios */}
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-slate-200">
            <h3 className="text-2xl font-bold text-slate-800 mb-8">Benefícios para sua Vida</h3>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-slate-700">Lidar com ansiedade, estresse e depressão.</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-slate-700">Melhorar seus relacionamentos pessoais e profissionais.</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span className="text-slate-700">Superar traumas, bloqueios e medos.</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                <span className="text-slate-700">Desenvolver o autoconhecimento e a autoestima.</span>
              </li>
            </ul>
            
            <Button 
              onClick={scrollToContact}
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Agende sua primeira conversa
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TherapySection;
