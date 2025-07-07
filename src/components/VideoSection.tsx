
import { useState, useEffect } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const VideoSection = () => {
  const [videoUrls, setVideoUrls] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  const getYouTubeID = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch('https://auto-serv-teste.grupoquaestum.com/webhook/suavemente_landingpage');
        const data = await response.json();
        console.log('Video data received:', data);
        
        if (data && data.length > 0 && data[0].videos) {
          setVideoUrls(data[0].videos);
        }
      } catch (error) {
        console.error("Erro ao buscar vídeos:", error);
        // Fallback videos for demo
        setVideoUrls([
          'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
          'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
          'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);

  if (loading) {
    return (
      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <div className="animate-pulse">
              <div className="h-12 bg-slate-800 rounded w-64 mx-auto mb-4"></div>
              <div className="h-6 bg-slate-800 rounded w-96 mx-auto"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-slate-200 to-purple-400 bg-clip-text text-transparent mb-6">
            Sua Jornada em Foco
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Explore insights, entrevistas e conversas profundas que iluminam o caminho do autoconhecimento.
          </p>
        </div>

        {videoUrls.length > 0 ? (
          <div className="relative">
            <Carousel
              opts={{
                align: "center",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-4">
                {videoUrls.map((url, index) => {
                  const videoId = getYouTubeID(url);
                  return (
                    <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                      <div className="group relative">
                        <div className="aspect-video rounded-xl overflow-hidden bg-slate-800 shadow-2xl border border-slate-700 transition-all duration-300 group-hover:border-blue-500/50 group-hover:shadow-blue-500/25">
                          {videoId ? (
                            <iframe
                              src={`https://www.youtube.com/embed/${videoId}`}
                              title={`Video ${index + 1}`}
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                              className="w-full h-full"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center text-slate-400">
                              Vídeo indisponível
                            </div>
                          )}
                        </div>
                      </div>
                    </CarouselItem>
                  );
                })}
              </CarouselContent>
              <CarouselPrevious className="bg-slate-800 border-slate-700 text-slate-200 hover:bg-slate-700" />
              <CarouselNext className="bg-slate-800 border-slate-700 text-slate-200 hover:bg-slate-700" />
            </Carousel>
          </div>
        ) : (
          <div className="text-center text-slate-400">
            <p>Nenhum vídeo disponível no momento.</p>
          </div>
        )}

        <div className="text-center mt-12">
          <Button 
            onClick={() => window.open('https://youtube.com/@institutosuavemente', '_blank')}
            size="lg"
            className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-6 text-lg rounded-full shadow-2xl hover:shadow-red-500/25 transition-all duration-300 transform hover:scale-105"
          >
            Inscreva-se em nosso canal do YouTube
            <ExternalLink className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
