import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export function Footer() {
  return (
    <footer
      className="text-center font-small mt-4 page-footer"
      style={{ backgroundColor: "#1c2331" }}
    >
      <div className="pt-4">
        <Button variant="outline-light">Resume Doc</Button>
        <Button variant="outline-light">Cover Letter</Button>
      </div>
      <hr className="my-4" />
      <div className="pb-4">
        <FontAwesomeIcon
          className="mr-3"
          icon={faLinkedin}
          style={{ color: "white" }}
        />
        <FontAwesomeIcon
          className="mr-3"
          icon={faGithub}
          style={{ color: "white" }}
        />
      </div>
      <div className="footer-copyright py-3">
        © 2021 Copyright:
        <a href="https://lucaswing.com" target="_blank" rel="noreferrer">
          {" "}
          lucaswing.com{" "}
        </a>
      </div>
    </footer>
  );
}
