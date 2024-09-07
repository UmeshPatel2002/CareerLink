import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar'
import { useNavigate } from 'react-router-dom' 
import { useDispatch } from 'react-redux' 
import JobsTable from './JobsTable'
import { setSearchJob } from '../redux/jobsSlice'
import { useSelector } from 'react-redux'
import useGetJobCreatedByAdmin from '../hooks/useGetJobCreatedByAdmin'

const JobsCreatedbyAdmin = () => {
  useGetJobCreatedByAdmin();
  const {companies}=useSelector(state=>state.company)
  console.log("job",companies)
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setSearchJob(input));
  }, [input,dispatch]);


  return (
    <div>
      <Navbar />
      <div className='max-w-6xl mx-auto my-10'>
        <div className=''>
        <div className='flex items-center justify-between my-5'>
          <input
            className="w-fit p-2  outline-none m-0 bg-transparent "
            placeholder="Filter by role , job type  "
            onChange={(e) => setInput(e.target.value)}
          />
          <button onClick={() => navigate("/admin/createJob")} className='bg-black text-white rounded-md p-2'>Create Job</button>
        </div>
        <hr/>
        </div>
        
        <JobsTable/>
      </div>
       </div>
  )
}

export default JobsCreatedbyAdmin