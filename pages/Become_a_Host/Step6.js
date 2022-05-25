import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

const Step6 = ({ prevStep,
  nextStep,
  handleChange,
  values,
  StdAmenities,
  handleStdAmenities,
  GuestFavrt,
  handleGuestFvrt,
  SafetyItems,
  handleSafetyItems,
}) => {
  const router = useRouter();
  const goToStep5 = () => {
    prevStep();
  };
  const goToStep7 = () => {
    nextStep();
  };
  return (
    <div className="flex h-screen">
      <div className=" opacity-55  relative hidden h-full w-0  flex-1 justify-center bg-gradient-to-br from-[#E5989B] to-secondary lg:block ">
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
          What does your <br></br> place has to offer?
        </div>
      </div>

      <div className="justify center flex w-[50%]  flex-1 flex-col space-y-6 bg-white py-12 px-4 font-[Poppins] sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div className="space-y-3 overflow-y-scroll">
          <div>
            <h2 className="pb-3 font-bold text-secondary">
              Do you have any standout amenities?
            </h2>
            <div className="flex flex-col space-y-1">
              {StdAmenities.map(({ id, name }, index) => {
                return (
                  <label className="inline-block text-secondary" key={id}>
                    {name}
                    <input
                      className="float-left mt-1 mr-2 h-4 w-4 cursor-pointer appearance-none rounded-sm border border-primary bg-white align-top transition duration-200 checked:border-secondary checked:bg-primary focus:outline-none"
                      type="checkbox"
                      name={name}
                      value={name}
                      checked={values.stdAmenities[index]}
                      onChange={() => handleStdAmenities(index)}
                    />
                  </label>
                );
              })}
            </div>
           {/* <div className="flex flex-col space-y-1">
              <label className="inline-block text-secondary">
                Pool
                <input
                  className="float-left mt-1 mr-2 h-4 w-4 cursor-pointer appearance-none rounded-sm border border-primary bg-white bg-transparent align-top transition duration-200 checked:border-secondary checked:bg-primary focus:outline-none"
                  type="checkbox"
                  value=""
                />
              </label>

              <label className="inline-block text-secondary">
                Fire pit
                <input
                  className=" float-left mt-1 mr-2 h-4 w-4 cursor-pointer appearance-none rounded-sm border border-primary bg-white bg-transparent align-top transition duration-200 checked:border-secondary checked:bg-primary focus:outline-none"
                  type="checkbox"
                  value=""
                />
              </label>
              <label className=" inline-block text-secondary">
                BBQ grill
                <input
                  className=" float-left mt-1 mr-2 h-4 w-4 cursor-pointer appearance-none rounded-sm border border-primary bg-white bg-transparent align-top transition duration-200 checked:border-secondary checked:bg-primary focus:outline-none"
                  type="checkbox"
                  value=""
                />
              </label>
              <label className="inline-block text-secondary">
                Exercise Equipment
                <input
                  className=" float-left mt-1 mr-2 h-4 w-4 cursor-pointer appearance-none rounded-sm border border-primary bg-white align-top transition duration-200 checked:border-secondary checked:bg-primary focus:outline-none"
                  type="checkbox"
                  value=""
                />
              </label>
              <label className=" inline-block text-secondary">
                Pool table
                <input
                  className=" float-left mt-1 mr-2 h-4 w-4 cursor-pointer appearance-none rounded-sm border border-primary bg-white align-top transition duration-200 checked:border-secondary checked:bg-primary focus:outline-none"
                  type="checkbox"
                  value=""
                />
              </label>
          </div> */}
          </div>

          <div>
            <h2 className="pb-3 font-bold text-secondary">
              What about these guest favorites?
            </h2>
            <div className="flex flex-col space-y-1">
            {GuestFavrt.map(({ id, name }, index) => {
                return (
                  <label className="inline-block text-secondary" key={id}>
                    {name}
                    <input
                      className="float-left mt-1 mr-2 h-4 w-4 cursor-pointer appearance-none rounded-sm border border-primary bg-white align-top transition duration-200 checked:border-secondary checked:bg-primary focus:outline-none"
                      type="checkbox"
                      name={name}
                      value={name}
                      checked={values.guestFvrt[index]}
                      onChange={() => handleGuestFvrt(index)}
                    />
                  </label>
                );
              })}
            </div>
          </div>

          <div>
            <h2 className="pb-3 font-bold text-secondary">
              Do you have any of these safety items
            </h2>
            <div className="flex flex-col space-y-1">
            {SafetyItems.map(({ id, name }, index) => {
                return (
                  <label className="inline-block text-secondary" key={id}>
                    {name}
                    <input
                      className="float-left mt-1 mr-2 h-4 w-4 cursor-pointer appearance-none rounded-sm border border-primary bg-white align-top transition duration-200 checked:border-secondary checked:bg-primary focus:outline-none"
                      type="checkbox"
                      name={name}
                      value={name}
                      checked={values.safetyItems[index]}
                      onChange={() => handleSafetyItems(index)}
                    />
                  </label>
                );
              })}
            </div>
          </div>
        </div>
        <div className="mr-5 flex justify-between pt-20">
          <button
            onClick={goToStep5}
            className="text-md left-4 inline-block rounded-full bg-[#b5838d] px-6 py-2 font-[Poppins] font-bold text-white  shadow-md "
          >
            Back
          </button>
          <button
            onClick={goToStep7}
            className="text-md inline-block rounded-full bg-[#b5838d] px-6 py-2 font-[Poppins] font-bold text-white shadow-md"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Step6;