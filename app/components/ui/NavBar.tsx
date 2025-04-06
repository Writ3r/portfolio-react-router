import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export function NavBar() {
  return (
    <Navbar
      expand="lg"
      className="navbar-dark"
      style={{
        backgroundColor: "rgb(28, 35, 49)",
      }}
      fixed="top"
    >
      <Container style={{ backgroundColor: "" }}>
        <Navbar.Brand href="#home">
          <strong className="white-text">Lucas Wing</strong>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#link" active className="top-nav-link">
              Home
            </Nav.Link>
            <Nav.Link href="#link" className="top-nav-link">
              Portfolio
            </Nav.Link>
            <Nav.Link href="#link" className="top-nav-link">
              About
            </Nav.Link>
            <Nav.Link href="#link" className="top-nav-link">
              Experience
            </Nav.Link>
            <Nav.Link href="#link" className="top-nav-link">
              Skills
            </Nav.Link>
            <Nav.Link href="#link" className="top-nav-link">
              Projects
            </Nav.Link>
          </Nav>
          <Nav className="ml-auto">
            <Nav.Link
              href="#link"
              className="top-nav-link border border-light rounded waves-effect waves-light"
            >
              <FontAwesomeIcon icon={faGithub} className="mr-2" /> GitHub
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
