import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";
import { NavigationBarProps } from "../../types";
import { CartSummary } from "../CartSummary";

export const NavigationBar = ({ cart, removeFromCart }: NavigationBarProps) => {
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
                  <Link to="register" style={{ color: "white" }}>
                    Register
                  </Link>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link>
                  <Link to="feedback" style={{ color: "white" }}>
                    Feedback
                  </Link>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#" style={{ color: "white" }}>
                  Github
                </Nav.Link>
              </Nav.Item>
              <CartSummary removeFromCart={removeFromCart} cart={cart} />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};
