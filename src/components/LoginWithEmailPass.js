import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/src/components/config/firebase";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Logo_svg from "../assets/logo_svg";
import { useRouter } from "next/router";
import Link from "next/link";
import Container from "@/src/components/Container";

const LoginWithEmailPass = () => {
  const router = useRouter();

  const schema = Yup.object().shape({
    email: Yup.string().email().required("Email is Required"),
    password: Yup.string().required("Password is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const loginWithEmailPassword = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        router.push("/dashboard");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  const onSubmit = () => {
    loginWithEmailPassword();
  };
  return (
    <Container>
      <div className="grid md:grid-cols-12 overflow-y-hidden">
        <div className="md:col-span-4">
          <div className="h-full pt-80 hidden md:block text-white bg-lightred max-w-[570px] ">
            <h1 className="flex justify-center text-xl lg:text-3xl text-white  font-semibold">
              Not Signed Up Yet?
            </h1>
            <p className="flex whitespace-nowrap  text-xs lg:text-lg mt-5 justify-center lg:text-center">
              Click the link below to get started
            </p>
            <div className=" flex justify-center">
              <Link
                className="rounded-full border-white border-2 p-2 lg:px-28  m-10 text-xl "
                href="/Signup"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
        <div className="col-span-8 h-screen p-5 lg:p-16 ">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="grid justify-center"
          >
            <Link href="/">
              <Logo_svg />
            </Link>
            <div className="flex flex-col py-12 pl-6 lg:pl-0">
              <div className="my-4">
                <h1 className="whitespace-nowrap  pt-12 text-4xl font-semibold">
                  Access Account
                </h1>
                <p className=" text-sm pt-8 pb-8 lg:whitespace-nowrap">
                  Gain access to your account and explore!
                </p>
                <input
                  {...register("email")}
                  className="w-80 lg:w-[638px] h-10 px-3 border py-3 border-lightred border-opacity-70 outline-lightred rounded-md"
                  type="email"
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                />
                {errors.email && <p>{errors.email.message}</p>}
              </div>
              <div className="my-4">
                <input
                  {...register("password")}
                  className="w-80 lg:w-[638px] h-10 px-3 border py-3 border-lightred border-opacity-70 outline-lightred rounded-md"
                  type="password"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                {errors.password && <p>{errors.password.message}</p>}
              </div>

              <div className="flex py-5">
                <button className=" whitespace-nowrap bg-lightred px-20 py-2  text-white rounded-full disabled:bg-slate-300">
                  Sign in
                </button>
              </div>
              <span className="text-sm py-5 md:hidden block lg:whitespace-nowrap">
                Click the link below to get started{" "}
                <Link href="/signin">Sign in</Link>{" "}
                <a href="#" className="font-bold">
                  Sigin In
                </a>
              </span>
              <div className="text-sm whitespace-nowrap">
                <span>
                  Forgot password?{" "}
                  <Link href="#" className="font-bold text-[#3B5998]">
                    Click here
                  </Link>
                </span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Container>
  );
};

export default LoginWithEmailPass;
