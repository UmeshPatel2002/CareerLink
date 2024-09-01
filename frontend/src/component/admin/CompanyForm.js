import React,{useState} from "react";
import Navbar from "../Navbar";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from 'axios'
const CompanyForm = () => {
     const navigate=useNavigate()
     const {company} =useSelector(state=>state.company)
     const [formData,setFormData]=useState(
        {
            name:company?.name,
            description:"",
            website:"",
            location:"",
            logo:""

        }
     );

     const formHandler=(e)=>{
        setFormData({...formData,[e.target.name]:e.target.value})
     }

     const fileHandler=(e)=>{
        const file = e.target.files?.[0].
        setFormData({...formData,file})
     }

     console.log(formData, "pppppp")


     const  submitHandler=async(e)=>{
        e.prventDefault()
        try{
           

        }
        catch(e){
             console.log("Error",e)
        }
     }


    return (
        <div>
            <Navbar />
            <div className='max-w-2xl mx-auto my-10  border px-5 rounded-md shadow-md '>
                <form >
                    <div className='flex gap-10 p-8'>
                        <p onClick={() => navigate("/admin/companies")} className="border max-h-[40px] rounded-md bg-black text-white px-4 py-1 cursor-pointer">Back</p>
                        <h1 className='font-bold text-xl'>Company  Form</h1>
                    </div>
                    <div className='grid grid-cols-2 gap-4'>
                        <div className="flex flex-col" >
                            <label>Company Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                               className="border-2 border-black max-w-3/4 px-2 rounded-[4px]"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label>Description</label>
                            <input
                                type="text"
                                name="description"
                                onChange={formHandler}
                               className="border-2 border-black max-w-3/4 px-2 rounded-[4px]"
                               
                            />
                        </div>
                        <div className="flex flex-col">
                            <label>Website</label>
                            <input
                                type="text"
                                name="website"
                                onChange={formHandler}
                                className="border-2 border-black max-w-3/4 px-2 rounded-[4px]"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label>Location</label>
                            <input
                                type="text"
                                name="location"
                                onChange={formHandler}
                                className="border-2 border-black max-w-3/4 px-2 rounded-[4px]"
                               
                            />
                        </div>
                        <div className="flex gap-10 mb-6" >
                            <label>Upload Logo</label>
                            <input
                                type="file"
                                accept="image/*"
                                onChange={fileHandler}
                               
                            />
                        </div>
                    </div>

                </form>
            </div>

        </div>
    )
}

export default CompanyForm