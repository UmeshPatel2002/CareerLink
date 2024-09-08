import React from 'react'
import useGetAppliedJob from '../hooks/useGetAppliedJobs'
import { useSelector } from 'react-redux'

function Applications() {
    useGetAppliedJob()
    const {appliedJobs}=useSelector(state=>state.jobs)

  return (
    <div>

    <div className="grid grid-cols-1  items-center sm:grid-cols-2 md:grid-cols-3 gap-4">
     {
        appliedJobs?.length>0?(appliedJobs?.map((jobs,index)=>{
            // console.log("lllll",jobs)
            return (
                <div
                  key={index}
                  className="p-5 rounded-md max-w-80 items-center shadow-xl bg-white border border-gray-100 cursor-pointer"
                >
                 <div className='flex flex-col'> 
                 <span>{jobs?.job?.company?.name}</span>
                 <span>{jobs?.job?.title}</span>
                 <span>{jobs?.job?.jobType}</span>
                 <span className={`w-fit p-1 rounded-md my-1 ${
                            jobs?.status === "accepted"
                              ? "bg-[#4CAF50]"
                              : ( jobs?.status==="rejected"?"bg-[#f44336]":"bg-[#FFEB3B]")
                          }`}>{jobs?.status}</span>
                 </div>
                
              </div>
                  
            )  
            




        })
       ):(
        <> </>
       )
     }
     </div>



    </div>
  )
}

export default Applications