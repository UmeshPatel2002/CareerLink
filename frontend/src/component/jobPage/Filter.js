import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setFilterdata} from "../redux/jobsSlice";

const filterData = [
  {
    filterType: "Location",
    array: ["Delhi", "Noida", "Bangalore", "Hyderabad", "Pune", "Mumbai"],
  },
  {
    filterType: "Role",
    array: ["Frontend Developer", "Backend Developer", "FullStack Developer","SDE"],
  },
  {
    filterType: "Job Type",
    array: ["Internship", "Full-time", "Remote",],
  },
];

  const Filter = () => {

   const [filter,setFilter]=useState();

   const dispatch=useDispatch();
   const changeHandler=(e)=>{
    console.log("e.target.value",e.target.value)
       setFilter(e.target.value);
   }

   useEffect(()=>{
    dispatch(setFilterdata(filter));
   },[filter,dispatch]);



  return (
    <div className="flex flex-col border rounded-md shadow-md border-gray-100 pl-3 ">
      <div className="">
        <p>Filter Jobs</p>
        <hr className="shadow-md" />
      </div>
      <div className="mt-2">
        {filterData?.map((data, index) => {
          return(
            <div key={index}  >
            <h1 className="font-bold text-lg">{data.filterType}</h1>
            <hr/>
            {data.array.map((item, idx) => {
              const itemId = `id${index}-${idx}`;
              return (
                <div key={itemId} className="flex items-center space-x-2 my-2">
                  <input 
                  type="radio" 
                  name={`filter-${index}`}
                  value={item} 
                  id={itemId}  
                  onChange={changeHandler}
                  className="form-radio text-blue-600 focus:ring-2 focus:ring-blue-300"/>
                  
                  <label htmlFor={itemId} >{item}</label>
                </div>
              );
            })}
          </div>
          );
        })}
      </div>
    </div>
  );
};

export default Filter;
