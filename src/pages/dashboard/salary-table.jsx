import DataTable from "react-data-table-component";
import Salaries from "@/src/contents/dashboard/data/salaries";
import { useState } from "react";

const SalaryTable = () => {
  const [filter, setFilter] = useState("");
  const PayBtn = () => (
    <button className="font-bold text-white px-4 py-2 rounded-full bg-[#074279]">
      Pay
    </button>
  );

  // SELECTOR ACCEPTS FUNCTION NOT STRING
  const columns = [
    { name: "EMP ID", selector: (row, i) => row.ID, sortable: true },
    { name: "NAME", selector: (row, i) => row.NAME, sortable: true },
    {
      name: "DEPARTMENT",
      selector: (row, i) => row.DEPARTMENT,
      sortable: true,
    },

    { name: "AMOUNT", selector: (row, i) => row.AMOUNT, sortable: true },
    { name: "ACTION", selector: (row, i) => PayBtn(), sortable: false },
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
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="rounded-md lg:px-7 p-2  text-xs text-center"
          placeholder="Filter by employee's name"
        />
      </div>
      <DataTable
        columns={columns}
        data={Salaries.filter((employee) =>
          employee.NAME.toLowerCase().includes(filter.toLowerCase())
        )}
        conditionalRowStyles={conditionalRowStyles}
        customStyles={customStyles}
      />
    </div>
  );
};

export default SalaryTable;
