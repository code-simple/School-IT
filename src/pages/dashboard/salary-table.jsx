import DataTable from "react-data-table-component";
import Link from "next/link";

const SalaryTable = () => {
  const PayBtn = () => (
    <button className="font-bold text-white px-4 py-2 rounded-full bg-[#074279]">
      Pay
    </button>
  );

  const data = [
    {
      ID: 1001,
      NAME: "Joshua Hungevu",
      DEPARTMENT: "Administration",
      AMOUNT: "₦ 30000.00",
      ACTION: PayBtn(),
    },
    {
      ID: 1002,
      NAME: "Adefarasin Emmanuel",
      DEPARTMENT: "Teaching",
      AMOUNT: "₦ 90000.00",
      ACTION: PayBtn(),
    },
    {
      ID: 1003,
      NAME: "Chukuma Ejiofor",
      DEPARTMENT: "Teaching",
      AMOUNT: "₦ 55000.00",
      ACTION: PayBtn(),
    },
    {
      ID: 1004,
      NAME: "Travolta John",
      DEPARTMENT: "Administration",
      AMOUNT: "₦ 10000.00",
      ACTION: PayBtn(),
    },
    {
      ID: 1005,
      NAME: "Mckein Cynthia",
      DEPARTMENT: "Administration",
      AMOUNT: "₦ 35000.00",
      ACTION: PayBtn(),
    },
    {
      ID: 1006,
      NAME: "Travolta John",
      DEPARTMENT: "Teaching",
      AMOUNT: "₦ 30000.00",
      ACTION: PayBtn(),
    },
    {
      ID: 1007,
      NAME: "Rush Lillian",
      DEPARTMENT: "Security",
      AMOUNT: "₦ 90000.00",
      ACTION: PayBtn(),
    },
    {
      ID: 1008,
      NAME: "Samantha Agboluade",
      DEPARTMENT: "Administration",
      AMOUNT: "₦ 55000.00",
      ACTION: PayBtn(),
    },
    {
      ID: 1009,
      NAME: "Michael Blank",
      DEPARTMENT: "Security",
      AMOUNT: "₦ 10000.00",
      ACTION: PayBtn(),
    },
    {
      ID: 1010,
      NAME: "Travis Abdullahi",
      DEPARTMENT: "Administration",
      AMOUNT: "₦ 35000.00",
      ACTION: PayBtn(),
    },
  ];

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
    { name: "ACTION", selector: (row, i) => row.ACTION, sortable: false },
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
        background: "#E5E5E5",
        fontSize: "12px",
        fontWeight: "bold",
        color: "#9F9F9F",
        borderBottom: "1px solid gray",
      },
    },
  };
  return (
    <div className="pb-24">
      <div className="flex py-8 justify-between">
        <h1 className="text-xl text-white text-[#000000]/50 font-bold">
          December Salary Payment Schedule
        </h1>
        <input
          className="rounded-md px-7 p-2 text-xs text-center"
          placeholder="Filter by employee's name"
        />
      </div>
      <DataTable
        columns={columns}
        data={data}
        conditionalRowStyles={conditionalRowStyles}
        customStyles={customStyles}
      />
    </div>
  );
};

export default SalaryTable;
