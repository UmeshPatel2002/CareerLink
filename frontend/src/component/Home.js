import React,{useEffect} from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import CategoryCarousel from './CategoryCarousel'
import LatestJob from './latestJobs/LatestJob'
import Footer from './Footer'
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
    <div>
        <Navbar/>
        <Hero/>
        <CategoryCarousel/>
        <LatestJob/>
        <Footer/>
    </div>
  )
}

export default Home