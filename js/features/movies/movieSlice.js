import {createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import movieAPI from "../../common/APIs/MovieAPI";
import {APIKey} from "../../common/APIs/MovieAPIKey";


export const fetchAsyncMovies = createAsyncThunk(
    "movies/fetchAsyncMovies",
    async (term) => {

        // const movieText = "Harry"

    const response = await movieAPI
        .get(`?apiKey=${APIKey}&s=${term}&type=movie`)
        // .get(`?apiKey=${APIKey}&s=${movieText}&type=movie`)
        .catch((err) => {
            console.log("Error: ", err);
        });
    // console.log("The response from API: ", response);
    return response.data;
})

export const fetchAsyncShows = createAsyncThunk(
    "movies/fetchAsyncShows",
    async (term) => {
    // async () => {

        // const seriesText = "Friends"

    const response = await movieAPI
        .get(`?apiKey=${APIKey}&s=${term}&type=series`)
        // .get(`?apiKey=${APIKey}&s=${seriesText}&type=series`)
        .catch((err) => {
            console.log("Error: ", err);
        });
    // console.log("The response from API: ", response);
    return response.data;
})

export const fetchAsyncMovieOrShowDetail = createAsyncThunk(
    "movies/fetchAsyncMovieOrShowDetail",
    async (id) => {


    const response = await movieAPI
        .get(`?apiKey=${APIKey}&i=${id}&Plot=full`)
        .catch((err) => {
            console.log("Error: ", err);
        });
    // console.log("The response from API: ", response);
    return response.data;
})

const initialState = {
    movies: {},
    series: {},
    selectedMovieOrShow: {},
}

const movieSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        addMovies: (state, {payload}) => {
            state.movies = payload;
        },
        removeSelectedMovieOrShow: (state) => {
            state.selectedMovieOrShow = {};
        },
    },
    extraReducers: {
        [fetchAsyncMovies.pending]: () => {
            console.log('Pending');
        },
        [fetchAsyncMovies.fulfilled]: (state, {payload}) => {
            console.log("Movies fetched successfully!");
            return {...state, movies: payload };
        },
        [fetchAsyncShows.fulfilled]: (state, {payload}) => {
            console.log("Series fetched successfully!");
            return {...state, series: payload };
        },
        [fetchAsyncMovieOrShowDetail.fulfilled]: (state, {payload}) => {
            console.log("Movie or show fetched successfully!");
            return {...state, selectedMovieOrShow: payload };
        },
        [fetchAsyncMovies.rejected]: () => {
            console.log("Rejected");
        }
    }
});

export const {addMovies, removeSelectedMovieOrShow} = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.series;
export const getSelectedMovieOrShow = (state) => state.movies.selectedMovieOrShow;


// export const getAllMovies = () => movies.movies;
export default movieSlice.reducer;