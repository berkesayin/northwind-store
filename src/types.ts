export interface CategoryListProps {
  info: {
    title: string;
  };
  currentCategory: string;
  changeCategory: (category: Category) => void;
}

export interface ProductListProps {
  info: {
    title: string;
  };
  currentCategory: string;
}

export interface Category {
  categoryId: number;
  categoryName: string;
}
