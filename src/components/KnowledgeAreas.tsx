
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BrainCircuit, Briefcase, Lightbulb, KeyRound, Youtube } from "lucide-react";

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
      color: "text-blue-600"
    },
    {
      icon: Briefcase,
      title: "Burnout e Estresse Crônico",
      color: "text-purple-600"
    },
    {
      icon: Lightbulb,
      title: "Autoconhecimento e Propósito",
      color: "text-orange-600"
    },
    {
      icon: KeyRound,
      title: "Traumas e Bloqueios",
      color: "text-green-600"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Temas que acolhemos em terapia e exploramos em nosso canal
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Acreditamos que o primeiro passo para a mudança é a compreensão. Em nossas sessões e em nossos conteúdos, abordamos as questões centrais que afetam sua vida e seu bem-estar.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {areas.map((area, index) => (
            <Card key={index} className="text-center p-6 backdrop-blur-sm bg-white/80 shadow-lg border-0 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <CardContent className="pt-6">
                <area.icon className={`h-12 w-12 mx-auto mb-4 ${area.color}`} />
                <h3 className="text-lg font-semibold text-gray-800">{area.title}</h3>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <p className="text-lg text-gray-600 mb-8">
            Quer se aprofundar nesses temas ou iniciar sua jornada de cuidado?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="outline"
              size="lg"
              className="border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white px-8 py-6 text-lg rounded-full transition-all duration-300"
              onClick={() => window.open('https://youtube.com/@institutosuavemente', '_blank')}
            >
              <Youtube className="mr-2 h-5 w-5" />
              Assistir aos conteúdos no YouTube
            </Button>
            <Button 
              onClick={scrollToContact}
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
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
