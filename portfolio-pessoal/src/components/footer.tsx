import style from "./footer.module.css";
import Image from "next/image";
import Github from "../assets/github.svg";
import Linkedin from "../assets/linkedin.svg";
import Whatsapp from "../assets/whatsapp.svg";

export const Footer = () => {
    return(
        <footer className={style.footer}>
            <div className={style.container_up}>
                <div className={style.title}>
                    <p>Vamos trabalhar <br/>juntos!</p>
                </div>
                <div className={style.email}>
                    batistacarneiro@gmail.com
                </div>
                <div className={style.number_whatsapp}>
                    (21) 96786-2926
                </div>
            </div>

            <div className={style.container_down}>
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
                <div className={style.nome}>
                    <p>Desenvolvido por João Victor</p>
                </div>
            </div>
        </footer>
    );
}