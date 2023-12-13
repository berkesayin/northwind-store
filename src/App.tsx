import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Cart, Category, Product } from "./types";
import { CategoryList } from "./components/CategoryList";
import { NavigationBar } from "./components/NavigationBar";
import { ProductList } from "./components/ProductList";

export const App = () => {
  const [currentCategory, setCurrentCategory] = useState("");
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<Cart[]>([]);

  const categoryInfo = {
    title: "Category List",
  };
  const productInfo = {
    title: "Product List",
  };

  const handleCategoryChange = (category: Category) => {
    setCurrentCategory(category.categoryName);
    getProducts(category.id);
  };

  useEffect(() => {
    // I pass undefined to get all products initially
    getProducts(undefined);
  }, []);

  const getProducts = (categoryId: number | undefined) => {
    let url = "http://localhost:3000/products";
    if (categoryId !== undefined) {
      url += "?categoryId=" + categoryId;
    }
    fetch(url)
      .then((response) => response.json())
      .then((data) => setProducts(data));
  };

  const addToCart = (product: Product) => {
    const newCart = [...cart]; // Use spread operator to create a new array
    const addedItem = newCart.find((c) => c.product.id === product.id);

    if (addedItem) {
      addedItem.quantity += 1;
    } else {
      newCart.push({ product: product, quantity: 1, length: length + 1 });
    }
    setCart(newCart); // Update the cart state
  };

  return (
    <>
      <Row>
        <NavigationBar cart={cart} />
      </Row>
      <br />
      <Container>
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
              addToCart={addToCart}
              info={productInfo}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};
