import React from 'react'
import LatestJobCard from './LatestJobCard';
import { useSelector } from 'react-redux';


const LatestJob = () => {
    // const {alljob}=useSelector(state=>state.jobs)

   
    return (
        <div className='max-w-7xl mx-auto my-20'>
            <h1 className='text-4xl font-bold'><span >Latest</span> Job Openings</h1>
            <div className='grid grid-cols-3 gap-4 my-5'>
                {
                    // alljob.length <= 0 ? <span>No Job Available</span> : alljob?.slice(0,6).map((job) => <LatestJobCard key={job} job={job}/>)
                }
            </div>
        </div>
    )
}

export default LatestJob