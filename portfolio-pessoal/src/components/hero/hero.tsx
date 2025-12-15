"use client";

import style from "./hero.module.css";
import { Button } from "../button/button";
import Squares from './Squares';



export const Hero = () => {
    return(
        <>
        <div className={style.degrade}></div>
        <section className={style.hero}>
            <div style={{ width: '100%', height: '100vh', position: 'relative', display:'flex', justifyContent:'center', alignItems:'center' }}>

<Squares 
speed={0.5} 
squareSize={40}
direction='diagonal' // up, down, left, right, diagonal
borderColor='#1a1a1a'
hoverFillColor='#222'
/>
                <div className={style.container}>
                    <p>Olá, sou João Victor</p>
                    <h1>Desenvolvedor <div className={style.title_degrade}>de Software</div></h1>
                    <Button></Button>
                </div>
            </div>

        </section>

         
        </>
    );
}