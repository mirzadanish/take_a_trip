import React from 'react'
import Image from 'next/image'
export default function Banner() {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
        <Image 
        src="/bannerImage.jpg"
        alt="Banner Image"
        layout="fill"
        object="cover"
        />
        <div className="absolute top-2/3 w-full text-center">
          <p className="text-sm sm:text-lg text-white font-[Poppins] font-extrabold">Looking for a place to stay?</p>
          <button className="text-primary md:text-base lg:text-lg sm:text-xs flex-shrink bg-white md:p-4 sm:p-2 lg:px-8 font-[Poppins] py-4 shadow-md
           rounded-full font-bold my-3 hover:bg-primary hover:text-white active:scale-90 transition duration-150">Find it</button>
        </div>
    </div>
  )
}
