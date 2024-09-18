import { useTranslation } from "react-i18next";
import { FaBusinessTime } from "react-icons/fa";
import { FaPeopleArrows } from "react-icons/fa";
import { FaHouseLaptop } from "react-icons/fa6";
import { FaComputer } from "react-icons/fa6";

export default function Contact() {
  const { t } = useTranslation();
  return (
    <section id="contact">
      <h2>{t("contact.h2")}</h2>
      <div id="contact-skills">
        <ul>
          <li>
            <FaBusinessTime className="contact-icon" />
            <h3>{t("contact.timeTitle")}</h3>
            <p>{t("contact.timeText")}</p>
          </li>
          <li>
            <FaPeopleArrows className="contact-icon" />
            <h3>{t("contact.socialTitle")}</h3>
            <p>{t("contact.socialText")}</p>
          </li>
          <li>
            <FaHouseLaptop className="contact-icon" />
            <h3>{t("contact.locationTitle")}</h3>
            <p>{t("contact.locationText")}</p>
          </li>
          <li>
            <FaComputer className="contact-icon" />
            <h3>{t("contact.techTitle")}</h3>
            <p>{t("contact.techText")}</p>
          </li>
        </ul>
      </div>
      {/*  <p>{t("contact.p")}</p> */}
      <button
        id="contact-button"
        onClick={() =>
          (window.location.href = "mailto:bendtsen_froejk@outlook.com")
        }
      >
        {t("contact.button")}
      </button>
    </section>
  );
}
