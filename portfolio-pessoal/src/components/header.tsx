"use client"

import style from "@/components/header.module.css";

export const Header = () => {
    return(
        <header className={style.header}>
            <div className={style.header_container}>
                <div className={style.logo}>
                    <p>{"{ João Victor }"}</p>
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
                    {/*
                    <div className={style.line}></div>
                    <div className={style.header_options}>
                        <p>DARK - LIGHT</p>
                    </div>
                    */}
                </div>
            </div>
        </header>
    );
}