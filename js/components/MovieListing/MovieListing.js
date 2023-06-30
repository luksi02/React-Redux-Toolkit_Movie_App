import React from "react";
import {getAllMovies} from "../../features/movies/movieSlice";
import {useSelector} from "react-redux";
import MovieCard from "../MovieCard/MovieCard";
import "./MovieListing.scss"


const MovieListing = () => {

    const movies = useSelector(getAllMovies);
    // console.log(state);
    console.log(movies);
    console.log(movies.Search)

    let renderMovies = "";

    renderMovies = movies.Response === "True" ? (
        movies.Search.map((movie, index) => {
            return(
                <div key={index}>
            <MovieCard data={movie} />
                </div>
        );
        })
    ):(
        <div className="movies-error">
            <h3>{movies.Error}</h3>
        </div>
    )



    return (
        <div className="movie-wrapper">
            <div className="movie-list">
                <h2>Movies</h2>
                <div className="movie-container">
                    {renderMovies}
                </div>
            </div>
        </div>
    );
};

export default MovieListing;