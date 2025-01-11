"use client";

import React from "react";
import clsx from "clsx";
import { FaPlus, FaMinus } from "react-icons/fa6";

import { motion, AnimatePresence } from "framer-motion";

const items = [
  {
    question:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pellentesque tempus suscipit?",
    answer:
      "Sed velit sapien, commodo ac nunc et, venenatis commodo purus. Etiam condimentum aliquet lacus sit amet rutrum. Etiam nec mollis dui. Sed euismod quis nisl sed finibus.",
  },
  {
    question: "Nam non dictum arcu. Nullam id sodales metus. ?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pellentesque tempus suscipit. Curabitur cursus tempus lacinia. Cras posuere auctor dolor, id congue eros commodo in. Donec consectetur pellentesque consectetur. Donec iaculis aliquam ultrices. Quisque a gravida purus, eget mollis nulla. Pellentesque efficitur urna nec augue aliquet blandit. Donec tincidunt, eros id dignissim dapibus, magna ex elementum erat, nec mattis sem erat a sem.",
  },
  {
    question:
      "Nam auctor magna orci. In hac habitasse platea dictumst.?",
    answer:
      "Ut sagittis varius condimentum. In arcu lacus, rutrum id diam et, luctus semper elit. Ut non justo facilisis lectus aliquam imperdiet ut eu felis.",
  },
  {
    question: "Donec volutpat quam a metus accumsan vehicula?",
    answer:
      "Nullam maximus efficitur enim, quis tristique felis ornare ac. Vivamus vitae commodo urna. Proin sapien justo, ornare non nisl et, fringilla commodo nulla. Sed ligula ex, sodales non sapien nec, volutpat mollis tortor. Morbi ligula est, tincidunt eu egestas non, viverra id orci. Donec accumsan ut risus sed fermentum. ",
  },
  {
    question: " Praesent ornare felis eu congue euismod?",
    answer:
      "Praesent ornare felis eu congue euismod. Suspendisse posuere, lectus nec iaculis pretium, eros enim convallis orci, et efficitur dui libero sit amet tellus. Aenean tempus, turpis quis dictum lobortis, lorem massa vulputate ex, ut sodales orci diam eu turpis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
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
    <div className="bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] py[72px] sm:py-24">
      <div className="container mx-auto">
        <h2
          className="text-4xl md:text-5xl 12 max-w-[648px] mx-auto sm:text-6xl font-bold tracking-tighter 
        bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text 
        py-10 px-30 flex items-center justify-center text-center"
        >
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
