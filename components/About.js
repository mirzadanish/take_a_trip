import React from 'react'
import Image from 'next/image'
function About() {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
        <Image src="/about.jpg" layout="fill" object="cover" alt="about image" />
        <div className="absolute top-1/2 w-full text-center">
        <p className="text-sm sm:text-lg text-white font-[Poppins] font-extrabold">About Us</p>
        </div>
    </div>
  )
}

export default About