import { ChangeEvent, FormEvent, useState } from "react";
import { Button, FormGroup, Form, Alert } from "react-bootstrap";

export const Feedback = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    city: "",
    description: "",
  });
  const [showAlert, setShowAlert] = useState(false);
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setShowAlert(true);
  };

  return (
    <div>
      <h2 style={{ marginBottom: "20px" }}>Feedback</h2>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Form.Label htmlFor="email">Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            id="email"
            placeholder="Enter Email"
            onChange={handleChange}
          />
        </FormGroup>

        <FormGroup>
          <Form.Label htmlFor="password">Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            id="password"
            placeholder="Enter Password"
            onChange={handleChange}
          />
        </FormGroup>

        <FormGroup>
          <Form.Label htmlFor="description">Description</Form.Label>
          <Form.Control
            as="textarea" // Use "as" instead of "type" for textarea
            name="description"
            id="description"
            placeholder="Enter Description"
            onChange={handleChange}
          />
        </FormGroup>

        <FormGroup>
          <Form.Label htmlFor="city">City</Form.Label>
          <Form.Control
            as="select"
            name="city"
            id="city"
            onChange={handleChange}
          >
            <option>Ankara</option>
            <option>İstanbul</option>
            <option>İzmir</option>
            <option>Antalya</option>
            <option>Bursa</option>
          </Form.Control>
        </FormGroup>

        <Button
          type="submit"
          style={{ marginTop: "20px", marginBottom: "20px" }}
        >
          Save
        </Button>
      </Form>
      <Alert
        show={showAlert}
        variant="success"
        onClose={() => setShowAlert(false)}
        dismissible
      >
        Feedback saved successfully!
      </Alert>
    </div>
  );
};
