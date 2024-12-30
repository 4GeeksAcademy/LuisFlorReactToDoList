import { NavLink } from "react-router";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Badge, NavDropdown } from "react-bootstrap";
import { useContext } from "react";
import { FavouritesContext } from "../pages/Favourites";

export const NavigateBar = () => {
  const { favs, deleteFavs } = useContext(FavouritesContext);

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
            <NavDropdown title="Favs" id="basic-nav-dropdown">
              {favs.map((favs) => {
                return (
                  <div key={`${favs.type}${favs.uid}`}>
                    <NavDropdown.Item>
                      <NavLink to={`${favs.uid}${favs.type}`}>
                        {favs.name}
                      </NavLink>
                      <Badge
                        onClick={() => {
                          deleteFavs(favs.uid, favs.type);
                        }}
                      >
                        {" "}
                        X{" "}
                      </Badge>
                    </NavDropdown.Item>
                  </div>
                );
              })}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
