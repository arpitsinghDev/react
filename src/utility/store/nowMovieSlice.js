import { createSlice } from "@reduxjs/toolkit";

const nowMovie=createSlice({
    name:"nowMovie",
    initialState:null,
    reducers:{
        addNowMovie:(state,action)=>action.payload,
        removeNowMovie:()=>null
    }
});


export default nowMovie.reducer;

export const {addNowMovie,removeNowMovie}=nowMovie.actions;