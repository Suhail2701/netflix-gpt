import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name:"gpt",
    initialState:{
        showGptSearch:false,
    },
    reducers:{
        toggleGPTSerachView:(state, actions)=>{
            state.showGptSearch = !state.showGptSearch;
        }
    }
});


export const {toggleGPTSerachView} = gptSlice.actions;
export default gptSlice.reducer;
