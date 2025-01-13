import { MdOutlineTouchApp } from "react-icons/md";

export const CallToAction = () => {
  return (
    <section className="bg-white  w-full  h-[600px]">
      <div className="container mx-auto flex flex-col items-center justify-center w-full">
        <h2 className="h-styles max-w-3xl">
          Você ou um familiar precisa de um medicamento de alto custo? Nós
          podemos ajudar!
        </h2>
        <button className="btn btn-primary text-2xl md:text-xl mb-10 flex bg-black">
          <span className="text-transparent animated-gradient-text">
            Avalie meu caso gratuitamente
          </span>
        </button>
      </div>
    </section>
  );
};
