import { createSlice } from "@reduxjs/toolkit";

const initialState={
    allJob:[],
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
    }
});

export const {setJobs, reset}=jobsSlice.actions;
export default jobsSlice.reducer;