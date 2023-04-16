import React, { useEffect, useState } from "react";
import Link from "next/link";

// layout
import Layout from "@/src/layout/dashboard/Layout";
import Pagination from "@/src/components/Pagination";
import Employees from "@/src/contents/dashboard/data";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "@/src/components/config/firebase";
import {
  collection,
  doc,
  getCountFromServer,
  getDocs,
  orderBy,
  query,
  where,
} from "firebase/firestore";

Employee.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default function Employee() {
  const [employees, setEmployees] = useState([]);
  const [user] = useAuthState(auth);
  const empRef = collection(db, "employees");
  // Server side filtered query

  const getEmployees = async () => {
    try {
      const employeesQuery = query(
        empRef,
        where("createdBy", "==", user.email),
        orderBy("emp_id")
      );
      const data = await getDocs(employeesQuery);
      setEmployees(data.docs.map((doc) => doc.data()));
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getEmployees();
  }, []);

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
            {employees.map((employee) => (
              <tr className="bg-white" key={employee.uuid}>
                <td className="py-4 pl-5">{employee.emp_id}</td>
                <td>{employee.surname}</td>
                <td>{employee.firstname}</td>
                <td>{employee.department}</td>
                <td>{employee.created_on.toDate().toDateString()}</td>
                <td>
                  <Link
                    href={{
                      pathname: "/dashboard/manage-employee",
                      query: { uuid: employee.uuid },
                    }}
                    className="font-bold bg text-[#074279]"
                  >
                    Manage
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
