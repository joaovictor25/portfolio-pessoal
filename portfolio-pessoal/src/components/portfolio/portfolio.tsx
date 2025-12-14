import style from "@/components/portfolio/portfolio.module.css";
import { Card } from "./card";

export const Portfolio = () => {
    return(
        <section className={style.portfolio}>
            <div className={style.container}>
            <header className={style.header}>
                <div className={style.left}>
                    <span className={style.subtitle}>PORTFOLIO</span>
                    <h2>Confira os projetos mais recentes que realizei</h2>
                </div>
                <div className={style.right}>
                    <p>Uma seleção de produtos digitais que desenvolvi para equipes de SaaS, FinTech e startups</p>
                </div>
            </header>

            <div className={style.container}>
                <Card></Card>
            </div>
            </div>
        </section>
    );
}