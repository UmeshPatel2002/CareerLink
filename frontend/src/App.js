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

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/job" element={<AllJob/>}/>
          <Route path="/details" element={<JobDescription/>}/>
          <Route path="/profile" element={<Profile/>}/>
          
        </Routes>
    </div>
  );
}

export default App;
