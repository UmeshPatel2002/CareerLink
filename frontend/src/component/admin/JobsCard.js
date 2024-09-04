import React from 'react'

const JobsCard=(job)=> {
  return (
      <div  className='p-5 rounded-md shadow-xl bg-white border border-gray-100 cursor-pointer'>
            <div>
                <h1 className='font-bold text-lg my-2'>Role <span>{job?.title}</span></h1>
                <p className='text-sm text-gray-600'>Job Type <span>{job?.jobType}</span></p>
                <p className='text-sm text-gray-600'>Posted Date <span>{job?.createdAt?.split("T")[0]}</span></p>
                <p className='text-sm text-gray-600'>Total Applicants <span>{job?.applications?.length}</span></p>

            </div>
            <div className='flex items-center gap-2 mt-4'>
               
            </div>

        </div>
  )
}

export default JobsCard