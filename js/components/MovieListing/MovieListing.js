import React from "react";
import {getAllMovies, getAllShows} from "../../features/movies/movieSlice";
import {useSelector} from "react-redux";
import MovieCard from "../MovieCard/MovieCard";
import "./MovieListing.scss";
import Slider from "react-slick";
import Settings from "../../common/settings"


const MovieListing = () => {

    const movies = useSelector(getAllMovies);
    const series = useSelector(getAllShows);

    // const settings = {
    //     dots: false,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 6,
    //     slidesToScroll: 3
    // };

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
                    <Slider {...Settings}>{renderMovies} </Slider>
                </div>
            </div>
            <div className="show-list">
                <h2>Shows</h2>
                <div className="movie-container">
                    <Slider {...Settings}>{renderShows}</Slider>
                </div>
            </div>
        </div>
    );
};

export default MovieListing;