import { createSlice } from "@reduxjs/toolkit";

const initialState={
    allJob:[],
    jobsCreatedbyAdmin:[],
    searchJob:'',    
    filterdata:'',
    appliedJobs:[],
}
const jobsSlice = createSlice({
    name:"jobs",
    initialState,
    reducers:{
        setAllJobs:(state, action)=>{
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
        setFilterdata:((state,action)=>{
            state.filterdata=action.payload
        }),
        setSearch:((state,action)=>{
             state.search=action.payload;
        }),
        setAppliedJobs:((state,action)=>{
            state.appliedJobs=action.payload;
       })
    }
});

export const {setAllJobs, reset,setSearchJob,setJobsCreatedbyAdmin,setFilterdata,setAppliedJobs}=jobsSlice.actions;
export default jobsSlice.reducer;