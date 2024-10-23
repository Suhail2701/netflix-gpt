import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies: null,
        movieTrailer: null,
        popularMovies:null,
        topRatedMovies:null,
        upCommingMovies:null,
        selectedMovie:null,
        movieDetails:null,
    },
    reducers:{
        addNowPlayingMovies: (state, action)=>{
            state.nowPlayingMovies = action.payload;
        },
        addMovieTrailer: (state, action)=>{
            state.movieTrailer = action.payload;
        },
        addPopularMovies: (state, action)=>{
            state.popularMovies = action.payload;
        },
        addTopRatedMovies:(state, action)=>{
            state.topRatedMovies = action.payload;
        },
        addUpCommingMovies:(state, action)=>{
            state.upCommingMovies = action.payload;
        },
        addSelectedMovie:(state, action)=>{
            state.selectedMovie = action.payload;
        },
        addMovieDetails:(state, action)=>{
            state.movieDetails = action.payload;
        }
    }
});


export const {addNowPlayingMovies, addMovieTrailer, addPopularMovies, addTopRatedMovies,addUpCommingMovies,addSelectedMovie, addMovieDetails} = moviesSlice.actions;

export default moviesSlice.reducer;