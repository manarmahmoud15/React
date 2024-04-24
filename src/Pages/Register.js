import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
export default function Register() {
  const [LoginForm, setLoginForm] = useState({
    name: "",
    email: "",
    userName: "",
    password : '' ,
    confirmPassword : ""
  });
  const [LoginFormError, setLoginFormError] = useState({
    name: null,
    email: null,
    userName: null,
    password : null ,
    confirmPassword : null 
  });
  const handeFormChange = (e) => {
    e.preventDefault();
    const field_Value = e.target.value ;
    const field_Name = e.target.name ;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
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
    setLoginForm({
      ...LoginForm,
      [field_Name]: field_Value
    });
    if (e.target.name === "name")
    {
      setLoginFormError({
        ...LoginFormError,
        name: e.target.value.length === 0 ? 
        'this field is required' : 
         null ,
      }) ;
    }
    else if (e.target.name === "email")
    {
    setLoginFormError({
      ...LoginFormError,
      email: e.target.value.length === 0 ? 
      'this field is required' : 
      !emailRegex.test(e.target.value) ?
      'invalid format Email' :
       null ,
    })
  }
  else if (e.target.name === "userName")
  {
    setLoginFormError({
        ...LoginFormError,
        userName: e.target.value.length === 0 ? 
        'this field is required' : 
        /\s/.test(e.target.value)?
        'shoudnot contain space' :
         null ,
      });
    }
    else if (e.target.name === "password")
    {
    setLoginFormError({
      ...LoginFormError,
      password: e.target.value.length === 0 ? 
      'this field is required' : 
      !passwordRegex.test(e.target.value) ?
      'Password must be at least 8 characters long, include a lowercase, an uppercase, a number, and a special character (@$!%*?&)' :
       null ,
    });
  }
  else if (e.target.name === "confirmPassword")
  {
    setLoginFormError({
        ...LoginFormError,
        confirmPassword: e.target.value.length === 0 ? 
        'this field is required' : 
        e.target.value!= LoginForm.password ?
        'Password Do not match' :
         null ,
      })
  };
}
  const handelSumbitForm = (e) => {
    e.preventDefault();
    console.log(LoginForm);
    console.log(LoginFormError);
  }
  return (
    <Form onSubmit={handelSumbitForm} className="container ms-5 my-5">
      <Form.Group className="mb-3" >
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="Text"
          placeholder="Enter Your Name"
          name="name"
          onChange={handeFormChange}
          className={`form-control ${LoginFormError.name ? 'border-danger' : ''}`}
        />
        {LoginFormError.name && (
          <Form.Text className=" text-danger">
          {LoginFormError.name}          
         </Form.Text>
        )}
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Your Email"
          name="email"
          onChange={handeFormChange}
          className={`form-control ${LoginFormError.email ? 'border-danger' : ''}`}
        />
        {LoginFormError.email && (
          <Form.Text className=" text-danger">
          {LoginFormError.email}          
         </Form.Text>
        )}
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>User Name</Form.Label>
        <Form.Control
          type="Text"
          placeholder="Enter New User Name"
          name="userName"
          onChange={handeFormChange}
          className={`form-control ${LoginFormError.userName ? 'border-danger' : ''}`}
        />
        {LoginFormError.userName && (
          <Form.Text className=" text-danger">
          {LoginFormError.userName}          
         </Form.Text>
        )}
      </Form.Group><Form.Group className="mb-3" >
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Enter New Password"
          name="password"
          onChange={handeFormChange}
          className={`form-control ${LoginFormError.password ? 'border-danger' : ''}`}
        />
        {LoginFormError.password && (
          <Form.Text className=" text-danger">
          {LoginFormError.password}          
         </Form.Text>
        )}
      </Form.Group><Form.Group className="mb-3" >
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control
          type="Password"
          placeholder="Confirm Password"
          name="confirmPassword"
          onChange={handeFormChange}
          className={`form-control ${LoginFormError.confirmPassword ? 'border-danger' : ''}`}
        />
        {LoginFormError.confirmPassword && (
          <Form.Text className=" text-danger">
          {LoginFormError.confirmPassword}          
         </Form.Text>
        )}
      </Form.Group>

      <Button variant="success" type="submit">
        Submit
      </Button>
    </Form>
  );
}
