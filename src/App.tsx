import { Container, Row, Col } from "react-bootstrap";
import { CategoryList } from "./components/CategoryList";
import { Navbar } from "./components/Navbar";
import { ProductList } from "./components/ProductList";

export const App = () => {
  return (
    <>
      <Container>
        <Row>
          <Navbar />
        </Row>
        <Row>
          <Col xs={3}>
            <CategoryList />
          </Col>
          <Col xs={9}>
            <ProductList />
          </Col>
        </Row>
      </Container>
    </>
  );
};
