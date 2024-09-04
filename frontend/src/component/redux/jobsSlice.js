import { createSlice } from "@reduxjs/toolkit";

const initialState={
    allJob:[],
    jobsCreatedbyAdmin:[],
    searchJob:'',
}
const jobsSlice = createSlice({
    name:"jobs",
    initialState,
    reducers:{
        setJobs:(state, action)=>{
            state.allJob=action.payload;
        },
        reset: (state) => {
            return initialState; // Reset to initialState
          },
        setSearchJob:(state,action)=>{
            state.searchJob=action.payload
          },
          setJobsCreatedbyAdmin:(state, action)=>{
            state.jobsCreatedbyAdmin=action.payload;
        },
    }
});

export const {setJobs, reset,setSearchJob,setJobsCreatedbyAdmin}=jobsSlice.actions;
export default jobsSlice.reducer;