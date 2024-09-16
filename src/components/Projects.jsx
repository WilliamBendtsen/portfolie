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

export default function Projects() {
  return (
    <>
      <h2 id="projects-title">Projects:</h2>
      <div id="four-amigos-text">
        <h3>Four Amigos Taco & Tequila 🌮</h3>
        <p>
          With a focus on crafting an authentic dining experience, this website
          creates an atmosphere adjacent to mexican culture, with the use of
          colors and typography
        </p>
        <ul className="programs-used">
          <span>Programs used:</span>
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
        <h3>Steno Museum Interactive Adventure 🌙</h3>
        <p>
          With a focus on teaching children about the moon and the universe,
          this interactive story follows Astro Alex in his journey to the moon
          and beyond{" "}
        </p>
        <ul className="programs-used">
          <span>Programs used:</span>
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
        <h3>Trøjborg Bryg - Fictional Non-Alcoholic Brewery</h3>
        <p>
          For this fictional brewery, the goal was to create a modern, sleek,
          minimalistic website, targeted towards the often too alcoholic youth,
          to make non-alcoholic beer seem like a just-as-good substitute
        </p>
        <ul className="programs-used">
          <span>Programs used:</span>
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
        <h3>Nippon - Fictional Meal-Kit Provider </h3>
        <p>
          For this fictional meal-kit provider, the goal was to create an
          atmosphere as close to asian cultute as possible, while still
          appealing to the mass european and american audience for asian
          cuisine. This was achieved trough the means of typography, colors and
          composition.
        </p>
        <ul className="programs-used">
          <span>Programs used:</span>
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
