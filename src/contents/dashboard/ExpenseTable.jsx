import DataTable from "react-data-table-component";
import Link from "next/link";
import Admin_dropdown from "@/src/assets/admin_dropdown";

const ExpenseTable = ({ data }) => {
  const ExpandableComponent = ({ data }) => (
    <div className="flex py-7 flex-col bg-[#F5F4F4]">
      <div className="flex  pl-8 gap-10 lg:gap-64 text-xs font-bold text-gray-400 ">
        <p>AMOUNT</p>
        <p>DEPARTMENT</p>
        <p>DETAILS</p>
      </div>
      <div className="flex  pt-4 pl-8 gap-10 lg:gap-48">
        <p className="text-xs lg:text-xl whitespace-nowrap font-bold">
          {data.salary}
        </p>
        <p className="text-xs lg:text-xl font-bold">{data.department}</p>
        <p className="text-xs pr-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
          fugit dolorum corrupti sint? Aut et aliquam magni quia, assumenda
          alias quos officiis quo eligendi! Laboriosam quisquam corrupti a,
          atque quibusdam, odio voluptatem ullam laborum vel rerum at
          consequuntur autem, perferendis enim aut culpa deleniti! Suscipit
          laborum totam corporis debitis animi?
        </p>
      </div>
    </div>
  );
  // SELECTOR ACCEPTS FUNCTION NOT STRING
  const columns = [
    {
      name: "DATE",
      selector: (row, i) => row.created_on.toDate().toDateString(),
      sortable: true,
    },
    {
      name: "TIME",
      selector: (row, i) => row.created_on.toDate().toLocaleTimeString("en-US"),
      sortable: true,
    },
    {
      name: "NAME",
      selector: (row, i) => row.surname + " " + row.firstname,
      sortable: true,
    },
    {
      name: "DESCRIPTION",
      selector: (row, i) => "There the descriptions goes , Lorem text.  ",
      sortable: true,
    },
    {
      name: "AMOUNT",
      selector: (row, i) =>
        Number(row.salary)
          .toFixed(2)
          .replace(/\d(?=(\d{3})+\.)/g, "$&,"), // Convert it to number then fixed to 2 then  apply regex
      sortable: true,
    },
    {
      name: "ACTION",
      selector: (row, i) => (
        <button href="#" className="font-bold bg text-[#074279]">
          Manage
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
    rows: {
      style: { background: "#ECEAEA" },
    },
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
    <div>
      <div className="py-8 text-white">
        <Link
          href="/dashboard/create-expense"
          className=" bg-[#074279] py-2 px-11 rounded-full "
        >
          <span className="pr-6  text-center ">+</span>
          <span className=" text-sm font-bold">Create New Expense</span>
        </Link>
      </div>
      <DataTable
        columns={columns}
        data={data}
        expandableRows
        expandableRowsComponent={ExpandableComponent}
        conditionalRowStyles={conditionalRowStyles}
        customStyles={customStyles}
        striped
      />
      <div className="flex justify-center">
        <button
          onClick={() => {}}
          className="flex pt-8 pb-5 lg:pb-20 gap-4 justify-center place-items-center"
        >
          <h1 className="font-bold">LOAD MORE</h1>
          <Admin_dropdown />
        </button>
      </div>
    </div>
  );
};

export default ExpenseTable;
