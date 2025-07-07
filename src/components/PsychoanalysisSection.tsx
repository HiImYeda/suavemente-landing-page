
import { BrainCircuit } from "lucide-react";

const PsychoanalysisSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              O que é a Psicanálise?
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              A psicanálise é uma abordagem que busca a origem dos nossos sofrimentos e conflitos no inconsciente. Através da fala livre, em um ambiente seguro e sem julgamentos, você é convidado a explorar suas memórias, sonhos e angústias. O objetivo não é apenas aliviar os sintomas, mas promover um autoconhecimento profundo, que permita uma transformação real e duradoura na forma como você se relaciona consigo mesmo, com os outros e com o mundo.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="w-64 h-64 bg-white/60 backdrop-blur-sm rounded-full flex items-center justify-center shadow-2xl">
              <div className="w-32 h-32 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-full flex items-center justify-center">
                <BrainCircuit className="h-16 w-16 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PsychoanalysisSection;
