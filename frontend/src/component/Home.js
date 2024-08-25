import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import CategoryCarousel from './CategoryCarousel'
import LatestJob from './latestJobs/LatestJob'
import Footer from './Footer'
 import useGetAllJob from './hooks/useGetAllJob'

const Home=()=> {
  useGetAllJob()
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