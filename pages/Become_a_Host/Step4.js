import React from "react";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from 'next/router'

function Step4() {

  const router = useRouter()
  const goToStep3 = () => {
    router.push('/Become_a_Host/Step3')
  }
  const goToStep5 = () => {
    router.push('/Become_a_Host/Step5')
  }

  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);
  const [counter3, setCounter3] = useState(0);

  //increase counter
  const increase1 = () => {
    setCounter1((count) => count + 1);
  };

  //decrease counter
  const decrease1 = () => {
    setCounter1((count) => count - 1);
  };
  const increase2 = () => {
    setCounter2((count) => count + 1);
  };

  //decrease counter
  const decrease2 = () => {
      setCounter2((count) => count - 1);
    
  };
  const increase3 = () => {
    setCounter3((count) => count + 1);
  };

  //decrease counter
  const decrease3 = () => {
    setCounter3((count) => count - 1);
  };


  return (
    <div className="flex h-screen">
      <div className=" relative  flex-1 w-0 hidden lg:block  bg-gradient-to-br from-[#E5989B] to-[#FFCDB2] opacity-55 h-full justify-center ">
        <div className=" items-start pl-8 pt-4 ">
          <Image
            src="/logo.png"
            alt="logo"
            height="50px"
            width="50px"
            className="absolute object-contain"
          />
        </div>
        <div className="grid place-items-center pt-48 space-x-10 text-white font-[Poppins] text-3xl font-bold w-500 ">
          How many guests <br></br>
          would you like to<br></br>welcome?
        </div>
      </div>

      <div className="justify center flex w-[50%]  flex-1 flex-col space-y-6 bg-white py-12 px-4 font-[Poppins] sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div className="pt-20 space-y-10">
          
            <button
              type="button"
              className="hover:bg-gray-80  w-full  rounded-md   border border-gray-400 bg-white  px-5 py-4 text-lg   text-secondary focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-600 dark:hover:bg-gray-300 dark:focus:ring-gray-700"
            >
              <div className="font-bold text-xl flex justify-between">
                Guests
                <Image
                  className="rounded fill-secondary  opacity-60"
                  src="/minus.png"
                  height="8"
                  width="25"
                  alt="minus image"
                  onClick={decrease1}
                />
                <span className="counter__output">{counter1}</span>
                <Image
                  className="rounded fill-secondary opacity-60"
                  src="/plus.png"
                  height="8"
                  width="25"
                  alt="plus image"
                  onClick={increase1}
                />
              </div>
            </button>
          

          <button
            type="button"
            className="hover:bg-gray-80  w-full  rounded-md   border border-gray-400 bg-white  px-5 py-4 text-lg   text-secondary focus:ring-4 focus:ring-gray-200  dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-600 dark:hover:bg-gray-300 dark:focus:ring-gray-700"
          >
            <div className="font-bold text-xl flex justify-between">
              Beds 
              <Image
                className="mr-5 items-end rounded fill-secondary opacity-60"
                src="/minus.png"
                height="8"
                width="25"
                alt="minus image"
                onClick={decrease2}
              />
              <span className="counter__output">{counter2}</span>
              <Image
                className="items-end justify-end rounded  fill-secondary opacity-60"
                src="/plus.png"
                height="8"
                width="25"
                alt="plus image"
                onClick={increase2}
              />
            </div>
          </button>

          
            <button
              type="button"
              className="hover:bg-gray-80  w-full  rounded-md   border border-gray-400 bg-white  px-5 py-4 text-lg   text-secondary focus:ring-4 focus:ring-gray-200  dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-600 dark:hover:bg-gray-300 dark:focus:ring-gray-700"
            >
              <div className="font-bold text-xl flex justify-between">
                Bathrooms
                <Image
                  className="mr-5 items-end rounded fill-secondary opacity-60"
                  src="/minus.png"
                  height="8"
                  width="25"
                  alt="minus image"
                  onClick={decrease3}
                />
                <span className="counter__output">{counter3}</span>
                <Image
                  className="items-end justify-end rounded  fill-secondary opacity-60"
                  src="/plus.png"
                  height="8"
                  width="25"
                  alt="plus image"
                  onClick={increase3}
                />
              </div>
            </button>
          
        </div>

        <div className="flex pt-16 pb-4 justify-between mr-5">
          <button onClick={goToStep3} className="left-4 text-md bg-[#b5838d] px-6 font-[Poppins] py-2 shadow-md inline-block rounded-full font-bold  text-white ">Back</button>
          <button onClick={goToStep5} className="text-md bg-[#b5838d] px-6 font-[Poppins] py-2 shadow-md inline-block rounded-full font-bold text-white">Next</button>
        </div>
      </div>
    </div>
  );
}

export default Step4;