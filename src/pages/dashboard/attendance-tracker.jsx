import React, { useState } from "react";
import Link from "next/link";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// layout
import Layout from "@/src/layout/dashboard/Layout";
import Radio from "@/src/components/Radio";
import Tick from "@/src/assets/tick";
import CrossRed from "@/src/assets/cross-red";
import Employees from "@/src/contents/dashboard/data";

Employee.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default function Employee() {
  const [filterValue, setFilterValue] = useState("");

  return (
    <div className="grid px-4 lg:px-14 pt-14">
      <div className="grid md:flex justify-between">
        <h1 className="text-base lg:text-2xl font-bold">Attendance Tracker</h1>
        <div className="grid md:flex gap-2 md:gap-8 rounded-md">
          <input
            type="text"
            value={filterValue}
            onChange={(e) => setFilterValue(e.target.value)}
            className="rounded-md  p-2 text-center"
            placeholder="Filter by employee's name"
          />
          <DatePicker
            className="rounded-md p-2 text-center"
            placeholderText="12-01-2019"
          />
        </div>
      </div>
      <div className="relative overflow-x-auto grid">
        <table className="pt-7 border-separate border-spacing-y-2  ">
          <thead className="text-[#9F9F9F] text-center border-spacing-x-5 md:text-left font-semibold text-base">
            <tr>
              <td>PERSONAL DETAILS</td>
              <td>DEPARTMENT</td>
              <td>ACTION</td>
              <td>STATUS</td>
            </tr>
          </thead>
          <tbody className="text-base">
            {Employees.filter((employee) =>
              employee.fullName
                .toLowerCase()
                .includes(filterValue.toLowerCase())
            ).map((obj) => (
              <tr key={obj.id} className="bg-white">
                <td>
                  <p className="py-4 lg:pl-5">{obj.fullName}</p>
                </td>
                <td>
                  <p>{obj.department}</p>
                </td>
                <td>
                  <div className="flex gap-1 lg:gap-14">
                    <Radio
                      id={`present-${obj.id}`}
                      name={`attendence-${obj.id}`}
                      value="present"
                      label="Present"
                      checked={obj.attendence === "present"}
                      onChange={() => {}}
                    />
                    <Radio
                      id={`absent-${obj.id}`}
                      name={`attendence-${obj.id}`}
                      value="absent"
                      label="Absent"
                      checked={obj.attendence === "absent"}
                      onChange={() => {}}
                    />
                  </div>
                </td>
                <td className="pl-5 text-center">
                  <p>{obj.attendence == "present" ? <Tick /> : <CrossRed />}</p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex md:justify-center pt-1 md:pt-10 pb-3 lg:pb-10">
        <Link
          href="#"
          className="bg-[#074279] py-2 px-5 md:py-3 lg:px-16 rounded-full text-white text-sm font-bold "
        >
          <span>Submit Attendance Tracker</span>
        </Link>
      </div>
    </div>
  );
}
