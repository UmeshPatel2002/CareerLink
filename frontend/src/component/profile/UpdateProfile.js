import axios from "axios";
import React, { useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { setUser } from "../redux/authSlice";

const UpdateProfile = ({ setOpen }) => {
    const {user}=useSelector(store=>store.auth)
    const dispatch = useDispatch();

    const [inputData, setInputData]=useState({
        phoneNumber: user?.phoneNumber || "",
        bio: user?.profile?.bio || "",
        skills: user?.profile?.skills?.map(skill => skill) || "",
        file: user?.profile?.profilePhoto || ""
    })
    

    const changeHandler=(e)=>{
        setInputData({...inputData, [e.target.name]:e.target.value})
    }

    const fileHandler=(e)=>{
        const file = e.target.files?.[0]
        setInputData({...inputData, file})
    }
    // console.log(inputData)

    const submitHandler=async(e)=>{
        e.preventDefault()

        try{
            const res=await axios.post('http://localhost:8000/api/v1/user/profile/update',inputData,{
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
                withCredentials: true
            })
            if(res.data.success){
                console.log(res.data)
                dispatch(setUser(res.data.user))
                setOpen(false) 
            }
        }
        catch(error){
             console.log("Error",error)
        }
    }


  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg">
      <form onSubmit={submitHandler} className="bg-white p-6 rounded-lg shadow-lg"> 
        <div className="grid gap-4 py-4 px-[30px]">
        <div className="grid grid-cols-4 items-center gap-4">
            <label htmlFor="bio" className="text-right">
              Bio
            </label>
            <input
              id="bio"
              name="bio"
              value={inputData.bio}
              onChange={changeHandler}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <label htmlFor="number" className="text-right">
              Mob. no
            </label>
            <input
              id="number"
              name="number"
              value={inputData.phoneNumber}
              onChange={changeHandler}
              className="col-span-3"
            />
          </div>
          
          <div className="grid grid-cols-4 items-center gap-4">
            <label htmlFor="skills" className="text-right">
              Skills
            </label>
            <input
              id="skills"
              name="skills"
              value={inputData.skills}
              onChange={changeHandler}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <label htmlFor="file" className="text-right">
              Resume
            </label>
            <input
              id="file"
              name="file"
              type="file"
              accept="*"
              onChange={fileHandler}
              className="col-span-3"
            />
          </div>
        </div>
            <div className="flex justify-center gap-6 my-4">
            <button  type="submit" className="border p-2 rounded-md bg-blend-darken " >
              Update
            </button>
            <button onClick={()=>setOpen(false) } className="border pl-4 pr-4 rounded-md">Close</button>
            </div>
            
        
      </form>
      </div>
      
    </div>
  );
};

export default UpdateProfile;
