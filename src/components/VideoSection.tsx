
import { Button } from "@/components/ui/button";
import { Youtube } from "lucide-react";

const VideoSection = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Suavemente em Vídeo
          </h2>
          <p className="text-xl text-gray-300">
            Conteúdos para inspirar, informar e acolher.
          </p>
        </div>

        <div className="aspect-video bg-gray-800 rounded-lg mb-8 flex items-center justify-center">
          <div className="text-center">
            <Youtube className="h-24 w-24 text-red-500 mx-auto mb-4" />
            <p className="text-gray-400 text-lg">
              Playlist do Instituto Suavemente
            </p>
            <p className="text-gray-500 text-sm">
              Embed da playlist será inserido aqui
            </p>
          </div>
        </div>

        <div className="text-center">
          <Button 
            size="lg"
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            onClick={() => window.open('https://youtube.com/@institutosuavemente', '_blank')}
          >
            <Youtube className="mr-2 h-5 w-5" />
            Inscreva-se em nosso canal do YouTube
          </Button>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
