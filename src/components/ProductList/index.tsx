import { ProductListProps } from "../../types";

export const ProductList = ({ info: { title } }: ProductListProps) => {
  return (
    <div>
      <h3>{title}</h3>
    </div>
  );
};
