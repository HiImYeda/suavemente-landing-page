
import { Instagram, Facebook, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-16 bg-slate-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Logo column */}
          <div className="space-y-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-slate-200 to-blue-400 bg-clip-text text-transparent">
              Instituto Suavemente
            </div>
            <p className="text-slate-400 leading-relaxed">
              Acolhimento, escuta e a profundidade da psicanálise para você encontrar suas respostas e transformar sua vida.
            </p>
          </div>

          {/* Navigation column */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-slate-200">Navegação</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="#terapia-individual" 
                  className="text-slate-400 hover:text-blue-400 transition-colors duration-200"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('terapia-individual')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Para Você
                </a>
              </li>
              <li>
                <a 
                  href="#empresas" 
                  className="text-slate-400 hover:text-blue-400 transition-colors duration-200"
                >
                  Para Empresas
                </a>
              </li>
              <li>
                <a 
                  href="#contato" 
                  className="text-slate-400 hover:text-blue-400 transition-colors duration-200"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Social column */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-slate-200">Redes Sociais</h3>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/institutosuavemente/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-slate-800 rounded-full hover:bg-slate-700 transition-colors duration-200 group"
              >
                <Instagram className="h-5 w-5 text-slate-400 group-hover:text-pink-400" />
              </a>
              <a 
                href="https://www.facebook.com/institutosuavemente/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-slate-800 rounded-full hover:bg-slate-700 transition-colors duration-200 group"
              >
                <Facebook className="h-5 w-5 text-slate-400 group-hover:text-blue-400" />
              </a>
              <a 
                href="https://www.youtube.com/@institutosuavemente6253" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-slate-800 rounded-full hover:bg-slate-700 transition-colors duration-200 group"
              >
                <Youtube className="h-5 w-5 text-slate-400 group-hover:text-red-400" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright line */}
        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-slate-400 text-sm">
              © 2025 Instituto Suavemente. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-slate-400 hover:text-slate-300 transition-colors duration-200">
                Política de Privacidade
              </a>
              <a href="#" className="text-slate-400 hover:text-slate-300 transition-colors duration-200">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
