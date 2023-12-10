import { CategoryList } from "./components/CategoryList";
import { Navbar } from "./components/Navbar";
import { ProductList } from "./components/ProductList";

export const App = () => {
  return (
    <div>
      <Navbar />
      <CategoryList />
      <ProductList />
    </div>
  );
};
