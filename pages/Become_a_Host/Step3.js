import React from 'react'
import Image from "next/image";
import { useRouter } from 'next/router'

function Step3() {
  const router = useRouter()
  const goToStep2 = () => {
    router.push('/Become_a_Host/Step2')
  }
  const goToStep4 = () => {
    router.push('/Become_a_Host/Step4')
  }
  return (
    <div className="flex h-screen font-[Poppins]">
      <div className=" relative  flex-1 w-0 hidden lg:block  bg-gradient-to-br from-[#6D6875] to-[#FFB4A2] opacity-55 h-full justify-center ">
        <div className=" items-start pl-8 pt-4 ">
          <Image src="/logo.png" alt="logo" height="50px" width="50px" className="absolute object-contain" />
        </div>
        <div className="grid place-items-center pt-48 space-x-10 text-white font-[Poppins] text-3xl font-bold w-500 ">Wheres is your <br></br>
          place located?  </div>
      </div>

      <div className="justify center flex w-[50%]  flex-1 flex-col space-y-6 bg-white py-12 px-4 font-[Poppins] sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div className="flex flex-col space-y-1">
          <button type="button" className="text-secondary  w-full  rounded-full   bg-white border border-gray-400  hover:bg-gray-80 focus:ring-4 focus:ring-gray-200   text-lg px-3 py-2  dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-300 dark:hover:border-gray-600 dark:focus:ring-gray-700">
            <div className="flex justify-center" >
              <p className="font-extralight ">Enter your address</p>
            </div>
          </button>
        </div>

        <div className="flex pt-6 pb-7 justify-between mr-5">
          <button onClick={goToStep2} className="left-4 text-md bg-[#b5838d] px-6 font-[Poppins] py-2 shadow-md inline-block rounded-full font-bold  text-white ">Back</button>
          <button onClick={goToStep4} className="text-md bg-[#b5838d] px-6 font-[Poppins] py-2 shadow-md inline-block rounded-full font-bold text-white">Next
          </button>
        </div>
      </div>
    </div>
  )
}

export default Step3