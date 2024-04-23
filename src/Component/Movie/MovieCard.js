import React from 'react';
import { useNavigate } from "react-router-dom";

export default function MovieCard({ movieItem }) {  
    const navigate = useNavigate();

    const imageUrl = `https://image.tmdb.org/t/p/w500${movieItem.poster_path}`;

    return (
      <div className="card h-100">
        <img src={imageUrl} className="card-img-top"  alt={movieItem.title} />
        <div className="card-body">
          <h5 className="card-title">{movieItem.title}</h5>
          <p className="card-text">{movieItem.original_title}</p>
          <button
            className="btn btn-primary"
            onClick={() => navigate(`/movie-Detailes/${movieItem.id}`)}>
            View
          </button>
        </div>
      </div>
    );
}
