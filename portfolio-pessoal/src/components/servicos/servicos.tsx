"use client";

import style from "./servicos.module.css";
import { Accordion } from "./accordion";

export const Servicos = () => {
    return(
        <section id="servicos" className={style.servicos}>
            <div className={style.servicos_container}>
                <header className={style.header}>
                    <div className={style.left}>
                        <span className={style.subtitle}>SERVIÇOS</span>
                        <h2>Do conceito à <br/>solução digital</h2>
                    </div>
                    <div className={style.right}>
                        <p>Crio soluções digitais completas que ajudam empresas a tirar ideias do papel, validar produtos e entregar experiências que geram valor real ao usuário.</p>
                    </div>
                </header>
            </div>

            <div className={style.accordion_container}>   
                <Accordion></Accordion>                           
            </div>
        </section>
    );
}