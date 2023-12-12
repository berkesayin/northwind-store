import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Category } from "./types";
import { CategoryList } from "./components/CategoryList";
import { Navbar } from "./components/Navbar";
import { ProductList } from "./components/ProductList";

export const App = () => {
  const [currentCategory, setCurrentCategory] = useState("");

  const categoryInfo = {
    title: "Category List",
  };

  const productInfo = {
    title: "Product List",
  };

  const handleCategoryChange = (category: Category) => {
    setCurrentCategory(category.categoryName);
  };

  return (
    <>
      <Container>
        <Row>
          <Navbar />
        </Row>
        <Row>
          <Col xs={3}>
            <CategoryList
              currentCategory={currentCategory}
              changeCategory={handleCategoryChange}
              info={categoryInfo}
            />
          </Col>
          <Col xs={9}>
            <ProductList currentCategory={currentCategory} info={productInfo} />
          </Col>
        </Row>
      </Container>
    </>
  );
};
