import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { UserContext } from "@/src/layout/dashboard/Layout";
// layout
import Layout from "@/src/layout/dashboard/Layout";
import Pagination from "@/src/components/Pagination";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "@/src/components/config/firebase";
import DataTable from "react-data-table-component";

import {
  collection,
  getDocs,
  limit,
  orderBy,
  query,
  startAfter,
  where,
} from "firebase/firestore";
import Create_Employee from "@/src/components/create-employee";
import { cn } from "@/src/utils/cn";
import Manage_Employee from "@/src/components/manage-employee";

Employee.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default function Employee() {
  const {
    openBox,
    setOpenBox,
    manageBox,
    setManageBox,
    employees,
    setEmployees,
  } = useContext(UserContext);

  const [employeeData, setEmployeeData] = useState(null);
  const [loading, setLoading] = useState(false);

  const [user] = useAuthState(auth);
  const empRef = collection(db, "employees");
  // Server side filtered query

  const getEmployees = async () => {
    setLoading(true);
    try {
      const employeesQuery = query(
        empRef,
        where("createdBy", "==", user.email),
        orderBy("emp_id")
        // limit(2)
      );
      const data = await getDocs(employeesQuery);
      setEmployees(data.docs.map((doc) => doc.data()));
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const columns = [
    {
      name: "#",
      selector: (row) => row.emp_id, // As per figma
      sortable: true,
    },
    {
      name: "SURNAME",
      selector: (row) => row.surname,
      sortable: true,
    },
    {
      name: "FIRSTNAME",
      selector: (row) => row.firstname,
      sortable: true,
    },
    {
      name: "DEPARTMENT",
      selector: (row) => row.department,
      sortable: true,
    },
    {
      name: "CREATED ON",
      selector: (row) => row.created_on.toDate().toDateString(),
      sortable: true,
    },

    {
      name: "ACTION",
      selector: (row, i) => (
        <div>
          <button
            onClick={() => {
              setEmployeeData(row);
              setManageBox(true);
            }}
            className="font-bold bg text-[#074279]"
          >
            Manage
          </button>
        </div>
      ),
      sortable: false,
    },
  ];

  const customStyles = {
    table: {
      style: {
        background: "#E5E5E5",
      },
    },
    rows: {
      style: {
        marginBottom: "10px",
        background: "white",
      }, // add margin bottom to rows
    },
    headRow: {
      style: {
        background: "#E5E5E5",
        fontSize: "12px",
        fontWeight: "bold",
        color: "#9F9F9F",
      },
    },
  };

  useEffect(() => {
    getEmployees();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="grid px-5 md:px-14 pt-14">
        <div className="flex justify-between">
          <h1 className="text-base md:text-2xl font-bold pt-2 md:pt-0">
            Employees
          </h1>
          <button
            onClick={() => setOpenBox(!openBox)}
            className={cn(
              "flex gap-6 bg-[#074279] py-2 px-4 md:py-3 md:px-11 rounded-full text-white text-sm font-bold",
              {
                hidden: openBox,
              }
            )}
          >
            <span>+</span>
            <span>Create Employee</span>
          </button>
          {openBox && <Create_Employee />}
        </div>
        <div className="relative grid overflow-x-auto text-xs lg:text-base">
          <div className=" py-14 ">
            <DataTable
              columns={columns}
              data={employees}
              customStyles={customStyles}
              pagination
              progressPending={loading}
              //todo: paginationComponent used for custom paginating component. Make one
            />
          </div>
        </div>
        {/* <Pagination /> */}
      </div>

      {manageBox && <Manage_Employee data={employeeData} />}
    </>
  );
}
