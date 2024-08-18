import React from 'react'
import Filter from './Filter'
import Navbar from '../Navbar'
import JobCard from './JobCard'

const AllJob=()=> {
  return (
    <div className='max-w-[1440px] mx-auto'>
        <Navbar/>
        <Filter/>
        <JobCard/>
        
    </div>
  )
}

export default AllJob