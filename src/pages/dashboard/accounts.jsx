import React, { useEffect } from "react";
import Layout from "@/src/layout/dashboard/Layout";
import Calc from "@/src/assets/calc";
import ArrowUp from "@/src/assets/arrow-up";
import Bill from "@/src/assets/bill";
import AccountTable from "./account-table";
import { useState } from "react";
import SalaryTable from "./salary-table";
import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
import { auth, db } from "@/src/components/config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

Accounts.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default function Accounts() {
  const [toggleTable, setToggleTable] = useState(true);
  const [employees, setEmployees] = useState([]);
  const [totalpaid, setTotalpaid] = useState(0);
  const [user] = useAuthState(auth);

  const getEmployees = async () => {
    const ref = collection(db, "employees");
    orderBy("emp_id");
    orderBy("emp_id");
    const q = query(
      ref,
      where("createdBy", "==", user.email),
      orderBy("emp_id")
    );
    const data = await getDocs(q);
    let allEmp = data.docs.map((doc) => doc.data());
    setEmployees(allEmp);
    const allPayement = allEmp
      .filter((emp) => emp.paid && emp)
      .reduce((acc, item) => acc + Number(item.paid), 0);
    // console.log(allPayement);
    setTotalpaid(allPayement);
  };
  useEffect(() => {
    getEmployees();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="flex flex-col lg:pt-14 px-12 lg:px-16">
      <h1 className="text-2xl font-bold pb-8 lg:pb-16">Account</h1>
      <div className="gap-6 grid md:flex justify-center lg:justify-between">
        {/* Card 1 */}
        <div className="bg-gradient-to-b text-white rounded-xl w-[302px] h-[195px] from-[#000000] to-[#5169BF] hover:from-pink-500 hover:to-yellow-500">
          <div className="flex pt-8 pl-8 gap-4 text-white place-items-center">
            <Calc />
            <p>Expenses</p>
          </div>
          <div className="flex text-white pt-7 pl-7 gap-20 pr-8 justify-between lg:justify-normal">
            <p>December</p>
            <div className="flex rounded-full border-2 border-white p-2 place-items-center gap-5">
              <p>High</p>
              <p className="animate-bounce">
                <ArrowUp />
              </p>
            </div>
          </div>
          <h1 className=" pl-8 pb-8 text-white text-3xl">$ 300,000</h1>
        </div>
        {/* Card 2 */}
        <div className="rounded-xl bg-gradient-to-b text-white  w-[302px] h-[195px] from-[#000000] to-[#5169BF] hover:from-pink-500 hover:to-yellow-500">
          <div className="flex pt-8 pl-8 gap-4 text-white place-items-center">
            <Bill />
            <p>Paid Total Salary</p>
          </div>
          <div className="flex text-white pt-7 pl-7 gap-20 pr-52">
            <p>December</p>
          </div>
          <h1 className="pt-4 pl-8 pb-8 text-white text-3xl">
            $ {totalpaid.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")}{" "}
          </h1>
        </div>
      </div>
      {/* Expense and Salary buttons */}
      <div className="flex justify-evenly lg:justify-start lg:pl-56 pt-8 pb-2 lg:pb-0 lg:pt-14">
        <button
          onClick={() => setToggleTable(true)}
          className="text-base lg:text-xl font-bold focus:text-blue_2 pb-4 focus:border-blue_2 lg:px-32 border-b-2"
        >
          Expenses
        </button>
        <button
          onClick={() => setToggleTable(false)}
          className="text-base lg:text-xl font-bold focus:text-blue_2 pb-4 focus:border-blue_2 lg:px-32 border-b-2"
        >
          Salaries
        </button>
      </div>

      <div>
        {toggleTable ? (
          <AccountTable data={employees} />
        ) : (
          <SalaryTable
            totalpaid={totalpaid}
            setTotalPaid={setTotalpaid}
            // eslint-disable-next-line react-hooks/exhaustive-deps
            data={employees}
            setData={setEmployees}
          />
        )}
      </div>
    </div>
  );
}
