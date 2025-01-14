import Image from "next/image";
import Doctors from "../assets/doctors.png";

export const CallToActionFinal = () => {
  return (
    <section className="bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] py-20 container mx-auto flex flex-col items-center justify-center w-full">
      <h2 className="h-styles">
      A um clique de distância do seu tratamento
      </h2>
      <Image src={Doctors} alt="Doctors" width={350} height={350} className="md:h-full w-auto" />
      <a href="https://forms.gle/dKCxALGxEf3yM24Y9" target="blank">
      <button className="btn btn-primary text-xl md:text-2xl my-20 flex bg-black py-5 px-10">
        <span className="text-transparent animated-gradient-text">
        Falar com um Especialista Agora!
        </span>
      </button>
      </a>
    </section>
  );
};
