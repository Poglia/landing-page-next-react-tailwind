import Image from "next/image";
import GostHand from "../assets/gostHand.png";

export const CallToAction = () => {
  return (
    <section className="bg-white  w-full">
      <div className="container mx-auto flex flex-col items-center justify-center w-full">
        <h2 className="h-styles max-w-3xl">
          Você ou um familiar precisa de um medicamento de alto custo? Nós
          podemos ajudar!
        </h2>
        <Image src={GostHand} alt="GostHand" width={350} height={350} className="md:h-full w-auto"/>
        <a href="https://forms.gle/dKCxALGxEf3yM24Y9" target="blank">
        <button className="btn btn-primary text-xl md:text-2xl my-20 flex bg-black py-5 px-10">
          <span className="text-transparent animated-gradient-text">
            Avalie meu caso gratuitamente
          </span>
        </button>
        </a>
      </div>
    </section>
  );
};
