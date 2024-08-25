import { createSlice } from "@reduxjs/toolkit";

const jobsSlice = createSlice({
    name:"jobs",
    initialState:{
        allJob:[ ],
    },
    reducers:{
        setJobs:(state, action)=>{
            state.allJob=action.payload;
        }
    }
});
export const {setJobs} = jobsSlice.actions;
export default jobsSlice.reducer;