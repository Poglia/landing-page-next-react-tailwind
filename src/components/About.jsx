const About = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-[#D2DCFF]">
      {/* Sobre Nós */}
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
      <h2
        className="text-4xl md:text-5xl font-bold tracking-tighter 
        bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text 
         pt-10 pb-20 sm:px-6 lg:px-8 flex items-center justify-center text-center"
      >
Sobre nós      </h2>
        <p className="mt-4 text-lg text-gray-700 font-bold">
          Especialistas em Direito Médico e Saúde.
        </p>
        <p className="mt-2 text-gray-600">
          Com anos de experiência, nosso escritório já ajudou centenas de
          pacientes a conquistarem seus direitos.
        </p>
        <p className="mt-4 text-lg font-semibold text-gray-900">
          Missão:{" "}
          <span className="text-gray-700">
            Proporcionar acesso à saúde por meio da justiça.
          </span>
        </p>
      </div>

      {/* CTA Final */}
      <div className="mt-12 bg-black py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
        <h2
        className="text-4xl md:text-5xl font-bold tracking-tighter 
        bg-gradient-to-b from-white to-[#001E80] text-transparent bg-clip-text 
         pt-10 pb-20 sm:px-6 lg:px-8 flex items-center justify-center text-center"
      >
        O acesso ao seu tratamento pode estar a um clique de distância.
      </h2>
          <div className="mt-6">
            <a
              href="#"
              className="inline-block bg-white text-black font-semibold text-lg py-3 px-6 rounded-lg shadow hover:bg-blue-100 transition-all"
            >
              Fale com um Advogado Especialista Agora!
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
