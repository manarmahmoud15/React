import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import AddMovie from '../Pages/AddMovie';
// import ContactUs from '../Pages/ContactUs';
import NotFound from '../Pages/NotFound';
import Layout from '../Component/Layout';
import Movie from '../Pages/Movie';
import MovieDetailes from '../Pages/MovieDetailes';
import Counter from '../Pages/Counter';
import Register from '../Pages/Register';
import Header from '../Component/Layout/Header';

const ContactUs = React.lazy(()=> import ('../Pages/ContactUs'));

export default function RoutesPaths() {
  return (
    // <Suspense fallback={<Header/>}> can call component 
    <Suspense fallback={<h1>Loading...</h1>}>
        <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Movie />} />
        <Route path="movies" element={<Movie />} />
        <Route path="add-movie" element={<AddMovie />} />
        <Route path="movieDetails/:id" element={<MovieDetailes />} />
        <Route path="counter" element={<Counter/>} />
      </Route>
      <Route path="contact-us" element={<ContactUs />} />
      <Route path='register' element={<Register/>}/>

      <Route path="*" element={<NotFound />} />
    </Routes>
    </Suspense>
  
  );
}
