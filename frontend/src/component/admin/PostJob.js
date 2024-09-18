import React, { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const PostJob = () => {
  const [input, setinput] = useState({
    title: "",
    description: "",
    requirements: "",
    salary: "",
    location: "",
    jobType: "",
    experience: "",
    position: 0,
    companyId: "",
  });
  const navigate = useNavigate();

  const { companies } = useSelector((store) => store.company);
  // console.log(companies)
  const changeEventHandler = (e) => {
    setinput({ ...input, [e.target.name]: e.target.value });
  };

  const selectChangeHandler = (event) => {
    const value = event.target.value;
    const selectedCompany = companies.find(
      (company) => company.name.toLowerCase() === value
    );
  
    if (selectedCompany) {
      setinput({ ...input, companyId: selectedCompany._id });
    } else {
      console.error("Selected company not found!");
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/api/v1/job/post`,
        input,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      if (res.data.success) {
        alert(res.data.message);
        navigate("/admin/jobs");
      }
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <div>
      <div className="flex items-center justify-center w-screen my-5">
        <form
          onSubmit={submitHandler}
          className="p-8 max-w-4xl border border-gray-200 shadow-lg rounded-md"
        >
          <div className="grid grid-cols-2 gap-2 ">
            <div className=" flex flex-col">
              <label>Title</label>
              <input
                type="text"
                name="title"
                value={input.title}
                required
                onChange={changeEventHandler}
               className="max-w-60 border border-black rounded-md my-1 px-2 "
              />
            </div>
            <div  className=" flex flex-col">
              <label>Description</label>
              <input
                type="text"
                name="description"
                value={input.description}
                required
                onChange={changeEventHandler}
               className="max-w-60 border border-black rounded-md my-1 px-2 "
              />
            </div>
            <div  className=" flex flex-col">
              <label>Requirements</label>
              <input
                type="text"
                name="requirements"
                value={input.requirements}
                required
                onChange={changeEventHandler}
                className="max-w-60 border border-black rounded-md my-1 px-2 "
              />
            </div>
            <div  className=" flex flex-col">
              <label>Salary</label>
              <input
                type="number"
                name="salary"
              
                value={input.salary}
                required
                onChange={changeEventHandler}
                className="max-w-60 border border-black rounded-md my-1 px-2 "
              />
            </div>
            <div  className=" flex flex-col">
              <label>Location</label>
              <input
                type="text"
                name="location"
                value={input.location}
                required
                onChange={changeEventHandler}
                className="max-w-60 border border-black rounded-md my-1 px-2 "
              />
            </div>
            <div  className=" flex flex-col">
              <label>Job Type</label>
              <input
                type="text"
                name="jobType"
                required
                value={input.jobType}
                onChange={changeEventHandler}
               className="max-w-60 border border-black rounded-md my-1 px-2 "
              />
            </div>
            <div  className=" flex flex-col">
              <label>Experience Level</label>
              <input
                type="text"
                name="experience"
                value={input.experience}
                required
                onChange={changeEventHandler}
                className="max-w-60 border border-black rounded-md my-1 px-2 "
              />
            </div>
            <div  className=" flex flex-col">
              <label>No of Postion</label>
              <input
                type="number"
                name="position"
                value={input.position}
                required
                onChange={changeEventHandler}
                className="max-w-60 border border-black rounded-md my-1 px-2 "
              />
            </div>
            <select onChange={selectChangeHandler} >
              <option value="">Select a Company</option>
              {companies.map((company) => (
                <option
                  key={company?.name?.toLowerCase()}
                  value={company?.name?.toLowerCase()}
                  required
                >
                  {company.name}
                </option>
              ))}
            </select>
          </div>
          <div className="flex justify-center">
          <button type="submit" className=" w-[100px] m-2 bg-black  text-white p-2 rounded-md "> submit</button>
          </div>
          
          
        </form>
      </div>
    </div>
  );
};

export default PostJob;
