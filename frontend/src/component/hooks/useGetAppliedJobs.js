
import axios from "axios"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { setAppliedJobs } from "../redux/jobsSlice";
const useGetAppliedJob = () => {
    const dispatch = useDispatch();

    useEffect(()=>{
        const fetchAppliedJobs = async () => {
            try {
                const res = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api/v1/application/getAppliedJobs`, 
                    {withCredentials:true});
                // console.log(res.data);
                if(res.data.success){
                    dispatch(setAppliedJobs(res.data.application));
                }
            } catch (error) {
                console.log(error);
            }
        }
        fetchAppliedJobs();
    },[])
};
export default useGetAppliedJob;