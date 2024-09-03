import { createSlice } from "@reduxjs/toolkit";

const companySlice = createSlice({
    name:"company",
    initialState:{
        company:null,
        companies:[],
        searchInputText:""
    },
    reducers:{
        setCompany:(state,action) => {
            state.company = action.payload;
        },
        setCompanies:(state,action) => {
            state.companies = action.payload;
        },
        setsearchInputText:(state,action)=>{
               state.searchInputText=action.payload;
        }
        
    }
});
export const {setCompany,setCompanies,setsearchInputText} = companySlice.actions;
export default companySlice.reducer;