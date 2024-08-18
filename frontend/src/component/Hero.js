import React from 'react'
import search from '../assets/search.png'

const Hero=()=>{
  return (
    <div className='mx-auto max-w-[1440px] text-center'>
        <div>
            <h1 className='text-5xl font-bold mt-6'> Search, Apply & <br/>Get Your Dream Job</h1>
            <p className='mt-4'>Lorem ipsum dolor sit amet, consectetur , luctus nec ullamcorper mattis, pulvinar dapibus leo.
             <div className='flex w-[40%] items-center mx-auto border rounded-full shadow-md border-gray-200 gap-4 h-10 mt-6 pl-6'>
              <input 
                type='text'
                placeholder='Find your dream job'
                className='outline-none border-none w-[90%]'
               />
               <button className='rounded-full'>
                  <img className='w-12 h-10'   src={search} alt=''/>
                </button>
             </div>
            </p>
        </div>
    </div>
  )
}

export default Hero