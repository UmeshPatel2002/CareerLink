import { createSlice } from "@reduxjs/toolkit";

const jobSlice = createSlice({
  name: "job",
  initialState: { job: null },
  reducers: {
    setJob: (state, action) => {
      state.job = action.payload;
    },
    // other reducers...
  },
});

export const { setJob } = jobSlice.actions;
export default jobSlice.reducer;
    