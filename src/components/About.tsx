import Image from "next/image";
import Logo from "../assets/PogliaLogoCompleto.png";

import { FcIdea } from "react-icons/fc";
import { FaHeartPulse } from "react-icons/fa6";

const About = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-[#D2DCFF] to-white">
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2
          className="text-4xl md:text-7xl font-bold tracking-tighter 
        bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text 
         pt-10 pb-20 sm:px-6 lg:px-8 flex items-center justify-center text-center"
        >
          Sobre nós
        </h2>
        <Image
          src={Logo}
          width={350}
          height={350}
          alt="Logo"
          className=" mx-auto"
        />
        <h3 className="my-4 text-2xl sm:text-4xl text-gray-700 font-bold">
          Especialistas em Direito Médico e Saúde.
        </h3>
        <p className="mt-2 text-gray-600 text-lg text-justify font-semibold">
          Com anos de experiência, nosso escritório já ajudou centenas de
          pacientes a conquistarem seus direitos.
        </p>
        <div className="flex flex-col items-center justify-center ">
          <p className="mt-10 text-xl text-gray-700 font-semibold">Missão</p>
          <p className="text-lg italic flex tracking-tighter text-gray-900">
            Proporcionar acesso à saúde por meio da justiça. 
          </p>
            <FaHeartPulse className="text-5xl mt-5 text-gray-700"/>
        </div>
      </div>
    </section>
  );
};

export default About;
