import { useState, useEffect, type PropsWithChildren } from "react";
import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { GITHUB_URL, LINKEDIN_URL } from "~/components/ui/constants";

function PortfolioNavLink(
  props: PropsWithChildren<{
    id: string;
    activeNavId: string;
    execMove: (id: string) => void;
  }>
) {
  const clickedLink = (
    e: React.MouseEvent<HTMLElement, MouseEvent>,
    location: string
  ) => {
    e.preventDefault();
    props.execMove(location);
  };

  return (
    <Nav.Link
      href={`#${props.id}`}
      className="top-nav-link"
      onClick={(e) => clickedLink(e, props.id)}
      active={props.activeNavId === props.id}
    >
      {props.children}
    </Nav.Link>
  );
}

export function NavBar() {
  const HOME_ID = "home";
  const PORTFOLIO_ID = "portfolio";
  const ABOUT_ID = "about";
  const EXPERIENCE_ID = "experience";
  const SKILLS_ID = "skills";
  const PROJECTS_ID = "projects";

  const NAV_TABS = [
    HOME_ID,
    PORTFOLIO_ID,
    ABOUT_ID,
    EXPERIENCE_ID,
    SKILLS_ID,
    PROJECTS_ID,
  ];

  const [scrolled, setScrolled] = useState<boolean>(true);
  const [activeNav, setActiveNav] = useState<string>(HOME_ID);

  // checks if an element is in view
  const eleIsInView = (el: HTMLElement) => {
    const box = el.getBoundingClientRect();
    return box.top <= window.innerHeight && box.bottom >= 0;
  };

  // determine if last ele in view (edge case of last nav tab not triggering active)
  const lastFooterEleInView = () => {
    const footer = document.querySelector("footer");
    return footer ? eleIsInView(footer) : false;
  };

  useEffect(() => {
    const handleScroll = () => {
      // handles setting the nav bar to be transparent if at the top of the page
      const offset = window.scrollY;
      setScrolled(offset > 10);
      // logic to work out what page anchor should be considered active
      const lastEleInView = lastFooterEleInView();
      // hack to fix setting last section to active since page can't scroll that far
      if (lastEleInView) {
        setActiveNav(PROJECTS_ID);
        return;
      }
      NAV_TABS.forEach(function (e) {
        const navElement = document.getElementById(e);
        // normal logic case of if the scroll hits a new section, it will be set as active in nav bar
        if (navElement && navElement.offsetTop - 100 <= offset) {
          setActiveNav(e);
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

  const execMove = (location: string) => {
    moveToLocation(location);
  };

  return (
    <Navbar
      expand="lg"
      className={`navbar-dark ${!scrolled ? "nav-at-top" : ""}`}
      fixed="top"
    >
      <Container>
        <Navbar.Brand href="#home">
          <strong>Lucas Wing</strong>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="top-nav-collapse">
          <Nav className="me-auto">
            <PortfolioNavLink
              id={HOME_ID}
              activeNavId={activeNav}
              execMove={execMove}
            >
              Home
            </PortfolioNavLink>
            <PortfolioNavLink
              id={PORTFOLIO_ID}
              activeNavId={activeNav}
              execMove={execMove}
            >
              Portfolio
            </PortfolioNavLink>
            <PortfolioNavLink
              id={ABOUT_ID}
              activeNavId={activeNav}
              execMove={execMove}
            >
              About
            </PortfolioNavLink>
            <PortfolioNavLink
              id={EXPERIENCE_ID}
              activeNavId={activeNav}
              execMove={execMove}
            >
              Experience
            </PortfolioNavLink>
            <PortfolioNavLink
              id={SKILLS_ID}
              activeNavId={activeNav}
              execMove={execMove}
            >
              Skills
            </PortfolioNavLink>
            <PortfolioNavLink
              id={PROJECTS_ID}
              activeNavId={activeNav}
              execMove={execMove}
            >
              Projects
            </PortfolioNavLink>
          </Nav>
          <Nav className="ml-auto">
            <div style={{ display: "flex" }}>
              <Nav.Link
                className="top-nav-link"
                href={LINKEDIN_URL}
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </Nav.Link>
              <Nav.Link
                href={GITHUB_URL}
                className="top-nav-link border border-light rounded"
                target="_blank"
                rel="noreferrer"
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
