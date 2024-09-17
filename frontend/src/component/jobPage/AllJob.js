import React, { useEffect, useState } from "react";
import Filter from "./Filter";
import JobCard from "./JobCard";
import { useSelector } from "react-redux";

const AllJob = () => {
  const { allJob, filterdata } = useSelector((state) => state.jobs);
  const [filteredJob, setFilteredJob] = useState([]);
  //  console.log("filterdata",allJob)
  useEffect(() => {
    if (filterdata) {
      const filteredJobs = allJob.filter((job) => {
        // console.log("jobrole",job.role)
        const location = job.location ? job.location.toLowerCase() : "";
        const role = job.title ? job.title.toLowerCase() : "";
        const jobType = job.jobType ? job.jobType.toLowerCase() : "";
        const filterText = filterdata ? filterdata.toLowerCase() : ""; 
        
      return (
        location.includes(filterText) ||
        jobType.includes(filterText)||
        role.includes(filterText)
        );
      })
      setFilteredJob(filteredJobs)
    }
    else{
      setFilteredJob(allJob)
    }
  },[filterdata, allJob]);



  return (
    <div >
      <div className=" flex gap-[10px] px-[30px] mt-3">
        <div className=" max-w-[35%] sm:max-w-[20%] ">
          <Filter />
        </div>
        {!filteredJob || filteredJob.length === 0 ? (
          <span>Job not found</span>
        ) : (
          <div className="flex-1 h-[88vh] overflow-y-auto overflow-x-hidden pb-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredJob.map((job, index) => (
                <JobCard job={job} key={index} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllJob;
