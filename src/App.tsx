import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Category, Product } from "./types";
import { CategoryList } from "./components/CategoryList";
import { Navbar } from "./components/Navbar";
import { ProductList } from "./components/ProductList";

export const App = () => {
  const [currentCategory, setCurrentCategory] = useState("");
  const [products, setProducts] = useState<Product[]>([]);

  const categoryInfo = {
    title: "Category List",
  };
  const productInfo = {
    title: "Product List",
  };

  const handleCategoryChange = (category: Category) => {
    setCurrentCategory(category.categoryName);
  };

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = () => {
    fetch("http://localhost:3000/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
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
            <ProductList
              products={products}
              currentCategory={currentCategory}
              info={productInfo}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};
