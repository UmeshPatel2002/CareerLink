import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setAllJobs } from "../redux/jobsSlice";
import axios from "axios";

const useGetAllJob = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchAllJob = async () => {
      try {
        const res = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api/v1/job/get`, {
          withCredentials:true,
        });
        if (res.data.success) {
          // console.log("jobss", res.data.jobs);
          dispatch(setAllJobs(res.data.jobs));
        }
      } catch (e) {
        console.log("Error", e);
      }
    };
    fetchAllJob();
  }, [dispatch]);
};

export default useGetAllJob;
