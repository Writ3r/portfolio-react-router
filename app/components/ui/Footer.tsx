import { useState, useEffect } from "react";
import { Button, type ButtonProps } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

export function Footer() {
  return (
    <footer
      className="text-center font-small mt-4 page-footer"
      style={{ backgroundColor: "#1c2331" }}
    >
      <div className="pt-4">
        <Button variant="outline-light" className="">
          COVER LETTER
          <FontAwesomeIcon
            className="ml-2 animate__animated animate__swing animate__infinite"
            icon={faDownload}
            style={{ color: "white" }}
          />
        </Button>
        <Button variant="outline-light" className="">
          COVER LETTER
          <FontAwesomeIcon
            className="ml-2 animate__animated animate__swing animate__infinite"
            icon={faDownload}
            style={{ color: "white" }}
          />
        </Button>
      </div>
      <hr className="my-4" />
      <div className="pb-4">
        <FontAwesomeIcon
          className="mr-3"
          icon={faGithub}
          style={{ color: "white" }}
        />
        <FontAwesomeIcon
          className="mr-3"
          icon={faLinkedin}
          style={{ color: "white" }}
        />
      </div>
      <div className="footer-copyright py-3">
        © {new Date().getFullYear()} Copyright:{" "}
        <a href="https://lucaswing.com" target="_blank" rel="noreferrer">
          lucaswing.com
        </a>
      </div>
    </footer>
  );
}
