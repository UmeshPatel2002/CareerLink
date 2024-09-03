
import axios from 'axios'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setJobsCreatedbyAdmin } from '../redux/jobsSlice'
const useGetJobCreatedByAdmin = () => {
    const dispatch = useDispatch();
    useEffect(()=>{
        const fetchAdminJobs = async () => {
            try {
                const res = await axios.get('http://localhost:8000/api/v1/job/getjobCreatedByAdmin',{withCredentials:true});
                if(res.data.success){
                    console.log("abc",res.data.jobs);
                    dispatch(setJobsCreatedbyAdmin(res.data.jobs));
                }
            } catch (error) {
                console.log(error);
            }
        }
        fetchAdminJobs();
    },[])
}

export default useGetJobCreatedByAdmin