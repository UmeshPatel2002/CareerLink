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
import companySlice from "./companySlice";
import applicationSlice from "./applicationSlice";

// Configuration for redux-persist
const persistConfig = {
  key: 'root', // Key to store in the storage
  storage,     // Type of storage (localStorage in this case)
  whitelist: ['auth','jobs','job','company','application'] // Reducers you want to persist (you can add more here)
};

// Combine reducers
const rootReducer = combineReducers({
  auth: authSlice,
  jobs: jobsSlice,
  job: jobSlice,
  company:companySlice,
  application:applicationSlice,
});

// Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure the store with the persisted reducer and customize the middleware
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
        // Optionally, you could ignore paths if needed, but it seems your issue was with actions.
      },
    }),
});

// Create the persistor
export const persistor = persistStore(store);

export default store;