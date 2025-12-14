'use client';

import React from "react";
// Importando os ícones novos (Wordpress, PHP, SQL, etc)
import { FaHtml5, FaCss3Alt, FaReact, FaJava, FaWordpress, FaPhp, FaDatabase } from "react-icons/fa";
import { SiJavascript, SiNextdotjs, SiTailwindcss, SiMysql, SiSpring } from "react-icons/si";
import "./TechMarquee.css";

// Dividindo as habilidades em duas linhas para visual ficar legal
const row1 = [
  { name: "Java", icon: <FaJava />, color: "#007396" },
  { name: "Spring Boot", icon: <SiSpring />, color: "#6DB33F" },
  { name: "HTML5", icon: <FaHtml5 />, color: "#E34F26" },
  { name: "CSS3", icon: <FaCss3Alt />, color: "#1572B6" },
  { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
  { name: "React", icon: <FaReact />, color: "#61DAFB" },
];

const row2 = [
  { name: "Next.Js", icon: <SiNextdotjs />, color: "#ffffff" },
  { name: "WordPress", icon: <FaWordpress />, color: "#21759B" },
  { name: "PHP", icon: <FaPhp />, color: "#777BB4" },
  { name: "MySQL", icon: <SiMysql />, color: "#4479A1" },
  { name: "SQL", icon: <FaDatabase />, color: "#CCCCCC" }, // Ícone genérico de banco para SQL
  { name: "Tailwind", icon: <SiTailwindcss />, color: "#06B6D4" },
];

const TechMarquee = () => {
  return (
    <div className="marquee-wrapper">
      <h2 className="marquee-title">Experiência consolidada nas seguintes <br/>
ferramentas e linguagens de programação...</h2>
      
      <div className="marquee-container">
        
        {/* LINHA 1: Move para a ESQUERDA (Padrão) */}
        {/* Duplicamos a lista 2x para garantir o loop sem buracos */}
        <div className="marquee-track scroll-left">
          {[...row1, ...row1, ...row1, ...row1].map((skill, index) => (
            <div key={`row1-${index}`} className="skill-card">
              <span className="icon" style={{ color: skill.color }}>{skill.icon}</span>
              <span className="name">{skill.name}</span>
            </div>
          ))}
        </div>

        {/* LINHA 2: Move para a DIREITA */}
        {/* Adicionamos um marginTop para separar as linhas */}
        <div className="marquee-track scroll-right" style={{ marginTop: '20px' }}>
          {[...row2, ...row2, ...row2, ...row2].map((skill, index) => (
            <div key={`row2-${index}`} className="skill-card">
              <span className="icon" style={{ color: skill.color }}>{skill.icon}</span>
              <span className="name">{skill.name}</span>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default TechMarquee;