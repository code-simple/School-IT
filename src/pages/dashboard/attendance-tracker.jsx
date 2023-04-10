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
    <div className="grid px-14 pt-14">
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold">Attendance Tracker</h1>
        <div className="flex gap-8 rounded-md">
          <input
            type="text"
            value={filterValue}
            onChange={(e) => setFilterValue(e.target.value)}
            className="rounded-md px-7 p-2 text-center"
            placeholder="Filter by employee's name"
          />
          <DatePicker
            className="rounded-md px-7 p-2 text-center"
            placeholderText="12-01-2019"
          />
        </div>
      </div>
      <table className="pt-7 border-separate border-spacing-y-2 text-left">
        <thead class="text-base text-[#9F9F9F]  font-semibold">
          <tr>
            <td>PERSONAL DETAILS</td>
            <td>DEPARTMENT</td>
            <td>ACTION</td>
            <td>STATUS</td>
          </tr>
        </thead>
        <tbody>
          {Employees.filter((employee) =>
            employee.fullName.toLowerCase().includes(filterValue.toLowerCase())
          ).map((obj) => (
            <tr key={obj.id} className="bg-white">
              <td>
                <p className="py-4 pl-5">{obj.fullName}</p>
              </td>
              <td>
                <p>{obj.department}</p>
              </td>
              <td>
                <div className="flex gap-14">
                  <Radio
                    id={`present-${obj.id}`}
                    name={`attendence-${obj.id}`}
                    value="present"
                    label="Present"
                    checked={obj.attendence === "present"}
                  />
                  <Radio
                    id={`absent-${obj.id}`}
                    name={`attendence-${obj.id}`}
                    value="absent"
                    label="Absent"
                    checked={obj.attendence === "absent"}
                  />
                </div>
              </td>
              <td>
                <p>{obj.attendence == "present" ? <Tick /> : <CrossRed />}</p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-center pt-10 pb-10">
        <Link
          href="#"
          className="bg-[#074279] py-3 px-16 rounded-full text-white text-sm font-bold "
        >
          <span>Submit Attendance Tracker</span>
        </Link>
      </div>
    </div>
  );
}
