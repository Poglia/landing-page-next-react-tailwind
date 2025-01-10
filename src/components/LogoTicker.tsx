"use client"

import Image from "next/image"
import sus from "../assets/planosSaude/sus.png"
import amil from "../assets/planosSaude/amil.png"
import hapvida from "../assets/planosSaude/hapvida.png"
import portoSaude from "../assets/planosSaude/portoSaude.png"
import PreventSenior from "../assets/planosSaude/PreventSenior.png"
import sulAmerica from "../assets/planosSaude/sulAmerica.png"
import unimed from "../assets/planosSaude/unimed.png"
import bradesco from "../assets/planosSaude/bradesco.png"

import {motion} from "framer-motion"

export const LogoTicker = () => {
    return (
       <div className="py-2 bg-white">
            <div className="container mx-auto px-4 w-auto">
                <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
                    <motion.div className="flex gap-14 flex-none pr-14" 
                    animate={{
                        x: ["0%", "-50%"],
                    }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "linear",
                        repeatType: "loop", 
                    }}
                    >
                        <Image src={sus} alt="Sus Logo" className="logo-ticker-image"/>
                        <Image src={amil} alt="Amil Logo" className="logo-ticker-image"/>
                        <Image src={hapvida} alt="Hapvida Logo" className="logo-ticker-image"/>
                        <Image src={portoSaude} alt=" PortoSaude Logo" className="logo-ticker-image"/>
                        <Image src={PreventSenior} alt="PreventSenior Logo" className="logo-ticker-image"/>
                        <Image src={unimed} alt=" Unimed Logo"  className="logo-ticker-image"/>
                        <Image src={sulAmerica} alt="SulAmerica Logo"className="logo-ticker-image"/>
                        <Image src={bradesco} alt="Bradesco Logo"className="logo-ticker-image"/>
                        <Image src={sus} alt="Sus Logo" className="logo-ticker-image"/>
                        <Image src={amil} alt="Amil Logo" className="logo-ticker-image"/>
                        <Image src={hapvida} alt="Hapvida Logo" className="logo-ticker-image"/>
                        <Image src={portoSaude} alt=" PortoSaude Logo" className="logo-ticker-image"/>
                        <Image src={PreventSenior} alt="PreventSenior Logo" className="logo-ticker-image"/>
                        <Image src={unimed} alt=" Unimed Logo"  className="logo-ticker-image"/>
                        <Image src={sulAmerica} alt="SulAmerica Logo"className="logo-ticker-image"/>
                        <Image src={bradesco} alt="Bradesco Logo"className="logo-ticker-image"/>
                    </motion.div>
                </div>
            </div>
       </div>
    )
}