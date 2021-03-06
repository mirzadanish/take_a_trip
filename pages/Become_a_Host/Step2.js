import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

const Step2 = ({ prevStep, nextStep, handleChange, values }) => {
  const router = useRouter();

  const categories = [
    {
      id: 1,
      name: "An Entire Place",
    },
    {
      id: 2,
      name: "A Private Room",
    },
    {
      id: 3,
      name: "A Shared Place",
    },
  ];

  const goToStep1 = () => {
    prevStep();
    // router.push("/Become_a_Host/Step1");
  };
  const goToStep3 = () => {
    // router.push("/Become_a_Host/Step3");
    nextStep();
  };
  return (
    <div className="flex h-screen">
      <div className=" opacity-55  relative hidden h-full w-0  flex-1 justify-center bg-gradient-to-br from-[#FFB4A2] to-[#B5838D] lg:block ">
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
          Which of these best <br></br>
          describes your place?{" "}
        </div>
      </div>

      <div className="justify center flex w-[50%]  flex-1 flex-col space-y-6 bg-white py-12 px-4 font-[Poppins] sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div className="space-y-5 pt-20">
          {categories.map((cat) => {
            return (
              <label
                key={cat.id}
                className="grid w-full grid-cols-1 text-secondary"
              >
                {cat.name}
                <input
                  value={cat.name}
                  type="radio"
                  name="category"
                  className="flex text-secondary"
                  onChange={handleChange("description")}
                />
              </label>
            );
          })}
        </div>

        <div className="mr-5 flex justify-between pt-6 pb-7">
          <button
            onClick={goToStep1}
            className="text-md left-4 inline-block rounded-full bg-[#b5838d] px-6 py-2 font-[Poppins] font-bold text-white  shadow-md "
          >
            Back
          </button>
          <button
            onClick={goToStep3}
            className="text-md inline-block rounded-full bg-[#b5838d] px-6 py-2 font-[Poppins] font-bold text-white shadow-md"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Step2;
