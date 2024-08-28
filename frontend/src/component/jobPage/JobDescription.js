import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import useGetJob from '../hooks/useGetJob'

const JobDescription = () => {
    const isApplied=true
    const params=useParams()
    const jobId=params.id
    useGetJob(jobId)
    const {job}=useSelector(state=>state.job)
    // console.log("jobbb",job)

    return (
        <div className='max-w-7xl mx-auto my-10'>
            <div className='flex items-center justify-between'>
                <div>
                    <h1 className='font-bold text-xl'>{job?.title}</h1>
                    <div className='flex items-center gap-4 mt-4'>
                        <span className={'text-blue-700 font-bold'} variant="ghost">Opening:{job?.position}</span>
                        <span className={'text-[#F83002] font-bold'} variant="ghost"> Type: {job?.jobType}</span>
                        <span className={'text-[#7209b7] font-bold'} variant="ghost">Salary: {job?.salary} LPA</span>
                    </div>
                </div>
                <button
                onClick={isApplied}
                    disabled={isApplied}
                    className={`rounded-lg p-2 ${isApplied ? 'bg-gray-600 cursor-not-allowed' : 'bg-[#3f8da0] hover:bg-[#43a7ba]'}`}>
                    {isApplied ? 'Already Applied' : 'Apply'}
                </button>
            </div>
            <h1 className='border-b-2 border-b-gray-300 font-medium py-4'>Job Description</h1>
            <div className='my-4'>
                <h1 className='font-bold my-1'>Role: <span className='pl-4 font-normal text-gray-800'>{job?.title}</span></h1>
                <h1 className='font-bold my-1'>Location: <span className='pl-4 font-normal text-gray-800'>{job?.location}</span></h1>
                <h1 className='font-bold my-1'>Description: <span className='pl-4 font-normal text-gray-800'>{job?.description}</span></h1>
                <h1 className='font-bold my-1'>Experience: <span className='pl-4 font-normal text-gray-800'>{job?.experienceLevel} yrs</span></h1>
                <h1 className='font-bold my-1'>Salary: <span className='pl-4 font-normal text-gray-800'>{job?.salary} LPA</span></h1>
                <h1 className='font-bold my-1'>Total Applicants: <span className='pl-4 font-normal text-gray-800'>{job?.applicatins?.length}</span></h1>
                <h1 className='font-bold my-1'>Posted Date: <span className='pl-4 font-normal text-gray-800'>{job?.createdAt.split('T')[0]}</span></h1>
            </div>
        </div>
    )
}

export default JobDescription 