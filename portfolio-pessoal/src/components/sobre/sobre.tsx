"use client";

import style from "./sobre.module.css";
import ProfileCard from "./ProfileCard";
import Image from "next/image";
import Github from "../../assets/github.svg";
import Linkedin from "../../assets/linkedin.svg";
import Whatsapp from "../../assets/whatsapp.svg";

export const Sobre = () => {
    return(
        <section className={style.sobre}>
            <div className={style.left}>
                <span className={style.subtitle}>/ /  SOBRE MIM</span>
                <h2>Mergulho de cabeça em desafios</h2>
                <p>
                    Sou desenvolvedor WordPress com mais de 5 anos de experiência, especialmente com PHP e Banco de dados MySQL.<br/><br/>
Durante minha trajetória, fui responsável pelo desenvolvimento de diversos sites, conduzindo boa parte dos trabalhos de forma independente, do início ao fim.<br/><br/>
Ao longo desses projetos, adquiri ainda mais proficiência em tecnologias como PHP, SQL, MySQL, JavaScript, HTML e CSS, o que me permitiu aprimorar minha capacidade de criar soluções personalizadas, como plugins e temas.
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
                name="João Victor"
                title="Desenvolvedor Full Stack"
                handle="João Victor"
                status="Online"
                contactText="Contato"
                avatarUrl="http://joaovictor.online/wp-content/uploads/2025/12/Foto.png"
                showUserInfo={true}
                enableTilt={true}
                enableMobileTilt={true}
                onContactClick={() => console.log('Contact clicked')}
                />
            </div>
        </section>
    );
}