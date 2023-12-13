import { Table } from "react-bootstrap";
import { CartListProps } from "../../types";

export const CartList = ({ cart, removeFromCart }: CartListProps) => {
  const renderCart = () => (
    <div>
      <Table striped>
        <thead>
          <tr>
            <th>#</th>
            <th>Category Id</th>
            <th>Product Name</th>
            <th>Unit Price</th>
            <th>Units In Stock</th>
            <th>Quantity</th>
          </tr>
        </thead>

        <tbody>
          {cart.map((cartItem) => (
            <tr key={cartItem.product.id}>
              <td>{cartItem.product.id}</td>
              <td>{cartItem.product.categoryId}</td>
              <td>{cartItem.product.productName}</td>
              <td>{cartItem.product.unitPrice}</td>
              <td>{cartItem.product.unitsInStock}</td>
              <td>{cartItem.quantity}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );

  return <div>{renderCart()}</div>;
};
