import React from 'react'
import { useNavigate } from 'react-router-dom'

const JobsCard=({job})=> {
    const navigate=useNavigate()
  return (
      <div  className='p-5 rounded-md shadow-xl bg-white border border-gray-100 cursor-pointer'>
            <div className='whitespace-normal'>
                <div className='flex gap-3 '>
                <h1 className='font-bold text-lg '>Role</h1>
                <span>{job?.title}</span>
                </div>
                <div className='flex gap-3'>
                <p className='text-sm font-bold text-gray-600'>Job Type </p>
                <span>{job?.jobType}</span>
                </div>
                <div className='flex gap-3'>
                <p className='text-sm font-bold text-gray-600'>Posted Date </p>
                <span>{job?.createdAt?.split("T")[0]}</span>
                </div>
                <div className='flex gap-3'>
                <p className='text-sm font-bold text-gray-600'>Total Applications </p>
                <span>{job?.applications?.length}</span>
                </div>
                
                
                

            </div>
            <div className='flex items-center gap-3 mt-4'>
                 <p onClick={()=>navigate(`/admin/applications/${job?._id}`)} className='border rounded-md bg-black text-white px-2 py-1 cursor-pointer'>View Applicants</p>
                 {/* <p onClick={()=>navigate(`/admin/applications/${job?._id}`)} className='border rounded-md bg-black text-white px-2 py-1 cursor-pointer'>Edit</p> */}
            </div>

        </div>
  )
}

export default JobsCard