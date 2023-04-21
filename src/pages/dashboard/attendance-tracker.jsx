import { useContext, useEffect, useState } from "react";
import Link from "next/link";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import T_img1 from "@/src/assets/table_img1.png";
import Image from "next/image";
// layout
import Layout, { UserContext } from "@/src/layout/dashboard";
import Radio from "@/src/components/Radio";
import Tick from "@/src/assets/tick";
import CrossRed from "@/src/assets/cross-red";
import { doc, endAt, updateDoc } from "firebase/firestore";
import { db } from "@/src/components/config/firebase";
import DataTable from "react-data-table-component";
import clsx from "clsx";
import { cn } from "@/src/utils/cn";

Attendence.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default function Attendence() {
  const [filterValue, setFilterValue] = useState("");
  const { employees, setEmployees } = useContext(UserContext);
  const [originalEmployees, setOriginalEmployees] = useState(employees);

  const [endDate, setEndDate] = useState(null);
  const [today, setToday] = useState(new Date().toDateString());
  const handleDate = () => {
    try {
      const filteredEmployees = employees.filter((emp) => {
        const attendanceDates = Object.keys(emp.attendence);
        return attendanceDates.some(
          (date) => new Date(date).getTime() === endDate.getTime() // Using some function, if any of dates from object.keys matches endDate [date of]
        );
      });
      setEmployees(filteredEmployees);
    } catch (error) {
      console.log(error);
    }
  };

  const handleReset = async () => {
    setEmployees(originalEmployees);
    setEndDate(null);
  };
  const handleChange = async (uuid, att) => {
    try {
      const newList = employees.map((emp) =>
        emp.uuid === uuid
          ? {
              ...emp,
              attendence: {
                [!endDate ? today : endDate.toDateString()]: {
                  attendence: att,
                },
              },
            }
          : emp
      );

      setEmployees(newList);

      await updateDoc(doc(db, "employees", uuid), {
        [`attendence.${endDate ? endDate.toDateString() : today}`]: {
          attendence: att,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  const columns = [
    {
      name: "PERSONAL DETAILS",
      selector: (row) => (
        <div className="py-4 flex items-center gap-4">
          <Image src={T_img1} alt="img1" />
          <p>{row.surname + " " + row.firstname}</p>
        </div>
      ),
      sortable: true,
    },
    {
      name: "DEPARTMENT",
      selector: (row) => row.department,
      sortable: true,
    },

    {
      name: "ACTION",
      selector: (row) => (
        <Radio
          className="h-6 w-6"
          id={`present-${row.uuid}`}
          name={`attendence-${row.uuid}`}
          value={row?.attendence[today]?.attendence}
          label="Present"
          checked={
            row.attendence[endDate ? endDate.toDateString() : today]
              ?.attendence === "present"
          }
          onChange={() => handleChange(row.uuid, "present")}
        />
      ),
    },
    {
      name: "",
      selector: (row) => (
        <Radio
          className="h-6 w-6"
          id={`absent-${row.uuid}`}
          name={`attendence-${row.uuid}`}
          value={row?.attendence[today]?.attendence}
          label="Absent"
          checked={
            row.attendence[endDate ? endDate.toDateString() : today]
              ?.attendence === "absent"
          }
          onChange={() => handleChange(row.uuid, "absent")}
        />
      ),
    },
    {
      name: "STATUS",
      selector: (row) => (
        <div>
          <p>
            {row?.attendence[endDate ? endDate.toDateString() : today]
              ?.attendence == "present" ? (
              <Tick />
            ) : (
              <CrossRed />
            )}
          </p>
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
        borderRadius: "10px",
        marginBottom: "10px",
        paddingleft: "500px",
        background: "white",
      }, // add margin bottom to rows
    },
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
    return () => {
      handleReset();
    };
  }, []);
  return (
    <div className="grid px-4 lg:px-14 pt-14">
      <div className="grid md:flex justify-between">
        <h1 className="text-base lg:text-2xl font-bold">Attendance Tracker</h1>
        <div className="grid md:flex gap-2 md:gap-5 rounded-md ">
          <input
            type="text"
            value={filterValue}
            onChange={(e) => setFilterValue(e.target.value)}
            className="rounded-md  p-2 text-center"
            placeholder="Filter by name"
          />
          <DatePicker
            selected={endDate}
            onCalendarClose={handleDate}
            onChange={(date) => setEndDate(date)}
            className="rounded-md p-2 text-center"
            placeholderText="12-01-2019"
          />
          <button
            onClick={handleReset}
            className={cn("p-2 bg-white rounded-md text-black", {
              "bg-black/70 text-white": endDate,
            })}
          >
            Reset
          </button>
        </div>
      </div>
      <div className="relative overflow-x-auto grid py-5">
        <DataTable
          data={employees}
          customStyles={customStyles}
          columns={columns}
          pagination
        />
      </div>
      <div className="flex md:justify-center pt-1 md:pt-10 pb-3 lg:pb-10">
        <Link
          href="/dashboard"
          onClick={handleReset}
          className="bg-[#074279] py-2 px-5 md:py-3 lg:px-16 rounded-full text-white text-sm font-bold "
        >
          <span>Submit Attendance Tracker</span>
        </Link>
      </div>
    </div>
  );
}
