import { ListGroup } from "react-bootstrap";
import { CategoryListProps } from "../../types";

export const CategoryList = ({ info }: CategoryListProps) => {
  return (
    <div>
      <h3>{info.title}</h3>
      <ListGroup>
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Morbi leo risus</ListGroup.Item>
        <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      </ListGroup>
    </div>
  );
};
