"use client";

import { useState } from "react";
import { dataServicos } from "@/dataServicos";
import Image from "next/image";
import style from "./servicos.module.css";
import arrowTitle from "@/assets/arrow-title.svg";

export const Accordion = () => {

    const [openId, setOpenId] = useState<number | null>(null);

    const handleClick = (key: number) => {
        setOpenId(openId => (openId === key ? null : key));
    }
    return(
        <>
        {dataServicos.map(item => (

        <div key={item.id} className={`${style.accordion} ${openId == item.id ? style.background : ""}`}>
            <div className={style.acordion_center}>
                <div onClick={() => handleClick(item.id)} role="button" className={style.accordion_title}>
                    <div className={style.number}>
                         {item.id < 10 ? `0${item.id}.` : `${item.id}.`}
                    </div>
                    <div className={style.title}>
                        <h3>{item.titulo}</h3>
                    </div>
                    <div className={style.icon}>
                        <Image src={arrowTitle} alt="Seta do titulo"/>
                    </div>
                </div>
                <div className={`${style.content} ${openId == item.id ? style.open : ""}`}>
                    <p>
                        {item.descricao}
                    </p>
                </div>
            </div> 
        </div> 
        ))}
        </>
    );
}