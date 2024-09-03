import React, { useState, useEffect } from "react";

import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


const CompanyTable = () => {
  const { companies,searchInputText } = useSelector((state) => state.company);
  const [filteredcompanies,setFilteredcompanies]=useState(companies)

  const navigate = useNavigate();
        
  useEffect(()=>{
    const filtered = companies.length >= 0 && companies.filter((company)=>{
      if(!searchInputText){
        return true
    }
    return company?.name?.toLowerCase().includes(searchInputText.toLowerCase());
    })

    setFilteredcompanies(filtered)
  },[companies, searchInputText])

  

  return (
    <div>
      <table className="w-full">
        <thead>
          <tr className="flex justify-between">
            <th>Logo</th>
            <th>Name</th>
            <th>Date</th>
            <th className="text-right">Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredcompanies?.length <= 0 ? (
            <span>You have not registered company</span>
          ) : (
            <>
              {filteredcompanies?.map((company) => {
                return (
                  <tr key={company?._id} className="flex justify-between">
                    <td><span><img className="h-[40px] w-[40px]"   src={company?.logo} alt=""/></span></td>
                    <td><span>{company?.name}</span></td>
                    <td><span>{company?.createdAt?.split('T')[0]}</span></td>
                    <td>a</td>
                  </tr>
                );
              })}
            </>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CompanyTable;
