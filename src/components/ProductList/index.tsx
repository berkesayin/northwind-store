import { ProductListProps } from "../../types";
import { Table } from "react-bootstrap";

export const ProductList = ({
  info: { title },
  products,
  currentCategory,
}: ProductListProps) => {
  return (
    <div>
      <h3>
        {title} - {currentCategory}
      </h3>
      <Table striped>
        <thead>
          <tr>
            <th>#</th>
            <th>Product Name</th>
            <th>Unit Price</th>
            <th>Quantity Per Unit</th>
            <th>Units In Stock</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <th scope="row">{product.id}</th>
              <td>{product.productName}</td>
              <td>{product.unitPrice}</td>
              <td>{product.quantityPerUnit}</td>
              <td>{product.unitsInStock}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};
