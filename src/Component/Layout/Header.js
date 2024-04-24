import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector } from 'react-redux';

export default function Header() {
  const counter = useSelector ((state) =>state.counter.counter_val)
  return (
    <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor : 'blue'}}>
      <Link className="navbar-brand ms-3" to="/" style={{color :'white'}} >Home</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto" >
          <li className="nav-item" >
            <NavLink className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")} style={{color :'white'}} to="/movies">Movies</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}style={{color :'white'}}  to="/add-movie">Add Movie</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")} style={{color :'white'}}  to="/contact-us">Contact Us</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")} style={{color :'white'}}  to="/counter">Counter :{counter}</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")} style={{color :'white'}}  to="/register">Register</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
