import { useTranslation } from "react-i18next";
import { faHtml5 } from "@fortawesome/free-brands-svg-icons";
import { faCss3Alt } from "@fortawesome/free-brands-svg-icons";
import { faJs } from "@fortawesome/free-brands-svg-icons";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Skills() {
  const { t } = useTranslation();
  return (
    <section id="skills">
      <h2>{t("skills.h2")}</h2>
      <ul>
        <li>
          <div id="icon-box">
            <FontAwesomeIcon icon={faHtml5} id="skills-html-icon" />
            <FontAwesomeIcon icon={faCss3Alt} id="skills-css-icon" />
          </div>
          <h3>Html5 & Css3</h3>
          <p>{t("skills.htmlCss")}</p>
        </li>
        <li>
          <FontAwesomeIcon icon={faJs} id="skills-js-icon" />
          <h3>JavaScript</h3>
          <p>{t("skills.javascript")}</p>
        </li>
        <li>
          <FontAwesomeIcon icon={faReact} id="skills-react-icon" />
          <h3>React</h3>
          <p>{t("skills.react")}</p>
        </li>
      </ul>
    </section>
  );
}
