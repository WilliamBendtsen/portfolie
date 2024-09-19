import ProfilePicture from "../img/picture-of-me.jpeg";
import { faHtml5 } from "@fortawesome/free-brands-svg-icons";
import { faCss3Alt } from "@fortawesome/free-brands-svg-icons";
import { faJs } from "@fortawesome/free-brands-svg-icons";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { useTranslation } from "react-i18next";

export default function HeroSection() {
  const { t } = useTranslation();

  return (
    <>
      <section id="hero">
        <p>{t("hero.intro1")}</p>
        <h1>{t("hero.intro2")}</h1>
        <ul>
          <li>
            <a
              className="linkedin-icon"
              href="https://www.linkedin.com/in/william-bendtsen-01431028b/"
              target="_blank"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </li>
          <li>
            <a
              className="github-icon"
              href="https://github.com/WilliamBendtsen"
              target="_blank"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </li>
        </ul>
        <h3>{t("hero.projects")}</h3>
        <a id="hero-arrow" href="#projects-title">
          <FontAwesomeIcon icon={faChevronDown} />
        </a>
      </section>
      <div id="image-of-me-box">
        <img src={ProfilePicture} alt="lol" id="image-of-me" />
      </div>
      <div id="tech-stack">
        <ul>
          <span>Tech stack:</span>
          <li className="html-icon">
            <FontAwesomeIcon icon={faHtml5} />
          </li>
          <li className="css-icon">
            <FontAwesomeIcon icon={faCss3Alt} />
          </li>
          <li className="js-icon">
            <FontAwesomeIcon icon={faJs} />
          </li>
          <li className="react-icon">
            <FontAwesomeIcon icon={faReact} />
          </li>
          <span>{t("hero.techStack")}</span>
        </ul>
      </div>
    </>
  );
}
