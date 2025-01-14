import Image from "next/image";

import Logo from "../assets/logo.png"

const Footer = () => {
    return (
      <footer className="bg-black text-white py-8">
        <div className="container mx-auto flex flex-col items-center space-y-4 text-center justify-center">
          {/* Informações do Escritório */}
          <div className="flex flex-col items-center">
            <Image src={Logo} alt="Logo" width={200} height={200} className=""/>
            <p className="text-sm font-bold mb-4">
              Especializado em Direito Civil, Direito Trabalhista e Consultoria Jurídica.
            </p>
            <p className="text-sm text-gray-300">
              Endereço: Rua Rocha Loires 645, Centro Nonoai, RS
            </p>
            <p className="text-sm text-gray-300">Contato: (54) 3362-1250 | poglia.advogados@gmail.com</p>
          </div>
  
          {/* Direitos Autorais */}
          <div className="border-t border-gray-700 pt-4">
            <p className="text-xs">
               {new Date().getFullYear()} Escritório de Advocacia Poglia Advogados. 
            </p>
            <p className="text-xs">Todos os direitos reservados.</p>
            <p className="text-xs text-gray-600  mt-4">
              Desenvolvido por <span className="font-semibold italic">Pedro Poglia ©</span>.
            </p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  