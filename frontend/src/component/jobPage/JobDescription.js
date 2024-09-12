import React from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import useGetJob from "../hooks/useGetJob";
import { setJob, setisApplied } from "../redux/jobSlice";
import axios from "axios";
import Navbar from "../Navbar";
import Footer from '../Footer'

const JobDescription = () => {
  const params = useParams();
  const jobId = params.id;
  // console.log("jobid",jobId)
  useGetJob(jobId);
  const dispatch = useDispatch();
  const { job, isApplied } = useSelector((state) => state.job);
  const { user } = useSelector((state) => state.auth);

  const applyJobHandler = async () => {
    try {
      const res = await axios.post(
        `http://localhost:8000/api/v1/application/apply/${jobId}`,{},
        {
          withCredentials: true,
        }
      );
      alert(res.data.message);
      if (res.data.success) {
        const updateJob = {
          ...job,
          applications: [...job.applications, { applicant: user?._id }],
        };
        console.log()
        dispatch(setJob(updateJob));
        dispatch(setisApplied(true));
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Navbar/>
      <div className="max-w-[95%] mx-auto my-10 min-h-screen">
      <div className="flex flex-col gap-6 sm:flex-row justify-between">
        <div>
          <h1 className="font-bold text-xl">{job?.title}</h1>
          <div className="flex items-center gap-4 mt-4">
            <span className={"text-blue-700 font-bold"} variant="ghost">
              Opening:{job?.position}
            </span>
            <span className={"text-[#F83002] font-bold"} variant="ghost">
              {" "}
              Type: {job?.jobType}
            </span>
            <span className={"text-[#7209b7] font-bold"} variant="ghost">
              Salary: {job?.salary} LPA
            </span>
          </div>
        </div>
        <button
          onClick={isApplied ? null : applyJobHandler}
          disabled={isApplied}
          className={`rounded-lg p-1 max-h-[40px] max-w-fit ${
            isApplied
              ? "bg-gray-600 cursor-not-allowed"
              : "bg-[#3f8da0] hover:bg-[#43a7ba]"
          }`}
        >
          {isApplied ? "Already Applied" : "Apply"}
        </button>
      </div>
      <h1 className="border-b-2 border-b-gray-300 font-medium py-4 mt-4">
        Job Description
      </h1>
      <div className="my-4">
        <h1 className="font-bold my-1">
          Role:{" "}
          <span className="pl-4 font-normal text-gray-800">{job?.title}</span>
        </h1>
        <h1 className="font-bold my-1">
          Location:{" "}
          <span className="pl-4 font-normal text-gray-800">
            {job?.location}
          </span>
        </h1>
        <h1 className="font-bold my-1">
          Description:{" "}
          <span className="pl-4 font-normal text-gray-800">
            {job?.description}
          </span>
        </h1>
        <h1 className="font-bold my-1">
          Experience:{" "}
          <span className="pl-4 font-normal text-gray-800">
            {job?.experienceLevel} yrs
          </span>
        </h1>
        <h1 className="font-bold my-1">
          Salary:{" "}
          <span className="pl-4 font-normal text-gray-800">
            {job?.salary} LPA
          </span>
        </h1>
        <h1 className="font-bold my-1">
          Total Applicants:{" "}
          <span className="pl-4 font-normal text-gray-800">
            {job?.applications?.length}
          </span>
        </h1>
        <h1 className="font-bold my-1">
          Posted Date:{" "}
          <span className="pl-4 font-normal text-gray-800">
            {job?.createdAt.split("T")[0]}
          </span>
        </h1>
      </div>
    </div>
    <Footer/>
    </div>
    
  );
};

export default JobDescription;
