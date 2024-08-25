import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import jobsSlice from "./jobsSlice";
import jobSlice from "./jobSlice";

const store=configureStore({
       reducer:{
        auth:authSlice,
        jobs:jobsSlice,
        job:jobSlice,
         
       }
})

export default store
