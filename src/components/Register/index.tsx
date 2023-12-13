import React, { ChangeEvent, useState } from "react";
import { Form, Container, Row, Col, Button } from "react-bootstrap";

export const Register = () => {
  const [name, setName] = useState("");

  const nameChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert("User " + name + " is saved!");
  };

  return (
    <Container>
      <Row>
        <Col>
          <Form onSubmit={onSubmitHandler}>
            <Form.Group controlId="formName">
              <Form.Label>User Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                onChange={nameChangeHandler}
                style={{ width: "70%", marginBottom: "20px" }}
              />
            </Form.Group>
            <Form.Group controlId="formUserNameDisplay">
              <Form.Label>User Name is: {name}</Form.Label>
            </Form.Group>
            <Button variant="primary" type="submit">
              Save
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};
