export interface CategoryListProps {
  info: {
    title: string;
  };
  currentCategory: string;
  changeCategory: (category: Category) => void;
}

export interface Category {
  id: number;
  categoryName: string;
}

export interface ProductListProps {
  info: {
    title: string;
  };
  currentCategory: string;
  products: Product[];
  addToCart: (product: Product) => void;
}

export interface Product {
  id: number;
  categoryId: number;
  productName: string;
  quantityPerUnit: string;
  unitPrice: number;
  unitsInStock: number;
}

export interface Cart {
  product: Product;
  quantity: number;
  length: number;
}

export interface NavigationBarProps {
  cart: Cart[];
}

export interface CartSummaryProps {
  cart: Cart[];
}
