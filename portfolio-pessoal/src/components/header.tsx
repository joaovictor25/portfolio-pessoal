"use client"

import style from "@/components/header.module.css";
import Image from "next/image";
import darkLight from "@/assets/brilho-do-sol.png";

export const Header = () => {
    return(
        <header className={style.header}>
            <div className={style.header_container}>
                <div className={style.logo}>
                    <div className={style.first}>João</div>
                    <div className={style.second}>Victor</div>
                </div>
                <div className={style.container_nav}>
                    <nav className={style.nav}>
                        <ul>
                            <li style={{color:"#fff"}}>Home</li>
                            <li>Portfólio</li>
                            <li>Sobre</li>
                            <li>Serviços</li>
                            <li>Contato</li>
                        </ul>
                    </nav>

                    <div className={style.line}></div>
                    <div className={style.options}>
                        <div className={style.language}>ENG</div>
                        <div className={style.switch}>
                            <Image src={darkLight} alt="Brilho do sol"/>
                        </div>
                    </div>

                </div>
            </div>
        </header>
    );
}