
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";

const VideoSection = () => {
  const [videoUrls, setVideoUrls] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [draggedX, setDraggedX] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const dragThreshold = 50;

  const getYouTubeID = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch('https://automacao-n8n.n4bvdo.easypanel.host/webhook/suavemente_landingpage');
        const data = await response.json();
        console.log('Video data received:', data);
        
        if (data && data.videos) {
          setVideoUrls(data.videos);
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

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        prevSlide();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        nextSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, videoUrls.length]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + videoUrls.length) % videoUrls.length);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % videoUrls.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true);
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    setStartX(clientX);
    if (carouselRef.current) {
      carouselRef.current.style.cursor = 'grabbing';
    }
  };

  const handleDragging = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    setDraggedX(clientX - startX);
  };

  const handleDragEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    
    if (Math.abs(draggedX) > dragThreshold) {
      if (draggedX < 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
    
    setDraggedX(0);
    if (carouselRef.current) {
      carouselRef.current.style.cursor = 'grab';
    }
  };

  const getSlideClass = (index: number) => {
    const diff = index - currentIndex;
    
    if (diff === 0) return 'active';
    if (diff === 1 || (diff === -(videoUrls.length - 1))) return 'next';
    if (diff === -1 || (diff === videoUrls.length - 1)) return 'prev';
    return 'hidden';
  };

  if (loading) {
    return (
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <div className="animate-pulse">
              <div className="h-12 bg-slate-300 rounded w-64 mx-auto mb-4"></div>
              <div className="h-6 bg-slate-300 rounded w-96 mx-auto mb-8"></div>
              <div className="h-80 bg-slate-300 rounded-xl"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <style>{`
        .carousel-wrapper {
          perspective: 1000px;
          cursor: grab;
          user-select: none;
        }
        
        .carousel-track {
          position: relative;
          height: 400px;
          width: 100%;
        }
        
        .video-slide {
          position: absolute;
          left: 50%;
          top: 50%;
          width: 600px;
          height: 340px;
          max-width: 90vw;
          transform-origin: center center;
          transition: all 0.6s cubic-bezier(0.25, 0.1, 0.25, 1);
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
        }
        
        .video-slide iframe {
          pointer-events: none;
          width: 100%;
          height: 100%;
          border: none;
        }
        
        .video-slide.active {
          transform: translate(-50%, -50%) translateZ(0) scale(1);
          z-index: 3;
          opacity: 1;
        }
        
        .video-slide.active iframe {
          pointer-events: auto;
        }
        
        .video-slide.next {
          transform: translate(-30%, -50%) translateZ(-200px) scale(0.8);
          z-index: 2;
          opacity: 0.7;
        }
        
        .video-slide.prev {
          transform: translate(-70%, -50%) translateZ(-200px) scale(0.8);
          z-index: 2;
          opacity: 0.7;
        }
        
        .video-slide.hidden {
          transform: translate(-50%, -50%) translateZ(-400px) scale(0.6);
          z-index: 1;
          opacity: 0;
        }
        
        .carousel-dots {
          display: flex;
          justify-content: center;
          gap: 12px;
          margin-top: 2rem;
        }
        
        .dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: rgba(148, 163, 184, 0.5);
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .dot.active {
          background: rgb(71, 85, 105);
          transform: scale(1.2);
        }
        
        .nav-button {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: white;
          border: 1px solid rgba(148, 163, 184, 0.3);
          color: rgb(71, 85, 105);
          width: 48px;
          height: 48px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          z-index: 4;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        }
        
        .nav-button:hover {
          background: rgb(248, 250, 252);
          transform: translateY(-50%) scale(1.1);
          box-shadow: 0 6px 25px rgba(0, 0, 0, 0.15);
        }
        
        .nav-button.prev {
          left: 10%;
        }
        
        .nav-button.next {
          right: 10%;
        }
        
        @media (max-width: 768px) {
          .video-slide {
            width: 350px;
            height: 200px;
          }
          
          .nav-button.prev {
            left: 5%;
          }
          
          .nav-button.next {
            right: 5%;
          }
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-slate-800 mb-6">
            Conversas que Curam e Esclarecem
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Explore trechos de nossas entrevistas, podcasts e conteúdos educacionais. Uma amostra da profundidade e do cuidado que aplicamos em nosso trabalho.
          </p>
        </div>

        {videoUrls.length > 0 ? (
          <div className="relative">
            <div 
              className="carousel-wrapper"
              ref={carouselRef}
              onMouseDown={handleDragStart}
              onMouseMove={handleDragging}
              onMouseUp={handleDragEnd}
              onMouseLeave={handleDragEnd}
              onTouchStart={handleDragStart}
              onTouchMove={handleDragging}
              onTouchEnd={handleDragEnd}
            >
              <div className="carousel-track">
                {videoUrls.map((url, index) => {
                  const videoId = getYouTubeID(url);
                  return (
                    <div
                      key={index}
                      className={`video-slide ${getSlideClass(index)}`}
                    >
                      {videoId ? (
                        <iframe
                          src={`https://www.youtube.com/embed/${videoId}`}
                          title={`Video ${index + 1}`}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-slate-200 text-slate-400">
                          Vídeo indisponível
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              <button 
                className="nav-button prev"
                onClick={prevSlide}
                aria-label="Vídeo anterior"
              >
                <ChevronLeft size={20} />
              </button>

              <button 
                className="nav-button next"
                onClick={nextSlide}
                aria-label="Próximo vídeo"
              >
                <ChevronRight size={20} />
              </button>
            </div>

            <div className="carousel-dots">
              {videoUrls.map((_, index) => (
                <button
                  key={index}
                  className={`dot ${index === currentIndex ? 'active' : ''}`}
                  onClick={() => goToSlide(index)}
                  aria-label={`Ir para vídeo ${index + 1}`}
                />
              ))}
            </div>
          </div>
        ) : (
          <div className="text-center text-slate-500">
            <p>Nenhum vídeo disponível no momento.</p>
          </div>
        )}

        <div className="text-center mt-12">
          <Button 
            onClick={() => window.open('https://youtube.com/@institutosuavemente', '_blank')}
            size="lg"
            className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-6 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
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
