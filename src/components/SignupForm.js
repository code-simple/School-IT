import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "@/src/components/config/firebase";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import Logo_svg from "../assets/logo_svg";

const SignupForm = () => {
  const router = useRouter();

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //Schema
  const schema = Yup.object().shape({
    firstname: Yup.string().required("Field is required"),
    lastname: Yup.string().required("Field is required"),
    email: Yup.string().email("Invalid Email").required("Email is Required"),
    password: Yup.string()
      .required("Password is required")
      .min(8, "Minimum 8 digits"),
  });
  //useForm
  const {
    handleSubmit,
    setError,
    register,
    formState: { errors, isValid, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
    },
  });

  // Create new user, add data to firestore
  const onSubmit = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;

        addDetails(user.uid);
        router.push("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        // Implement Switch case for all errors related to email
        setError("email", { type: "custom", message: error.code });
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
      <div className="col-span-8 h-screen p-2 lg:p-16">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Logo_svg />
          <div className="flex flex-col  place-items-center text-center p">
            <div className="my-4">
              <h1 className="text-center mt-20 text-3xl font-semibold">
                Create Account
              </h1>
              <p className="text-sm pt-8 pb-8">
                Let’s get you all set up for your first onboarding experience{" "}
              </p>
              <input
                className="w-72 md:w-96  lg:w-[638px] h-10 px-3 border py-3 border-lightred border-opacity-70 outline-lightred rounded-md"
                {...register("firstname")}
                type="text"
                placeholder="First Name"
                onChange={(e) => setFirstname(e.target.value)}
              />
              <p className="text-red-600">
                {errors.firstname && errors.firstname.message}
              </p>
            </div>
            <div className="my-4">
              <input
                className="w-72 md:w-96  lg:w-[638px] h-10 px-3 border py-3 border-lightred border-opacity-70 outline-lightred rounded-md"
                {...register("lastname")}
                type="text"
                placeholder="Last Name"
                onChange={(e) => setLastName(e.target.value)}
              />
              <p className="text-red-600">
                {errors.lastname && errors.lastname.message}
              </p>
            </div>
            <div className="my-4">
              <input
                className="w-72 md:w-96  lg:w-[638px] h-10 px-3 border py-3 border-lightred border-opacity-70 outline-lightred rounded-md"
                {...register("email")}
                type="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <p className="text-red-600">
                {errors.email && errors.email.message}
              </p>
            </div>
            <div className="my-4">
              <input
                className="w-72 md:w-96  lg:w-[638px] h-10 px-3 border py-3 border-lightred border-opacity-70 outline-lightred rounded-md"
                {...register("password")}
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <p className="text-red-600">
                {errors.password && errors.password.message}
              </p>
            </div>
            <div className="flex gap-3 mb-5 ">
              <input type="checkbox" className="w-4" />
              <span className="text-sm"> agree terms and conditions</span>
            </div>
            <div className="text-center">
              <button className="bg-lightred px-20 py-2 mb-20  text-white rounded-full disabled:bg-slate-300">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
