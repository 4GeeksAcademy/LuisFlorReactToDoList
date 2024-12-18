import { NavLink } from "react-router";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export const NavigateBar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Stars Wars Heaven</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto p-2">
            <NavLink className="p-2" to="/films" end>
              Films
            </NavLink>
            <NavLink className="p-2" to="/people" end>
              Characters
            </NavLink>
            <NavLink className="p-2" to="/planets" end>
              Planets
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
