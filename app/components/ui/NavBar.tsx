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
  const PROJECTS_ID = "projects";

  const NAV_TABS = [
    HOME_ID,
    PORTFOLIO_ID,
    ABOUT_ID,
    EXPERIENCE_ID,
    PROJECTS_ID,
  ];

  const [scrolled, setScrolled] = useState<boolean>(true);
  const [activeNav, setActiveNav] = useState<string>(HOME_ID);

  useEffect(() => {
    const handleScroll = () => {
      
      // pull relevant vars off doc
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

      // handles setting the nav bar to be transparent if at the top of the page
      const offset = window.scrollY;
      setScrolled(offset > 10);
      
      NAV_TABS.forEach(function (e) {
        const navElement = document.getElementById(e);
        // edge case of if the user scrolls to the bottom of the page, the last nav tab will be set as active
        if (scrollTop + clientHeight >= scrollHeight - 1) {
          setActiveNav(PROJECTS_ID);
        }
        // normal logic case of if the scroll hits a new section, it will be set as active in nav bar
        else if (navElement && navElement.offsetTop - 100 <= offset) {
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
        <Navbar.Brand href="/">
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
