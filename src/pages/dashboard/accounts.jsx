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
    <div className="flex flex-col pt-14 px-16">
      <h1 className="text-2xl font-bold pb-16">Account</h1>
      <div className="grid  gap-6 lg:flex lg:justify-between">
        {/* Card 1 */}
        <div
          className=" rounded-xl"
          style={{
            "background-image":
              "linear-gradient(198.98deg, #AF2233 -22.31%, #000000 -15.88%, #2D4053 10.76%, #000000 45.95%, #5169BF 87.21%)",
          }}
        >
          <div className="flex pt-8 pl-8 gap-4 text-white place-items-center">
            <Calc />
            <p>Expenses</p>
          </div>
          <div className="flex text-white pt-7 pl-7 gap-20 pr-8">
            <p>December</p>
            <div className="flex rounded-full border-2 border-white p-2 place-items-center gap-5">
              <p>High</p>
              <ArrowUp />
            </div>
          </div>
          <h1 className="pt-4 pl-8 pb-8 text-white text-3xl">₦ 300,000</h1>
        </div>
        {/* Card 2 */}
        <div
          className="rounded-xl"
          style={{
            "background-image":
              "linear-gradient(198.98deg, #AF2233 -22.31%, #000000 -15.88%, #2D4053 10.76%, #000000 45.95%, #5169BF 87.21%)",
          }}
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
      <div className="flex pl-56 pt-14 ">
        <button
          onClick={() => setToggleTable(true)}
          className="text-xl font-bold focus:text-blue_2 pb-4 focus:border-blue_2 px-32 border-b-2"
        >
          Expenses
        </button>
        <button
          onClick={() => setToggleTable(false)}
          className="text-xl font-bold focus:text-blue_2 pb-4 focus:border-blue_2 px-32 border-b-2"
        >
          Salaries
        </button>
      </div>

      <div>{toggleTable ? <AccountTable /> : <SalaryTable />}</div>
    </div>
  );
}
