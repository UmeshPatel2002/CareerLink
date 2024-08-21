import React from 'react'
import LatestJobCard from './LatestJobCard';

const randomJobs = [1, 2, 3, 4, 5, 6, 7, 8];

const LatestJob = () => {
    // const {allJobs} = useSelector(store=>store.job);
   
    return (
        <div className='max-w-7xl mx-auto my-20'>
            <h1 className='text-4xl font-bold'><span >Latest</span> Job Openings</h1>
            <div className='grid grid-cols-3 gap-4 my-5'>
                {
                    randomJobs <= 0 ? <span>No Job Available</span> : randomJobs?.slice(0,6).map((job) => <LatestJobCard key={job} job={job}/>)
                }
            </div>
        </div>
    )
}

export default LatestJob