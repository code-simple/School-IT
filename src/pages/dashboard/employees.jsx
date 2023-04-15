import React from "react";
import Link from "next/link";

// layout
import Layout from "@/src/layout/dashboard/Layout";
import Pagination from "@/src/components/Pagination";
import Employees from "@/src/contents/dashboard/data";

Employee.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default function Employee() {
  return (
    <div className="grid px-5 md:px-14 pt-14">
      <div className="flex justify-between">
        <h1 className="text-base md:text-2xl font-bold pt-2 md:pt-0">
          Employees
        </h1>
        <Link
          href="/dashboard/create-employee"
          className="flex gap-6 bg-[#074279] py-2 px-4 md:py-3 md:px-11 rounded-full text-white text-sm font-bold"
        >
          <span>+</span>
          <span>Create Employee</span>
        </Link>
      </div>
      <div className="relative grid overflow-x-auto text-xs lg:text-base">
        <table className="pt-7 border-separate border-spacing-y-2 text-left ">
          <thead className="whitespace-nowrap  lg:text-base text-[#9F9F9F]  font-semibold">
            <tr>
              <td>#</td>
              <td>SURNAME</td>
              <td>FIRST NAME</td>
              <td>DEPARTMENT</td>
              <td>CREATED ON</td>
              <td>ACTION</td>
            </tr>
          </thead>
          <tbody>
            {/* MOCK DATA */}
            {Employees.map((employee) => (
              <tr className="bg-white">
                <td className="py-4 pl-5">{employee.id}</td>
                <td>{employee.surname}</td>
                <td>{employee.firstname}</td>
                <td>{employee.department}</td>
                <td>{employee.created_on}</td>
                <td>
                  <Link
                    href="/dashboard/manage-employee"
                    className="font-bold bg text-[#074279]"
                  >
                    {employee.ACTION}
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Pagination />
    </div>
  );
}
