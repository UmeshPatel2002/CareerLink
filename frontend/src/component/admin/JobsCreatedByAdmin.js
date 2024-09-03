import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar'
import { useNavigate } from 'react-router-dom' 
import { useDispatch } from 'react-redux' 
import useGetAllJob from '../hooks/useGetAllJob'
import JobsTable from './JobsTable'
import { setSearchJob } from '../redux/jobsSlice'
import useGetJobCreatedByAdmin from '../hooks/useGetJobCreatedByAdmin'

const JobsCreatedbyAdmin = () => {
  useGetJobCreatedByAdmin();
  
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setSearchJob(input));
  }, [input]);

  return (
    <div>
      <Navbar />
      <div className='max-w-6xl mx-auto my-10'>
        <div className='flex items-center justify-between my-5'>
          <input
            className="w-fit"
            placeholder="Filter by name, role"
            onChange={(e) => setInput(e.target.value)}
          />
          <button onClick={() => navigate("/admin/jobs/create")}>New Jobs</button>
        </div>
        <JobsTable />
      </div>
    </div>
  )
}

export default JobsCreatedbyAdmin