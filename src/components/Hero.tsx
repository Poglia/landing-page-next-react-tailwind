import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";
import  HeroImage  from "../assets/heroVector.svg"

export const Hero = () => {
    return <section className="pt-0 pb-20 md:pt-0 md:pb-10 bg-[radial-gradient(ellipse_200%_150%_at_bottom_left,#183EC2,#EAEEFE_66%)]
    md:bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_66%)]
    overflow-x-clip flex z-20">
        <div className="container mx-auto px-4 w-auto">
            <div className="md:flex items-center">
            <div className="md:w-[478px] ">
                <div className=" text-sm inline-flex border border-[#222]/10 px-3 py-1 rounded-lg tracking-tight">Ação Rápida Contra Negativas do SUS e planos de saúde</div>
                <h1 className="text-4xl md:text-6xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text
                mt-5 pb-1">Seu Medicamento ou Tratamento foi Negado? Saiba Como Resolver Agora!</h1>
                <p className="text-xl text-[#010D3E] tracking-tight mt-5 ">Especialistas em ações judiciais, reverter negativas de medicamentos e tratamentos é a nossa missão. Garantimos seu acesso rápido à saúde que você merece!
                </p>
                <div className="flex gap-1  items-center mt-[30px]">
                    <a href="https://forms.gle/dKCxALGxEf3yM24Y9" target="blank">
                    <button className="btn btn-primary ">Avalie meu caso</button>
                    </a>
                    <button className="btn btn-text gap-1">
                        <span>Saiba Mais </span>
                        <FaArrowRight className="h-5 w-5"/>
                    </button>
                    <a href=""></a>
                </div>
            </div>
            <div className="mt-20 md:mt-0 md:h-[600px] md:flex-1">
                <Image src={HeroImage} alt="Hero" width={400} height={400} className="md:h-full w-auto md:max-w-none md:-left-6  h-30"/>
            </div>
            </div>
        </div>
    </section>;
}