import style from "./button.module.css";
import Image from "next/image";
import Arrow from "../../assets/arrow-white.svg";

export const Button = ()  => {
    return(  
        <div className={style.button}>
            <a href="#portfolio"><button>Ver projetos<div className={style.arrow}><Image src={Arrow} alt="Seta"></Image></div></button></a>
        </div>
    );
}