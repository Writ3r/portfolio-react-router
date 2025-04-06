import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Navbar } from "react-bootstrap";

export function NavBar() {
  return (
    <Navbar
      expand="lg"
      className="navbar-dark"
      style={{
        backgroundColor: "rgb(28, 35, 49)",
      }}
    >
      <Container style={{backgroundColor:""}}>
        <Navbar.Brand href="#home">
          <strong className="white-text">Lucas Wing</strong>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink href="#link" active>Home</NavLink>
            <NavLink href="#link">Portfolio</NavLink>
            <NavLink href="#link">About</NavLink>
            <NavLink href="#link">Experience</NavLink>
            <NavLink href="#link">Skills</NavLink>
            <NavLink href="#link">Projects</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

interface NavLinkProps extends React.PropsWithChildren {
  href: string | undefined;
  active?: boolean;
}

function NavLink(props: NavLinkProps) {
  return (
    <Nav.Link
      style={{
        color: "rgb(255, 255, 255)",
        fontWeight: "300",
      }}
      className = "nav-link top-nav-link"
      href={props.href}
      active={props.active || false}
    >
      {props.children}
    </Nav.Link>
  );
}
