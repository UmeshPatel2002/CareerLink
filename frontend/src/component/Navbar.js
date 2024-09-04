import React, { useState, useRef, useEffect } from "react";
import avatar from "../assets/avatar.png";
import profileImg from "../assets/profile.png";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import signout_icon from "../assets/logout.svg";
import { setUser } from "./redux/authSlice";
import axios from "axios";

const Navbar = () => {
  const { user } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef(null);

  // Open modal when profile icon is clicked
  const handleProfileClick = () => {
    setIsModalOpen(true);
  };

  // Close modal if clicked outside of it
  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setIsModalOpen(false);
    }
  };

  useEffect(() => {
    // Add click event listener when the modal is open
    if (isModalOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    // Cleanup event listener on unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isModalOpen]);

  const signoutHandler = async () => {
    try {
      const res = await axios.get("http://localhost:8000/api/v1/user/logout", {
        withCredentials: true,
      });
      if (res.data.success) {
        dispatch(setUser(null));
        navigate("/");
      }
    } catch (e) {
      console.log("Error", e);
    }
  };

  return (
    <div className="bg-teal-400 mx-auto max-w-[1440px] h-14 rounded-[6px]">
      <div className="flex items-center justify-between px-[16px] pt-2">
        <div className="text-2xl">
          <h1 className="font-bold cursor-pointer">
            Career<span className="text-[#973131]">Link</span>
          </h1>
        </div>

        <div className="flex items-center gap-[30px]">
          <ul className="flex font-medium items-center gap-[30px] cursor-pointer">
            {user && user.role === "recruiter" ? (
              <>
                <li>
                  <Link to="/admin/companies">Home</Link>
                </li>
                <li>
                  <Link to="/admin/jobs">Job</Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/">Home </Link>
                </li>
                <li>
                  <Link to="/job">Job</Link>
                  </li>
                <li>
                  <Link>Search</Link>
                </li>
              </>
            )}
          </ul>

          {!user ? (
            <div className="flex items-center gap-2 cursor-pointer">
              <Link to="/login">
                <p className=" border rounded-[6px] border-solid border-black px-4 py-2 hover:bg-black hover:text-white transition-colors duration-300">
                  Login
                </p>
              </Link>
              <Link to="/signup">
                <p className=" border rounded-[6px] border-solid border-black px-4 py-2 hover:bg-black hover:text-white transition-colors duration-300">
                  Signup
                </p>
              </Link>
            </div>
          ) : (
            <div className="relative inline-block ">
              <img
                src={avatar}
                alt="avatar"
                className="bg-white rounded-[9px] h-[40px] w-[40px] cursor-pointer"
                onClick={handleProfileClick}
              />
              {isModalOpen && (
                <div
                  ref={modalRef}
                  className={`absolute mt-3 ml-[-200px] w-64 p-4 bg-white border border-gray-300 rounded-lg shadow-lg   `}
                >
                  <div className="flex gap-[18px]  cursor-pointer ">
                    <div>
                      <img
                        src={avatar}
                        alt=""
                        className="flex items-center h-[30px] w-[30px] mt-[6px]"
                      />
                    </div>
                    <div>
                      <h4>{user?.fullName}</h4>
                      <p className="text-[12px] text-[#50d71e]">
                        {user?.prifile?.bio}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col gap-[8px] cursor-pointer mt-[6px]">
                  
                  { user && user.role==="student" && (

                     <div className="flex gap-[18px]   ">
                     <img
                       src={profileImg}
                       alt=""
                       className="h-[30px] w-[30px]"
                     />
                     <Link to="/profile">
                       {" "}
                       <p>View Profile</p>
                     </Link>
                   </div>
                  )}


                    
                    <div className="flex gap-[18px]   ">
                      <img
                        src={signout_icon}
                        alt=""
                        className="h-[30px] w-[30px]"
                      />
                      <p onClick={() => signoutHandler()}>Signout</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
