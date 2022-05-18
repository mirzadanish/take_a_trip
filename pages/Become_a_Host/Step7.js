import { useRouter } from 'next/router'
import Image from 'next/image'
import React from 'react'

function Step7() {
    const router = useRouter()
    const goToStep6 = () => {
        router.push('/Become_a_Host/Step6')
    }
    const goToStep8 = () => {
        router.push('/Become_a_Host/Step8')
    }
    return (
        <div className="flex h-screen">
            <div className=" relative flex-1 w-0 hidden lg:block  bg-gradient-to-br from-primary to-[#FFB4A2] opacity-55 h-full justify-center ">
                <div className=" items-start pl-8 pt-4 ">
                    <Image src="/logo.png" alt="logo" height="50px" width="50px" className="absolute object-contain" />
                </div>
                <div className="grid place-items-center pt-48 space-x-10 text-white font-[Poppins] text-3xl font-bold w-500 ">Next, lets add some<br></br> photos of your place</div>
            </div>

            <div className="justify center flex w-[50%]  flex-1 flex-col space-y-6 bg-white py-12 px-4 font-[Poppins] sm:px-6 lg:flex-none lg:px-20 xl:px-24">
                <div className="border space-y-3 overflow-y-scroll border-gray-500 rounded-md h-96">
                    <h2 className=" text-center pt-3 opacity-80 font-semibold">Add at least 3 photos</h2>
                    <div className=" pl-2 ">
                        <Image src="/uploadimage.png" alt="upload image" height="120px" width="130px" className="opacity-30" />
                        <div className=" text-secondary pt-2 pb-7 space-y-2">
                            <input type="file" className=" outline-none" /> <br></br>
                            <button className="underline">Upload your Cover photo here</button>
                        </div>
                    </div>
                    <div className="pl-2">
                        <Image src="/uploadimage.png" alt="upload image" height="120px" width="130px" className="opacity-30" />
                        <div className=" text-secondary pt-2 pb-7 space-y-2">
                            <input type="file" className=" outline-none" /> <br></br>
                            <button className="underline"> Upload photo </button>
                        </div>
                    </div>
                    <div className="pl-2">
                        <Image src="/uploadimage.png" alt="upload image" height="120px" width="130px" className="opacity-30" />
                        <div className=" text-secondary pt-2 pb-7 space-y-2">
                            <input type="file" className=" outline-none" /> <br></br>
                            <button className="underline"> Upload photo </button>
                        </div>
                    </div>
                    <div className="pl-2">
                        <Image src="/uploadimage.png" alt="upload image" height="120px" width="130px" className="opacity-30" />
                        <div className=" text-secondary pt-2 pb-7 space-y-2">
                            <input type="file" className=" outline-none" /> <br></br>
                            <button className="underline"> Upload photo </button>
                        </div>
                    </div>
                    <div className="pl-2">
                        <Image src="/uploadimage.png" alt="upload image" height="120px" width="130px" className="opacity-30" />
                        <div className=" text-secondary pt-2 pb-7 space-y-2">
                            <input type="file" className=" outline-none" /> <br></br>
                            <button className="underline"> Upload photo </button>
                        </div>
                    </div>
                </div>
                <div className="flex pt-20 justify-between mr-5">
                    <button onClick={goToStep6} className="left-4 text-md bg-[#b5838d] px-6 font-[Poppins] py-2 shadow-md inline-block rounded-full font-bold  text-white ">Back</button>
                    <button onClick={goToStep8} className="text-md bg-[#b5838d] px-6 font-[Poppins] py-2 shadow-md inline-block rounded-full font-bold text-white">Next
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Step7