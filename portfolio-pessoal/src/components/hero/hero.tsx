"use client";

import style from "./hero.module.css";
import { Button } from "../button/button";
import LightPillar from "./LightPillar";

export const Hero = () => {
    return(
        <>
        <div className={style.degrade}></div>
        <section className={style.hero}>
            <div style={{ width: '100%', height: '100%', position: 'relative', display:'flex', justifyContent:'center', alignItems:'center' }}>
                <LightPillar
                    topColor="#2563EB"
                    bottomColor="#6AD0D3"
                    intensity={1.0}
                    rotationSpeed={0.3}
                    glowAmount={0.005}
                    pillarWidth={3.0}
                    pillarHeight={0.4}
                    noiseIntensity={0.5}
                    pillarRotation={0}
                    interactive={false}
                    mixBlendMode="normal"
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