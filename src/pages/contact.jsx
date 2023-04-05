import React, { useState } from "react";
import Logo_svg from "../assets/logo_svg";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const schema = Yup.object().shape({
    fullname: Yup.string().required("Full name is required"),
    email: Yup.string().email("Invalid Email").required("Email is Required"),
    message: Yup.string().required("Message is required"),
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <div className="grid grid-cols-2">
      <div className="px-1 sm:px-0 ml-0 sm:ml-14">
        <div>
          <Logo_svg />
        </div>
        <div className="flex justify-between ">
          <span className="text-3xl font-medium py-10">Get in touch</span>
        </div>
        <div className="my-5">
          <span>Please fill out the form and we will be in touch</span>
        </div>
        <form>
          <div className="my-4">
            <input
              className="w-96 h-10 px-3 border-2 border-lightred outline-lightred  rounded-md"
              {...register("fullname")}
              type="text"
              placeholder="Full Name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="my-4">
            <input
              className="w-96 h-10 px-3 border-2 border-lightred outline-lightred  rounded-md"
              {...register("email")}
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="my-4">
            <textarea
              className="resize-none w-96 h-48 px-3 border-2 border-lightred outline-lightred  rounded-md"
              {...register("message")}
              type="text"
              placeholder="Message"
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <button className="bg-lightred px-20 py-2 mb-20  text-white rounded-full disabled:bg-slate-300">
            Submit
          </button>
        </form>
      </div>
      <div className="bg-blue_1 bg-opacity-10 h-screen  contact-background relative invisible sm:visible">
        <h1 className="absolute top-44 right-14 text-5xl ">Contact</h1>
      </div>
    </div>
  );
};

export default Contact;
