import { ListGroup } from "react-bootstrap";
import { Category, CategoryListProps } from "../../types";
import { useState, useEffect } from "react";

export const CategoryList = ({
  info: { title },
  currentCategory,
  changeCategory,
}: CategoryListProps) => {
  const initialCategories = [
    { categoryId: 1, categoryName: "Beverages" },
    { categoryId: 2, categoryName: "Condiments" },
  ];

  const [categories, setCategories] = useState<Category[]>(initialCategories);

  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = () => {
    fetch("http://localhost:3000/categories")
      .then((response) => response.json())
      .then((data) => setCategories(data));
  };

  return (
    <div>
      <h3>{title}</h3>
      <ListGroup>
        {categories.map((category) => (
          <ListGroup.Item
            key={category.categoryId}
            onClick={() => changeCategory(category)}
          >
            {category.categoryName}
          </ListGroup.Item>
        ))}
      </ListGroup>
      <h4>{currentCategory}</h4>
    </div>
  );
};
