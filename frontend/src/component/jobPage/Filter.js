import React from "react";

const fitlerData = [
  {
    fitlerType: "Location",
    array: ["Delhi NCR", "Bangalore", "Hyderabad", "Pune", "Mumbai"],
  },
  {
    fitlerType: "Industry",
    array: ["Frontend Developer", "Backend Developer", "FullStack Developer"],
  },
  {
    fitlerType: "Salary",
    array: ["0-40k", "42-1lakh", "1lakh to 5lakh"],
  },
];

const Filter = () => {
  return (
    <div className="flex flex-col border rounded-md shadow-md border-gray-100 pl-3 ">
      <div className="">
        <p>Filter Jobs</p>
        <hr className="shadow-md" />
      </div>
      <div className="mt-2">
        {fitlerData?.map((data, index) => {
          <div>
            <h1 className="font-bold text-lg">{data.fitlerType}</h1>
            {data.array.map((item, idx) => {
              const itemId = `id${index}-${idx}`;
              return (
                <div className="flex items-center space-x-2 my-2">
                  <input type="radio" value={item} id={itemId} />
                  <label htmlFor={itemId}>{item}</label>
                </div>
              );
            })}
          </div>;
        })}
      </div>
    </div>
  );
};

export default Filter;
