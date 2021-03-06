import { useRouter } from "next/router";
import Image from "next/image";
import axios from "axios";
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

  // const submitData = async (event) =>{
  //   event.preventDefault();
  //   const respnose = await axios.post('http://localhost:5000/api/host/addproperty',
  //   {
  //     type
  //   },
  //   {
  //     'Content-Type': 'application/json'
  //   }
  // )
  // console.log(respnose)
  // }

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
              <label
                htmlFor="type"
                key={cat.id}
                className="grid w-full grid-cols-1 text-secondary"
              >
                {cat.name}
                <input
                  value={cat.name}
                  type="radio"
                  name="type"
                  className="flex text-secondary"
                  onChange={handleChange("category")}
                />
              </label>
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

export async function getServerSideProps() {
  const searchCategories = await fetch(
    "http://localhost:5000/api/host/category"
  ).then((res) => res.json());
  return {
    props: {
      searchCategories,
    },
  };
}
