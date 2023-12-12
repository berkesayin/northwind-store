import { ProductListProps } from "../../types";

export const ProductList = ({
  info: { title },
  currentCategory,
}: ProductListProps) => {
  return (
    <div>
      <h3>
        {title} - {currentCategory}
      </h3>
    </div>
  );
};
