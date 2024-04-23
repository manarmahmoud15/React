import React from 'react'
import {Route, Routes } from 'react-router-dom';
import AddMovie from '../Pages/AddMovie';
import ContactUs from '../Pages/ContactUs';
import NotFound from '../Pages/NotFound';
import Layout from '../Component/Layout';
import Movie from '../Pages/Movie';
import MovieDetailes from '../Pages/MovieDetailes';

export default function RoutesPaths() {
  return (
    <Routes>
      <Route element={<Layout/>} >
      <Route path='' element={<Movie/>}/>
      <Route path='movies' element={<Movie/>}/>
      <Route path="add-movie" element= {<AddMovie/>}/>
      <Route path='movie-Detailes/:id' element={<MovieDetailes/>}/>
      </Route>  
      <Route path='contact-us' element={<ContactUs/>}/>
      <Route path='*' element={<NotFound/>}/>
    </Routes>
  )
}
