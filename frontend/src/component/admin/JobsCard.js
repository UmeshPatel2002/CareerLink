import React from 'react'
import { useNavigate } from 'react-router-dom'

const JobsCard=({job})=> {
    const navigate=useNavigate()
  return (
      <div  className='p-5 rounded-md shadow-xl bg-white border border-gray-100 cursor-pointer'>
            <div>
                <h1 className='font-bold text-lg my-2'>Role <span>{job?.title}</span></h1>
                <p className='text-sm text-gray-600'>Job Type <span>{job?.jobType}</span></p>
                <p className='text-sm text-gray-600'>Posted Date <span>{job?.createdAt?.split("T")[0]}</span></p>
                <p className='text-sm text-gray-600'>Total Applications <span>{job?.applications?.length}</span></p>

            </div>
            <div className='flex items-center gap-3 mt-4'>
                 <p onClick={()=>navigate(`/admin/applications/${job?._id}`)} className='border rounded-md bg-black text-white px-2 py-1 cursor-pointer'>View Applicants</p>
                 <p onClick={()=>navigate(`/admin/applications/${job?._id}`)} className='border rounded-md bg-black text-white px-2 py-1 cursor-pointer'>Edit</p>
            </div>

        </div>
  )
}

export default JobsCard