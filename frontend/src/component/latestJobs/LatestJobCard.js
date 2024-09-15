import React from "react";
import { useNavigate } from "react-router-dom";

const LatestJobCards = ({ job }) => {
  const navigate = useNavigate();
  // console.log("jooooo",job._id)
  return (
    <div
      onClick={() => navigate(`/details/${job._id}`)}
      className="p-5 rounded-md shadow-xl bg-white border border-gray-100 whitespace-normal cursor-pointer"
    >
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
        <p className="text-blue-700 font-bold">{job?.position} Positions</p>
        <p className="text-[#F83002] font-bold">{job?.jobType} type </p>
        <p className="text-[#7209b7] font-bold">{job?.salary}LPA</p>
      </div>
    </div>
  );
};

export default LatestJobCards;
