import { Nav, Dropdown, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CartSummaryProps } from "../../types";

export const CartSummary = ({ cart, removeFromCart }: CartSummaryProps) => {
  const renderSummary = () => (
    <Dropdown>
      <Dropdown.Toggle>Your Cart </Dropdown.Toggle>
      <Dropdown.Menu>
        {cart.map((cartItem) => (
          <Dropdown.Item key={cartItem.product.id}>
            <Badge
              color="danger"
              onClick={() => removeFromCart(cartItem.product)}
            >
              X
            </Badge>
            {" " + cartItem.product.productName + " "}
            <Badge color="success">{cartItem.quantity}</Badge>
          </Dropdown.Item>
        ))}
        <Dropdown.Item />
        <Dropdown.Item>
          <Link to="cart">Go To Cart</Link>
        </Dropdown.Item>

        <Dropdown.Item>
          <Link to="/">Go To Products</Link>
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );

  const renderEmptyCart = () => (
    <Nav.Item>
      <Nav.Link>Empty Cart</Nav.Link>
    </Nav.Item>
  );

  return <div>{cart.length > 0 ? renderSummary() : renderEmptyCart()}</div>;
};
