import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'

export default function Step5() {
    const router = useRouter()
    const goToStep4 = () => {
        router.push('/Become_a_Host/Step4')
    }
    const goToStep6 = () => {
        router.push('/Become_a_Host/Step6')
    }
    return (
        <div className="flex h-screen">
            <div className=" relative  flex-1 w-0 hidden lg:block  bg-gradient-to-br from-[#FFB4A2] to-[#B5838D] opacity-55 h-full justify-center ">
                <div className=" items-start pl-8 pt-4 ">
                    <Image src="/logo.png" alt="logo" height="50px" width="50px" className="absolute object-contain" />
                </div>
                <div className="grid place-items-center pt-48 space-x-10 text-white font-[Poppins] text-3xl font-bold w-500 ">What does your <br></br> place has to offer?</div>
            </div>

            <div className="justify center flex w-[50%]  flex-1 flex-col space-y-6 bg-white py-12 px-4 font-[Poppins] sm:px-6 lg:flex-none lg:px-20 xl:px-24">
                    <div className=" pb-28 pt-32">
                        <h2 className="text-secondary font-bold pb-3">Do you have any of these at your place?</h2>
                        <div className="flex flex-col space-y-2">
                            <label className="inline-block text-secondary">
                                Security Cameras
                                <input className="appearance-none h-4 w-4 border border-primary rounded-sm bg-white checked:bg-primary checked:border-secondary focus:outline-none transition duration-200 mt-1 align-top float-left mr-2 cursor-pointer" type="checkbox" value="" />
                            </label>
                            <label className="inline-block text-secondary" >
                                Weapons
                                <input className="appearance-none h-4 w-4 border border-primary rounded-sm bg-white checked:bg-primary checked:border-secondary focus:outline-none transition duration-200 mt-1 align-top float-left mr-2 cursor-pointer" type="checkbox" value="" />
                            </label>
                            <label className="inline-block text-secondary" >
                                Dangerous Animals
                                <input className=" appearance-none h-4 w-4 border border-primary rounded-sm bg-white checked:bg-primary checked:border-secondary focus:outline-none transition duration-200 mt-1 align-top float-left mr-2 cursor-pointer" type="checkbox" value="" />
                            </label>
                        </div>
                    </div>
                   
                <div className="flex pt-14 pb-7 justify-between mr-5">
                    <button onClick={goToStep4} className="left-4 text-md bg-[#b5838d] px-6 font-[Poppins] py-2 shadow-md inline-block rounded-full font-bold  text-white ">Back</button>
                    <button onClick={goToStep6} className="text-md bg-[#b5838d] px-6 font-[Poppins] py-2 shadow-md inline-block rounded-full font-bold text-white">Next
                    </button>
                </div>
            </div>
        </div>
    )
}
