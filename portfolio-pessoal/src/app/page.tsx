import { Header } from "@/components/header";
import { Hero } from "@/components/hero/hero";
import { Portfolio } from "@/components/portfolio/portfolio";

export default function Page(){
  return(
    <div>
      <Header></Header>
      <Hero></Hero>
      <Portfolio></Portfolio>
    </div>
  );
}