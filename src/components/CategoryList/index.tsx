import { ListGroup } from "react-bootstrap";
import { Category, CategoryListProps } from "../../types";
import { useState } from "react";

export const CategoryList = ({ info: { title } }: CategoryListProps) => {
  const initialCategories = [
    { categoryId: 1, categoryName: "Beverages" },
    { categoryId: 2, categoryName: "Condiments" },
  ];

  const [categories, setCategories] = useState<Category[]>(initialCategories);
  const [currentCategory, setCurrentCategory] = useState<string | null>("");

  const handleCategoryChange = (category: Category) => {
    setCurrentCategory(category.categoryName);
  };

  return (
    <div>
      <h3>{title}</h3>
      <ListGroup>
        {categories.map((category) => (
          <ListGroup.Item
            key={category.categoryId}
            onClick={() => handleCategoryChange(category)}
          >
            {category.categoryName}
          </ListGroup.Item>
        ))}
      </ListGroup>
      <h4>{currentCategory}</h4>
    </div>
  );
};
