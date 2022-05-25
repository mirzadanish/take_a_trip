import { useRouter } from "next/router";
import Image from "next/image";
import React from "react";

const Step9 = ({ prevStep, nextStep, handleChange, values }) => {
  const router = useRouter();
  const goToStep8 = () => {
    prevStep();
  };
  const goToStep10 = () => {
    nextStep();
  };
  return (
    <div className="flex h-screen">
      <div className=" opacity-55 relative hidden h-full w-0  flex-1 justify-center bg-gradient-to-br from-[#FFB4A2] to-[#E5989B] lg:block ">
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
          Property Documents to<br></br> certify legitimacy of <br></br> your
          property
        </div>
      </div>

      <div className="justify center flex w-[50%]  flex-1 flex-col space-y-6 bg-white py-12 px-4 font-[Poppins] sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div className="mt-10 h-fit space-y-3 rounded-lg border border-gray-300 pt-10">
          <div className="grid place-items-center">
            <Image
              quality="100"
              src="/document.png"
              alt="upload document"
              height="200px"
              width="200px"
              className=" justify-center opacity-25"
            />
            <div className=" pt-5 pb-7 text-secondary">
              <input type="file" className=" outline-none" /> <br></br>
              <button className="pt-3 underline">
                Upload your Property Document here
              </button>
            </div>
          </div>
        </div>
        <div className="mr-5 flex justify-between pt-16">
          <button
            onClick={goToStep8}
            className="text-md left-4 inline-block rounded-full bg-[#b5838d] px-6 py-2 font-[Poppins] font-bold text-white  shadow-md "
          >
            Back
          </button>
          <button
            onClick={goToStep10}
            className="text-md inline-block rounded-full bg-[#b5838d] px-6 py-2 font-[Poppins] font-bold text-white shadow-md"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Step9;