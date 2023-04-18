import DataTable from "react-data-table-component";
import { useEffect, useState } from "react";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "@/src/components/config/firebase";

const SalaryTable = ({ totalpaid, setTotalPaid, data, setData }) => {
  const [filterValue, setFilterValue] = useState("");

  // SELECTOR ACCEPTS FUNCTION NOT STRING
  const columns = [
    {
      name: "EMP ID",
      selector: (row, i) => Number(row.emp_id) + 1000,
      sortable: true,
    },
    {
      name: "NAME",
      selector: (row, i) => row.surname + " " + row.firstname,
      sortable: true,
    },
    {
      name: "DEPARTMENT",
      selector: (row, i) => row.department,
      sortable: true,
    },

    {
      name: "AMOUNT",
      selector: (row, i) =>
        Number(row.salary)
          .toFixed(2)
          .replace(/\d(?=(\d{3})+\.)/g, "$&,"),
      sortable: true,
    },
    {
      name: "ACTION",
      selector: (row, i) =>
        !row?.paid ? (
          <button
            onClick={async () => {
              setTotalPaid(totalpaid + Number(row.salary));

              const updObj = {
                ...row,
                paid: row.salary,
              };
              const newlist = data.map((emp) =>
                emp.uuid == row.uuid ? updObj : emp
              );
              setData(newlist);
              await updateDoc(doc(db, "employees", row.uuid), {
                paid: row.salary,
              });
            }}
            className="font-bold text-white px-4 py-2 rounded-full bg-[#074279]"
          >
            Pay
          </button>
        ) : (
          <button
            disabled
            className=" font-bold text-white px-4 py-2 rounded-full bg-slate-400"
          >
            Paid
          </button>
        ),
      sortable: false,
    },
  ];

  // Stripped Rows Style
  const conditionalRowStyles = [
    {
      when: (row) => parseInt(row.ID) % 2 == 0,
      style: {
        backgroundColor: "#ECEAEA",
      },
    },
  ];
  // Head Row style
  const customStyles = {
    headRow: {
      style: {
        backgroundColor: "#E5E5E5",
        fontSize: "12px",
        fontWeight: "bold",
        color: "#9F9F9F",
        borderBottom: "1px solid gray",
      },
    },
  };

  return (
    <div className="pb-24">
      <div className="grid  lg:flex py-2 lg:py-8 justify-between">
        <h1 className="text-base lg:text-xl  text-black/50 font-bold pb-5 lg:pb-0">
          December Salary Payment Schedule
        </h1>
        <input
          value={filterValue}
          onChange={(e) => setFilterValue(e.target.value)}
          className="rounded-md lg:px-7 p-2  text-xs text-center"
          placeholder="Filter by employee's name"
        />
      </div>

      <DataTable
        columns={columns}
        data={data.filter((employee) =>
          (employee.surname + employee.firstname)
            .toLowerCase()
            .includes(filterValue.toLowerCase())
        )}
        conditionalRowStyles={conditionalRowStyles}
        customStyles={customStyles}
      />
    </div>
  );
};

export default SalaryTable;
