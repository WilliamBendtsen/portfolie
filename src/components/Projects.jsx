import FourAmigosLandingPage from "../img/four-amigos-landing-page.png";
import StenoLandingPage from "../img/steno-museum-landing-page.png";
import TroejborgLandingPage from "../img/troejborg-bryg-landing-page.png";
import NipponLandingPage from "../img/nippon-landing-page.png";
import { faHtml5 } from "@fortawesome/free-brands-svg-icons";
import { faCss3Alt } from "@fortawesome/free-brands-svg-icons";
import { faJs } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { useTranslation } from "react-i18next";

export default function Projects() {
  const { t } = useTranslation();
  return (
    <>
      <h2 id="projects-title">{t("project1.title")}</h2>
      <div id="four-amigos-text">
        <h3>{t("project1.h3")} 🌮</h3>
        <p>{t("project1.p")}</p>
        <ul className="programs-used">
          <span>{t("project1.programs")}</span>
          <li className="html-icon">
            <FontAwesomeIcon icon={faHtml5} />
          </li>
          <li className="css-icon">
            <FontAwesomeIcon icon={faCss3Alt} />
          </li>
          <li className="js-icon">
            <FontAwesomeIcon icon={faJs} />
          </li>
        </ul>
        <ul className="github-and-website">
          <li>
            <a
              href="https://github.com/WilliamBendtsen/four-amigos"
              target="_blank"
            >
              Code <FontAwesomeIcon icon={faGithub} />
            </a>
          </li>
          <a href="https://four-amigos.williamskodeeventyr.dk/" target="_blank">
            Live Demo <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </ul>
      </div>
      <img
        id="four-amigos-picture"
        src={FourAmigosLandingPage}
        alt="Four Amigos Landing Page"
      />
      <img
        id="steno-picture"
        src={StenoLandingPage}
        alt="Steno Museum Landing Page"
      />
      <div id="steno-text">
        <h3>{t("project2.h3")} 🌙</h3>
        <p>{t("project2.p")}</p>
        <ul className="programs-used">
          <span>{t("project1.programs")}</span>
          <li className="html-icon">
            <FontAwesomeIcon icon={faHtml5} />
          </li>
          <li className="css-icon">
            <FontAwesomeIcon icon={faCss3Alt} />
          </li>
          <li className="js-icon">
            <FontAwesomeIcon icon={faJs} />
          </li>
        </ul>
        <ul className="github-and-website">
          <li>
            <a href="https://github.com/WilliamBendtsen/steno" target="_blank">
              Code <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
            </a>
          </li>
          <a
            href="https://steno-museum-projekt.williamskodeeventyr.dk/"
            target="_blank"
          >
            Live Demo <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </ul>
      </div>
      <div id="troejborg-text">
        <h3>{t("project3.h3")}</h3>
        <p>{t("project3.p")}</p>
        <ul className="programs-used">
          <span>{t("project1.programs")}</span>
          <li className="html-icon">
            <FontAwesomeIcon icon={faHtml5} />
          </li>
          <li className="css-icon">
            <FontAwesomeIcon icon={faCss3Alt} />
          </li>
          <li className="js-icon">
            <FontAwesomeIcon icon={faJs} />
          </li>
        </ul>
        <ul className="github-and-website">
          <li>
            <a
              href="https://github.com/WilliamBendtsen/troejborg-bryg"
              target="_blank"
            >
              Code <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
            </a>
          </li>
          <a
            href="https://troejborgbryg-hjemmeside.williamskodeeventyr.dk/"
            target="_blank"
          >
            Live Demo <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </ul>
      </div>
      <img
        id="troejborg-picture"
        src={TroejborgLandingPage}
        alt="Trøjborg Bryg Landing Page"
      />
      <img
        id="nippon-picture"
        src={NipponLandingPage}
        alt="Nippon Landing Page"
      />
      <div id="nippon-text">
        <h3>{t("project4.h3")} </h3>
        <p>{t("project4.p")}</p>
        <ul className="programs-used">
          <span>{t("project1.programs")}</span>
          <li className="html-icon">
            <FontAwesomeIcon icon={faHtml5} />
          </li>
          <li className="css-icon">
            <FontAwesomeIcon icon={faCss3Alt} />
          </li>
          <li className="js-icon">
            <FontAwesomeIcon icon={faJs} />
          </li>
        </ul>
        <ul className="github-and-website">
          <li>
            <a href="https://github.com/WilliamBendtsen/Nippon" target="_blank">
              Code <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
            </a>
          </li>
          <a href="https://nippon.karolinebauer.dk/" target="_blank">
            Live Demo <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </ul>
      </div>
    </>
  );
}
