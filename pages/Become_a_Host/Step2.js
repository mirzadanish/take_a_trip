import React from 'react'
import Image from "next/image";
import { useRouter } from 'next/router'

function Step2() {
    const router = useRouter()
    const goToStep1 = () => {
        router.push('/Become_a_Host/Step1')
    }
    const goToStep3 = () => {
        router.push('/Become_a_Host/Step3')
    }
    return (
        <div className="flex h-screen">
            <div className=" relative  flex-1 w-0 hidden lg:block  bg-gradient-to-br from-[#FFB4A2] to-[#B5838D] opacity-55 h-full justify-center ">
                <div className="items-start pl-8 pt-4 ">
                    <Image src="/logo.png" alt="logo" height="50px" width="50px" className="absolute object-contain" />
                </div>
                <div className="grid place-items-center pt-48 space-x-10 text-white font-[Poppins] text-3xl font-bold w-500 ">Which of these best <br></br>
                    describes your place?  </div>
            </div>

            <div className="justify center flex w-[50%]  flex-1 flex-col space-y-6 bg-white py-12 px-4 font-[Poppins] sm:px-6 lg:flex-none lg:px-20 xl:px-24">

                <div className=" pb-12 pt-28 space-y-5">

                    <button type="button" className="text-secondary font-bold w-full  rounded-xl  bg-white border border-gray-400  hover:bg-gray-80 focus:ring-4 focus:ring-gray-200   text-xl px-4 py-5  dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-300 dark:hover:border-gray-600 dark:focus:ring-gray-700">
                        An entire place
                    </button>

                    <button type="button" className="text-secondary font-bold w-full  rounded-xl   bg-white border border-gray-400  hover:bg-gray-80 focus:ring-4 focus:ring-gray-200   text-xl px-4 py-5  dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-300 dark:hover:border-gray-600 dark:focus:ring-gray-700">
                        A Private Room
                    </button>

                    <button type="button" className="text-secondary font-bold text-xl w-full  rounded-xl   bg-white border border-gray-400  hover:bg-gray-80 focus:ring-4 focus:ring-gray-200   px-4 py-5  dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-300 dark:hover:border-gray-600 dark:focus:ring-gray-700">
                        A Shared room
                    </button>

                </div>

                <div className="flex pt-6 pb-7 justify-between mr-5">
                    <button onClick={goToStep1} className="left-4 text-md bg-[#b5838d] px-6 font-[Poppins] py-2 shadow-md inline-block rounded-full font-bold  text-white ">Back</button>
                    <button onClick={goToStep3} className="text-md bg-[#b5838d] px-6 font-[Poppins] py-2 shadow-md inline-block rounded-full font-bold text-white">Next
                    </button>
                </div>

            </div>
        </div>
    )
}

export default Step2