import { useTranslation } from "react-i18next";
import Placeholder from "../img/placeholder.png";

export default function AboutMe() {
  const { t } = useTranslation();
  return (
    <section id="aboutMe">
      <h2>{t("aboutMe.h2")}</h2>
      <div id="aboutMeContent">
        <img src={Placeholder} alt="image of me" />
        <div id="aboutMeText">
          <p>{t("aboutMe.p1")}</p>
          <p>{t("aboutMe.p2")}</p>
          <p>{t("aboutMe.p3")}</p>
        </div>
        <div id="cv">
          <h3>{t("aboutMe.cv")}</h3>
          <div id="button-container">
            <button
              className="aboutMe-button"
              onClick={() =>
                window.open(
                  "https://docs.google.com/document/d/1IRQdn2pEWFKnlEuH4A4ugoaWQljAXcgzchYM2jQNmtM/edit",
                  "_blank"
                )
              }
            >
              Dansk CV
            </button>
            <button
              className="aboutMe-button"
              onClick={() =>
                window.open(
                  "https://docs.google.com/document/d/1lp-_XhX41q_9b82G9yJxOa29C10xXkYntEa0O48-e9M/edit#heading=h.hf3ysj9f7665",
                  "_blank"
                )
              }
            >
              English CV
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
