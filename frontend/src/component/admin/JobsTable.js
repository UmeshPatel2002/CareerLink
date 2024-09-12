import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
import JobsCard from "./JobsCard";

const JobsTable = () => {
  const { jobsCreatedbyAdmin, searchJob } = useSelector((store) => store.jobs);
  // const navigate = useNavigate();
  // console.log("lll",jobsCreatedbyAdmin);

  const [filterJobs, setFilterJobs] = useState(jobsCreatedbyAdmin);
 

  useEffect(() => {
    const filteredJobs = jobsCreatedbyAdmin?.filter((job) => {
      if (!searchJob) {
        return true;
      }
      return (
        job?.title?.toLowerCase().includes(searchJob.toLowerCase()) ||
        job?.jobType.toLowerCase().includes(searchJob.toLowerCase())
      );
    });
    setFilterJobs(filteredJobs);
  }, [jobsCreatedbyAdmin, searchJob]);
  //  console.log("filterJobs",filterJobs)

  return (
    <div>
      <div className="max-w-7xl mx-auto mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 my-5">
        { filterJobs.length === 0 ? (
          <span>Job not found</span>
        ) : (
          filterJobs.map((job) => {
            // console.log("Rendering job:", job._id); // For debugging
            return (<JobsCard key={job._id} job={job} />);
          })
        )}
        </div>
      </div>
    </div>
  );
};

export default JobsTable;
