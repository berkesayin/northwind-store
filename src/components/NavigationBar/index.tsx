import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";
import { NavigationBarProps } from "../../types";
import { CartSummary } from "../CartSummary";

export const NavigationBar = ({ cart }: NavigationBarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <Navbar.Brand href="/">Northwind Store</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" onClick={toggle} />
          <Navbar.Collapse id="navbarScroll" isOpen={isOpen}>
            <Nav>
              <Nav.Item>
                <Nav.Link>
                  <Link to="form1" style={{ color: "white" }}>
                    Form Demo 1
                  </Link>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link>
                  <Link to="form2" style={{ color: "white" }}>
                    Form Demo 2
                  </Link>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#" style={{ color: "white" }}>
                  Github
                </Nav.Link>
              </Nav.Item>
              <CartSummary cart={cart} />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};
