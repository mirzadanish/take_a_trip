import React from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
function Step8() {

    const router = useRouter()
    const goToStep7 = () => {
        router.push('/Become_a_Host/Step7')
    }
    const goToStep9 = () => {
        router.push('/Become_a_Host/Step9')
    }
    return (
        <div className="flex h-screen">
            <div className=" relative  flex-1 hidden lg:block  bg-gradient-to-br from-[#FFCDB2] to-[#E5989B]  ">
                <div className="relative pt-4 pl-8">
                    <Image
                        src="/logo.png"
                        alt="logo"
                        height="50px"
                        width="50px"
                        className="absolute object-contain"
                    />
                </div>
                <div className="grid place-items-center pt-48 text-white font-[Poppins] text-3xl font-bold w-500 ">Give your place <br></br> a name and <br></br> describe it</div>
            </div>

            <div className="justify center flex w-[50%] text-secondary flex-1 flex-col space-y-6 bg-white py-12 px-4 font-[Poppins] sm:px-6 lg:flex-none lg:px-20 xl:px-24">
                <div className="pt-10 space-y-7">
                <div>
                    <label className="text-secondary mb-3 font-semibold text-base mt-5">
                        Create a title for your space
                        <input
                            type="text"
                            className="flex w-96 border-0 border-b-2 border-gray-700 bg-transparent text-xs font-light opacity-70 outline-none focus:border-b-primary focus:ring-0"
                        />
                    </label>
                </div>

                <div>
                    <label className="text-secondary mb-3 font-semibold text-base mt-5">
                        Price per Night in Rupees
                        <input
                            type="number"
                            className="flex w-96 border-0 border-b-2 border-gray-700 bg-transparent text-xs font-light opacity-70 outline-none focus:border-b-primary focus:ring-0"
                        />
                    </label>
                </div>

                <div>
                    <label className="text-secondary mb-3 font-semibold text-base mt-5">
                        Describe it a little <br></br>
                        <textarea
                            rows="4"
                            cols="44"
                            className="mt-3 border-2 rounded-sm border-gray-700 focus:ring-0 focus:border-primary" >

                        </textarea>
                    </label>
                </div>
                </div>
                <div className="flex pt-16 pb-7 justify-between mr-5">
                    <button onClick={goToStep7} className="left-4 text-md bg-[#b5838d] px-6 font-[Poppins] py-2 shadow-md inline-block rounded-full font-bold  text-white ">Back</button>
                    <button onClick={goToStep9} className="text-md bg-[#b5838d] px-6 font-[Poppins] py-2 shadow-md inline-block rounded-full font-bold text-white">Next
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Step8