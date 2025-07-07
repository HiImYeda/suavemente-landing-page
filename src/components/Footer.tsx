
import { Instagram, Facebook, Youtube, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-300 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">
              Instituto Suavemente
            </h3>
            <p className="text-slate-400 leading-relaxed max-w-md">
              Acolhendo sua mente, transformando seu futuro. Psicanálise e inovação trabalhando juntas pelo seu bem-estar.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Navegação</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#nossa-abordagem" 
                  className="hover:text-blue-400 transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('nossa-abordagem')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Nossa Abordagem
                </a>
              </li>
              <li>
                <a 
                  href="#contato" 
                  className="hover:text-blue-400 transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Contato
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Para Empresas
                </a>
              </li>
            </ul>
          </div>

          {/* Social media */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Redes Sociais</h4>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/institutosuavemente/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-slate-800 rounded-lg hover:bg-slate-700 hover:text-pink-400 transition-all duration-200"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="https://www.facebook.com/institutosuavemente/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-slate-800 rounded-lg hover:bg-slate-700 hover:text-blue-400 transition-all duration-200"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="https://www.youtube.com/@institutosuavemente6253"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-slate-800 rounded-lg hover:bg-slate-700 hover:text-red-400 transition-all duration-200"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 text-center">
          <p className="text-slate-500">
            © 2025 Instituto Suavemente. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
