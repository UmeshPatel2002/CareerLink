import React, { useState} from "react";
import Navbar from '../Navbar'
import avatar from "../../assets/avatar.png";
import email_icon from "../../assets/email-icon.webp"
import phone_icon from "../../assets/phone.png"
import UpdateProfile from './UpdateProfile';
import { useSelector } from "react-redux";


const Profile=()=> {
    const skills=['c/c++','html' ,'css', 'javascript', 'Dsa']
    const [open, setOpen]=useState(false);
    const {user}=useSelector(store=>store.auth)
    
  return (
    <div>
        <Navbar/>
        <div className='max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl my-5 p-8'>
                <div className='flex justify-between'>
                    <div className='flex items-center gap-4'>
                        <div className="h-24 w-24">
                            <img src={avatar} alt="profile" />
                        </div>
                        <div>
                            <h1 className='font-medium text-xl'>{user?.fullName}</h1>
                            <p>{user?.profile?.bio}</p>
                            
                        </div>
                    </div>
                    <button onClick={()=>setOpen(true)} className="text-right" variant="outline">Edit</button>
                </div>
                <div className='my-5'>
                    <div className='flex items-center gap-3 my-2 h-6 w-6'>
                        <img src={email_icon} alt=''/>
                        <span>{user?.email}</span>
                    </div>
                    <div className='flex items-center gap-3 my-2 h-6 w-6'>
                        <img src={phone_icon} alt=''/>
                        <span>{user?.phoneNumber}</span>
                    </div>
                </div>
                <div className='my-5'>
                    <h1>Skills</h1>
                    <div className='flex  items-center gap-1 mt-1'>
                        {
                            user?.profile?.skills.length !== 0 ? user?.profile?.skills.map((item, index) =>{
                                return <span className='border bg-gray-400 rounded-full pl-2 pr-2' key={index}>{item}</span>
                            }):<p>NA</p>
                            
                        }
                    </div>
                </div>
                <div className='grid w-full max-w-sm items-center gap-1.5'>
                    <label className="text-md font-bold">Resume</label>
                    {
                       (user?.profile?.resume)?(<a href={`user?.profile.resume`} className="text-blue-400 underline">Link</a>):<p>NA</p>
                    }
                </div>
            </div>
            <div className='max-w-4xl mx-auto bg-white rounded-2xl'>
                <h1 className='font-bold text-lg my-5'>Applied Jobs</h1>
                
            </div>
           { open && <UpdateProfile setOpen={setOpen}/>}
    </div>
  )
}

export default Profile