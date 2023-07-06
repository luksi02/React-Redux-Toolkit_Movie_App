import React from "react";
import {getAllMovies, getAllShows} from "../../features/movies/movieSlice";
import {useSelector} from "react-redux";
import MovieCard from "../MovieCard/MovieCard";
import "./MovieListing.scss"


const MovieListing = () => {

    const movies = useSelector(getAllMovies);
    const series = useSelector(getAllShows);
    // // console.log(state);
    // console.log(movies);
    // console.log(series);
    // console.log(movies.Search);
    // console.log(series.Search);

    let renderMovies = "";

    renderMovies = movies.Response === "True" ? (
        movies.Search.map((movie, indexMovie) => {
            return(
                <div key={indexMovie}>
            <MovieCard data={movie} />
                </div>
        );
        })
    ):(
        <div className="movies-error">
            <h3>{movies.Error}</h3>
        </div>
    )

    let renderShows = "";

    renderShows =
        series.Response === "True" ? (
            series.Search.map((movie, indexShow) => {
            return(
                <div key={indexShow}>
            <MovieCard data={movie} />
                </div>
        );
        })
    ):(
        <div className="series-error">
            <h3>{series.Error}</h3>
        </div>
    )

    return (
        <div className="movie-wrapper">
            <div className="movie-list">
                <h2>Movies</h2>
                <div className="movie-container">
                    {renderMovies} render?
                </div>
            </div>
            <div className="show-list">
                <h2>Shows</h2>
                <div className="movie-container">
                    {renderShows}
                </div>
            </div>
        </div>
    );
};

export default MovieListing;