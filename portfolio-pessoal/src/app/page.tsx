import { Header } from "@/components/header";
import { Hero } from "@/components/hero/hero";
import { Portfolio } from "@/components/portfolio/portfolio";
import { Sobre } from "@/components/sobre/sobre";

export default function Page(){
  return(
    <div>
      <Header></Header>
      <Hero></Hero>
      <Portfolio></Portfolio>
      <Sobre></Sobre>
    </div>
  );
}