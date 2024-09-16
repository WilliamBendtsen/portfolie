import lol from "../img/lol.jpeg";
import { faHtml5 } from "@fortawesome/free-brands-svg-icons";
import { faCss3Alt } from "@fortawesome/free-brands-svg-icons";
import { faJs } from "@fortawesome/free-brands-svg-icons";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function HeroSection() {
  return (
    <>
      <section id="hero">
        <p>Hi, my name is William</p>
        <h1>
          I create websites your users <br /> don&apos;t want to click away from{" "}
        </h1>
        <ul>
          <li>
            <a
              className="linkedin-icon"
              href="https://www.linkedin.com/in/william-bendtsen-01431028b/"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </li>
          <li>
            <a
              className="github-icon"
              href="https://github.com/WilliamBendtsen"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </li>
        </ul>
        <h3>Projects down here</h3>
        <a id="hero-arrow" href="#projects-title">
          <FontAwesomeIcon icon={faChevronDown} />
        </a>
      </section>
      <img src={lol} alt="lol" id="image-of-me" />
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
          <span>And more to come...</span>
        </ul>
      </div>
    </>
  );
}
