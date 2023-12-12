import React, { Component } from "react";
// ReactStrap içerisinden kullandığımız componentleri import edelim
import { ListGroup, ListGroupItem } from "reactstrap";

export default class CategoryList extends Component {
  // state = {counter:1}  ==>  Örnek amaçlı bir state
  state = {
    categories: [],
  };

  componentDidMount() {
    this.getCategories();
  }

  getCategories = () => {
    fetch("http://localhost:3000/categories")
      .then((response) => response.json())
      .then((data) => this.setState({ categories: data }));
  };

  render() {
    return (
      <div>
        <h3>{this.state.counter}</h3>

        <ListGroup>
          {this.state.categories.map((category) => (
            <ListGroupItem
              onClick={() => this.props.changeCategory(category)}
              key={category.id}
            >
              {category.categoryName}
            </ListGroupItem>
          ))}
        </ListGroup>

        <h4>{this.props.currentCategory}</h4>
      </div>
    );
  }
}
