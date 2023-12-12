export interface CategoryListProps {
  info: {
    title: string;
  };
  currentCategory: string;
  changeCategory: (category: Category) => void;
}

export interface Category {
  categoryId: number;
  categoryName: string;
}

export interface ProductListProps {
  info: {
    title: string;
  };
  currentCategory: string;
  products: Product[];
}

export interface Product {
  id: number;
  categoryId: number;
  productName: string;
  quantityPerUnit: string;
  unitPrice: number;
  unitsInStock: number;
}
