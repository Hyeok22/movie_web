import React from "react";
import "./Movies.css";

function Movie({title, year, poster, rating, genres, summary}) {
    return (
        <div className="movie">
            <img src={poster} alt={title} title={title}/>
            <div className="movie_data">
                <h4 className="movie_title" title={title}>{title}</h4>
                <h5 className="movie_year">{year}</h5>
                <h4 className="movie_rating">⭐️ {rating}</h4>
                <h5 className="movie_summary">{summary}</h5>
            </div>
        </div>
    )
}

export default Movie;