import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export function NavBar() {
  const [scrolled, setScrolled] = useState<boolean>(true);
  const [activeNav, setActiveNav] = useState<string>("home");

  const eleIsInView = (el: HTMLElement) => {
    const box = el.getBoundingClientRect();
    return box.top <= window.innerHeight && box.bottom >= 0;
  };

  // determine if last ele in view (edge case of last nav tab not triggering active)
  const lastFooterEleInView = () => {
    let footerInView = false;
    const footer = document.querySelector("footer");
    if (footer) {
      const lastChild = footer.lastElementChild;
      if (lastChild) {
        footerInView = true ? footer && eleIsInView(footer) : false;
      }
    }
    return footerInView;
  };

  useEffect(() => {
    const handleScroll = () => {
      // handles setting the nav bar to be transparent if at the top of the page
      const offset = window.scrollY;
      setScrolled(offset > 10);
      // logic to work out what page anchor should be considered active
      const lastEleInView = lastFooterEleInView()
      const sections = document.querySelectorAll(".pageAnchor");
      sections.forEach(function (e, i) {
        if (e instanceof HTMLElement) {
          // hack to fix setting last section to active since page can't scroll that far
          if (lastEleInView && i == sections.length - 1) {
            setActiveNav(e.id);
          }
          // normal logic case of if the scroll hits a new section, it will be set as active in nav bar
          else if (e.offsetTop - 100 <= offset) {
            setActiveNav(e.id);
          }
        }
      });
    };
    setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const moveToLocation = (location: string) => {
    const element = document.getElementById(location);
    setTimeout(() => {
      window.scrollTo({
        behavior: element ? "smooth" : "auto",
        top: element ? element.offsetTop - 99 : 0,
      });
    }, 100);
  };

  const execMove = (
    e: React.MouseEvent<HTMLElement, MouseEvent>,
    location: string
  ) => {
    e.preventDefault();
    moveToLocation(location);
  };

  return (
    <Navbar
      expand="lg"
      className={`navbar-dark ${!scrolled ? "nav-at-top" : ""}`}
      fixed="top"
    >
      <Container style={{ backgroundColor: "" }}>
        <Navbar.Brand href="#home">
          <strong>Lucas Wing</strong>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="#home"
              className="top-nav-link"
              onClick={(e) => execMove(e, "home")}
              active={activeNav === "home"}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#portfolio"
              className="top-nav-link"
              onClick={(e) => execMove(e, "portfolio")}
              active={activeNav === "portfolio"}
            >
              Portfolio
            </Nav.Link>
            <Nav.Link
              href="#about"
              className="top-nav-link"
              onClick={(e) => execMove(e, "about")}
              active={activeNav === "about"}
            >
              About
            </Nav.Link>
            <Nav.Link
              href="#experience"
              className="top-nav-link"
              onClick={(e) => execMove(e, "experience")}
              active={activeNav === "experience"}
            >
              Experience
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className="top-nav-link"
              onClick={(e) => execMove(e, "skills")}
              active={activeNav === "skills"}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className="top-nav-link"
              onClick={(e) => execMove(e, "projects")}
              active={activeNav === "projects"}
            >
              Projects
            </Nav.Link>
          </Nav>
          <Nav className="ml-auto">
            <div style={{ display: "flex" }}>
              <Nav.Link className="top-nav-link">
                <FontAwesomeIcon icon={faLinkedin} />
              </Nav.Link>
              <Nav.Link
                href="#link"
                className="top-nav-link border border-light rounded waves-effect waves-light"
              >
                <FontAwesomeIcon icon={faGithub} className="mr-2" /> GitHub
              </Nav.Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
