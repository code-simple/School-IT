import Admin_dropdown from "@/src/assets/admin_dropdown";
import React from "react";

const Dashboard = () => {
  return (
    <div className="grid px-16 ">
      <div className="flex justify-between  pt-16">
        <h1 className="text-2xl font-bold">Summary</h1>
        <Admin_dropdown className="-rotate-90" />
      </div>
      <p className="pt-7">02-January-2020</p>
      {/* Cards */}
      <div className="flex pt-12 justify-evenly">
        <div className="flex flex-col w-72 h-40 bg-white shadow-2xl rounded-xl">
          <span className="bg-[#1C33A7] w-[110px] mt-5 ml-5 bg-opacity-30 rounded-full text-center text-xs">
            Attendance
          </span>
          <div className="flex justify-center pt-5 ">
            <h1 className="font-bold text-4xl">
              300
              <spn className="text-base text-slate-400 ">/400</spn>
            </h1>
          </div>
        </div>
        <div className="flex flex-col w-72 h-40 bg-white shadow-2xl rounded-xl">
          <span className="bg-[#A7571C] w-[110px] mt-5 ml-5 bg-opacity-30 rounded-full text-center text-xs">
            Expenses
          </span>
          <div className="flex justify-center pt-5 ">
            <h1 className="font-bold text-4xl">₦ 300,000</h1>
          </div>
        </div>
        <div className="flex flex-col w-72 h-40 bg-white shadow-2xl rounded-xl  ">
          <span className="bg-[#FFB9B9] w-[110px] mt-5 ml-5 bg-opacity-30 rounded-full text-center text-xs">
            Events
          </span>
          <div className="flex justify-center pt-5 ">
            <h1 className="font-bold text-4xl">15</h1>
          </div>
        </div>
      </div>
      {/* Employees Tracker */}
      <h1 className="pt-7 text-2xl font-bold">Employees Tracker</h1>
      <div>
        <table className="min-w-full text-left text-sm font-light">
          <thead class="text-base text-[#9F9F9F] ">
            <tr>
              <th scope="col" class="px-6 py-4">
                PERSONAL DETAILS
              </th>
              <th scope="col" class="px-6 py-4">
                DATE
              </th>
              <th scope="col" class="px-6 py-4">
                DEPARTMENT
              </th>
              <th scope="col" class="px-6 py-4">
                STATUS
              </th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
