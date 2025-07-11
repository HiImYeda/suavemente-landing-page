
import { HeartHandshake, Scale, Users } from "lucide-react";

const PillarsSection = () => {
  const pillars = [
    {
      icon: HeartHandshake,
      title: "Cuidado Acessível",
      description: "Acreditamos que o cuidado com a saúde mental é um direito, não um privilégio. Parte dos valores arrecadados junto às empresas parceiras é revertida para subsidiar o atendimento psicoterapêutico de pessoas sem condições financeiras."
    },
    {
      icon: Scale,
      title: "Rigor Clínico & Ética",
      description: "A nossa prática é fundamentada no conhecimento psicanalítico e num compromisso inabalável com o bem-estar e o sigilo dos nossos pacientes. Oferecemos uma equipa experiente de Psicólogos, Psicopedagogos e Psicanalistas."
    },
    {
      icon: Users,
      title: "Amor & Dedicação",
      description: "Mais do que uma empresa, somos um projeto de acolhimento. Cada interação é guiada pelo desejo genuíno de fazer a diferença, com o amor e a dedicação que cada ser humano merece."
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-light text-slate-800 mb-6">
            O que nos move
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => {
            const IconComponent = pillar.icon;
            return (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full flex items-center justify-center mb-4">
                    <IconComponent className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-semibold text-slate-800 mb-4">
                    {pillar.title}
                  </h3>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PillarsSection;
