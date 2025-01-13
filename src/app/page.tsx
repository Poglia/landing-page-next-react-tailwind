import { Cards } from "@/components/Cards";
import { FAQ } from "@/components/FAQ";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { LogoTicker } from "@/components/LogoTicker";
import TimeLine from "@/components/TimeLine";
import { CallToAction } from "@/components/CallToAction";
import About from "@/components/About";
import { CallToActionFinal } from "@/components/CallToActionFinal";

export default function Home() {
  return (
    <>
      <Header/>
      <Hero/>
      <LogoTicker/>
      <Cards/>
      <TimeLine/>
      <CallToAction/>
      <FAQ/>
      <About/>
      <CallToActionFinal/>
    </>
  );
  
}
