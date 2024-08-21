import React from 'react'

const JobCard=()=> {
  
  return (
    <div className='p-5 rounded-md shadow-md bg-white border border-gray-100 hover:scale-105 duration-200 '>
      <div className='flex items-center justify-between'>
         <p className='text-sm text-gray-500'>Few days ago</p>
         <img src='' alt=''/>
      </div>
      <div className='flex items-center gap-2 my-2'>
           <img className="p-6 w-[10px] h-[10px]" src='' alt=''/>
           <div>
            <p className='font-medium text-lg'>Company Name</p>
            <p className='text-sm text-gray-500'>India</p>
           </div>
      </div>
      <div>
        <h1 className='font-bold text-lg my-2'>Title</h1>
        <p className='text-sm text-gray-600'>Lorem20</p>
      </div>
      <div className='flex items-center gap-2 mt-4'>
        <p className='text-blue-700 font-bold'> Positions</p>
        <p className='text-[#F83002] font-bold' > type </p>
        <p className='text-[#7209b7] font-bold' >LPA</p>
      </div>
      <div>

      </div>


        
    </div>
  )
}

export default JobCard