import Admin_dropdown from "@/src/assets/admin_dropdown";
import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import T_img1 from "@/src/assets/table_img1.png";
import {
  collection,
  getCountFromServer,
  getDocs,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { db } from "@/src/components/config/firebase";
import { cn } from "@/src/utils/cn";
import DataTable from "react-data-table-component";
import { UserContext } from "@/src/layout/dashboard/Layout";

const Dashboard = () => {
  const { employees, setEmployees, user } = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  const [events, setEvents] = useState(0);
  const getEmpAndEvents = async () => {
    setLoading(true);
    try {
      const events_q = query(
        collection(db, "events"),
        where("createdBy", "==", user.email)
        // limit(2)
      );
      const employee_q = query(
        collection(db, "employees"),
        where("createdBy", "==", user.email),
        orderBy("emp_id")
        // limit(2)
      );
      const data = await getDocs(employee_q);
      const totalEvents = await getCountFromServer(events_q);
      setEvents(totalEvents.data().count);
      setEmployees(data.docs.map((doc) => doc.data()));
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getEmpAndEvents();
  }, []);
  const columns = [
    {
      name: "PERSONAL DETAILS",
      selector: (row) => (
        <div className="py-4 pl-5 flex items-center gap-4">
          <Image src={T_img1} alt="img1" />
          <p>{row.surname + " " + row.firstname}</p>
        </div>
      ),
      sortable: true,
    },
    {
      name: "DATE",
      selector: (row) => row.created_on.toDate().toDateString(),
      sortable: true,
    },

    {
      name: "DEPARTMENT",
      selector: (row) => row.department,
      sortable: true,
    },
    {
      name: "STATUS",
      selector: (row) => (
        <div className="pr-12 md:pr-0">
          <p
            className={cn("text-center rounded-md px-3 py-1", {
              "bg-[#49A71C4D]/30": row.attendence === "present",
              "bg-[#FF0000]/30": row.attendence === "absent",
            })}
          >
            {row.attendence}
          </p>
        </div>
      ),
      sortable: false,
    },
  ];

  const customStyles = {
    headRow: {
      style: {
        backgroundColor: "#E5E5E5",
        fontSize: "12px",
        fontWeight: "bold",
        color: "#9F9F9F",
      },
    },
  };
  useEffect(() => {
    getEmpAndEvents();
  }, []);
  return (
    <div className="grid px-10 lg:px-16">
      <div className="flex justify-between items-center pt-8 lg:pt-16">
        <h1 className="text-2xl font-bold">Summary</h1>
        <Admin_dropdown className="-rotate-90" />
      </div>
      <p className="pt-4 lg:pt-7">02-January-2023</p>
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
      <h1 className="py-7 text-2xl font-bold">Employees Tracker</h1>
      {/* Table */}
      <div>
        <DataTable
          columns={columns}
          data={employees}
          progressPending={loading}
          customStyles={customStyles}
          pagination
        />
      </div>
      {/* <button
        onClick={() => {}}
        className="flex pt-8 pb-20 gap-4 justify-center place-items-center"
      >
        <h1 className="font-bold">LOAD MORE</h1>
        <Admin_dropdown className="-rotate-90" />
      </button> */}
    </div>
  );
};

export default Dashboard;