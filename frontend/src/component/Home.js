import React,{useEffect} from 'react'
import Hero from './Hero'
import CategoryCarousel from './CategoryCarousel'
import LatestJob from './latestJobs/LatestJob'
import { useNavigate } from 'react-router-dom'
 import useGetAllJob from './hooks/useGetAllJob'
import { useSelector } from 'react-redux'

const Home=()=> {
  useGetAllJob()
  const navigate=useNavigate()
  const {user}=useSelector(state=>state.auth)

  useEffect(() => {
    if (user?.role === 'recruiter') {
      navigate("/admin/home");
    }
  },[]);

  return (
    <div >
        <Hero/>
        <CategoryCarousel/>
        <LatestJob/>
    </div>
  )
}

export default Home