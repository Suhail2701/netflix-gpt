import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name:"gpt",
    initialState:{
        showGptSearch:false,
        movieNames:null,
        moviesList:null,
    },
    reducers:{
        toggleGPTSerachView:(state, actions)=>{
            state.showGptSearch = !state.showGptSearch;
        },
        addGptResults:(state, action)=>{
            const {movieNames, moviesList} = action.payload;
            state.movieNames = movieNames;
            state.moviesList = moviesList;
        }
    }
});


export const {toggleGPTSerachView, addGptResults} = gptSlice.actions;
export default gptSlice.reducer;
