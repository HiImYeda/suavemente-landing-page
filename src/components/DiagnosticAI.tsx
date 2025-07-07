
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Target, BarChart, ShieldCheck } from "lucide-react";

const DiagnosticAI = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contato');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Uma Inovação Científica na Saúde Mental Ocupacional
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Apresentamos nosso Diagnóstico de Burnout com Inteligência Artificial, uma ferramenta precisa e estratégica para empresas que se preocupam com seus colaboradores.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="backdrop-blur-sm bg-white/80 shadow-2xl border-0 hover:shadow-3xl transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-800">A Metodologia</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 leading-relaxed">
                Nosso sistema pioneiro integra a <strong>psicanálise freudiana com inteligência artificial</strong> para ir além dos sintomas e entender as causas do estresse no ambiente de trabalho. Através de um questionário estruturado, nosso sistema realiza uma análise quantitativa e qualitativa, mapeando mecanismos de defesa e padrões de comportamento para entregar um relatório estratégico com classificação de risco e recomendações preventivas.
              </p>
            </CardContent>
          </Card>

          <Card className="backdrop-blur-sm bg-white/80 shadow-2xl border-0 hover:shadow-3xl transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-800">Benefícios para sua Empresa</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-gray-800">Diagnóstico Precoce:</strong>
                    <span className="text-gray-600"> Identifique riscos antes que o esgotamento se instale.</span>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Target className="h-6 w-6 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-gray-800">Intervenções Personalizadas:</strong>
                    <span className="text-gray-600"> Crie ações de bem-estar direcionadas e eficientes.</span>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <BarChart className="h-6 w-6 text-purple-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-gray-800">Prevenção Sistêmica:</strong>
                    <span className="text-gray-600"> Identifique e corrija padrões organizacionais que geram desgaste.</span>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <ShieldCheck className="h-6 w-6 text-indigo-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-gray-800">Redução do Estigma:</strong>
                    <span className="text-gray-600"> Ofereça uma análise técnica, sigilosa e sem julgamentos.</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <Button 
            onClick={scrollToContact}
            variant="outline" 
            size="lg"
            className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-6 text-lg rounded-full transition-all duration-300"
          >
            Solicitar uma apresentação para sua empresa
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DiagnosticAI;
