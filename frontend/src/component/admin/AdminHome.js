import React from "react";
import { useSelector } from "react-redux";
import useGetCompanies from "../hooks/useGetCompanies";
import Navbar from "../Navbar";
import CreateCompany from "./CreateCompany";
import useGetJobCreatedByAdmin from "../hooks/useGetJobCreatedByAdmin";
import JobsCard from "./JobsCard";
import { useNavigate } from "react-router-dom";

const AdminHome = () => {
  useGetJobCreatedByAdmin();
  useGetCompanies();
  const navigate=useNavigate()
  const { companies } = useSelector((state) => state.company);
  // console.log("home",companies)
  const {jobsCreatedbyAdmin}=useSelector((state)=>state.jobs);
  // console.log('kkkk',jobsCreatedbyAdmin[0])
  return (
    <div>
      {companies?.length<=0?(<CreateCompany/>):(
         <div>
         <div className="flex justify-center gap-6 mt-20">
           <div className=" flex max-w-[80px] max-h-[80px] justify-center ">
             <img className="rounded-full" src={companies[0]?.logo} alt="" />
           </div>
           <div>
             <h1 className="font-bold text-2xl sm:text-4xl">
               Welcome <span className="text-red-500">{companies[0]?.name}</span>
             </h1>
             <p className="text-xl py-2">{companies[0]?.description}</p>
             <p></p>
           </div>
         </div>
 
         <div className="flex justify-center my-10">
           <p onClick={() => navigate("/admin/createJob")} className="border py-2 px-3 rounded-md bg-black text-white cursor-pointer">
             Create Job
           </p>
         </div>
         <hr />

         <div className='max-w-[95%] mx-auto my-20'>
            <h1 className='text-xl sm:text-2xl md:text-4xl font-bold'><span >Recently</span> Created Jobs</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-4 my-5'>
                {
                    (!jobsCreatedbyAdmin || jobsCreatedbyAdmin.length === 0) ? (
                        <span>No Jobs created</span>
                      ) : (
                        jobsCreatedbyAdmin?.slice(0, 6).map((job) => (
                          <JobsCard key={job._id} job={job} />
                        ))
                      )
                }
            </div>
        </div>

       </div>
      )}
      
    </div>
  );
};

export default AdminHome;
