import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import CategoryCarousel from './CategoryCarousel'
import LatestJob from './latestJobs/LatestJob'
import Footer from './Footer'

const Home=()=> {
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