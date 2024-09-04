import React from 'react'
import { useSelector } from 'react-redux'
import useGetCompanies from '../hooks/useGetCompanies'

const Home=()=> {
    useGetCompanies()
    const {companies}=useSelector(state=>state.company)
  return (
    <div>
        <div className='flex justify-center gap-6 mt-20'>
        <div className=' flex max-w-[80px] max-h-[80px] justify-center '>
           <img className='rounded-full' src={companies[0]?.logo} alt=''/>
        </div>
        <div>
        <h1 className='font-bold text-4xl'>Welcome <span className='text-red-500'>{companies[0]?.name}</span></h1>
        <p className='text-xl py-2'>{companies[0]?.description}</p>
        <p></p>
        </div>
        </div>

        <div className='flex justify-center my-10'>
            <p className='border py-2 px-3 rounded-md bg-black text-white'>Create Job</p>
        </div>
        <hr/>
        
    </div>
  )
}

export default Home