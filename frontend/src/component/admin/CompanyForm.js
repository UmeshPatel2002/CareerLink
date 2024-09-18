import React,{useState,useEffect} from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from 'axios'
import useGetCompany from "../hooks/useGetCompany";
const CompanyForm = () => {
     const navigate=useNavigate()
     const {company} =useSelector(state=>state.company)
     const params=useParams()
     console.log("company id ",params)
     useGetCompany(params.id)
     const companyId=params.id
     const [formData,setFormData]=useState(
        {
            name:company?.name,
            description:"",
            website:"",
            location:"",
            file:""
        }
     );

     const formHandler=(e)=>{
        setFormData({...formData,[e.target.name]:e.target.value})
     }

     const fileHandler=(e)=>{
        const file = e.target.files?.[0]
        setFormData({...formData, file})
     }

    //  console.log(formData, "pppppp")


     const  submitHandler=async(e)=>{
        e.preventDefault()
        try{
           
            const res=await axios.put(`${process.env.REACT_APP_SERVER_URL}/api/v1/company/update/${companyId}`,formData,{
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
                withCredentials: true
            })
            if(res.data.success){
                alert(res.data.message);
                navigate("/admin/home");
            }

        }
        catch(e){
             console.log("Error",e)
        }
     }

     useEffect(() => {
        setFormData({
            name: company.name || "",
            description: company.description || "",
            website: company.website || "",
            location: company.location || "",
            file: company.file || null
        })
    },[company]);


    return (
        <div>
            <div className='max-w-2xl mx-auto my-10  border px-5 rounded-md shadow-md '>
                <form onSubmit={submitHandler} >
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
                                readOnly
                               className="border-2 border-black max-w-3/4 px-2 rounded-[4px]"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label>Description</label>
                            <input
                                type="text"
                                name="description"
                                onChange={formHandler}
                                required
                               className="border-2 border-black max-w-3/4 px-2 rounded-[4px]"
                               
                            />
                        </div>
                        <div className="flex flex-col">
                            <label>Website</label>
                            <input
                                type="text"
                                name="website"
                                onChange={formHandler}
                                required
                                className="border-2 border-black max-w-3/4 px-2 rounded-[4px]"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label>Location</label>
                            <input
                                type="text"
                                name="location"
                                onChange={formHandler}
                                required
                                className="border-2 border-black max-w-3/4 px-2 rounded-[4px]"
                               
                            />
                        </div>
                        <div className="flex gap-10 mb-6" >
                            <label>Upload Logo</label>
                            <input
                                type="file"
                                name="file"
                                accept="image/*"
                                required
                                onChange={fileHandler}
                               
                            />
                        </div>

                    </div>
                    <div className="flex justify-center mb-4">
                    <button  type="submit" className="border p-2 rounded-md bg-black text-white " >
                         submit
                        </button>
                    </div>

                </form>
            </div>

        </div>
    )
}

export default CompanyForm