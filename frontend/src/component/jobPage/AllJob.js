import React from "react";
import Filter from "./Filter";
import Navbar from "../Navbar";
import JobCard from "./JobCard";
import { useSelector } from "react-redux";
import useGetAllJob from "../hooks/useGetAllJob";

const AllJob = () => {

  const jobs = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const {AllJob}=useSelector(state=>state.jobs)
  return (
    <div>
       <Navbar/>
    <div className=" flex gap-[10px] max-w-[1440px] mx-auto mt-3">
      <div className="max-w-[20%] ">
        <Filter />
      </div>
      {jobs.length <= 0 ? (
        <span>Job not found</span>
      ) : (
        <div className="flex-1 h-[88vh] overflow-y-auto overflow-x-hidden pb-5">
          <div className="grid grid-cols-3 gap-4">
            {jobs.map((job) => (
              <JobCard />
            ))}
          </div>
        </div>
      )}
    </div>
    </div>
   
  );
};

export default AllJob;
