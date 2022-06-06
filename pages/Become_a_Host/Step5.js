import React, { useState } from "react";
import Image from "next/image";

const Step5 = ({
  prevStep,
  nextStep,
  handleChange,
  values,
  Security,
  handleSecurity,
}) => {
  const goToStep4 = () => {
    prevStep();
  };
  const goToStep6 = () => {
    nextStep();
  };

  return (
    <div className="flex h-screen">
      <div className=" opacity-55  relative hidden h-full w-0  flex-1 justify-center bg-gradient-to-br from-[#FFB4A2] to-[#B5838D] lg:block ">
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
        <div className=" pb-28 pt-32">
          <h2 className="space-y-3 pb-3 font-bold text-secondary">
            Do you have any of these at your place?
          </h2>
          <div className="flex flex-col">
            {Security.map(({ id, name }, index) => {
              return (
                <label className="inline-block text-secondary" key={id}>
                  {name}
                  <input
                    className="float-left mt-1 mr-2 h-4 w-4 cursor-pointer appearance-none rounded-sm border border-primary bg-white align-top transition duration-200 checked:border-secondary checked:bg-primary focus:outline-none"
                    type="checkbox"
                    name={name}
                    value={name}
                    checked={values.security[index]}
                    onChange={() => handleSecurity(index, name)}
                  />
                </label>
              );
            })}
          </div>
        </div>

        <div className="mr-5 flex justify-between pt-14 pb-7">
          <button
            onClick={goToStep4}
            className="text-md left-4 inline-block rounded-full bg-[#b5838d] px-6 py-2 font-[Poppins] font-bold text-white  shadow-md "
          >
            Back
          </button>
          <button
            onClick={goToStep6}
            className="text-md inline-block rounded-full bg-[#b5838d] px-6 py-2 font-[Poppins] font-bold text-white shadow-md"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};
export default Step5;
