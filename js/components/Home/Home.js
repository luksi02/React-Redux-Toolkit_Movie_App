import React, {useEffect} from 'react';
import MovieListing from "../MovieListing/MovieListing";
import "./Home.scss";
import movieAPI from "../../common/APIs/MovieAPI";
import {APIKey} from "../../common/APIs/MovieAPIKey";
import {useDispatch} from "react-redux";
import {addMovies} from "../../features/movies/movieSlice";

const Home = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        const movieText = "Harry"

        const fetchMovies = async () => {
            const response = await movieAPI
                .get(`?apiKey=${APIKey}&s=${movieText}&type=movie`)
                .catch((err) => {
                console.log("Error: ", err);
            });
            console.log("The response from API: ", response);
            dispatch(addMovies(response.data));
        };

        fetchMovies();
    }, [])

    return (
        <div>
        <div className="banner-img"></div>
            <MovieListing />
        </div>
    );
};

export default Home;