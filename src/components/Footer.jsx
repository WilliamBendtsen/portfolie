import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer id="footer">
      <div id="footerContent">
        <div id="footerSocial">
          <a
            href="https://www.linkedin.com/in/william-bendtsen-01431028b/"
            target="_blank"
          >
            <FaLinkedin />
          </a>
          <a href="https://github.com/WilliamBendtsen" target="_blank">
            <FaGithub />
          </a>
          <a href="mailto:bendtsen_froejk@outlook.com">
            <FaEnvelope />
          </a>
        </div>
        <div id="footerInfo">
          <p>&copy; {new Date().getFullYear()} William Bendtsen</p>
          <p>All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
