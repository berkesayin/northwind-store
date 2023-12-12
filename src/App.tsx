import { Container, Row, Col } from "react-bootstrap";
import { CategoryList } from "./components/CategoryList";
import { Navbar } from "./components/Navbar";
import { ProductList } from "./components/ProductList";

export const App = () => {
  const titleCategory = "Category List";
  const productCategory = "Product List";

  return (
    <>
      <Container>
        <Row>
          <Navbar />
        </Row>
        <Row>
          <Col xs={3}>
            <CategoryList title={titleCategory} />
          </Col>
          <Col xs={9}>
            <ProductList title={productCategory} />
          </Col>
        </Row>
      </Container>
    </>
  );
};
