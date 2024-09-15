import React from "react";
import { useNavigate } from "react-router-dom";

const JobCard = ({ job }) => {
  const navigate = useNavigate();
  // console.log("job",job?.company?.logo)

  const daysAgoFunction = (mongodbTime) => {
    const createdAt = new Date(mongodbTime);
    const currentTime = new Date();
    const timeDifference = currentTime - createdAt;
    return Math.floor(timeDifference / (1000 * 24 * 60 * 60));
  };

  return (
    <div className="p-5 rounded-md shadow-md bg-white border whitespace-normal border-gray-100 hover:scale-105 duration-200 ">
      <div className="flex items-center justify-between">
        <p className="text-sm text-white bg-green-700 rounded-md p-1 ">
          {daysAgoFunction(job?.createdAt) === 0
            ? "Today"
            : `${daysAgoFunction(job?.createdAt)} days ago`}
        </p>
      </div>
      <div className="flex items-center gap-2 my-2">
        <img
          className="p-6 w-[40px] h-[40px]"
          src={job?.company?.logo}
          alt=""
        />
        <div>
          <p className="font-medium text-lg">{job?.company?.name}</p>
          <p className="text-sm text-gray-500">India</p>
        </div>
      </div>
      <div>
        <h1 className="font-bold text-lg my-2">{job?.title}</h1>
        <p className="text-sm text-gray-600">{job?.description}</p>
      </div>
      <div className="flex items-center gap-2 mt-4">
        <p className="text-blue-700 font-bold">{job?.positions} </p>
        <p className="text-[#F83002] font-bold">{job?.jobType} </p>
        <p className="text-[#7209b7] font-bold">{job?.salary}LPA</p>
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
          className="border pl-2 pr-2 rounded-md "
        >
          Apply
        </button>
      </div>
    </div>
  );
};

export default JobCard;
