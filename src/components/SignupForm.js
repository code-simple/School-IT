import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "@/src/components/config/firebase";
import { doc, setDoc } from "firebase/firestore";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import Logo_svg from "../assets/logo_svg";
import Link from "next/link";
import LoadingSVG from "../assets/loading";

const SignupForm = () => {
  const router = useRouter();

  //Schema
  const schema = Yup.object().shape({
    firstname: Yup.string().required("Field is required"),
    lastname: Yup.string().required("Field is required"),
    email: Yup.string().email("Invalid Email").required("Email is Required"),
    password: Yup.string()
      .min(6, "Atleast 6 characters")
      .required("Password is required"),
    agree: Yup.boolean().oneOf(
      [true],
      "You must accept the terms and conditions"
    ),
  });
  //useForm

  const defaultValues = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  };
  const {
    handleSubmit,
    setError,
    register,
    watch,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues,
  });

  // watch
  const firstname = watch("firstname");
  const lastname = watch("lastname");
  const email = watch("email");
  const password = watch("password");

  // Create new user, add data to firestore
  const onSubmit = async () => {
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;

        addDetails(user.uid);
        router.push("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        // All errors are covered by yup, only duplicate email error is handled by firebase
        setError("email", { type: "custom", message: "Email already in Use" });
        // ..
      });
  };

  const addDetails = async (uid) => {
    await setDoc(doc(db, "users", uid), {
      uid,
      email,
      firstname,
      lastname,
    });
  };

  return (
    <div className="grid md:grid-cols-12 h-full overflow-y-hidden">
      <div className="md:col-span-4">
        <div className="h-full pt-80 hidden md:block text-white bg-lightred">
          <h1 className="flex justify-center text-xl lg:text-3xl text-white  font-semibold  ">
            Already Signed Up?
          </h1>
          <p className="text-sm pt-8 pb-8 text-center">
            To stay connected with us please login with your personal info
          </p>
          <div className="flex justify-center">
            <button
              className="rounded-full border-white border-2 p-2 lg:px-28  m-10 text-xl"
              onClick={() => router.push("/login")}
            >
              Sign In
            </button>
          </div>
        </div>
      </div>
      <div className="col-span-8 h-screen pt-2 pl-2 lg:pt-16 lg:pl-16">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Link href="/">
            <Logo_svg />
          </Link>
          <div className="flex flex-col items-center">
            <div className="my-4">
              <h1 className="text-center text-3xl font-semibold">
                Create Account
              </h1>
              <p className="text-sm py-8 text-center">
                Lets get you all set up for your first onboarding experience
              </p>
            </div>
            <div className="my-4">
              <input
                className="w-72 md:w-96  lg:w-[638px] h-10 px-3 border py-3 border-lightred border-opacity-70 outline-lightred rounded-md"
                {...register("firstname")}
                type="text"
                placeholder="First Name"
              />
              <p className="text-red-600 text-xs">
                {errors.firstname && errors.firstname.message}
              </p>
            </div>
            <div className="my-4">
              <input
                className="w-72 md:w-96  lg:w-[638px] h-10 px-3 border py-3 border-lightred border-opacity-70 outline-lightred rounded-md"
                {...register("lastname")}
                type="text"
                placeholder="Last Name"
              />
              <p className="text-red-600 text-xs">
                {errors.lastname && errors.lastname.message}
              </p>
            </div>
            <div className="my-4">
              <input
                className="w-72 md:w-96  lg:w-[638px] h-10 px-3 border py-3 border-lightred border-opacity-70 outline-lightred rounded-md"
                {...register("email")}
                type="email"
                placeholder="Email"
              />
              <p className="text-red-600 text-xs">
                {errors.email && errors.email.message}
              </p>
            </div>
            <div className="grid my-4">
              <input
                className="w-72 md:w-96  lg:w-[638px] h-10 px-3 border py-3 border-lightred border-opacity-70 outline-lightred rounded-md"
                {...register("password")}
                type="password"
                placeholder="Password"
              />
              <p className="text-red-600 text-xs">
                {errors.password && errors.password.message}
              </p>
            </div>
            <div className="flex gap-3 mb-5 ">
              <input type="checkbox" className="w-4" {...register("agree")} />
              <span className="text-sm">
                {" "}
                I accept SchoolIT Terms & Conditions
              </span>
              <p className="text-red-600 text-xs">
                {errors.agree && errors.agree.message}
              </p>
            </div>

            <div className="text-center">
              {isSubmitting ? (
                <LoadingSVG currentColor="#fe718d" />
              ) : (
                <button
                  disabled={isSubmitting}
                  className="bg-lightred px-20 py-2 mb-20  text-white rounded-full disabled:bg-slate-300"
                >
                  Submit
                </button>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
