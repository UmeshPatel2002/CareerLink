import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setJobs } from "../redux/jobsSlice";
import axios from "axios";

const useGetAllJob = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchAllJob = async () => {
      try {
        const res = await axios.get("http://localhost:8000/api/v1/job/get", {
          withCredentials: true,
        });
        if (res.data.success) {
          console.log("jobss", res.data.jobs);
          dispatch(setJobs(res.data.jobs));
        }
      } catch (e) {
        console.log("Error", e);
      }
    };
    fetchAllJob();
  }, [dispatch]);
};

export default useGetAllJob;
