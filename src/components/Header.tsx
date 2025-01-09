import { LuHeartHandshake } from "react-icons/lu";
import { IoMenu } from "react-icons/io5";

import Logo from '../assets/logoVector.svg'
import Image from "next/image";




export function Header () {
    return (
        <header className=" sticky top-0 backdrop-blur-sm z-20">
            <div className="flex justify-center items-center py-3 bg-black text-white text-sm text-">
                <p>
                  <LuHeartHandshake className='h-4 w-4 inline-flex justify-center align-items-center mr-3'/>
                    Sua saúde é seu direito 
                 <LuHeartHandshake className='h-4 w-4 inline-flex justify-center align-items-center ml-3'/></p> 
            </div>
            <div className="py-3">
                <div className="container px-5">
                    <div className="flex items-center justify-between">
                        <Image src={Logo} alt="Logo" width={40} height={40} className=" text-black/60"/>
                        <IoMenu className="h-7 w-7 md:hidden"/>
                        <nav className="hidden md:flex gap-6 text-black/60 items-center">
                            <a href="#">Serviços</a>
                            <a href="#">Sobre Nós</a>
                            <a href="#">Perguntas Frequentes</a>
                            <button className="bg-black text-white px-4 py-2 rounded-lg font-medium inline-flex align-items-center justify-center tracking-tight">Avalie meu caso</button>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )
}