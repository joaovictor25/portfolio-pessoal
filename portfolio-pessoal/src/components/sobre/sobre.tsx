"use client";

import style from "./sobre.module.css";
import ProfileCard from "./ProfileCard";
import Image from "next/image";
import Github from "../../assets/github.svg";
import Linkedin from "../../assets/linkedin.svg";
import Whatsapp from "../../assets/whatsapp.svg";
import TechMarquee from './TechMarquee';

export const Sobre = () => {

    return(
        <section className={style.sobre}>
            <div className={style.container}>
                <div className={style.container_sobre}>
                    <div className={style.left}>
                        <span className={style.subtitle}>SOBRE MIM</span>
                        <h2>Mergulho de cabeça <br/>em desafios</h2>
                        <p>
                            Minha trajetória na tecnologia começou atuando como freelancer. Buscando colocar em prática tudo o que estudei na adolescência, procurei oportunidades que envolvessem a criação de sites.
                            <br/><br/>
                            Consegui aplicar meus conhecimentos desenvolvendo projetos obtidos em plataformas de trabalho freelancer. Nesse processo, realizei diversos projetos tanto individualmente quanto em equipe.
                            <br/><br/>
                            Sempre precisando me adaptar, aprendi a trabalhar de forma colaborativa, resolver problemas com eficiência e me comunicar de maneira clara.
                        </p>
                        <div className={style.social}>
                            <div className={style.github}>
                                <Image src={Github} alt="Icone do github"></Image>
                            </div>
                            <div className={style.linkedin}>
                                <Image src={Linkedin} alt="Icone do Linkedin"></Image>
                            </div>
                            <div className={style.whatsapp}>
                                <Image src={Whatsapp} alt="Iconde do whatsapp"></Image>
                            </div>
                        </div>
                    </div>
                    <div className={style.right}>
                        <ProfileCard
                        name=""
                        title=""
                        handle="João Victor"
                        status="Online"
                        contactText="Contato"
                        avatarUrl="https://joaovictor.online/wp-content/uploads/2025/12/Foto.png"
                        showUserInfo={false}
                        enableTilt={true}
                        enableMobileTilt={false}
                        onContactClick={() => console.log('Contact clicked')}
                        />
                        <div className={style.nome}>João Victor</div>
                    </div>
                </div>
                <div className={style.container_skill}>
                    <TechMarquee></TechMarquee>
                </div>
            </div>
        </section>
    );
}