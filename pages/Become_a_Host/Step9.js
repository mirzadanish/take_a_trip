import { useRouter } from 'next/router'
import Image from 'next/image'
import React from 'react'

function Step9() {
    const router = useRouter()
    const goToStep8 = () => {
        router.push('/Become_a_Host/Step8')
    }
    const goToStep10 = () => {
        router.push('/Become_a_Host/Step10')
    }
    return (
        <div className="flex h-screen">
            <div className=" relative flex-1 w-0 hidden lg:block  bg-gradient-to-br from-[#FFB4A2] to-[#E5989B] opacity-55 h-full justify-center ">
                <div className=" items-start pl-8 pt-4 ">
                    <Image src="/logo.png" alt="logo" height="50px" width="50px" className="absolute object-contain" />
                </div>
                <div className="grid place-items-center pt-48 space-x-10 text-white font-[Poppins] text-3xl font-bold w-500 ">Property Documents to<br></br> certify legitimacy of <br></br> your property</div>
            </div>

            <div className="justify center flex w-[50%]  flex-1 flex-col space-y-6 bg-white py-12 px-4 font-[Poppins] sm:px-6 lg:flex-none lg:px-20 xl:px-24">
                <div className="border mt-10 pt-10 space-y-3 border-gray-300 rounded-lg h-fit">
                    <div className="grid place-items-center">
                        <Image quality="100" src="/document.png" alt="upload document" height="200px" width="200px" className=" opacity-25 justify-center" />
                        <div className=" text-secondary pt-5 pb-7">
                            <input type="file" className=" outline-none" /> <br></br>
                            <button className="underline pt-3">Upload your Property Document here</button>
                        </div>
                    </div>
                </div>
                <div className="flex pt-16 justify-between mr-5">
                    <button onClick={goToStep8} className="left-4 text-md bg-[#b5838d] px-6 font-[Poppins] py-2 shadow-md inline-block rounded-full font-bold  text-white ">Back</button>
                    <button onClick={goToStep10} className="text-md bg-[#b5838d] px-6 font-[Poppins] py-2 shadow-md inline-block rounded-full font-bold text-white">Next
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Step9