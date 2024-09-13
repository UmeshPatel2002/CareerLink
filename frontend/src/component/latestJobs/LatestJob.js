import React from 'react'
import LatestJobCard from './LatestJobCard';
import { useSelector } from 'react-redux';


const LatestJob = () => {
    const {allJob}=useSelector(state=>state.jobs)
    // console.log("jobbb",allJob)
   
    return (
        <div className='max-w-7xl mx-auto my-20 px-[30px] '>
            <h1 className=' text-2xl sm:text-3xl  md:text-4xl font-bold'><span >Latest</span> Job Openings</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 gap-4 my-5'>
                {
                    (!allJob || allJob.length === 0) ? (
                        <span>No Job Available</span>
                      ) : (
                        allJob?.slice(0, 6).map((job) => (
                          <LatestJobCard key={job._id} job={job} />
                        ))
                      )
                }
            </div>
        </div>
    )
}

export default LatestJob