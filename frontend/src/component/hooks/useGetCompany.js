// import { setCompany } from '../redux/companySlice'
// import axios from 'axios'
// import { useEffect } from 'react'
// import { useDispatch } from 'react-redux'

// const useGetCompany = (companyId) => {
//     const dispatch = useDispatch();
//     useEffect(()=>{
//         const fetchCompany = async () => {
//             try {
//                 const res = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api/v1/company/get/${companyId}`,{withCredentials:true});
//                 // console.log(res.data.company);
//                 if(res.data.success){
//                     dispatch(setCompany(res.data.company));
//                 }
//             } catch (error) {
//                 console.log(error);
//             }
//         }
//         fetchCompany();
//     },[companyId, dispatch])
// }

// export default useGetCompany