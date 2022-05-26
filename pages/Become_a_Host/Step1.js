import { useRouter } from "next/router";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Step1 = ({ nextStep, handleChange, values }) => {
  const router = useRouter();

  const categories = [
    {
      id: 1,
      name: "Home",
      image: "House.jpg",
    },
    {
      id: 2,
      name: "Vacation Home",
      image: "Apartment.jpg",
    },
    {
      id: 3,
      name: "Cottage",
      image: "PrivateRoom.jpg",
    },
    {
      id: 4,
      name: "Apartment",
      image: "HotelRoom.jpg",
    },
  ];

  const goToHome = () => {
    router.push("/");
  };
  const goToStep2 = () => {
    nextStep();
  };

  return (
    <div className="flex h-screen">
      <div className="opacity-55  relative hidden h-full w-0  flex-1 justify-center bg-gradient-to-br from-secondary to-[#AC7274] lg:block ">
        <div className="items-start pl-8 pt-4 ">
          <Image
            src="/logo.png"
            alt="logo"
            height="50px"
            width="50px"
            className="absolute object-contain"
          />
        </div>
        <div className="w-500 grid place-items-center space-x-10 pt-48 font-[Poppins] text-3xl font-bold text-white ">
          What kind of place <br></br> will you host?
        </div>
      </div>

      <div className="justify center flex w-[50%]  flex-1 flex-col space-y-6 bg-white py-12 px-4 font-[Poppins] sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div className="space-y-5 pt-20">
          {categories.map((cat) => {
            return (
              <button
                key={cat.id}
                onClick={handleChange("category")}
                type="button"
                className="hover:bg-gray-80 w-full rounded-full border border-gray-400 bg-white px-5 py-4 text-lg font-medium text-secondary focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-600 dark:hover:bg-gray-300 dark:focus:ring-gray-700"
              >
                <div className="flex justify-between">
                  <p className="space-between text-xl font-bold" defaultValue={values.category}>{cat.name}</p>
                  <Image
                    className="items-end justify-end rounded"
                    src={`/${cat.image}`}
                    height="35"
                    width="35"
                    alt="House image"
                  />
                </div>
              </button>
            );
          })}
        </div>

        <div className="mr-5 flex justify-between pt-6 pb-7">
          <button
            onClick={goToHome}
            className="text-md left-4 inline-block rounded-full bg-[#b5838d] px-6 py-2 font-[Poppins] font-bold text-white  shadow-md "
          >
            Back
          </button>
          <button
            onClick={goToStep2}
            className="text-md inline-block rounded-full bg-[#b5838d] px-6 py-2 font-[Poppins] font-bold text-white shadow-md"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Step1;