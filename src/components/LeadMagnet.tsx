
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { FileText, Download, Shield } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const LeadMagnet = () => {
  const [leadData, setLeadData] = useState({ name: '', email: '', company: '' });
  const [showForm, setShowForm] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Lead magnet form submitted:', leadData);
    toast({
      title: "Download iniciado!",
      description: "O Checklist foi enviado para seu e-mail. Verifique também a caixa de spam.",
    });
    setLeadData({ name: '', email: '', company: '' });
    setShowForm(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLeadData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  if (showForm) {
    return (
      <section className="py-24 bg-slate-900">
        <div className="max-w-2xl mx-auto px-6">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-light text-slate-100 mb-4">
              Baixar o Checklist
            </h2>
            <p className="text-lg text-slate-300">
              Preencha os dados abaixo para receber o material gratuito
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
            <div className="space-y-6">
              <Input
                placeholder="Nome completo"
                name="name"
                value={leadData.name}
                onChange={handleChange}
                required
                className="h-12 bg-slate-700/50 border-slate-600 text-slate-100 placeholder:text-slate-400"
              />
              <Input
                type="email"
                placeholder="E-mail corporativo"
                name="email"
                value={leadData.email}
                onChange={handleChange}
                required
                className="h-12 bg-slate-700/50 border-slate-600 text-slate-100 placeholder:text-slate-400"
              />
              <Input
                placeholder="Empresa"
                name="company"
                value={leadData.company}
                onChange={handleChange}
                required
                className="h-12 bg-slate-700/50 border-slate-600 text-slate-100 placeholder:text-slate-400"
              />
              <div className="flex gap-4">
                <Button 
                  type="submit"
                  size="lg"
                  className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-6 text-lg rounded-xl"
                >
                  <Download className="h-5 w-5 mr-2" />
                  Baixar Agora
                </Button>
                <Button 
                  type="button"
                  variant="outline"
                  size="lg"
                  onClick={() => setShowForm(false)}
                  className="border-slate-600 text-slate-300 hover:bg-slate-800 py-6 px-8"
                >
                  Voltar
                </Button>
              </div>
            </div>
          </form>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left column - Visual */}
          <div className="flex justify-center">
            <div className="relative">
              {/* Document mockup */}
              <div className="w-80 h-96 bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl p-8 shadow-2xl border border-slate-600 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="flex items-center mb-6">
                  <FileText className="h-8 w-8 text-blue-400 mr-3" />
                  <div>
                    <div className="text-lg font-semibold text-slate-100">Checklist NR-1</div>
                    <div className="text-sm text-slate-400">Riscos Psicossociais</div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="h-2 bg-slate-600 rounded w-full"></div>
                  <div className="h-2 bg-slate-600 rounded w-4/5"></div>
                  <div className="h-2 bg-slate-600 rounded w-full"></div>
                  <div className="h-2 bg-slate-600 rounded w-3/4"></div>
                  
                  <div className="mt-8 p-4 bg-blue-600/20 rounded-lg border border-blue-500/30">
                    <div className="flex items-center mb-2">
                      <Shield className="h-4 w-4 text-blue-400 mr-2" />
                      <span className="text-sm font-medium text-blue-400">Conformidade</span>
                    </div>
                    <div className="h-1.5 bg-slate-600 rounded w-full"></div>
                    <div className="h-1.5 bg-slate-600 rounded w-2/3 mt-2"></div>
                  </div>
                </div>
              </div>
              
              {/* Floating badge */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                GRATUITO
              </div>
            </div>
          </div>

          {/* Right column - Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-5xl font-light text-slate-100 mb-6">
                Recurso Gratuito para o RH Estratégico
              </h2>
              <h3 className="text-2xl font-semibold text-blue-400 mb-6">
                O Checklist Definitivo para Conformidade com a NR-1: Mapeamento de Riscos Psicossociais
              </h3>
              <p className="text-xl text-slate-300 leading-relaxed">
                Faça o download do nosso guia prático e garanta que sua empresa esteja preparada para criar um ambiente de trabalho psicologicamente mais seguro.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-slate-300">Framework completo para identificação de riscos</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-slate-300">Planilhas prontas para uso imediato</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-slate-300">Casos práticos e exemplos reais</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-slate-300">Conformidade total com a legislação vigente</span>
              </div>
            </div>

            <Button 
              onClick={() => setShowForm(true)}
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-10 py-6 text-lg rounded-full shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105"
            >
              <Download className="h-5 w-5 mr-2" />
              Baixar o Checklist Agora
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadMagnet;
