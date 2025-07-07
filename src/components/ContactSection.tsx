
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
    <section id="contato" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Dê o primeiro passo em direção ao seu bem-estar
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Nossa equipe está pronta para te acolher. O atendimento pode ser presencial ou online, com a mesma qualidade e sigilo.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <Card className="backdrop-blur-sm bg-white/80 shadow-2xl border-0">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-800">Entre em contato</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    placeholder="Nome"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="h-12"
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
                    className="h-12"
                  />
                </div>
                <div>
                  <Input
                    placeholder="Telefone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="h-12"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Como podemos ajudar?"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="resize-none"
                  />
                </div>
                <Button 
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Enviar mensagem e aguardar contato
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-8">
            <Card className="backdrop-blur-sm bg-white/80 shadow-xl border-0">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4 mb-6">
                  <MapPin className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Endereço</h3>
                    <p className="text-gray-600">
                      Rua das Flores, 123<br />
                      Centro, São Paulo - SP<br />
                      CEP: 01234-567
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 mb-6">
                  <Globe className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Atendimento Online</h3>
                    <p className="text-gray-600">
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
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Contato Direto</h3>
                    <p className="text-gray-600">
                      Telefone: (11) 9 9999-9999<br />
                      E-mail: contato@institutosuavemente.com.br
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-12 w-12 text-gray-500 mx-auto mb-2" />
                <p className="text-gray-600">Mapa do Google Maps será inserido aqui</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
