import React from "react";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

const Step4 = ({
  prevStep,
  nextStep,
  handleChange,
  values,
  increaseGuests,
  decreaseGuests,
  increaseBeds,
  decreaseBeds,
  increaseBathrooms,
  decreaseBathrooms,
}) => {
  const router = useRouter();
  const goToStep3 = () => {
    // router.push("/Become_a_Host/Step3");
    prevStep();
  };
  const goToStep5 = () => {
    // router.push("/Become_a_Host/Step5");
    nextStep();
  };

  return (
    <div className="flex h-screen">
      <div className=" opacity-55  relative hidden h-full w-0  flex-1 justify-center bg-gradient-to-br from-[#E5989B] to-[#FFCDB2] lg:block ">
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
          How many guests <br></br>
          would you like to<br></br>welcome?
        </div>
      </div>

      <div className="justify center flex w-[50%]  flex-1 flex-col space-y-6 bg-white py-12 px-4 font-[Poppins] sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div className="space-y-10 pt-20">
          <button
            type="button"
            className="hover:bg-gray-80  w-full  rounded-md   border border-gray-400 bg-white  px-5 py-4 text-lg   text-secondary focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-600 dark:hover:bg-gray-300 dark:focus:ring-gray-700"
          >
            <div className="flex justify-between text-xl font-bold">
              Guests
              <Image
                className="rounded fill-secondary  opacity-60"
                src="/minus.png"
                height="8"
                width="25"
                alt="minus image"
                onClick={decreaseGuests}
              />
              <span className="counter__output">{values.guests}</span>
              <Image
                className="rounded fill-secondary opacity-60"
                src="/plus.png"
                height="8"
                width="25"
                alt="plus image"
                onClick={increaseGuests}
              />
            </div>
          </button>

          <button
            type="button"
            className="hover:bg-gray-80  w-full  rounded-md   border border-gray-400 bg-white  px-5 py-4 text-lg   text-secondary focus:ring-4 focus:ring-gray-200  dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-600 dark:hover:bg-gray-300 dark:focus:ring-gray-700"
          >
            <div className="flex justify-between text-xl font-bold">
              Beds
              <Image
                className="mr-5 items-end rounded fill-secondary opacity-60"
                src="/minus.png"
                height="8"
                width="25"
                alt="minus image"
                onClick={decreaseBeds}
              />
              <span className="counter__output">{values.beds}</span>
              <Image
                className="items-end justify-end rounded  fill-secondary opacity-60"
                src="/plus.png"
                height="8"
                width="25"
                alt="plus image"
                onClick={increaseBeds}
              />
            </div>
          </button>

          <button
            type="button"
            className="hover:bg-gray-80  w-full  rounded-md   border border-gray-400 bg-white  px-5 py-4 text-lg   text-secondary focus:ring-4 focus:ring-gray-200  dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-600 dark:hover:bg-gray-300 dark:focus:ring-gray-700"
          >
            <div className="flex justify-between text-xl font-bold">
              Bathrooms
              <Image
                className="mr-5 items-end rounded fill-secondary opacity-60"
                src="/minus.png"
                height="8"
                width="25"
                alt="minus image"
                onClick={decreaseBathrooms}
              />
              <span className="counter__output">{values.bathrooms}</span>
              <Image
                className="items-end justify-end rounded  fill-secondary opacity-60"
                src="/plus.png"
                height="8"
                width="25"
                alt="plus image"
                onClick={increaseBathrooms}
              />
            </div>
          </button>
        </div>

        <div className="mr-5 flex justify-between pt-16 pb-4">
          <button
            onClick={goToStep3}
            className="text-md left-4 inline-block rounded-full bg-[#b5838d] px-6 py-2 font-[Poppins] font-bold text-white  shadow-md "
          >
            Back
          </button>
          <button
            onClick={goToStep5}
            className="text-md inline-block rounded-full bg-[#b5838d] px-6 py-2 font-[Poppins] font-bold text-white shadow-md"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Step4;