import React from "react";
import Layout from "@/src/layout/dashboard/Layout";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Link from "next/link";
import Cross from "@/src/assets/cross";

Create_Event.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
const defaultValues = {
  department: "",
};
export default function Create_Event() {
  const schema = Yup.object().shape({
    // date: Yup.date().typeError("Incorrect value").required("Date is required"),
    description: Yup.string().required("Description is required"),
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
      <h1 className="text-2xl font-bold pt-14 pl-16">Events</h1>
      <div className="flex justify-center text-black/50 text-xl font-bold pt-8">
        <h1>Create an Event</h1>
      </div>
      <div className="flex justify-center pb-16 pt-14">
        <form
          onSubmit={handleSubmit((data) => {
            console.log(data);
          })}
          className="bg-white rounded-md  pl-8 pb-7 "
        >
          <div className="pt-7 pb-14">
            <Link href="/dashboard/">
              <Cross />
            </Link>
          </div>
          <div>
            <label
              htmlFor="date"
              className="text-[#000000]/40 text-sm font-bold mt-8 pb-2"
            >
              Date
            </label>
            <DatePicker
              //   {...register("date")}
              className="rounded-md px-7 p-2 w-[338px] text-center border-2 border-[#C4C4C4] pt-2  border-1 "
              placeholderText="12-01-2019"
            />
            {errors.date && (
              <p className="text-red-400">{errors.date.message}</p>
            )}
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="details"
              className="text-[#000000]/40 text-sm font-bold mt-8 pb-2"
            >
              Description
            </label>
            <textarea
              {...register("details")}
              className="   h-[127px] resize-none  w-[338px] border-2 border-[#C4C4C4] pt-2 p-2 border-1 rounded-md "
            />
            {errors.description && (
              <p className="text-red-400">{errors.description.message}</p>
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
