import React, { useEffect, useState } from 'react'
import search from '../assets/search.svg'
import { setFilterdata } from './redux/jobsSlice'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Hero=()=>{
     const [search,setSearch]=useState()
     const dispatch=useDispatch()
     const navigate=useNavigate()
     const changeHandler=()=>{
      if(search){
       dispatch(setFilterdata(search))
       navigate('/job')}
     }

    
  return (
    <div className='text-center '>
        <div className='flex flex-col items-center justify-center'>
            <h1 className='text-2xl sm:text-3xl md:text-5xl font-bold mt-16'> Search, Apply & <br/>Get Your Dream Job</h1>
            <p className='mt-4 max-w-[60%]'>Lorem ipsum dolor sit amet, consectetur , luctus nec ullamcorper mattis, pulvinar dapibus leo</p>
             <div className='flex w-[40%] items-center mx-auto border rounded-full shadow-md border-gray-200 gap-4 h-10 mt-10 pl-6'>
              <input 
                type='text'
                placeholder='Find your dream job'
                onChange={(e)=>setSearch(e.target.value)}
                className='outline-none border-none w-[60%] sm:w-[80%]'
               />
               <button onClick={changeHandler} className='rounded-tr-full rounded-br-full pl-3 h-[100%] w-[40%] sm:w-[20%] bg-black'>
               <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 50 50" width="30px" height="30px"><path d="M 21 3 C 11.601563 3 4 10.601563 4 20 C 4 29.398438 11.601563 37 21 37 C 24.355469 37 27.460938 36.015625 30.09375 34.34375 L 42.375 46.625 L 46.625 42.375 L 34.5 30.28125 C 36.679688 27.421875 38 23.878906 38 20 C 38 10.601563 30.398438 3 21 3 Z M 21 7 C 28.199219 7 34 12.800781 34 20 C 34 27.199219 28.199219 33 21 33 C 13.800781 33 8 27.199219 8 20 C 8 12.800781 13.800781 7 21 7 Z"/></svg>
                </button>
             </div>
            
        </div>
    </div>
  )
}

export default Hero