import Admin_dropdown from "@/src/assets/admin_dropdown";
import React from "react";
import Image from "next/image";
import T_img1 from "@/src/assets/table_img1.png";
import T_img2 from "@/src/assets/table_img2.png";
import T_img3 from "@/src/assets/table_img3.png";
import T_img4 from "@/src/assets/table_img4.png";
import T_img5 from "@/src/assets/table_img5.png";

const Dashboard = () => {
  return (
    <div className="grid px-16 ">
      <div className="flex justify-between  pt-16">
        <h1 className="text-2xl font-bold">Summary</h1>
        <Admin_dropdown className="-rotate-90" />
      </div>
      <p className="pt-7">02-January-2020</p>
      {/* Cards */}
      <div className="grid gap-3 md:flex pt-12 justify-evenly">
        <div className="flex flex-col w-72 h-40 bg-white shadow-2xl rounded-xl">
          <span className="bg-[#1C33A7] w-[110px] mt-5 ml-5 bg-opacity-30 rounded-full text-center text-xs">
            Attendance
          </span>
          <div className="flex justify-center pt-5 ">
            <h1 className="font-bold text-4xl">
              300
              <span className="text-base text-slate-400 ">/400</span>
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
      <h1 className="py-7 text-2xl font-bold">Employees Tracker</h1>
      {/* Table */}
      <table className="pt-7 border-separate border-spacing-y-2">
        <thead class="text-base text-[#9F9F9F] text-left">
          <tr>
            <th>PERSONAL DETAILS</th>
            <th>DATE</th>
            <th>DEPARTMENT</th>
            <th>STATUS</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white ">
            <td className="py-4 pl-5 flex items-center gap-4">
              <Image src={T_img1} className="ml-5" alt="img1" />
              <p>Aderinsola Emmanuel</p>
            </td>
            <td>02 - 01 - 2020</td>
            <td>Teaching</td>
            <td>
              <p className="bg-[#49A71C4D]/30 text-center rounded-md mr-3">
                Present
              </p>
            </td>
          </tr>
          <tr className="bg-white ">
            <td className="py-4 pl-5 flex items-center gap-4">
              <Image src={T_img2} className="ml-5" alt="img2" />
              <p>Adefarasin Elizabeth</p>
            </td>
            <td>02 - 01 - 2020</td>
            <td>Administration</td>
            <td>
              <p className="bg-[#FFB3B3] text-center rounded-md mr-3">Absent</p>
            </td>
          </tr>
          <tr className="bg-white ">
            <td className="py-4 pl-5 flex items-center gap-4">
              <Image src={T_img3} className="ml-5" alt="img3" />
              <p>Chukwudi Ugochukwu</p>
            </td>
            <td>02 - 01 - 2020</td>
            <td>Administration</td>
            <td>
              <p className="bg-[#49A71C4D]/30 text-center rounded-md mr-3">
                Present
              </p>
            </td>
          </tr>
          <tr className="bg-white ">
            <td className="py-4 pl-5 flex items-center gap-4">
              <Image src={T_img4} className="ml-5" alt="img4" />
              <p>Abdullahi Hawau</p>
            </td>
            <td>02 - 01 - 2020</td>
            <td>Teaching</td>
            <td>
              <p className="bg-[#49A71C4D]/30 text-center rounded-md mr-3">
                Present
              </p>
            </td>
          </tr>
          <tr className="bg-white ">
            <td className="py-4 pl-5 flex items-center gap-4">
              <Image src={T_img5} className="ml-5" alt="img5" />
              <p>Uzomeka Chinyere</p>
            </td>
            <td>02 - 01 - 2020</td>
            <td>Security</td>
            <td>
              <p className="bg-[#FFB3B3] text-center rounded-md mr-3">Absent</p>
            </td>
          </tr>
        </tbody>
      </table>

      <button
        onClick={() => {}}
        className="flex pt-8 pb-20 gap-4 justify-center place-items-center"
      >
        <h1 className="font-bold">LOAD MORE</h1>
        <Admin_dropdown className="-rotate-90" />
      </button>
    </div>
  );
};

export default Dashboard;
