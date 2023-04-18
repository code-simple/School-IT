import React, { useEffect, useState } from "react";
import Layout from "@/src/layout/dashboard/Layout";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import Cross from "@/src/assets/cross";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "@/src/components/config/firebase";
import LoadingSVG from "@/src/assets/loading";

Manage_Employee.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
const defaultValues = {
  surname: "",
  firstname: "",
  email: "",
  department: "",
  gender: "",
  salary: "",
};
export default function Manage_Employee() {
  const schema = Yup.object().shape({
    surname: Yup.string().required("Surname is Required"),
    firstname: Yup.string().required("Firstname is required"),
    email: Yup.string().email("Invalid Email").required("Email is required"),
    department: Yup.string().min(1, "Select Department"),
    gender: Yup.string().min(1, "Select Gender"),
    salary: Yup.string().required("Field is required"),
  });
  const router = useRouter();
  const [userData, setUserData] = useState();
  const [loading, setLoading] = useState(false);
  // Router Query to get specific uuid
  const uuid = router.query.uuid;
  // Getting values for specific inputs
  const docRef = doc(db, "employees", uuid);

  //Handle Sumbit
  const {
    handleSubmit,
    setValue,
    watch,
    register,
    formState: { errors },
  } = useForm({
    defaultValues,
    resolver: yupResolver(schema),
  });
  const getDocument = async () => {
    const data = await getDoc(docRef);
    setUserData(data.data());
    setValue("surname", data.data()["surname"]);
    setValue("firstname", data.data()["firstname"]);
    setValue("email", data.data()["email"]);
    setValue("department", data.data()["department"]);
    setValue("gender", data.data()["gender"]);
    setValue("salary", data.data()["salary"]);
  };
  // watches

  const surname = watch("surname");
  const firstname = watch("firstname");
  const email = watch("email");
  const department = watch("department");
  const gender = watch("gender");
  const salary = watch("salary");

  // Update Function

  const update = async () => {
    setLoading(true);
    try {
      await updateDoc(doc(db, "employees", uuid), {
        surname,
        firstname,
        email,
        department,
        gender,
        salary,
        attendence: "present",
      });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  // Delete Function
  const deleteDetail = async () => {
    setLoading(true);
    try {
      await deleteDoc(doc(db, "employees", uuid));
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
      router.back();
    }
  };

  useEffect(() => {
    getDocument();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="flex flex-col">
      <h1 className="text-2xl font-bold pt-14 md:pl-16">Manage Employee</h1>
      <div className="flex justify-center pb-16 pt-14">
        <form
          onSubmit={handleSubmit((data) => {})}
          className="bg-white rounded-md  pl-8 pr-8 pb-7 "
        >
          <div className="pt-8 pl-8 pb-14">
            <Link href="/dashboard/employees">
              <Cross />
            </Link>
          </div>
          <div className="flex flex-col max-w-[338px]">
            <label
              className="text-[#000000]/40 text-sm font-bold"
              htmlFor="surname"
            >
              Surname
            </label>
            <input
              onChange={(e) => watch("surname", e.target.value)}
              {...register("surname")}
              placeholder="surname"
              className=" border-1 border-[#C4C4C4] pt-2 p-1 border-2 border-solid "
            />
            {errors.surname && (
              <p className="text-red-400">{errors.surname.message}</p>
            )}
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="firstname"
              className="text-[#000000]/40 text-sm font-bold mt-8"
            >
              Firstname
            </label>
            <input
              {...register("firstname")}
              placeholder="First Name"
              className="max-w-[338px]  border-[#C4C4C4] pt-2 p-1 border-2 "
            />
            {errors.firstname && (
              <p className="text-red-400">{errors.firstname.message}</p>
            )}
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="email"
              className="text-[#000000]/40 text-sm font-bold mt-8"
            >
              Email
            </label>
            <input
              {...register("email")}
              placeholder="Email"
              className="max-w-[338px]  border-[#C4C4C4] pt-2 p-1 border-2 "
            />
            {errors.email && (
              <p className="text-red-400">{errors.email.message}</p>
            )}
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="department"
              className="text-[#000000]/40 text-sm font-bold mt-8"
            >
              Department
            </label>

            <select
              {...register("department")}
              className="max-w-[338px] border-2 border-[#C4C4C4]  p-1"
            >
              <option value="">Select Department</option>
              <option>Teaching</option>
              <option>Administration</option>
              <option>Security</option>
            </select>
            {errors.department && (
              <p className="text-red-400">{errors.department.message}</p>
            )}
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="gender"
              className="text-[#000000]/40 text-sm font-bold mt-8"
            >
              Gender
            </label>

            <select
              {...register("gender")}
              className="max-w-[338px] border-2 border-[#C4C4C4]  p-1"
            >
              <option value="">Select Gender</option>
              <option>Male</option>
              <option>Female</option>
            </select>
            {errors.gender && (
              <p className="text-red-400">{errors.gender.message}</p>
            )}
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="salary"
              className="text-[#000000]/40 text-sm font-bold mt-8"
            >
              Salary
            </label>
            <input
              {...register("salary")}
              placeholder="Salary"
              className="max-w-[338px] border-2 border-[#C4C4C4] pt-2 p-1 border-1 "
            />
            {errors.salary && (
              <p className="text-red-400">{errors.salary.message}</p>
            )}

            {loading ? (
              <div className="px-28">
                <LoadingSVG />
              </div>
            ) : (
              <div className="flex justify-evenly pt-9 gap-12">
                <button
                  onClick={update}
                  className="bg-[#074279] text-white text-base font-semibold rounded-full py-2 px-11"
                >
                  Update
                </button>

                <button
                  onClick={deleteDetail}
                  className="bg-[#AB2424] text-white text-base font-semibold p-1 rounded-full py-2 px-11"
                >
                  Delete
                </button>
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
