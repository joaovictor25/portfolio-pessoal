import { dataPortfolio } from "@/dataPortfolio";
import style from "./portfolio.module.css";
import Image from "next/image";

export const Card = () => {
    return(
        <>
        {dataPortfolio.map(card => (
            <div className={style.card} key={card.id}>
                <div className={style.card_img}>
                    <Image src={card.imagem} alt="Combofilms"></Image>                    
                </div>
                <div className={style.card_down}>
                    
                </div>
                <div className={style.content}>
                    <h3>{card.nome}</h3>
                    <p>{card.descricao}</p>
                    <div className={style.conainer_tag}>
                        {
                            card.tags.map(tag => (
                                <div key={tag} className={style.tag}>{tag}</div>
                            ))
                        }
                    </div>
                    <a href={card.link} target="_blank"><button>Ver projeto</button></a>
                </div>
            </div>
    ))}
    </>
    );
}