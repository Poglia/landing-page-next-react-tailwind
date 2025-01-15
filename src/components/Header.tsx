"use client";

import { LuHeartHandshake } from "react-icons/lu";
import { IoMenu, IoClose } from "react-icons/io5";

import Logo from "../assets/logoVector.svg";
import Image from "next/image";
import { useState } from "react";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLinkClick = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 backdrop-blur-sm z-20">
      <div className="flex justify-center items-center py-3 bg-black text-white text-sm">
        <p>
          <LuHeartHandshake className="h-4 w-4 inline-flex justify-center align-items-center mr-3" />
          Sua saúde é seu direito
          <LuHeartHandshake className="h-4 w-4 inline-flex justify-center align-items-center ml-3" />
        </p>
      </div>

      <div className="py-3">
        <div className="container px-5">
          <div className="flex items-center justify-between">
            <Image
              src={Logo}
              alt="Logo"
              width={40}
              height={40}
              className="text-black/60"
            />

            <div className="relative md:hidden">
              <div onClick={toggleMobileMenu}>
                {isMobileMenuOpen ? (
                  <IoClose className="h-7 w-7 cursor-pointer" />
                ) : (
                  <IoMenu className="h-7 w-7 cursor-pointer" />
                )}
              </div>

              {isMobileMenuOpen && (
                <div className="absolute right-4 mt-2 bg-white/90 backdrop-blur-md shadow-lg rounded-lg py-3 px-5">
                  <nav className="flex flex-col gap-4 text-black/60">
                    <a onClick={() => handleLinkClick("#servicos")}>Serviços</a>
                    <a onClick={() => handleLinkClick("#sobrenos")}>
                      Sobre Nós
                    </a>
                    <a onClick={() => handleLinkClick("#perguntasFrequentes")}>
                      Perguntas Frequentes
                    </a>
                  </nav>
                </div>
              )}
            </div>

            <nav className="hidden md:flex gap-6 text-black/60 items-center">
              <a onClick={() => handleLinkClick("#servicos")}>Serviços</a>
              <a onClick={() => handleLinkClick("#sobrenos")}>Sobre Nós</a>
              <a onClick={() => handleLinkClick("#perguntasFrequentes")}>
                Perguntas Frequentes
              </a>
              <a href="https://forms.gle/dKCxALGxEf3yM24Y9" target="blank">
                <button className="bg-black text-white px-4 py-2 rounded-lg font-medium inline-flex align-items-center justify-center tracking-tight">
                  Avalie meu caso
                </button>
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
