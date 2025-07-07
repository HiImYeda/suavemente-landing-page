
const FounderSection = () => {
  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-slate-100 mb-8">
            A Visão que nos Guia
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left column - Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl">
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-transparent to-purple-600/20 z-10"></div>
              <img 
                src="/lovable-uploads/314d1ea1-33e8-4cfc-a5aa-9899ae7881b7.png" 
                alt="Roberto Lucena, fundador do Instituto Suavemente"
                className="w-full h-auto rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300 filter grayscale hover:grayscale-0"
              />
              {/* Border glow effect */}
              <div className="absolute inset-0 rounded-2xl border border-blue-500/20 shadow-2xl shadow-blue-500/10"></div>
            </div>
          </div>

          {/* Right column - Content */}
          <div className="space-y-8">
            {/* Pull quote */}
            <blockquote className="relative">
              <div className="absolute -top-4 -left-4 text-6xl text-blue-500/30 font-serif">"</div>
              <p className="text-2xl md:text-3xl font-light text-slate-200 italic leading-relaxed pl-8 pr-4">
                A verdadeira inovação no cuidado não é substituir o humano, mas sim potencializá-lo. É usar as ferramentas de hoje para aprofundar a escuta e o acolhimento que a psicanálise sempre ofereceu.
              </p>
              <div className="absolute -bottom-4 -right-4 text-6xl text-blue-500/30 font-serif rotate-180">"</div>
            </blockquote>

            {/* Description */}
            <div className="pl-8 border-l-2 border-blue-500/30">
              <p className="text-lg text-slate-300 leading-relaxed">
                Como psicanalista e empresário, <span className="text-blue-400 font-semibold">Roberto Lucena</span> fundou o Instituto Suavemente com um propósito claro: criar uma ponte entre a profundidade do cuidado psicanalítico e as necessidades do mundo contemporâneo. Sua visão é a de um cuidado humano, acessível e alinhado aos desafios de hoje, onde a tecnologia serve como uma aliada na promoção da saúde mental.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
