import Card from "./components/Card";

export const Cards = () => {
  return (
    <section className=" bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] py-24 ">
      <div className="container mx-auto">
         <h2
            className="text-4xl md:text-5xl font-bold tracking-tighter 
            bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text 
            mt-5 py-10 px-4 sm:px-6 lg:px-8 flex items-center justify-center text-center"
        >
         Conheça seus direitos{" "}
        </h2>
        <p className="text-xl text-[#010D3E] tracking-tight px-4 sm:px-6 lg:px-28 pb-10 text-center">
        Negativas de planos de saúde ou do SUS não devem impedir seu tratamento. Descubra como podemos ajudar e quais negativas podem ser revertidas.
        </p>
        <div className="flex md:flex-row flex-col gap-5 sm:gap-2 items-center justify-center">
          <Card
            title="Perguntas Frequentes"
            description="Se o plano de saúde negou um medicamento ou tratamento essencial prescrito pelo seu médico, essa recusa pode ser abusiva e ilegal. Com orientação, é possível garantir seus direitos."
          />
          <Card
            title="Perguntas Frequentes"
            description="O SUS deve fornecer tratamentos indispensáveis à saúde do paciente. Negativas podem ser contestadas judicialmente para assegurar seu acesso."
          />
          <Card
            title="Perguntas Frequentes"
            description="Negativas comuns, como ausência no Rol da ANS, uso domiciliar ou off-label, podem ser revertidas via liminar. Busque seu direito à saúde."
          />
        </div>
      </div>
    </section>
  );
};
