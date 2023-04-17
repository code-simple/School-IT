import React from "react";
import Layout from "@/src/layout/dashboard/Layout";
import Calc from "@/src/assets/calc";
import ArrowUp from "@/src/assets/arrow-up";
import Bill from "@/src/assets/bill";
import Link from "next/link";
import AccountTable from "./account-table";
import Admin_dropdown from "@/src/assets/admin_dropdown";
import { useState } from "react";
import SalaryTable from "./salary-table";

Accounts.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default function Accounts() {
  const [toggleTable, setToggleTable] = useState(true);
  return (
    <div className="flex flex-col lg:pt-14 px-12 lg:px-16">
      <h1 className="text-2xl font-bold pb-8 lg:pb-16">Account</h1>
      <div className="gap-6 grid md:flex justify-center lg:justify-between">
        {/* Card 1 */}
        <div
          className="bg-gradient-to-b text-white rounded-xl w-[302px] h-[195px] from-[#000000] to-[#5169BF] hover:from-pink-500 hover:to-yellow-500"
          // style={{
          //   backgroundImage:
          //     "linear-gradient(198.98deg, #AF2233 -22.31%, #000000 -15.88%, #2D4053 10.76%, #000000 45.95%, #5169BF 87.21%)",
          // }}
        >
          <div className="flex pt-8 pl-8 gap-4 text-white place-items-center">
            <Calc />
            <p>Expenses</p>
          </div>
          <div className="flex text-white pt-7 pl-7 gap-20 pr-8 justify-between lg:justify-normal">
            <p>December</p>
            <div className="flex rounded-full border-2 border-white p-2 place-items-center gap-5">
              <p>High</p>
              <p className="animate-bounce">
                <ArrowUp />
              </p>
            </div>
          </div>
          <h1 className=" pl-8 pb-8 text-white text-3xl">₦ 300,000</h1>
        </div>
        {/* Card 2 */}
        <div
          className="rounded-xl bg-gradient-to-b text-white  w-[302px] h-[195px] from-[#000000] to-[#5169BF] hover:from-pink-500 hover:to-yellow-500"
          // style={{
          //   "background-image":
          //     "linear-gradient(198.98deg, #AF2233 -22.31%, #000000 -15.88%, #2D4053 10.76%, #000000 45.95%, #5169BF 87.21%)",
          // }}
        >
          <div className="flex pt-8 pl-8 gap-4 text-white place-items-center">
            <Bill />
            <p>Paid Total Salary</p>
          </div>
          <div className="flex text-white pt-7 pl-7 gap-20 pr-52">
            <p>December</p>
          </div>
          <h1 className="pt-4 pl-8 pb-8 text-white text-3xl">₦ 1,200,000 </h1>
        </div>
      </div>
      {/* Expense and Salary buttons */}
      <div className="flex justify-evenly lg:justify-start lg:pl-56 pt-8 pb-2 lg:pb-0 lg:pt-14">
        <button
          onClick={() => setToggleTable(true)}
          className="text-base lg:text-xl font-bold focus:text-blue_2 pb-4 focus:border-blue_2 lg:px-32 border-b-2"
        >
          Expenses
        </button>
        <button
          onClick={() => setToggleTable(false)}
          className="text-base lg:text-xl font-bold focus:text-blue_2 pb-4 focus:border-blue_2 lg:px-32 border-b-2"
        >
          Salaries
        </button>
      </div>

      <div>{toggleTable ? <AccountTable /> : <SalaryTable />}</div>
    </div>
  );
}
