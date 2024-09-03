import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar'
import { useNavigate } from 'react-router-dom'
import CompanyTable from './CompanyTable'
import useGetCompanies from '../hooks/useGetCompanies'
import { useDispatch } from 'react-redux'
import { setsearchInputText } from '../redux/companySlice'
const Companies=()=> {
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const [input,setInput]=useState();
   useGetCompanies()
   useEffect(()=>{
      dispatch(setsearchInputText(input));
   })
  return (

   <div>
    <Navbar/>
    <div className='max-w-[1080px] mx-auto'>
      <div className='flex justify-between mt-10 '>
           <input 
           placeholder='Filter by name'
           onChange={(e)=>setInput(e.target.value)}
           className='border-2 border-black rounded-sm pl-3'
            />

          <div className=''>
            <p  onClick={()=>navigate('/admin/createCompany')}   className='bg-black text-white p-2 rounded-[6px] cursor-pointer'>Add Company</p>
          </div>
         
      </div>
      <hr className='mt-2'/>
      <CompanyTable/>
    </div>
   </div>
  )
}

export default Companies