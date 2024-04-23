import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function MovieDetailes() {
  const [movieDetails , SetMovieDetails] = useState({})
    const param = useParams() ;
    console.log(param);
    useEffect(() => {
      axios.get(`https://api.themoviedb.org/3/movie/${param.id}?api_key=5e36935a2d1be939492fae039e2bf7b0`
      ,{
      param :{
        page :1 
      }
    })
      .then((res) => SetMovieDetails(res.data))
      .catch((error)=> console.log(error))
    },[]);
    const imageUrl = `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`;

  return (
   <>
    <div className="row row-cols-1 row-cols-md-4 g-4">
   <div className="card h-100">
        <img src={imageUrl} className="card-img-top" alt={movieDetails.title} />
        <div className="card-body">
          <h5 className="card-title">{movieDetails.title}</h5>
          <p className="card-text">{movieDetails.original_title}</p>
        </div>
      </div>
      </div>
   </>
  )
}
