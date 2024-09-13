import React, { useState } from "react";
import Navbar from "../Navbar";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { setCompany } from "../redux/companySlice";

import { useDispatch } from "react-redux";

const CreateCompany = () => {
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const [companyName,setCompanyName]=useState()
    const registerCompany=async()=>{
     try{
         const res=await axios.post('http://localhost:8000/api/v1/company/register', {companyName},{
            headers:{
                "Content-Type":"application/json"
            },
            withCredentials:true
         })
         if(res.data.success){
            alert(res.data.message)
            console.log(res.data.company)
            dispatch(setCompany(res.data.company))
            navigate(`/admin/addcompanydescription/${res.data.company._id}`)
         }
         else{
           alert(res.data.message)
            console.log("company with same name already exist")
         }
     }
     catch(error){
             console.log("errors while registring company " , error)
     }



    }


  return (
    <div>
      <div className=" flex justify-center max-w-2xl mx-auto border mt-6 shadow-md rounded-md">
        <div>
          <div className="my-10">
            <h1 className="font-bold text-2xl ">Your's Company Name</h1>
            <p className="text-gray-500">
              What would you like to give your company name? you can change this
              later.
            </p>
          </div>

          <div className="flex flex-col">
            <label>Company Name</label>
            <input
              type="text"
              placeholder="Enter your's company name"
              onChange={(e)=>setCompanyName(e.target.value)}
              className=" max-w-[50%] my-3 border border-black pl-3"
            />
          </div>
          <div className="flex items-center gap-6 my-4 ">
             <span onClick={()=>navigate('/admin/companies')} className="border rounded-md bg-black text-white px-2 py-1 cursor-pointer">Cancel</span>
             <span onClick={registerCompany}  className="border rounded-md bg-black  text-white px-2 py-1 cursor-pointer">Continue</span>
          </div>
             
        </div>
      </div>
    </div>
  );
};
export default CreateCompany;
