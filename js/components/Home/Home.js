import React, {useEffect} from 'react';
import MovieListing from "../MovieListing/MovieListing";
import "./Home.scss";
// import movieAPI from "../../common/APIs/MovieAPI";
// import {APIKey} from "../../common/APIs/MovieAPIKey";
import {useDispatch} from "react-redux";
import {addMovies, fetchAsyncMovies, fetchAsyncShows} from "../../features/movies/movieSlice";

const Home = () => {

    const dispatch = useDispatch();

    const movieText = "Harry";
    const showText = "Friends";

    useEffect(() => {

        dispatch(fetchAsyncShows(showText));
        dispatch(fetchAsyncMovies(movieText));

        // // const movieText = "Harry"
        // // now using middleware - redux-thunk:
        //
        // // const fetchMovies = async () => {
        // //     // const response = await movieAPI
        // //     //     .get(`?apiKey=${APIKey}&s=${movieText}&type=movie`)
        // //     //     .catch((err) => {
        // //     //     console.log("Error: ", err);
        // //     // });
        // //     // console.log("The response from API: ", response);
        // //     // dispatch(addMovies(response.data));
        // // };
        //
        // fetchMovies();
    }, [dispatch])

    return (
        <div>
        <div className="banner-img"></div>
            <MovieListing />
        </div>
    );
};

export default Home;