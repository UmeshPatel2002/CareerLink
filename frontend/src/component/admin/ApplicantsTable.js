import React from "react";
import { useSelector } from "react-redux";
import axios from "axios";

const updateStatus = ["Accepted", "Rejected"];
const Applicantstable = () => {
  const { applicants } = useSelector((state) => state.application);
  console.log("table", applicants);
  const statusHandler = async (status, id) => {
    try {
      const res = await axios.post(
        `http://localhost:8000/api/v1/application/statusupdate/${id}`,
        { status },
        {
          withCredentials: true,
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
      <div className="max-w-7xl mx-auto mt-10">
        <div className="grid grid-cols-3 gap-4 my-5">
          {applicants?.applications?.length === 0 ? (
            <span>Currently, there are no applicants for the role.</span>
          ) : (
            applicants?.applications?.map((item, index) => {
              return (
                <div
                  key={index}
                  className="p-5 rounded-md shadow-xl bg-white border border-gray-100 cursor-pointer"
                >
                  <p>{item?.applicant?.fullName}</p>
                  <p>{item?.applicant?.email}</p>
                  <p>{item?.applicant?.phoneNumber}</p>
                  <p>
                    {item.applicant?.profile?.resume ? (
                      <a
                        className="text-blue-600 cursor-pointer"
                        href={item?.applicant?.profile?.resume}
                      >
                        Resume
                      </a>
                    ) : (
                      <span>NA</span>
                    )}
                  </p>
                  <div className="flex gap-3">
                    {updateStatus.map((status, index) => {
                      return (
                        <div
                          onClick={() => statusHandler(status, item?._id)}
                          key={index}
                          className={`flex w-fit border rounded-md py-1 px-2 items-center my-2 cursor-pointer text-white ${
                            status === "Accepted"
                              ? "bg-green-700"
                              : "bg-red-700"
                          }`}
                        >
                          <span>
                            {status === "Rejected" ? "Reject" : "Accept"}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default Applicantstable;
