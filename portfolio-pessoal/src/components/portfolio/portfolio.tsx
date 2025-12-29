import style from "@/components/portfolio/portfolio.module.css";
import { Card } from "./card";

export const Portfolio = () => {
    return(
        <section id="portfolio" className={style.portfolio}>
            <div className={style.container}>
            <header className={style.header}>
                <div className={style.left}>
                    <span className={style.subtitle}>PORTFÓLIO</span>
                    <h2>Confira os projetos que realizei recentemente</h2>
                </div>
                <div className={style.right}>
                    <p>Projetos criados para impulsionar empresas de SaaS, FinTechs e startups, resolvendo problemas reais e acelerando resultados.</p>
                </div>
            </header>

            <div className={style.container_card}>
                <Card></Card>
            </div>
            </div>
        </section>
    );
}