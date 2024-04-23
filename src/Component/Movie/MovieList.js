import React, { useEffect, useState } from 'react'
import MovieCard from './MovieCard'
import axios from 'axios';

export default function MovieList() {
    const [Movie ,setMovie] = useState([]);
    useEffect (()=> {
        axios
        .get(`https://api.themoviedb.org/3/movie/popular?api_key=5e36935a2d1be939492fae039e2bf7b0`)
        .then((res) => setMovie(res.data.results))
        .catch((error)=> console.log(error))
    },[]);
  return (
    <>
    <h2>Popular Movies</h2>
    <div className="row row-cols-1 row-cols-md-6 g-4">
        {Movie.map((Movie)=>{
            return (
                <div className='col' key={Movie.id}>
                    <MovieCard movieItem={Movie}/>
                </div>
            );
        })}

    </div>
    </>
  )
}
