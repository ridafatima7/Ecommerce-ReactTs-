import { Navbar as NavbarBs, Container, Nav, Button, Badge } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { Cart } from "react-bootstrap-icons";

export function Navbar() {
  return (
    <NavbarBs sticky="top" expand="md" className="bg-white shadow-sm mb-4 px-3" >
      <Container fluid>
        {/* Brand Logo or Title */}
        <NavbarBs.Brand as={NavLink} to="/" className="fw-bold text-primary">
          Unze Store
        </NavbarBs.Brand>

        {/* Toggle for mobile */}
        <NavbarBs.Toggle aria-controls="basic-navbar-nav" />

        {/* Collapsible Navigation */}
        <NavbarBs.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/" end>
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/store">
              Store
            </Nav.Link>
            <Nav.Link as={NavLink} to="/about">
              About
            </Nav.Link>
          </Nav>

          {/* Cart Button */}
          <Button
            variant="outline-primary"
            className="position-relative rounded-circle"
            style={{ width: "3rem", height: "3rem" }}
          >
            <Cart size={20} />
            <Badge
              bg="danger"
              pill
              className="position-absolute top-0 start-100 translate-middle"
            >
              3
            </Badge>
          </Button>
        </NavbarBs.Collapse>
      </Container>
    </NavbarBs>
  );
}
