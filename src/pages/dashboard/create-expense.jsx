import React from "react";
import Layout from "@/src/layout/dashboard";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import Cross from "@/src/assets/cross";
import Link from "next/link";

Create_Expense.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
const defaultValues = {
  fullName: "",
  description: "",
  department: "",
  amount: "",
  details: "",
};
export default function Create_Expense() {
  const schema = Yup.object().shape({
    fullName: Yup.string().required("Full name is Required"),
    description: Yup.string().required("Description is required"),
    department: Yup.string().min(1, "Select Department"),
    amount: Yup.number().required("Amount is Required"),
    details: Yup.string().required("Details are required"),
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    defaultValues,
    resolver: yupResolver(schema),
  });

  return (
    <div className="flex flex-col">
      <h1 className="text-2xl font-bold pt-14 pl-16">Create new Expense</h1>
      <div className="flex justify-center pb-16 pt-14">
        <form
          onSubmit={handleSubmit((data) => {
            console.log(data);
          })}
          className="bg-white rounded-md  pl-8 pr-8 pb-7 "
        >
          <div className="pt-7 pb-14">
            <Link href="/dashboard/accounts">
              <Cross />
            </Link>
          </div>
          <div className="flex flex-col max-w-[338px]">
            <label
              className="text-[#000000]/40 text-sm font-bold pb-2"
              htmlFor="fullName"
            >
              Name
            </label>
            <input
              {...register("fullName")}
              className=" border-1 border-[#C4C4C4] pt-2 p-1 border-2 border-solid rounded-md"
            />
            {errors.fullName && (
              <p className="text-red-400">{errors.fullName.message}</p>
            )}
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="description"
              className="text-[#000000]/40 text-sm font-bold mt-8 pb-2"
            >
              Description
            </label>
            <input
              {...register("description")}
              className="max-w-[338px]  border-[#C4C4C4] pt-2 p-1 border-2 rounded-md"
            />
            {errors.description && (
              <p className="text-red-400">{errors.description.message}</p>
            )}
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="department"
              className="text-[#000000]/40 text-sm font-bold mt-8 pb-2"
            >
              Department
            </label>
            <input
              {...register("firstname")}
              className="max-w-[338px]  border-[#C4C4C4] pt-2 p-1 border-2 rounded-md"
            />
            {errors.department && (
              <p className="text-red-400">{errors.department.message}</p>
            )}
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="details"
              className="text-[#000000]/40 text-sm font-bold mt-8 pb-2"
            >
              Details
            </label>
            <textarea
              {...register("details")}
              className="   h-[127px] resize-none  w-[338px] border-2 border-[#C4C4C4] pt-2 p-1 border-1 rounded-md "
            />
            {errors.details && (
              <p className="text-red-400">{errors.details.message}</p>
            )}

            <div className="flex justify-evenly pt-9 gap-12">
              <button className="bg-[#074279] text-white text-base font-semibold rounded-full py-2 px-36 ">
                Create
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
