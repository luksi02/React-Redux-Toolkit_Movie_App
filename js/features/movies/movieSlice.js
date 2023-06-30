import {createSlice} from '@reduxjs/toolkit';

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
    // extraReducers: {} [LG]: -- not used

});

export const {addMovies} = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
// export const getAllMovies = () => movies.movies;
export default movieSlice.reducer;