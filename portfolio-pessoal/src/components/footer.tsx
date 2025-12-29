import style from "./footer.module.css";
import Image from "next/image";
import Github from "../assets/github.svg";
import Linkedin from "../assets/linkedin.svg";
import Whatsapp from "../assets/whatsapp.svg";
import Email from "@/assets/email.svg";

export const Footer = () => {
    return(
        <footer id="contato" className={style.footer}>
            <div className={style.container_up}>
                <div className={style.title}>
                    <p>Vamos trabalhar <br/>juntos!</p>
                </div>
                <div className={style.email}>
                    <Image src={Email} alt="Icone de email"></Image>
                    batistacarneiro@gmail.com
                </div>
                <div className={style.number_whatsapp}>
                    <Image src={Whatsapp} alt="Icone do whatsapp"></Image>
                    (21) 96786-2926
                </div>
            </div>

            <div className={style.container_down}>
                <div className={style.social}>
                    <a href="https://github.com/joaovictor25" target="_blank">
                    <div className={style.github}>
                        <Image src={Github} alt="Icone do github"></Image>
                    </div>
                    </a>
                    <a href="https://www.linkedin.com/in/joao-victor2512/" target="_blank">
                    <div className={style.linkedin}>
                        <Image src={Linkedin} alt="Icone do Linkedin"></Image>
                    </div>
                    </a>
                    <a href="https://wa.me/5521967862926" target="_blank">
                    <div className={style.whatsapp}>
                        <Image src={Whatsapp} alt="Iconde do whatsapp"></Image>
                    </div>
                    </a>
                </div>
                <div className={style.nome}>
                    <p>Desenvolvido por João Victor</p>
                </div>
            </div>
        </footer>
    );
}