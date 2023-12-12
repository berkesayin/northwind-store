import { ProductListProps } from "../../types";

export const ProductList = ({ info }: ProductListProps) => {
  return (
    <div>
      <h3>{info.title}</h3>
    </div>
  );
};
