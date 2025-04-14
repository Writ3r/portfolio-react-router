import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

export function Footer() {
  return (
    <footer className="text-center font-small mt-4 page-footer">
      <div className="pt-4">
        <Button variant="outline-light">
          COVER LETTER
          <FontAwesomeIcon
            className="ml-2 fa-white-icon animate__animated animate__swing animate__infinite"
            icon={faDownload}
          />
        </Button>
        <Button variant="outline-light">
          COVER LETTER
          <FontAwesomeIcon
            className="ml-2 fa-white-icon animate__animated animate__swing animate__infinite"
            icon={faDownload}
          />
        </Button>
      </div>
      <hr className="my-4" />
      <div className="pb-4">
        <a href="https://github.com/Writ3r" target="_blank" rel="noreferrer">
          <FontAwesomeIcon className="mr-3 fa-white-icon" icon={faGithub} />
        </a>
        <a
          href="https://www.linkedin.com/in/lucas-wing-314894104/"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon className="mr-3 fa-white-icon" icon={faLinkedin} />
        </a>
      </div>
      <div className="footer-copyright py-3">
        <span>
          © {new Date().getFullYear()} Copyright:
          <a
            href="https://lucaswing.com"
            target="_blank"
            rel="noreferrer"
            className="ml-1"
          >
            lucaswing.com
          </a>
        </span>
      </div>
    </footer>
  );
}
