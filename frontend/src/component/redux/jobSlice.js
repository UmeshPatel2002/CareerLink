import { createSlice } from "@reduxjs/toolkit";

const jobSlice=createSlice({
    name:"job",
    initialState:{
        job:null
    },
    reducers:{
        setjob:(state,action)=>{
            state.job=action.payload;
        }
    }

})

export const {setJob} = jobSlice.actions;
export default jobSlice.reducer;
    