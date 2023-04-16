import DataTable from "react-data-table-component";
import { useEffect, useState } from "react";
import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
import { auth, db } from "@/src/components/config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const SalaryTable = () => {
  const [filter, setFilter] = useState("");
  const [employees, setEmployees] = useState([]);
  const [user] = useAuthState(auth);

  const getEmployees = async () => {
    const ref = collection(db, "employees");
    const q = query(
      ref,
      where("createdBy", "==", user.email),
      orderBy("emp_id")
    );
    const data = await getDocs(q);
    setEmployees(data.docs.map((doc) => doc.data()));
  };

  // SELECTOR ACCEPTS FUNCTION NOT STRING
  const columns = [
    { name: "EMP ID", selector: (row, i) => row.emp_id, sortable: true },
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

    { name: "AMOUNT", selector: (row, i) => row.salary, sortable: true },
    {
      name: "ACTION",
      selector: (row, i) => (
        <button className="font-bold text-white px-4 py-2 rounded-full bg-[#074279]">
          Pay
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
  useEffect(() => {
    getEmployees();
  }, []);
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
        data={employees.filter((employee) =>
          (employee.surname + employee.firstname)
            .toLowerCase()
            .includes(filter.toLowerCase())
        )}
        conditionalRowStyles={conditionalRowStyles}
        customStyles={customStyles}
      />
    </div>
  );
};

export default SalaryTable;
