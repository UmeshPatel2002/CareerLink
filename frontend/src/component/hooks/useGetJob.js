import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { setJob } from "../redux/jobSlice"
import axios from "axios"

const useGetJob=(jobId)=> {
  const dispatch= useDispatch()
  useEffect(()=>{
    const fetchJob=async()=>{
        try{
               const res=await axios.get(`http://localhost:8000/api/v1/job/get/${jobId}`,{
                withCredentials: true
            })
            if(res.data.success){
                console.log("job",res.data)
                dispatch(setJob(res.data.job))
            }
        }
        catch(e){
            console.log("Error",e)
        }
    }
    fetchJob();
  },[dispatch,jobId])
}

export default useGetJob