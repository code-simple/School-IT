import React from "react";
import Link from "next/link";

// layout
import Layout from "@/src/layout/dashboard/Layout";
import Pagination from "@/src/components/Pagination";

Employee.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default function Employee() {
  return (
    <div className="grid px-14 pt-14">
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold">Employees</h1>
        <Link
          href="/dashboard/manage_employee"
          className="flex gap-6 bg-[#074279] py-3 px-11 rounded-full text-white text-sm font-bold"
        >
          <span>+</span>
          <span>Create Employee</span>
        </Link>
      </div>
      <table className="pt-7 border-separate border-spacing-y-2 text-left">
        <thead class="text-base text-[#9F9F9F]  font-semibold">
          <tr>
            <td>#</td>
            <td>SURNAME</td>
            <td>FIRST NAME</td>
            <td>DEPARTMENT</td>
            <td>CREATED ON</td>
            <td>ACTION</td>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white">
            <td className="py-4 pl-5">1</td>
            <td>
              <p>Aderinsola </p>
            </td>
            <td>
              <p>Emmanuel</p>
            </td>
            <td>
              <p>Teaching</p>
            </td>
            <td>
              <p>02 - 01 - 2008</p>
            </td>
            <td>
              <Link href="#" className="font-bold bg text-[#074279]">
                Manage
              </Link>
            </td>
          </tr>
          <tr className="bg-white">
            <td className="py-4 pl-5">2</td>
            <td>
              <p>Chukwuma</p>
            </td>
            <td>
              <p>Ugochukwu</p>
            </td>
            <td>
              <p>Administration</p>
            </td>
            <td>
              <p>02 - 01 - 2008</p>
            </td>
            <td>
              <Link href="#" className="font-bold bg text-[#074279]">
                Manage
              </Link>
            </td>
          </tr>
          <tr className="bg-white">
            <td className="py-4 pl-5">3</td>
            <td>
              <p>Taiwo</p>
            </td>
            <td>
              <p>Sunday</p>
            </td>
            <td>
              <p>Teaching</p>
            </td>
            <td>
              <p>02 - 01 - 2008</p>
            </td>
            <td>
              <Link href="#" className="font-bold bg text-[#074279]">
                Manage
              </Link>
            </td>
          </tr>
          <tr className="bg-white">
            <td className="py-4 pl-5">4</td>
            <td>
              <p>Adefarasin</p>
            </td>
            <td>
              <p>Adewumi</p>
            </td>
            <td>
              <p>Teaching</p>
            </td>
            <td>
              <p>02 - 01 - 2008</p>
            </td>
            <td>
              <Link href="#" className="font-bold bg text-[#074279]">
                Manage
              </Link>
            </td>
          </tr>
          <tr className="bg-white">
            <td className="py-4 pl-5">5</td>
            <td>
              <p>Afolayan</p>
            </td>
            <td>
              <p>Funmi</p>
            </td>
            <td>
              <p>Administration</p>
            </td>
            <td>
              <p>02 - 01 - 2008</p>
            </td>
            <td>
              <Link href="#" className="font-bold bg text-[#074279]">
                Manage
              </Link>
            </td>
          </tr>
          <tr className="bg-white">
            <td className="py-4 pl-5">6</td>
            <td>
              <p>Chima</p>
            </td>
            <td>
              <p>Uche</p>
            </td>
            <td>
              <p>Security</p>
            </td>
            <td>
              <p>02 - 01 - 2008</p>
            </td>
            <td>
              <Link href="#" className="font-bold bg text-[#074279]">
                Manage
              </Link>
            </td>
          </tr>
          <tr className="bg-white">
            <td className="py-4 pl-5">7</td>
            <td>
              <p>Afenifere</p>
            </td>
            <td>
              <p>Esther</p>
            </td>
            <td>
              <p>Security</p>
            </td>
            <td>
              <p>02 - 01 - 2008</p>
            </td>
            <td>
              <Link href="#" className="font-bold bg text-[#074279]">
                Manage
              </Link>
            </td>
          </tr>
          <tr className="bg-white">
            <td className="py-4 pl-5">8</td>
            <td>
              <p>Johnson</p>
            </td>
            <td>
              <p>Stephen</p>
            </td>
            <td>
              <p>Teaching</p>
            </td>
            <td>
              <p>02 - 01 - 2008</p>
            </td>
            <td>
              <Link href="#" className="font-bold bg text-[#074279]">
                Manage
              </Link>
            </td>
          </tr>
          <tr className="bg-white">
            <td className="py-4 pl-5">9</td>
            <td>
              <p>Owolabi</p>
            </td>
            <td>
              <p>Johanna</p>
            </td>
            <td>
              <p>Administration</p>
            </td>
            <td>
              <p>02 - 01 - 2008</p>
            </td>
            <td>
              <Link href="#" className="font-bold bg text-[#074279]">
                Manage
              </Link>
            </td>
          </tr>
          <tr className="bg-white">
            <td className="py-4 pl-5">10</td>
            <td>
              <p>Abdullahi</p>
            </td>
            <td>
              <p>Taofeeq</p>
            </td>
            <td>
              <p>Teaching</p>
            </td>
            <td>
              <p>02 - 01 - 2008</p>
            </td>
            <td>
              <Link href="#" className="font-bold bg text-[#074279]">
                Manage
              </Link>
            </td>
          </tr>
        </tbody>
      </table>
      <Pagination />
    </div>
  );
}
