
import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Login from "../src/component/loginSignup/Login"
import Signup from "../src/component/loginSignup/Signup"
import Home from "./component/Home";

function App() {
  return (
    <div className="App">
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
        </Routes>
    </div>
  );
}

export default App;
