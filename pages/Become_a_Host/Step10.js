import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'

function Step10() {
    const router = useRouter()
    
    const goToStep9 = () => {
        router.push('/Become_a_Host/Step9')
    }
    return (
        <div className="flex h-screen">
            <div className=" relative  flex-1 w-0 hidden lg:block  bg-gradient-to-br from-[#FFCDB2] to-[#B5838D] opacity-55 h-full justify-center ">
                <div className=" items-start pl-8 pt-4 ">
                    <Image src="/logo.png" alt="logo" height="50px" width="50px" className="absolute object-contain" />
                </div>
                <div className="grid place-items-center pt-48 space-x-10 text-white font-[Poppins] text-3xl font-bold w-500 ">Check out your Listing</div>

            </div>

            <div className="justify center flex w-[50%]  flex-1 flex-col space-y-6 bg-white py-12 px-4 font-[Poppins] sm:px-6 lg:flex-none lg:px-20 xl:px-24">       
                
            <div className="border shadow-lg shadow-slate-200 space-y-3 overflow-y-scroll border-gray-300 rounded-3xl h-4/5">
                    <div className="m-10 shadow-sm shadow-slate-200 text-secondary pb-3 border border-gray-300 rounded-3xl ">
                        <Image className=" rounded-t-3xl" src="/PrivateRoom.jpg" quality="100" alt="cover image" layout="responsive" height="250px" width="500px" />
                        <div className='p-2'>
                        <h2 className="m-2 text-center pt-2  font-bold text-lg">Property title</h2>
                        <h2 className="m-2 text-left pt-2  font-semibold text-md">Property hosted by hostName</h2>
                        <br></br>
                        <h5 className=" font-normal" >4 guests, 1 bedroom, 1 bath</h5>
                        <h5 className="font-normal ">Description</h5>
                        <h2 className="font-bold pt-2 ">Amenities</h2>
                        <ul className=" font-normal ">
                            <li>1</li>
                            <li>2</li>
                        </ul>
                        <h2 className="font-bold pt-2 ">Location</h2>
                        <p>abc colony</p>
                        </div>
                    </div>
                </div>
                
                <div className="flex pt-10 justify-between mr-5">
                    <button onClick={goToStep9} className="left-4 text-md bg-[#b5838d] px-6 font-[Poppins] py-2 shadow-md inline-block rounded-full font-bold  text-white ">Back</button>
                    <button  className="text-md bg-[#b5838d] px-6 font-[Poppins] py-2 shadow-md inline-block rounded-full font-bold text-white">Next
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Step10