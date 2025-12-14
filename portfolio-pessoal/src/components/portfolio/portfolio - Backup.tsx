import style from "@/components/portfolio/portfolio.module.css";
import Image from "next/image";


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
                <div className={style.card}>
                    <div className={style.card_img}>

                    </div>
                    <div className={style.card_down}>

                    </div>
                    <div className={style.content}>
                        <h3>Desenvolvimento de site institucional</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                        <div className={style.conainer_tag}>
                            <div className={style.tag}>Wordpress</div>
                            <div className={style.tag}>Wordpress</div>
                            <div className={style.tag}>Wordpress</div>

                        </div>
                        <button>Ver projeto</button>
                    </div>
                </div>

                <div className={style.card}>
                    <div className={style.card_img}>

                    </div>
                    <div className={style.card_down}>

                    </div>
                    <div className={style.content}>
                        <h3>Desenvolvimento de site institucional</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                        <div className={style.conainer_tag}>
                            <div className={style.tag}>Wordpress</div>
                            <div className={style.tag}>Wordpress</div>
                            <div className={style.tag}>Wordpress</div>

                        </div>
                        <button>Ver projeto</button>
                    </div>
                </div>

                <div className={style.card}>
                    <div className={style.card_img}>

                    </div>
                    <div className={style.card_down}>

                    </div>
                    <div className={style.content}>
                        <h3>Desenvolvimento de site institucional</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                        <div className={style.conainer_tag}>
                            <div className={style.tag}>Wordpress</div>
                            <div className={style.tag}>Wordpress</div>
                            <div className={style.tag}>Wordpress</div>

                        </div>
                        <button>Ver projeto</button>
                    </div>
                </div>


                <div className={style.card}>
                    <div className={style.card_img}>

                    </div>
                    <div className={style.card_down}>

                    </div>
                    <div className={style.content}>
                        <h3>Desenvolvimento de site institucional</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                        <div className={style.conainer_tag}>
                            <div className={style.tag}>Wordpress</div>
                            <div className={style.tag}>Wordpress</div>
                            <div className={style.tag}>Wordpress</div>

                        </div>
                        <button>Ver projeto</button>
                    </div>
                </div>
            </div>
            </div>
        </section>
    );
}