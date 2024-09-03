import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../src/component/loginSignup/Login"
import Signup from "../src/component/loginSignup/Signup"
import Home from "./component/Home";
import AllJob from "./component/jobPage/AllJob";
import Profile from "./component/profile/Profile";
import JobDescription from "./component/jobPage/JobDescription";
import Company from "./component/admin/Companies";
import CreateCompany from "./component/admin/CreateCompany";
import CompanyForm from "./component/admin/CompanyForm";
import Jobtable from "./component/admin/JobsTable";
import JobsCreatedbyAdmin from "./component/admin/JobsCreatedByAdmin";

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/job" element={<AllJob/>}/>
          <Route path="/details/:id" element={<JobDescription/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/admin/companies" element={<Company/>}/>
          <Route path="/admin/jobs" element={<JobsCreatedbyAdmin/>}/>
          <Route path="/admin/createCompany" element={<CreateCompany/>}/>
          <Route path="/admin/addcompanydescription/:id" element={<CompanyForm/>}/>
        </Routes>
    </div>
  );
}

export default App;
