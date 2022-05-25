import React from "react";
import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import axios from "axios";
import Swal from "sweetalert2";

export default function Loginpage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const respnose = await axios.post(
        "http://localhost:5000/api/traveler/login",
        {
          email,
          password,
        },
        {
          "Content-Type": "application/json",
        }
      );
      await Swal.fire("Successfully Login!", "", "success");
      console.log(respnose);
      router.push("/");
    } catch (error) {
      await Swal.fire(error.response.data.message, "", "error");
    }
  };

  return (
    <div className="flex h-screen">
      <div className="relative hidden w-0 flex-1 lg:block ">
        <Image
          src="/LoginPic.jpg"
          alt="login"
          layout="fill"
          className="absolute inset-0 h-full w-full object-fill "
        />
        <div className="relative pt-4 pl-8">
          <Image
            src="/logo.png"
            alt="logo"
            height="50px"
            width="50px"
            className="absolute object-contain"
          />
        </div>
      </div>
      <div className="justify center flex w-[50%]  flex-1 flex-col space-y-6 bg-white py-12 px-4 font-[Poppins] sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <h5 className="mt5 text-center text-xl font-bold text-primary">
          Log In
        </h5>
        <form
          onSubmit={handleSubmit}
          className="flex flex-1 flex-col justify-start bg-white font-[Poppins] sm:px-14 lg:flex-none lg:px-8 xl:px-8">
          <br /> 
          <label className="mt-5 text-lg font-semibold text-secondary">
            Email
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="flex w-80 border-0 border-b-2 border-gray-700 bg-transparent text-xs font-light opacity-70 outline-none focus:border-b-primary focus:ring-0"
            />
          </label>
          <br />
          <label className="mt-5 text-lg font-semibold text-secondary">
            Password
            <input
              type="password"
              placeholder="Enter your Password"
              onChange={(e) => setPassword(e.target.value)}
              className="flex w-80 border-0 border-b-2 border-gray-700 bg-transparent text-xs font-light opacity-70 outline-none focus:border-b-primary focus:ring-0"
            />
          </label>

          <div className="pt-6 text-center">
            <button
              type="submit"
              disabled={!validateForm()}
              className="my-3 inline-block rounded-full bg-white px-8 py-4 font-[Poppins] text-lg
           font-bold text-primary shadow-md transition duration-150 hover:bg-primary hover:text-white active:scale-90"
            >
              Login
            </button>
          </div>
        </form>

        <div className="text-right font-semibold text-secondary">
          Forgot your Password?{" "}
          <a className=" cursor-pointer border-b-2 border-primary text-primary">
            Click Here
          </a>
        </div>
      </div>
    </div>
  );
}