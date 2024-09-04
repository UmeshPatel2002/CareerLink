import React, { useEffect, useState } from "react";

import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Home from "./Home";

const JobsTable = () => {
  const { jobsCreatedbyAdmin, searchJob } = useSelector((store) => store.jobs);
  console.log(jobsCreatedbyAdmin);

  const [filterJobs, setFilterJobs] = useState(jobsCreatedbyAdmin);
    const navigate = useNavigate();

  useEffect(() => {
    const filteredJobs = jobsCreatedbyAdmin?.filter((job) => {
      if (!searchJob) {
        return true;
      }
      return (
        job?.title?.toLowerCase().includes(searchJob.toLowerCase()) ||
        job?.company?.name.toLowerCase().includes(searchJob.toLowerCase())
      );
    });
    setFilterJobs(filteredJobs);
  }, [jobsCreatedbyAdmin, searchJob]);
 console.log('h',jobsCreatedbyAdmin)
  return (
    <div>
      <Home/>
      <h1 className="m-2">
        Jobs created by {jobsCreatedbyAdmin[0]?.company?.name}
      </h1>
      <p></p>
      {filterJobs?.map((job) => {
        <div className="p-5 rounded-md shadow-md bg-white border border-gray-100 hover:scale-105 duration-200 ">
          <div>
            <h1 className="font-bold text-lg my-2">Role: <span>{job?.title}</span></h1>
            <p className="text-sm text-gray-600">Post Date:<span>{job?.createdAt.split("T")[0]}</span></p>
          </div>
          <div className="flex gap-4 justify-center mt-3">
            <button
              onClick={() => navigate(`/details/${job._id}`)}
              className="border pl-2 pr-2 rounded-md "
            >
              Details
            </button>
            <button
              onClick={() => navigate(`/details/${job._id}`)}
              button
              className="border pl-2 pr-2 rounded-md "
            >
              Apply
            </button>
          </div>
        </div>;
      })}

      <table className="max-w-[80%]">
        <thead>
          <tr className="flex justify-between">
            <th>Company Name</th>
            <th>Role</th>
            <th>Date</th>
            <th className="text-right">Action</th>
          </tr>
        </thead>
        <tbody>
          {filterJobs?.map((job) => (
            <tr className="flex justify-between">
              <td>{job?.company?.name}</td>
              <td>{job?.title}</td>
              <td>{job?.createdAt.split("T")[0]}</td>
              <td className="">...</td>

              {/* <td className="text-right cursor-pointer">
                <Popover>
                  <PopoverTrigger>
                    <MoreHorizontal />
                  </PopoverTrigger>
                  <PopoverContent className="w-32">
                    <div
                      onClick={() => navigate(`/admin/companies/${job._id}`)}
                      className="flex items-center gap-2 w-fit cursor-pointer"
                    >
                      <Edit2 className="w-4" />
                      <span>Edit</span>
                    </div>
                    <div
                      onClick={() =>
                        navigate(`/admin/jobs/${job._id}/applicants`)
                      }
                      className="flex items-center w-fit gap-2 cursor-pointer mt-2"
                    >
                      <Eye className="w-4" />
                      <span>Applicants</span>
                    </div>
                  </PopoverContent>
                </Popover>
              </td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default JobsTable;
