
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { MapPin, Phone, Mail, Globe } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactFAQ = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
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
    <section id="contato" className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-light text-slate-800 mb-6">
            Vamos conversar?
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto">
            Seja para iniciar sua terapia ou para transformar a cultura da sua empresa, estamos aqui para ouvir.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left column - Contact form */}
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-slate-200">
            <h3 className="text-2xl font-semibold text-slate-800 mb-6">Entre em contato</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  placeholder="Nome"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="h-12 bg-slate-50 border-slate-300 text-slate-800 placeholder:text-slate-500 focus:border-blue-500 focus:ring-blue-500/20"
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
                  className="h-12 bg-slate-50 border-slate-300 text-slate-800 placeholder:text-slate-500 focus:border-blue-500 focus:ring-blue-500/20"
                />
              </div>
              <div>
                <Input
                  placeholder="Telefone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="h-12 bg-slate-50 border-slate-300 text-slate-800 placeholder:text-slate-500 focus:border-blue-500 focus:ring-blue-500/20"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Como podemos ajudar?"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="resize-none bg-slate-50 border-slate-300 text-slate-800 placeholder:text-slate-500 focus:border-blue-500 focus:ring-blue-500/20"
                />
              </div>
              <Button 
                type="submit"
                size="lg"
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Enviar mensagem e aguardar contato
              </Button>
            </form>
          </div>

          {/* Right column - Info and FAQ */}
          <div className="space-y-8">
            {/* Contact info */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-slate-200">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-slate-800 mb-2">Endereço</h3>
                    <p className="text-slate-600">
                      Rua das Flores, 123<br />
                      Centro, São Paulo - SP<br />
                      CEP: 01234-567
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Globe className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-slate-800 mb-2">Atendimento Online</h3>
                    <p className="text-slate-600">
                      Para todo o Brasil e brasileiros no exterior
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex space-x-2">
                    <Phone className="h-6 w-6 text-purple-600 mt-1 flex-shrink-0" />
                    <Mail className="h-6 w-6 text-indigo-600 mt-1 flex-shrink-0" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-800 mb-2">Contato Direto</h3>
                    <p className="text-slate-600">
                      Telefone: (11) 9 9999-9999<br />
                      E-mail: contato@institutosuavemente.com.br
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-slate-200">
              <h3 className="text-2xl font-semibold text-slate-800 mb-6">Perguntas Frequentes</h3>
              <Accordion type="single" collapsible className="space-y-2">
                <AccordionItem value="item-1" className="border border-slate-200 rounded-lg">
                  <AccordionTrigger className="text-slate-800 hover:text-blue-600 px-4 py-3 text-left">
                    Como funciona a primeira sessão?
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 px-4 pb-3">
                    A primeira sessão é um momento de acolhimento e escuta, onde você poderá compartilhar suas questões e conhecer nossa abordagem terapêutica.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="border border-slate-200 rounded-lg">
                  <AccordionTrigger className="text-slate-800 hover:text-blue-600 px-4 py-3 text-left">
                    Vocês atendem por convênio?
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 px-4 pb-3">
                    Trabalhamos com reembolso de convênios. Entre em contato para verificar as condições do seu plano de saúde.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="border border-slate-200 rounded-lg">
                  <AccordionTrigger className="text-slate-800 hover:text-blue-600 px-4 py-3 text-left">
                    Como a confidencialidade é garantida?
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 px-4 pb-3">
                    Seguimos rigorosamente o código de ética da psicanálise, garantindo sigilo absoluto sobre tudo que é compartilhado em sessão.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="border border-slate-200 rounded-lg">
                  <AccordionTrigger className="text-slate-800 hover:text-blue-600 px-4 py-3 text-left">
                    Qual a diferença entre terapia online e presencial?
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 px-4 pb-3">
                    Ambas as modalidades oferecem a mesma qualidade terapêutica. A escolha depende da sua preferência e disponibilidade.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFAQ;
