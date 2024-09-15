import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setJob, setisApplied } from "../redux/jobSlice";
import axios from "axios";

const useGetJob = (jobId) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8000/api/v1/job/get/${jobId}`,
          {
            withCredentials: true,
          }
        );
        if (res.data.success) {
          // console.log("usegetjob", res.data);
          dispatch(setJob(res.data.job));

          // Check if the user is logged in before accessing user._id
          if (user) {
            dispatch(
              setisApplied(
                res.data.job.applications.some(
                  (application) => application.applicant === user._id
                )
              )
            );
          }
        }
      } catch (e) {
        console.log("Error", e);
      }
    };
    fetchJob();
  }, [dispatch, jobId, user]);
};

export default useGetJob;
