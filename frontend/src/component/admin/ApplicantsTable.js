import React from "react";
import { useSelector } from "react-redux";
import axios from "axios";

const shortlistingStatus = ["Accepted", "Rejected"];

const Applicantstable = () => {
  const { applicants } = useSelector((store) => store.application);

  const statusHandler = async (status, id) => {
    console.log("called");
    try {
      const res = await axios.post(`http://localhost:8000/api/v1/application/statusupdate/${id}`, {status},
        {
            withCredentials:true
        }
      );
      console.log(res);
      if (res.data.success) {
        alert(res.data.message);
      }
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>FullName</th>
            <th>Email</th>
            <th>Contact</th>
            <th>Resume</th>
            <th>Date</th>
            <th className="text-right">Action</th>
          </tr>
        </thead>
        <tbody>
          {applicants &&
            applicants?.applications?.map((item) => (
              <tr key={item._id}>
                <td>{item?.applicant?.fullname}</td>
                <td>{item?.applicant?.email}</td>
                <td>{item?.applicant?.phoneNumber}</td>
                <td>
                  {item.applicant?.profile?.resume ? (
                    <a
                      className="text-blue-600 cursor-pointer"
                      href={item?.applicant?.profile?.resume}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item?.applicant?.profile?.resumeOriginalName}
                    </a>
                  ) : (
                    <span>NA</span>
                  )}
                </td>
                <td>{item?.applicant.createdAt.split("T")[0]}</td>
                <td className="float-right cursor-pointer">
                  {/* <Popover>
                                        <PopoverTrigger>
                                            <MoreHorizontal />
                                        </PopoverTrigger>
                                        <PopoverContent className="w-32">
                                            {
                                                shortlistingStatus.map((status, index) => {
                                                    return (
                                                        <div onClick={() => statusHandler(status, item?._id)} key={index} className='flex w-fit items-center my-2 cursor-pointer'>
                                                            <span>{status}</span>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </PopoverContent>
                                    </Popover> */}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Applicantstable;
