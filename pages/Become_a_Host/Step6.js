import { useRouter } from 'next/router'
import Image from 'next/image'
import React from 'react'

function Step6() {
    const router = useRouter()
    const goToStep5 = () => {
        router.push('/Become_a_Host/Step5')
    }
    const goToStep7 = () => {
        router.push('/Become_a_Host/Step7')
    }
    return (
        <div className="flex h-screen">
            <div className=" relative  flex-1 w-0 hidden lg:block  bg-gradient-to-br from-[#E5989B] to-secondary opacity-55 h-full justify-center ">
                <div className=" items-start pl-8 pt-4 ">
                    <Image src="/logo.png" alt="logo" height="50px" width="50px" className="absolute object-contain" />
                </div>
                <div className="grid place-items-center pt-48 space-x-10 text-white font-[Poppins] text-3xl font-bold w-500 ">What does your <br></br> place has to offer?</div>
            </div>

            <div className="justify center flex w-[50%]  flex-1 flex-col space-y-6 bg-white py-12 px-4 font-[Poppins] sm:px-6 lg:flex-none lg:px-20 xl:px-24">
                <div className="space-y-3 overflow-y-scroll">
                    <div>
                        <h2 className="text-secondary font-bold pb-3">Do you have any standout amenities?</h2>
                        <div className="flex flex-col space-y-1">
                            <label className="inline-block text-secondary">
                                Pool
                                <input className="appearance-none h-4 w-4 border border-primary rounded-sm bg-white checked:bg-primary checked:border-secondary bg-transparent focus:outline-none transition duration-200 mt-1 align-top float-left mr-2 cursor-pointer" type="checkbox" value="" />
                            </label>
                            
                            <label className="inline-block text-secondary" >
                                Fire pit
                                <input className=" appearance-none h-4 w-4 border border-primary rounded-sm bg-white checked:bg-primary checked:border-secondary bg-transparent focus:outline-none transition duration-200 mt-1 align-top float-left mr-2 cursor-pointer" type="checkbox" value="" />
                            </label>
                            <label className=" inline-block text-secondary" >
                                BBQ grill
                                <input className=" appearance-none h-4 w-4 border border-primary rounded-sm bg-white checked:bg-primary checked:border-secondary bg-transparent focus:outline-none transition duration-200 mt-1 align-top float-left mr-2 cursor-pointer" type="checkbox" value="" />
                            </label>
                            <label className="inline-block text-secondary" >
                                Exercise Equipment
                                <input className=" appearance-none h-4 w-4 border border-primary rounded-sm bg-white checked:bg-primary checked:border-secondary focus:outline-none transition duration-200 mt-1 align-top float-left mr-2 cursor-pointer" type="checkbox" value="" />
                            </label>
                            <label className=" inline-block text-secondary" >
                                Pool table
                                <input className=" appearance-none h-4 w-4 border border-primary rounded-sm bg-white checked:bg-primary checked:border-secondary focus:outline-none transition duration-200 mt-1 align-top float-left mr-2 cursor-pointer" type="checkbox" value="" />
                            </label>
                        </div>
                    </div>


                    <div>
                        <h2 className="text-secondary font-bold pb-3">What about these guest favorites?</h2>
                        <div className="flex flex-col space-y-1">
                            <label className="inline-block text-secondary">
                                Television
                                <input className="appearance-none h-4 w-4 border border-primary rounded-sm bg-white checked:bg-primary checked:border-secondary focus:outline-none transition duration-200 mt-1 align-top float-left mr-2 cursor-pointer" type="checkbox" value="" />
                            </label>
                            <label className="inline-block text-secondary" >
                                Wifi
                                <input className="appearance-none h-4 w-4 border border-primary rounded-sm bg-white checked:bg-primary checked:border-secondary focus:outline-none transition duration-200 mt-1 align-top float-left mr-2 cursor-pointer" type="checkbox" value="" />
                            </label>
                            <label className="inline-block text-secondary" >
                                Kitchen
                                <input className=" appearance-none h-4 w-4 border border-primary rounded-sm bg-white checked:bg-primary checked:border-secondary focus:outline-none transition duration-200 mt-1 align-top float-left mr-2 cursor-pointer" type="checkbox" value="" />
                            </label>
                            <label className=" inline-block text-secondary" >
                                Washing Machine
                                <input className=" appearance-none h-4 w-4 border border-primary rounded-sm bg-white checked:bg-primary checked:border-secondary focus:outline-none transition duration-200 mt-1 align-top float-left mr-2 cursor-pointer" type="checkbox" value="" />
                            </label>
                            <label className="inline-block text-secondary" >
                                Air conditioner
                                <input className=" appearance-none h-4 w-4 border border-primary rounded-sm bg-white checked:bg-primary checked:border-secondary focus:outline-none transition duration-200 mt-1 align-top float-left mr-2 cursor-pointer" type="checkbox" value="" />
                            </label>
                            <label className=" inline-block text-secondary" >
                                Workspace
                                <input className=" appearance-none h-4 w-4 border border-primary rounded-sm bg-white checked:bg-primary checked:border-secondary focus:outline-none transition duration-200 mt-1 align-top float-left mr-2 cursor-pointer" type="checkbox" value="" />
                            </label>
                        </div>
                    </div>


                    <div>
                        <h2 className="text-secondary font-bold pb-3">Do you have any of these safety items</h2>
                        <div className="flex flex-col space-y-1">
                            <label className="inline-block text-secondary">
                                Fire alarm
                                <input className="appearance-none h-4 w-4 border border-primary rounded-sm bg-white checked:bg-primary checked:border-secondary focus:outline-none transition duration-200 mt-1 align-top float-left mr-2 cursor-pointer" type="checkbox" value="" />
                            </label>
                            <label className="inline-block text-secondary" >
                                Fire extinguisher
                                <input className="appearance-none h-4 w-4 border border-primary rounded-sm bg-white checked:bg-primary checked:border-secondary focus:outline-none transition duration-200 mt-1 align-top float-left mr-2 cursor-pointer" type="checkbox" value="" />
                            </label>
                            <label className="inline-block text-secondary" >
                                First aid kit
                                <input className=" appearance-none h-4 w-4 border border-primary rounded-sm bg-white checked:bg-primary checked:border-secondary focus:outline-none transition duration-200 mt-1 align-top float-left mr-2 cursor-pointer" type="checkbox" value="" />
                            </label>
                            <label className=" inline-block text-secondary" >
                                Smoke Alarm
                                <input className=" appearance-none h-4 w-4 border border-primary rounded-sm bg-white checked:bg-primary checked:border-secondary focus:outline-none transition duration-200 mt-1 align-top float-left mr-2 cursor-pointer" type="checkbox" value="" />
                            </label>
                        </div>
                    </div>
                </div>
                <div className="flex pt-20 justify-between mr-5">
                    <button onClick={goToStep5} className="left-4 text-md bg-[#b5838d] px-6 font-[Poppins] py-2 shadow-md inline-block rounded-full font-bold  text-white ">Back</button>
                    <button onClick={goToStep7} className="text-md bg-[#b5838d] px-6 font-[Poppins] py-2 shadow-md inline-block rounded-full font-bold text-white">Next
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Step6