import React, { useState } from "react";
import avatar from "../assets/avatar.png";
import profileImg from "../assets/profile.png";

const Navbar = () => {
 const [isvisible,setisvisible]=useState(false);


  const user = true;
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
            <li>Home</li>
            <li>Job</li>
            <li>Search</li>
          </ul>

          {!user ? (
            <div className="flex items-center gap-2 cursor-pointer">
              <p className=" border rounded-[6px] border-solid border-black px-4 py-2 hover:bg-black hover:text-white transition-colors duration-300" >Login</p>
              <p className=" border rounded-[6px] border-solid border-black px-4 py-2 hover:bg-black hover:text-white transition-colors duration-300">
                Signup
              </p>
            </div>
          ) : (
            <div className="relative inline-block group" >
              <img
                src={avatar}
                alt="avatar"
                className="bg-white rounded-[9px] h-[40px] w-[40px] cursor-pointer   "
                onMouseEnter={()=>setisvisible(true)} onMouseLeave={()=>setisvisible(false)}
              />{
              (isvisible)?
              <div className={`absolute mt-2 ml-[-200px] w-64 p-4 bg-white border border-gray-300 rounded-lg shadow-lg  `}  onMouseEnter={()=>setisvisible(true)} onMouseLeave={()=>setisvisible(false)} >
                <div className="flex gap-[18px]  cursor-pointer ">
                  <div>
                    <img
                      src={avatar}
                      alt=""
                      className="flex items-center h-[30px] w-[30px] mt-[6px]"
                    />
                  </div>
                  <div>
                    <h4>Umesh Patel</h4>
                    <p className="text-[12px] text-[#50d71e]">
                      Fullstack Developer
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-[8px] cursor-pointer mt-[6px]">
                  <div className="flex gap-[18px]   ">
                    <img
                      src={profileImg}
                      alt=""
                      className="h-[30px] w-[30px]"
                    />
                    <p>View Profile</p>
                  </div>
                  <div className="flex gap-[18px]   ">
                    <img
                      src={profileImg}
                      alt=""
                      className="h-[30px] w-[30px]"
                    />
                    <p>Signout</p>
                  </div>
                </div>
              </div>:<></>
}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
