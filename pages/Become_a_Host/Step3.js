import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

const Step3 = ({ prevStep, nextStep, handleChange, values }) => {
  const router = useRouter();
  const goToStep2 = () => {
    prevStep();
  };
  const goToStep4 = () => {
    nextStep();
  };
  return (
    <div className="flex h-screen font-[Poppins]">
      <div className=" opacity-55  relative hidden h-full w-0  flex-1 justify-center bg-gradient-to-br from-[#6D6875] to-[#FFB4A2] lg:block ">
        <div className=" items-start pl-8 pt-4 ">
          <Image
            src="/logo.png"
            alt="logo"
            height="50px"
            width="50px"
            className="absolute object-contain"
          />
        </div>
        <div className="w-500 grid place-items-center space-x-10 pt-48 font-[Poppins] text-3xl font-bold text-white ">
          Wheres is your <br></br>
          place located?{" "}
        </div>
      </div>

      <div className="justify center flex w-[50%]  flex-1 flex-col space-y-6 bg-white py-12 px-4 font-[Poppins] sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div className="flex flex-col space-y-1 text-secondary">
          <h1 className=" pt-28 text-center text-xl font-bold">
            Enter the address of your Location
          </h1>
          <div>
            <label htmlFor="address" className="flex flex-col pt-3 ">
              Address
              <input
                name="address"
                type="text"
                value={values.address}
                className="mt-4 rounded-3xl border border-secondary p-3 font-light"
                placeholder="Enter your address"
                onChange={handleChange("address")}
              />
            </label>
            <label htmlFor="city" className="flex flex-col pt-3">
              City
              <input
                name="city"
                type="text"
                value={values.city}
                className="mt-4 rounded-3xl border  border-secondary p-3 font-light"
                placeholder="Enter your city"
                onChange={handleChange("city")}
              />
            </label>
          </div>
        </div>

        <div className="mr-5 flex justify-between pt-6 pb-7">
          <button
            onClick={goToStep2}
            className="text-md left-4 inline-block rounded-full bg-[#b5838d] px-6 py-2 font-[Poppins] font-bold text-white  shadow-md "
          >
            Back
          </button>
          <button
            onClick={goToStep4}
            className="text-md inline-block rounded-full bg-[#b5838d] px-6 py-2 font-[Poppins] font-bold text-white shadow-md"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Step3;
