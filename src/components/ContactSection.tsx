
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Globe } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    toast({
      title: "Mensagem enviada com sucesso!",
      description: "Nossa equipe entrará em contato em breve.",
    });
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contato" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-slate-200 to-blue-400 bg-clip-text text-transparent mb-6">
            Pronto para começar?
          </h2>
          <p className="text-xl text-slate-300 max-w-4xl mx-auto">
            Seu primeiro passo para uma compreensão mais profunda de si mesmo está a uma mensagem de distância.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left column - Form */}
          <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-800 shadow-2xl">
            <h3 className="text-2xl font-semibold text-slate-200 mb-6">Entre em contato</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  placeholder="Nome"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="h-12 bg-slate-800/50 border-slate-700 text-slate-200 placeholder:text-slate-400 focus:border-blue-500 focus:ring-blue-500/20"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="E-mail"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="h-12 bg-slate-800/50 border-slate-700 text-slate-200 placeholder:text-slate-400 focus:border-blue-500 focus:ring-blue-500/20"
                />
              </div>
              <div>
                <Input
                  placeholder="Telefone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="h-12 bg-slate-800/50 border-slate-700 text-slate-200 placeholder:text-slate-400 focus:border-blue-500 focus:ring-blue-500/20"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Como podemos ajudar?"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="resize-none bg-slate-800/50 border-slate-700 text-slate-200 placeholder:text-slate-400 focus:border-blue-500 focus:ring-blue-500/20"
                />
              </div>
              <Button 
                type="submit"
                size="lg"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-6 text-lg rounded-xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 border border-blue-500/20"
              >
                Enviar mensagem e aguardar contato
              </Button>
            </form>
          </div>

          {/* Right column - Info and Map */}
          <div className="space-y-8">
            <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-800 shadow-2xl">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-slate-200 mb-2">Endereço</h3>
                    <p className="text-slate-300">
                      Rua das Flores, 123<br />
                      Centro, São Paulo - SP<br />
                      CEP: 01234-567
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Globe className="h-6 w-6 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-slate-200 mb-2">Atendimento Online</h3>
                    <p className="text-slate-300">
                      Para todo o Brasil e brasileiros no exterior
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex space-x-2">
                    <Phone className="h-6 w-6 text-purple-400 mt-1 flex-shrink-0" />
                    <Mail className="h-6 w-6 text-indigo-400 mt-1 flex-shrink-0" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-200 mb-2">Contato Direto</h3>
                    <p className="text-slate-300">
                      Telefone: (11) 9 9999-9999<br />
                      E-mail: contato@institutosuavemente.com.br
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="bg-slate-800/50 rounded-2xl h-64 flex items-center justify-center border border-slate-700">
              <div className="text-center">
                <MapPin className="h-12 w-12 text-slate-500 mx-auto mb-2" />
                <p className="text-slate-400">Mapa do Google Maps será inserido aqui</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
