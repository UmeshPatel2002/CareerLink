import React from 'react'
import Navbar from '../Navbar'
import { useNavigate } from 'react-router-dom'
import CompanyTable from './CompanyTable'
import useGetCompanies from '../hooks/useGetCompanies'
function Companies() {
  const navigate=useNavigate()
   useGetCompanies()
  return (

   <div>
    <Navbar/>
    <div className='max-w-[1080px] mx-auto'>
      <div className='flex justify-between mt-10 '>
           <input 
           placeholder='Filter by name'
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