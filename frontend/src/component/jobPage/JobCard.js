import React from 'react'
import { Link } from 'react-router-dom'

const JobCard=({job})=> {
  console.log("j",job)
  
  return (
    <div className='p-5 rounded-md shadow-md bg-white border border-gray-100 hover:scale-105 duration-200 '>
      <div className='flex items-center justify-between'>
         <p className='text-sm text-gray-500'>Few days ago</p>
         <img src='' alt=''/>
      </div>
      <div className='flex items-center gap-2 my-2'>
           <img className="p-6 w-[10px] h-[10px]" src='' alt=''/>
           <div>
            <p className='font-medium text-lg'>{job?.company?.name}</p>
            <p className='text-sm text-gray-500'>India</p>
           </div>
      </div>
      <div>
        <h1 className='font-bold text-lg my-2'>{job?.title}</h1>
        <p className='text-sm text-gray-600'>{job?.description}</p>
      </div>
      <div className='flex items-center gap-2 mt-4'>
        <p className='text-blue-700 font-bold'>{job?.positions} </p>
        <p className='text-[#F83002] font-bold' >{job?.jobType}  </p>
        <p className='text-[#7209b7] font-bold' >{job?.salary}LPA</p>
      </div>
      <div className='flex gap-4 justify-center mt-3'>
          <Link to="/details"><button className='border pl-2 pr-2 rounded-md '>Details</button></Link>
          <Link to="/details"><button button className='border pl-2 pr-2 rounded-md '>Apply</button></Link>
      </div>


        
    </div>
  )
}

export default JobCard