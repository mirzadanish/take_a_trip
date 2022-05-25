import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
const Step8 = ({ prevStep, nextStep, handleChange, values }) => {
  const router = useRouter();
  const goToStep7 = () => {
    prevStep();
  };
  const goToStep9 = () => {
    nextStep();
  };
  return (
    <div className="flex h-screen">
      <div className=" relative  hidden flex-1 bg-gradient-to-br  from-[#FFCDB2] to-[#E5989B] lg:block  ">
        <div className="relative pt-4 pl-8">
          <Image
            src="/logo.png"
            alt="logo"
            height="50px"
            width="50px"
            className="absolute object-contain"
          />
        </div>
        <div className="w-500 grid place-items-center pt-48 font-[Poppins] text-3xl font-bold text-white ">
          Give your place <br></br> a name and <br></br> describe it
        </div>
      </div>

      <div className="justify center flex w-[50%] flex-1 flex-col space-y-6 bg-white py-12 px-4 font-[Poppins] text-secondary sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div className="space-y-7 pt-10">
          <div>
            <label className="mb-3 mt-5 text-base font-semibold text-secondary">
              Create a title for your space
              <input
                type="text"
                defaultValue={values.propTitle}
                onChange={handleChange('propTitle')}
                className="flex w-96 border-0 border-b-2 border-gray-700 bg-transparent text-xs font-light opacity-70 outline-none focus:border-b-primary focus:ring-0"
              />
            </label>
          </div>

          <div>
            <label className="mb-3 mt-5 text-base font-semibold text-secondary">
              Price per Night in Rupees
              <input
                type="number"
                defaultValue={values.propPrice}
                onChange={handleChange('propPrice')}
                className="flex w-96 border-0 border-b-2 border-gray-700 bg-transparent text-xs font-light opacity-70 outline-none focus:border-b-primary focus:ring-0"
              />
            </label>
          </div>

          <div>
            <label className="mb-3 mt-5 text-base font-semibold text-secondary">
              Describe it a little <br></br>
              <textarea
                rows="4"
                cols="44"
                defaultValue={values.propDescription}
                onChange={handleChange('propDescription')}
                className="mt-3 rounded-sm border-2 border-gray-700 focus:border-primary focus:ring-0"
              ></textarea>
            </label>
          </div>
        </div>
        <div className="mr-5 flex justify-between pt-16 pb-7">
          <button
            onClick={goToStep7}
            className="text-md left-4 inline-block rounded-full bg-[#b5838d] px-6 py-2 font-[Poppins] font-bold text-white  shadow-md "
          >
            Back
          </button>
          <button
            onClick={goToStep9}
            className="text-md inline-block rounded-full bg-[#b5838d] px-6 py-2 font-[Poppins] font-bold text-white shadow-md"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Step8;