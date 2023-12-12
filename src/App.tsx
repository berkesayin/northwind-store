import { Container, Row, Col } from "react-bootstrap";
import { CategoryList } from "./components/CategoryList";
import { Navbar } from "./components/Navbar";
import { ProductList } from "./components/ProductList";

export const App = () => {
  const categoryInfo = {
    title: "Category List",
  };

  const productInfo = {
    title: "Product List",
  };

  return (
    <>
      <Container>
        <Row>
          <Navbar />
        </Row>
        <Row>
          <Col xs={3}>
            <CategoryList info={categoryInfo} />
          </Col>
          <Col xs={9}>
            <ProductList info={productInfo} />
          </Col>
        </Row>
      </Container>
    </>
  );
};
