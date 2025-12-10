"use client";

import style from "./hero.module.css";
import Hyperspeed from "./hyperspeed/Hyperspeed";

import Orb from "./orb/Orb";
import { Button } from "../button/button";
import FloatingLines from "./FloatingLines/FloatingLines";
import LightPillar from "./LightPillar";

export const Hero = () => {
    return(
        <>

        <div className={style.degrade}></div>
        <section className={style.hero}>
            {/*<div className={style.effect} style={{ width: '100%', height: '600px'}}>
            <Orb
                hoverIntensity={0.5}
                rotateOnHover={true}
                hue={0}
                forceHoverState={true}
            />
            </div>

            <div className={style.container}>
                <p>Olá, sou João Victor</p>
                <h1>Desenvolvedor  <div className={style.title_degrade}>Full Stack</div></h1>
                <Button></Button>
            </div>*/}



        {/*<Hyperspeed
        effectOptions={{
            onSpeedUp: () => { },
            onSlowDown: () => { },
            distortion: 'turbulentDistortion',
            length: 400,
            roadWidth: 10,
            islandWidth: 2,
            lanesPerRoad: 4,
            fov: 90,
            fovSpeedUp: 150,
            speedUp: 2,
            carLightsFade: 0.4,
            totalSideLightSticks: 20,
            lightPairsPerRoadWay: 40,
            shoulderLinesWidthPercentage: 0.05,
            brokenLinesWidthPercentage: 0.1,
            brokenLinesLengthPercentage: 0.5,
            lightStickWidth: [0.12, 0.5],
            lightStickHeight: [1.3, 1.7],
            movingAwaySpeed: [60, 80],
            movingCloserSpeed: [-120, -160],
            carLightsLength: [400 * 0.03, 400 * 0.2],
            carLightsRadius: [0.05, 0.14],
            carWidthPercentage: [0.3, 0.5],
            carShiftX: [-0.8, 0.8],
            carFloorSeparation: [0, 5],
            colors: {
            roadColor: 0x080808,
            islandColor: 0x0a0a0a,
            background: 0x000000,
            shoulderLines: 0xFFFFFF,
            brokenLines: 0xFFFFFF,
            leftCars: [0xD856BF, 0x6750A2, 0xC247AC],
            rightCars: [0x03B3C3, 0x0E5EA5, 0x324555],
            sticks: 0x03B3C3,
            }
        }}
        />
        
            <div className={style.container}>
            <p>Olá, sou João Victor</p>
            <h1>Desenvolvedor  <div className={style.title_degrade}>Full Stack</div></h1>
            </div>*/}
            

            {/*<div style={{ width: '100%', height: '100%', position: 'relative', display:'flex', justifyContent:'center', alignItems:'center'}}>
            <FloatingLines 
                enabledWaves={['top', 'middle', 'bottom']}
                // Array - specify line count per wave; Number - same count for all waves
                lineCount={[10, 15, 20]}
                // Array - specify line distance per wave; Number - same distance for all waves
                lineDistance={[8, 6, 4]}
                bendRadius={5.0}
                bendStrength={-0.5}
                interactive={true}
                parallax={true}
            />
            <div className={style.container}>
                <p>Olá, sou João Victor</p>
                <h1>Desenvolvedor de <div className={style.title_degrade}>Software</div></h1>
                <Button></Button>
            </div>
            
            </div>*/}



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
                pillarRotation={25}
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