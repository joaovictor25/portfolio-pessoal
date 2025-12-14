"use client";

import style from "./servicos.module.css";
import { Accordion } from "./accordion";

export const Servicos = () => {
    return(
        <section className={style.servicos}>
            <div className={style.servicos_container}>
                <header className={style.header}>
                    <div className={style.left}>
                        <span className={style.subtitle}>SERVIÇOS</span>
                        <h2>Meus projetos</h2>
                    </div>
                    <div className={style.right}>
                        <p>Onde ideias se transformam em soluções inteligentes com foco na melhor experiência para o usuário.</p>
                    </div>
                </header>
            </div>

            <div className={style.accordion_container}>   
                <Accordion></Accordion>                           
            </div>
        </section>
    );
}