
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { BarChart3, Users, Shield, TrendingUp } from "lucide-react";

const CorporateDashboard = () => {
  const [activeTab, setActiveTab] = useState("burnout");

  const dashboardContent = {
    burnout: {
      title: "Diagnóstico de Burnout",
      description: "Identifique riscos psicossociais antes que se tornem crises",
      metrics: [
        { label: "Funcionários em risco alto", value: "12%", color: "text-red-500" },
        { label: "Risco moderado", value: "28%", color: "text-yellow-500" },
        { label: "Baixo risco", value: "60%", color: "text-green-500" }
      ]
    },
    workshops: {
      title: "Workshops e Treinamentos",
      description: "Capacite suas equipes com ferramentas de bem-estar",
      metrics: [
        { label: "Satisfação média", value: "9.2/10", color: "text-blue-500" },
        { label: "Participação", value: "87%", color: "text-green-500" },
        { label: "Aplicação prática", value: "76%", color: "text-indigo-500" }
      ]
    },
    relatorios: {
      title: "Relatórios de Impacto",
      description: "Meça o impacto real do seu investimento em bem-estar",
      metrics: [
        { label: "Redução de turnover", value: "-23%", color: "text-green-500" },
        { label: "Aumento de engajamento", value: "+34%", color: "text-blue-500" },
        { label: "ROI do programa", value: "340%", color: "text-purple-500" }
      ]
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contato');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-light text-slate-100 mb-6">
            Saúde mental como estratégia de negócio.
          </h2>
          <p className="text-xl text-slate-300 max-w-4xl mx-auto">
            Nossas soluções vão além do benefício. Oferecemos dados e insights para o RH construir uma cultura de bem-estar, reduzir o turnover e aumentar o engajamento.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left column - Dashboard controls */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-slate-200 mb-6">Painel de Controle</h3>
            
            <Button
              variant={activeTab === "burnout" ? "default" : "outline"}
              onClick={() => setActiveTab("burnout")}
              className={`w-full justify-start h-16 text-left ${
                activeTab === "burnout" 
                  ? "bg-blue-600 hover:bg-blue-700 text-white" 
                  : "border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white"
              }`}
            >
              <BarChart3 className="h-5 w-5 mr-3" />
              <div>
                <div className="font-semibold">Diagnóstico de Burnout</div>
                <div className="text-sm opacity-70">Mapeamento de riscos psicossociais</div>
              </div>
            </Button>

            <Button
              variant={activeTab === "workshops" ? "default" : "outline"}
              onClick={() => setActiveTab("workshops")}
              className={`w-full justify-start h-16 text-left ${
                activeTab === "workshops" 
                  ? "bg-blue-600 hover:bg-blue-700 text-white" 
                  : "border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white"
              }`}
            >
              <Users className="h-5 w-5 mr-3" />
              <div>
                <div className="font-semibold">Workshops</div>
                <div className="text-sm opacity-70">Capacitação e desenvolvimento</div>
              </div>
            </Button>

            <Button
              variant={activeTab === "relatorios" ? "default" : "outline"}
              onClick={() => setActiveTab("relatorios")}
              className={`w-full justify-start h-16 text-left ${
                activeTab === "relatorios" 
                  ? "bg-blue-600 hover:bg-blue-700 text-white" 
                  : "border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white"
              }`}
            >
              <TrendingUp className="h-5 w-5 mr-3" />
              <div>
                <div className="font-semibold">Relatórios de Impacto</div>
                <div className="text-sm opacity-70">Métricas e resultados</div>
              </div>
            </Button>
          </div>

          {/* Right column - Data visualization */}
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
            <div className="mb-6">
              <h4 className="text-2xl font-semibold text-slate-100 mb-2">
                {dashboardContent[activeTab as keyof typeof dashboardContent].title}
              </h4>
              <p className="text-slate-300">
                {dashboardContent[activeTab as keyof typeof dashboardContent].description}
              </p>
            </div>

            <div className="space-y-6">
              {dashboardContent[activeTab as keyof typeof dashboardContent].metrics.map((metric, index) => (
                <div key={index} className="flex justify-between items-center p-4 bg-slate-900/50 rounded-lg">
                  <span className="text-slate-300">{metric.label}</span>
                  <span className={`text-2xl font-bold ${metric.color}`}>
                    {metric.value}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <Button 
                onClick={scrollToContact}
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-6 text-lg rounded-xl"
              >
                Solicitar demonstração
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CorporateDashboard;
