import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faSolidHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faRegularHeart } from "@fortawesome/free-regular-svg-icons";

import { useSelector, useDispatch } from "react-redux";
import {
  AddToWatchList,
  RemoveFromWatchList,
} from "../../Store/Slices/AddToWatchList";

export default function MovieCard({ movieItem }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const watchList = useSelector((state) => state.AddToFavSlice);
  const isInWatchList =
    watchList?.find((movie) => movie.id === movieItem.id) !== undefined;
  const handleHeartClick = () => {
    if (isInWatchList) {
      dispatch(RemoveFromWatchList(movieItem));
    } else {
      dispatch(AddToWatchList(movieItem));
    }
  };

  const imageUrl = `https://image.tmdb.org/t/p/w500${movieItem.poster_path}`;

  return (
    <div className="card h-100">
      <img src={imageUrl} className="card-img-top" alt={movieItem.title} />
      <div className="card-body">
        <h5 className="card-title">{movieItem.title}</h5>
        <p className="card-text">{movieItem.original_title}</p>
        <button
          className="btn btn-primary"
          onClick={() => navigate(`/movieDetails/${movieItem.id}`)}
        >
          View
        </button>
        <a
          className="btn btn-floating m-1 p-3"
          href="#!"
          onClick={handleHeartClick}
        >
          {isInWatchList ? (
            <FontAwesomeIcon icon={faSolidHeart} size="lg" />
          ) : (
            <FontAwesomeIcon icon={faRegularHeart} size="lg" />
          )}
        </a>
      </div>
    </div>
  );
}
