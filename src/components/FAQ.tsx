"use client";

import React from "react";
import clsx from "clsx";
import { FaPlus, FaMinus } from "react-icons/fa6";

import { motion, AnimatePresence } from "framer-motion";

const items = [
  {
    question:
      "Quanto tempo demora a ação?",
    answer:
      "Geralmente, é possível obter uma liminar em até 15 dias.",
  },
  {
    question: "E se o Estado ou plano não cumprir?",
    answer:
      "Garantimos a execução imediata das ordens judiciais.",
  },
  {
    question:
      "O plano de saúde pode interferir na prescrição médica?",
    answer:
      "Não, o plano de saúde não tem autoridade para realizar modificações na prescrição de medicamentos ou tratamentos médicos.",
  },
  {
    question: "O tipo de plano de saúde pode interferir no custeio do remédio de alto custo?",
    answer:
      "Importante ressaltar que a categoria do seu plano de saúde não influencia na decisão de cobrir ou não seus remédios de alto custo. Isso significa que, independentemente de seu plano ser individual, coletivo por adesão ou coletivo empresarial, a cobertura dos medicamentos necessários deve ser assegurada.",
  },
  {
    question: " O que fazer diante da negativa de medicamento de alto custo pelo Plano de Saúde?",
    answer:
    "A primeira ação é obter um relatório médico detalhado. Este relatório é crucial, pois deve justificar a necessidade específica do medicamento prescrito. O próximo passo é buscar o auxílio de um advogado especializado em direito à saúde. Este profissional tem a capacidade de usar o relatório médico como base para argumentar tanto sob o ponto de vista jurídico quanto científico."
  },
];

const AccordionItem = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div
      className="py-7 px-7 sm:px-20 border-b border-black/30 "
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex items-center ">
        <span className="flex-1 text-lg font-bold">{question}</span>
        {isOpen ? <FaMinus /> : <FaPlus />}
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ 
                opacity: 0,
                height: 0 ,
                marginTop: 0

            }}
            animate={{ 
                opacity: 1,
                height: "auto" ,
                marginTop: "16px"
            }}
            exit={{ 
                opacity: 0,
                height: 0,
                marginTop: 0
            }}
          >
            {answer}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const FAQ = () => {
  return (
    <div className="bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] py[72px] sm:py-24" id="perguntasFrequentes">
      <div className="container mx-auto">
        <h2
          className="h-styles">
          Perguntas Frequentes
        </h2>
        <div className="mt-12">
          {items.map(({ question, answer }) => (
            <AccordionItem question={question} answer={answer} key={question} />
          ))}
        </div>
      </div>
    </div>
  );
};
