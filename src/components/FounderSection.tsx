
const FounderSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <img 
              src="/lovable-uploads/314d1ea1-33e8-4cfc-a5aa-9899ae7881b7.png" 
              alt="Roberto Lucena, fundador do Instituto Suavemente"
              className="w-full h-auto rounded-lg shadow-2xl"
            />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Conheça o fundador do Instituto Suavemente
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Roberto Lucena, empresário com mais de 30 anos de experiência, sentiu a necessidade de um cuidado mais humano e acessível em saúde mental. Inspirado pelos desafios da depressão e da ansiedade observados em seu meio, decidiu criar o Instituto Suavemente com a missão de acolher e oferecer suporte psicológico de qualidade. Sua visão empreendedora, aliada à sua sensibilidade e compromisso com o bem-estar, são os pilares que sustentam nosso trabalho.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
