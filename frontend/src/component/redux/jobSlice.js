import { createSlice } from "@reduxjs/toolkit";

const jobSlice = createSlice({
  name: "job",
  initialState: { 
    job: null,
    isApplied:false 
   },
  reducers: {
    setJob: (state, action) => {
      state.job = action.payload;
    },
    setisApplied:(state,action)=>{
        state.isApplied=action.payload;
    }
  },
});

export const { setJob,setisApplied} = jobSlice.actions;
export default jobSlice.reducer;
    