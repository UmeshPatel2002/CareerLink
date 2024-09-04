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
import AdminHome from "./component/admin/AdminHome";
// import CreateCompany from "./component/admin/CreateCompany";
import CompanyForm from "./component/admin/CompanyForm";
import JobsCreatedbyAdmin from "./component/admin/JobsCreatedByAdmin";
import PostJob from "./component/admin/PostJob";

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
          <Route path="/admin/home" element={<AdminHome/>}/>
          <Route path="/admin/jobs" element={<JobsCreatedbyAdmin/>}/>
          {/* <Route path="/admin/createCompany" element={<CreateCompany/>}/> */}
          <Route path="/admin/addcompanydescription/:id" element={<CompanyForm/>}/>
          <Route path="/admin/createJob" element={<PostJob/>}/>
        </Routes>
    </div>
  );
}

export default App;
