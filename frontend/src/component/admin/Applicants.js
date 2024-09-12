import React, { useEffect } from 'react'
import axios from 'axios';
import Applicantstable from './ApplicantsTable'
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setApplicants } from '../redux/applicationSlice';
import Navbar from '../Navbar';


const Applicants = () => {
    const params = useParams();
    const dispatch = useDispatch();
    const {applicants}=useSelector((state)=>state.application)
    // console.log(applicants);

    useEffect(() => {
        const fetchAllApplicants = async () => {
            try {
                const res = await axios.get(`http://localhost:8000/api/v1/application/getApplicants/${params.id}`, { withCredentials: true });
                console.log("job",res.data.job)
                dispatch(setApplicants(res.data.job));
            } catch (error) {
                console.log(error);
            }
        }
        fetchAllApplicants();
    }, []);
    return (
        <div>
            <Navbar/>
            <div className='max-w-7xl mx-auto'>
                <h1 className='font-bold text-xl my-5'>Applicants {applicants?.applications?.length}</h1>
                <Applicantstable />
            </div>
        </div>
    )
}

export default Applicants