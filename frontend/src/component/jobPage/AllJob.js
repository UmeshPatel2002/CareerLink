import React from "react";
import Filter from "./Filter";
import Navbar from "../Navbar";
import JobCard from "./JobCard";
import { useSelector } from "react-redux";

const AllJob = () => {

  const {allJob}=useSelector(state=>state.jobs)
  return (
    <div>
       <Navbar/>
    <div className=" flex gap-[10px] max-w-[1440px] mx-auto mt-3">
      <div className="max-w-[20%] ">
        <Filter />
      </div>
      {(!allJob || allJob.length === 0) ? (
        <span>Job not found</span>
      ) : (
        <div className="flex-1 h-[88vh] overflow-y-auto overflow-x-hidden pb-5">
          <div className="grid grid-cols-3 gap-4">
            {allJob.map((job,index) => (
              <JobCard job={job} key={index}/>
            ))}
          </div>
        </div>
      )}
    </div>
    </div>
   
  );
};

export default AllJob;
