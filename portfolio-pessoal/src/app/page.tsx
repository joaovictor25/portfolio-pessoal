"use client";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero/hero";
import { Portfolio } from "@/components/portfolio/portfolio";
import { Sobre } from "@/components/sobre/sobre";
import { Servicos } from "@/components/servicos/servicos";
import { Footer } from "@/components/footer";

export default function Page(){
  return(
    <div>
      <Header></Header>
      <Hero></Hero>
      <Portfolio></Portfolio>
      <Sobre></Sobre>
      <Servicos></Servicos>
      <Footer></Footer>
    </div>
  );
}