import Admin_dropdown from "@/src/assets/admin_dropdown";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import T_img1 from "@/src/assets/table_img1.png";
import T_img2 from "@/src/assets/table_img2.png";
import T_img3 from "@/src/assets/table_img3.png";
import T_img4 from "@/src/assets/table_img4.png";
import T_img5 from "@/src/assets/table_img5.png";
import {
  collection,
  getCountFromServer,
  getDocs,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { auth, db } from "@/src/components/config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { cn } from "@/src/utils/cn";

const Dashboard = () => {
  const [employees, setEmployees] = useState([]);
  const [user] = useAuthState(auth);
  const empRef = collection(db, "employees");
  const [events, setEvents] = useState("--");

  const totalEvents = async () => {
    const snapshot = await getCountFromServer(collection(db, "events"));
    setEvents(snapshot.data().count);
    const employeesQuery = query(
      empRef,
      where("createdBy", "==", user.email),
      orderBy("emp_id")
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const data = await getDocs(employeesQuery);
    setEmployees(data.docs.map((doc) => doc.data()));
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    totalEvents();
  }, []);
  return (
    <div className="grid px-10 lg:px-16">
      <div className="flex justify-between items-center pt-8 lg:pt-16">
        <h1 className="text-2xl font-bold">Summary</h1>
        <Admin_dropdown className="-rotate-90" />
      </div>
      <p className="pt-4 lg:pt-7">02-January-2020</p>
      {/* Cards */}
      <div className="grid gap-3 lg:flex pt-6 lg:pt-12 md:justify-evenly">
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
            <h1 className="font-bold text-4xl">{events}</h1>
          </div>
        </div>
      </div>
      {/* Employees Tracker */}
      <h1 className="py-7 text-2xl font-bold">Employees Tracker</h1>
      {/* Table */}
      <div className="overflow-x-auto relative grid">
        <table className="pt-7 border-separate border-spacing-y-2">
          <thead className="text-base text-[#9F9F9F] text-left">
            <tr>
              <th>PERSONAL DETAILS</th>
              <th>DATE</th>
              <th>DEPARTMENT</th>
              <th>STATUS</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr className="bg-white" key={employee.uuid}>
                <td className="py-4 pl-5 flex items-center gap-4">
                  <Image
                    src={T_img1}
                    className="object-contain pl-4 md:pl-0"
                    alt="img1"
                  />
                  <p className="whitespace-nowrap pr-12 md:pr-0">
                    {employee.surname + " " + employee.firstname}
                  </p>
                </td>
                <td className="whitespace-nowrap">
                  <p className="pr-12 md:pr-0">
                    {employee.created_on.toDate().toDateString()}
                  </p>
                </td>
                <td className="pr-12 md:pr-0">{employee.department}</td>
                <td>
                  <p
                    className={cn("text-center rounded-md mr-3", {
                      "bg-[#49A71C4D]/30": employee.attendence === "present",
                      "bg-[#FF0000]/30": employee.attendence === "absent",
                    })}
                  >
                    {employee.attendence}
                  </p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
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
