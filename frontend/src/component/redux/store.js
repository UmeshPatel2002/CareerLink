// import { configureStore } from "@reduxjs/toolkit";
// import authSlice from "./authSlice";

// import jobSlice from "./jobSlice";
// import jobsSlice from "./jobsSlice";

// const store=configureStore({
//        reducer:{
//         auth:authSlice,
//         jobs:jobsSlice,
//         job:jobSlice,
         
//        }
// })

// export default store

import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import jobSlice from "./jobSlice";
import jobsSlice from "./jobsSlice";
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // Default: localStorage for web

// Configuration for redux-persist
const persistConfig = {
  key: 'root', // Key to store in the storage
  storage,     // Type of storage (localStorage in this case)
  whitelist: ['auth'] // Reducers you want to persist (you can add more here)
};

// Combine reducers
const rootReducer = combineReducers({
  auth: authSlice,
  jobs: jobsSlice,
  job: jobSlice
});

// Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure the store with the persisted reducer
const store = configureStore({
  reducer: persistedReducer
});

// Create the persistor
export const persistor = persistStore(store);

export default store;

