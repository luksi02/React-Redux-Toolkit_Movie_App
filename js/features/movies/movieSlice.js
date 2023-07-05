import {createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import movieAPI from "../../common/APIs/MovieAPI";
import {APIKey} from "../../common/APIs/MovieAPIKey";


const fetchAsyncMovies = createAsyncThunk(
    "movies/fetchAsyncMovies", 
    async () => {

        const movieText = "Harry"
        
    const response = await movieAPI
        .get(`?apiKey=${APIKey}&s=${movieText}&type=movie`)
        .catch((err) => {
            console.log("Error: ", err);
        });
    // console.log("The response from API: ", response);
    return response.data;
})

const initialState = {
    movies: {}
}

const movieSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        addMovies: (state, {payload}) => {
            state.movies = payload;
        }
    },
    extraReducers: {
        [fetchAsyncMovies.pending]: () => {
            console.log('Pending');
        },
        [fetchAsyncMovies.fulfilled]: (state, {payload}) => {
            console.log("Fetched successfully!");
            return {...state, movies: payload }
        } 
    }
        

});

export const {addMovies} = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
// export const getAllMovies = () => movies.movies;
export default movieSlice.reducer;
