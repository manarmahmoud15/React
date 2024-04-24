import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
export default function AddMovie() {
  const [movieForm, setMovieForm] = useState({
    title: "",
    description: "",
    price: "",
  });
  const handeFormChange = (e) => {
    e.preventDefault();
    // if (e.target.name === "title") {
    //   setMovieForm({
    //     ...movieForm,
    //     title: e.target.value,
    //   });
    // } 
    // else if (e.target.name === "description") {
    //   setMovieForm({
    //     ...movieForm,
    //     Description: e.target.value,
    //   });
    // } else if (e.target.name === "price") {
    //   setMovieForm({
    //     ...movieForm,
    //     price: e.target.value,
    //   });
    // }


    setMovieForm ({
      ...movieForm ,
      [e.target.name] : e.target.name
    })
  };
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Movie Title</Form.Label>
        <Form.Control
          type="Text"
          placeholder="Enter New Movie Name"
          name="title"
          onChange={handeFormChange}
        />
      </Form.Group>

      <FloatingLabel controlId="floatingTextarea2" label="Description">
        <Form.Control
          as="textarea"
          placeholder="Leave a comment here"
          name="description"
          onChange={handeFormChange}
          style={{ height: "100px" }}
        />
      </FloatingLabel>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Price</Form.Label>
        <Form.Control
          type="number"
          placeholder="price"
          name="price"
          onChange={handeFormChange}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}
