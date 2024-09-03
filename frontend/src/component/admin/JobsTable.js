import React, { useEffect, useState } from "react";

import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const JobsTable = () => {
  const { jobsCreatedbyAdmin, searchJob } = useSelector((store) => store.job);

  const [filterJobs, setFilterJobs] = useState(jobsCreatedbyAdmin);
//   const navigate = useNavigate();

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

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Company Name</th>
            <th>Role</th>
            <th>Date</th>
            <th className="text-right">Action</th>
          </tr>
        </thead>
        <tbody>
          {filterJobs?.map((job) => (
            <tr>
              <td>{job?.company?.name}</td>
              <td>{job?.title}</td>
              <td>{job?.createdAt.split("T")[0]}</td>
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
