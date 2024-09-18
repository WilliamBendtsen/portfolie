import { useTranslation } from "react-i18next";
import enFlag from "../img/en-flag.png";
import dkFlag from "../img/dk-flag.png";
import i18n from "../i18n";
import { FaBars, FaTimes } from "react-icons/fa";
import { useRef } from "react";
import { useState, useEffect } from "react";

export default function NavBar() {
  const { t } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const navListRef = useRef(); // Reference for ul element
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);

  const showNavbar = () => {
    navListRef.current.classList.toggle("responsive-nav"); // Toggle class on ul element
    setIsOpen(!isOpen); // Toggle isOpen state to switch between FaBars and FaTimes
  };

  const toggleNavbar = () => {
    navListRef.current.classList.toggle("responsive-nav");
    setIsOpen(!isOpen);
  };

  const closeNavbar = () => {
    if (isOpen && isMobile) {
      toggleNavbar();
    }
  };

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 1024);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav id="nav">
      <div className="language-switcher">
        <a onClick={() => changeLanguage("dk")}>
          <img id="danish-flag" src={dkFlag} alt="danish flag" />
        </a>
        <a onClick={() => changeLanguage("en")}>
          <img id="english-flag" src={enFlag} alt="english flag" />
        </a>
      </div>
      <p id="name">William Bendtsen</p>
      <ul ref={navListRef}>
        <a href="#aboutMe" onClick={closeNavbar}>
          <li>{t("nav.aboutMe")}</li>
        </a>
        <a href="#skills" onClick={closeNavbar}>
          <li>{t("nav.skills")}</li>
        </a>
        <a href="#four-amigos-project" onClick={closeNavbar}>
          <li>{t("nav.projects")}</li>
        </a>
        <a href="#contact" onClick={closeNavbar}>
          <li>{t("nav.contact")}</li>
        </a>
      </ul>
      <button className="nav-btn" onClick={showNavbar}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>
    </nav>
  );
}
