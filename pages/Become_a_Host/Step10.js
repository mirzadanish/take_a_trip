import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

const Step10 = ({ prevStep, nextStep, values }) => {
  const router = useRouter();

  const goToStep9 = () => {
    prevStep();
    // router.push("/Become_a_Host/Step9");
  };
  return (
    <div className="flex h-screen">
      <div className=" opacity-55  relative hidden h-full w-0  flex-1 justify-center bg-gradient-to-br from-[#FFCDB2] to-[#B5838D] lg:block ">
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
          Check out your Listing
        </div>
      </div>

      <div className="justify center flex w-[50%]  flex-1 flex-col space-y-6 bg-white py-12 px-4 font-[Poppins] sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div className="h-4/5 space-y-3 overflow-y-scroll rounded-3xl border border-gray-300 shadow-lg shadow-slate-200">
          <div className="m-10 rounded-3xl border border-gray-300 pb-3 text-secondary shadow-sm shadow-slate-200 ">
            <Image
              className=" rounded-t-3xl"
              src="/PrivateRoom.jpg"
              quality="100"
              alt="cover image"
              layout="responsive"
              height="250px"
              width="500px"
            />
            <div className="p-2">
              <h2 className="m-2 pt-2 text-center  text-lg font-bold">
                {values.propTitle}
              </h2>
              <h2 className="text-md m-2 pt-2  text-left font-semibold">
                Property hosted by hostName
              </h2>
              <br></br>
              <h5 className=" font-normal">
                {values.guests} guests, {values.beds} bedroom,{" "}
                {values.bathrooms} bath
              </h5>
              <h5 className="font-normal ">{values.propDescription}</h5>
              <h2 className="pt-2 font-bold ">{values.stdAmenities}</h2>
              <ul className=" font-normal ">
                <li>1</li>
                <li>2</li>
              </ul>
              <h2 className="pt-2 font-bold ">Location</h2>
              <p>{values.address}</p>

              <p>{values.security}</p>
            </div>
          </div>
        </div>

        <div className="mr-5 flex justify-between pt-10">
          <button
            onClick={goToStep9}
            className="text-md left-4 inline-block rounded-full bg-[#b5838d] px-6 py-2 font-[Poppins] font-bold text-white  shadow-md "
          >
            Back
          </button>
          <button className="text-md inline-block rounded-full bg-[#b5838d] px-6 py-2 font-[Poppins] font-bold text-white shadow-md">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Step10;