const Footer = () => {
    return (
      <footer className="bg-black text-white py-8">
        <div className="container mx-auto flex flex-col items-center space-y-4 text-center">
          {/* Informações do Escritório */}
          <div>
            <h2 className="text-lg font-semibold">Poglia Advogados</h2>
            <p className="text-sm">
              Especializado em Direito Civil, Direito Trabalhista e Consultoria Jurídica.
            </p>
            <p className="text-sm">
              Endereço: Rua Rocha Loires 645, Centro Nonoai, RS 99600000
            </p>
            <p className="text-sm">Contato: (54) 3362-1250 | poglia.advogados@gmail.com</p>
          </div>
  
          {/* Direitos Autorais */}
          <div className="border-t border-gray-700 pt-4">
            <p className="text-xs">
               {new Date().getFullYear()} Escritório de Advocacia Poglia Advogados. Todos os direitos reservados.
            </p>
            <p className="text-xs">
              Desenvolvido por <span className="font-semibold">Pedro Poglia ©</span>.
            </p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  