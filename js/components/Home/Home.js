import React, {useEffect} from 'react';
import MovieListing from "../MovieListing/MovieListing";
import "./Home.scss";
import movieAPI from "../../common/APIs/MovieAPI";
import {APIKey} from "../../common/APIs/MovieAPIKey";

const Home = () => {

    useEffect(() => {
        const movieText = "Harry"
        const fetchMovies = async () => {
            const response = await movieAPI
                .get(`?apiKey=${APIKey}&s=${movieText}&type=movie`)
                .catch((err) => {
                console.log("Error: ", err);
            });
            console.log("Te response from API: ", response);
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
