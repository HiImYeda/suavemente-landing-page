
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  // Form state
  const [email, setEmail] = useState("");
  const [ddi, setDdi] = useState("55");
  const [whatsNumber, setWhatsNumber] = useState("");
  const [tipo, setTipo] = useState<string | undefined>(undefined);
  const [mensagem, setMensagem] = useState("");
  const { toast } = useToast();
  const [openDialog, setOpenDialog] = useState(false);

  const sendForm = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await fetch("https://automacao-n8n.n4bvdo.easypanel.host/webhook/entrar_contato", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, whatsapp: `+${ddi}${whatsNumber}`, tipo, mensagem }),
      });
      toast({ title: "Enviado!", description: "Em breve entraremos em contato." });
      // reset form
      setEmail("");
      setWhatsNumber("");
      setTipo(undefined);
      setMensagem("");
      setOpenDialog(false);
    } catch (err) {
      toast({ title: "Erro", description: "Não foi possível enviar. Tente novamente." });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div 
            className="flex items-center cursor-pointer"
            onClick={() => scrollToSection('hero')}
          >
            <img 
              src="/lovable-uploads/7161044e-a100-416f-a822-2dd36dd4606d.png" 
              alt="Instituto Suavemente" 
              className="h-8 w-auto"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Botão Acessar Portal */}
            <Button
              onClick={() => window.open("https://portalsuavemente.com.br/login", "_blank")}
              size="sm"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
            >
              Acessar Portal
            </Button>

            {/* Dialog Fale Conosco */}
            <Dialog open={openDialog} onOpenChange={setOpenDialog}>
              <DialogTrigger asChild>
                <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
                  Fale Conosco
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Fale Conosco</DialogTitle>
                </DialogHeader>
                <form onSubmit={sendForm} className="space-y-4 mt-4">
                  <Input
                    type="email"
                    placeholder="Seu e-mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <div className="flex gap-2">
                    <Input
                      type="text"
                      value={ddi}
                      onChange={(e) => setDdi(e.target.value)}
                      className="w-16"
                    />
                    <Input
                      type="text"
                      placeholder="DDD + Número"
                      value={whatsNumber}
                      onChange={(e) => setWhatsNumber(e.target.value)}
                      required
                    />
                  </div>
                  <Select value={tipo} onValueChange={setTipo as any}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Selecione o tipo de atendimento" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="empresa">Empresa</SelectItem>
                      <SelectItem value="pessoal">Atendimento Pessoal</SelectItem>
                    </SelectContent>
                  </Select>
                  <Textarea
                    placeholder="Como podemos ajudar?"
                    value={mensagem}
                    onChange={(e) => setMensagem(e.target.value)}
                    required
                  />
                  <DialogFooter>
                    <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                      Enviar
                    </Button>
                  </DialogFooter>
                </form>
              </DialogContent>
            </Dialog>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-md ${
                isScrolled ? 'text-slate-700' : 'text-white'
              }`}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t shadow-lg">
            <div className="px-4 py-4 space-y-4">
              <Button
                onClick={() => window.open("https://portalsuavemente.com.br/login", "_blank")}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
              >
                Acessar Portal
              </Button>

              <Dialog open={openDialog} onOpenChange={setOpenDialog}>
                <DialogTrigger asChild>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    Fale Conosco
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Fale Conosco</DialogTitle>
                  </DialogHeader>
                  <form onSubmit={sendForm} className="space-y-4 mt-4">
                    <Input
                      type="email"
                      placeholder="Seu e-mail"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    <div className="flex gap-2">
                      <Input
                        type="text"
                        value={ddi}
                        onChange={(e) => setDdi(e.target.value)}
                        className="w-16"
                      />
                      <Input
                        type="text"
                        placeholder="DDD + Número"
                        value={whatsNumber}
                        onChange={(e) => setWhatsNumber(e.target.value)}
                        required
                      />
                    </div>
                    <Select value={tipo} onValueChange={setTipo as any}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Selecione o tipo de atendimento" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="empresa">Empresa</SelectItem>
                        <SelectItem value="pessoal">Atendimento Pessoal</SelectItem>
                      </SelectContent>
                    </Select>
                    <Textarea
                      placeholder="Como podemos ajudar?"
                      value={mensagem}
                      onChange={(e) => setMensagem(e.target.value)}
                      required
                    />
                    <DialogFooter>
                      <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                        Enviar
                      </Button>
                    </DialogFooter>
                  </form>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
