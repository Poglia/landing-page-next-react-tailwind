import React from "react";

const Timeline = () => {
  const steps = [
    {
      icon: "🛡️",
      title: "Garantimos Seu Direito à Saúde",
      description: "Somos especialistas em garantir que você receba o tratamento necessário.",
    },
    {
      icon: "⚡",
      title: "Atuação Rápida e Personalizada",
      description: "Cada caso é tratado com prioridade e uma estratégia única.",
    },
    {
      icon: "⚖️",
      title: "Especialistas Contra SUS e Planos",
      description: "Anos de experiência em ações judiciais contra planos de saúde e SUS.",
    },
    {
      icon: "🏆",
      title: "Histórico de Sucesso",
      description: "Resultados comprovados em processos de medicamentos de alto custo.",
    },
  ];

  return (
    <div className="flex flex-col items-center w-full py-10 bg-gradient-to-b from-[#D2DCFF] to-[#FFFFFF] ">
      <h2
        className="text-4xl md:text-5xl font-bold tracking-tighter 
        bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text 
        mt-5 py-10 px-4 sm:px-6 lg:px-8 flex items-center justify-center text-center"
      >
        Como Podemos Ajudar
      </h2>
      <div className="relative w-full max-w-4xl">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center mb-10">
            <div className="w-16 h-16 flex items-center justify-center bg-black text-white rounded-full text-3xl">
              {step.icon}
            </div>
            <div className="w-[2px] h-16 bg-blue-300"></div>
            <div className="text-center mt-4">
              <h3 className="text-lg font-semibold text-gray-700">{step.title}</h3>
              <p className="mt-2 text-sm text-gray-500">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
      <button className="btn btn-primary ">Avalie meu caso gratuitamente</button>
    </div>
  );
};

export default Timeline;
