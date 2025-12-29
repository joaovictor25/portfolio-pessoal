"use client"

import { useEffect, useState } from "react";
import style from "@/components/header.module.css";
import Image from "next/image";
import darkLight from "@/assets/brilho-do-sol.png";
import Close from "@/assets/close.svg";

export const Header = () => {

  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // 🔥 Scroll Spy
  useEffect(() => {
  const sections = document.querySelectorAll("section[id]");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActiveSection(entry.target.id);
      });
    },
    {
      rootMargin: "-40% 0px -55% 0px",
      threshold: 0,
    }
  );

  sections.forEach((section) => observer.observe(section));

  const onBottom = () => {
    const nearBottom =
      window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 10;

    if (nearBottom) setActiveSection("contato");
  };

  window.addEventListener("scroll", onBottom, { passive: true });

  return () => {
    observer.disconnect();
    window.removeEventListener("scroll", onBottom);
  };
}, []);

  const [mobile, setMobile] = useState(false);
  function handleMobile() {
    setMobile(!mobile);
  }
    return(
        <header className={`${style.header} ${scrolled ? style.scrolled : ""}`}>
            <div className={style.header_container}>
              <a href="https://joaovictor.online/">
                <div className={style.logo}>
                    <div className={style.first}>João</div>
                    <div className={style.second}>Victor</div>
                </div>
              </a>
                <div className={style.container_nav}>
                  <nav className={style.nav}>
                    <ul>
                      <li className={activeSection === "home" ? style.active : ""}>
                        <a href="#home">Home</a>
                      </li>
                      <li className={activeSection === "portfolio" ? style.active : ""}>
                        <a href="#portfolio">Portfólio</a>
                      </li>
                      <li className={activeSection === "sobre" ? style.active : ""}>
                        <a href="#sobre">Sobre</a>
                      </li>
                      <li className={activeSection === "servicos" ? style.active : ""}>
                        <a href="#servicos">Serviços</a>
                      </li>
                      <li className={activeSection === "contato" ? style.active : ""}>
                        <a href="#contato">Contato</a>
                      </li>
                    </ul>
                  </nav>
                  {
                  /*
                    <div className={style.line}></div>
                    <div className={style.options}>
                        <div className={style.language}>ENG</div>
                        <div className={style.switch}>
                            <Image src={darkLight} alt="Brilho do sol"/>
                        </div>
                    </div>
                  */
                  }
                  <div className={style.mobile}>
                    <button onClick={handleMobile}>MENU</button>
                  </div>
                  
                  <div className={`${style.canva} ${mobile ? style.active : ""}`} onClick={handleMobile}>
                    <div className={style.canva_right}>
                      <div className={style.fechar} onClick={handleMobile}>
                        <Image src={Close} alt="Botão de fechar menu"></Image>
                      </div>
                      <nav className={style.nav_mobile}>
                        <ul>
                          <li className={activeSection === "home" ? style.active : ""}>
                            <a href="#home">Home</a>
                          </li>
                          <li className={activeSection === "portfolio" ? style.active : ""}>
                            <a href="#portfolio">Portfólio</a>
                          </li>
                          <li className={activeSection === "sobre" ? style.active : ""}>
                            <a href="#sobre">Sobre</a>
                          </li>
                          <li className={activeSection === "servicos" ? style.active : ""}>
                            <a href="#servicos">Serviços</a>
                          </li>
                          <li className={activeSection === "contato" ? style.active : ""}>
                            <a href="#contato">Contato</a>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                </div>
            </div>
        </header>
    );
}