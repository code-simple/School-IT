import React from "react";
import Layout from "@/src/layout/dashboard/Layout";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import Cross from "@/src/assets/cross";
import Link from "next/link";
import { v4 as uuidv4 } from "uuid";
import { doc, setDoc } from "firebase/firestore";
import LoadingSVG from "@/src/assets/loading";
import { db } from "@/src/components/config/firebase";

Create_Employee.getLayout = function getLayout(page) {
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
export default function Create_Employee() {
  const schema = Yup.object().shape({
    surname: Yup.string().required("Surname is Required"),
    firstname: Yup.string().required("Firstname is required"),
    email: Yup.string().email("Invalid Email").required("Email is required"),
    department: Yup.string().min(1, "Select Department"),
    gender: Yup.string().min(1, "Select Gender"),
    salary: Yup.string().required("Field is required"),
  });

  const {
    handleSubmit,
    register,
    watch,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues,
    resolver: yupResolver(schema),
  });
  // Watch
  const surname = watch("surname");
  const firstname = watch("firstname");
  const email = watch("email");
  const department = watch("department");
  const gender = watch("gender");
  const salary = watch("salary");

  const onSubmit = async () => {
    const uuid = uuidv4();
    await setDoc(doc(db, "employees", uuid), {
      uuid,
      surname,
      firstname,
      email,
      department,
      gender,
      salary,
    });
  };

  return (
    <div className="flex flex-col">
      <h1 className="text-2xl font-bold pt-14 pl-16">Create new Employee</h1>
      <div className="flex justify-center pb-16 pt-14 ">
        <form
          onSubmit={handleSubmit(onSubmit)}
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

            <div className="flex justify-evenly ">
              {isSubmitting ? (
                <div className="flex justify-center px-[120px]">
                  <LoadingSVG currentColor="#175be0" />
                </div>
              ) : (
                <div className="pt-9">
                  <button className="bg-[#074279] text-white text-base font-semibold rounded-full py-2 px-36">
                    Create
                  </button>
                </div>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
