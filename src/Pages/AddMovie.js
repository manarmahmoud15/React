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
  const [movieFormError, setMovieFormError] = useState({
    title: null,
    description: null,
    price: null,
  });
  const handeFormChange = (e) => {
    e.preventDefault();
    const field_Value = e.target.value ;
    const field_Name = e.target.name ;
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
    setMovieForm({
      ...movieForm,
      [field_Name]: field_Value
    });
    setMovieFormError({
      ...movieFormError,
      title: field_Value.length === 0 ? 
      'this field is required' : 
      field_Value.length < 3 ?
      'Min Length is 3' :
       field_Value.length > 10 ? 
       'Max Length is 10' : 
       null ,
    }) ;
    setMovieFormError({
      ...movieFormError,
      description: field_Value.length === 0 ? 
      'this field is required' : 
      field_Value.length < 20 ?
      'Min Length is 20' :
      field_Value.length > 200 ? 
      'Max Length is 200' : 
       null ,
    })
    setMovieFormError({
      ...movieFormError,
      price: field_Value.length === 0 ? 
      'this field is required' : 
      Number (field_Value) === 0 ?
      'Please Enter Value Greater Than 0' :
       null ,
    })
  };
  const handelSumbitForm = (e) => {
    e.preventDefault();
    console.log(movieForm);
  }
  return (
    <Form onSubmit={handelSumbitForm}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Movie Title</Form.Label>
        <Form.Control
          type="Text"
          placeholder="Enter New Movie Name"
          name="title"
          onChange={handeFormChange}
          className={`form-control ${movieFormError.title ? 'border-danger' : ''}`}
        />
        {movieFormError.title && (
          <Form.Text className=" text-danger">
          {movieFormError.title}          
         </Form.Text>
        )}
      </Form.Group>

      <FloatingLabel controlId="floatingTextarea2" label="Description">
        <Form.Control
          as="textarea"
          placeholder="Leave a comment here"
          name="description"
          onChange={handeFormChange}
          style={{ height: "100px" }}
          className={`form-control ${movieFormError.description ? 'border-danger' : ''}`}

        />
        {movieFormError.description && (
          <Form.Text className=" text-danger">
          {movieFormError.description}          
         </Form.Text>
        )}
      </FloatingLabel>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Price</Form.Label>
        <Form.Control
          type="number"
          placeholder="price"
          name="price"
          onChange={handeFormChange}
          className={`form-control${movieFormError.price ? 'border-danger' : ''}`}
        />
        {movieFormError.price && (
          <Form.Text className=" text-danger">
          {movieFormError.price}          
         </Form.Text>
        )}
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}
