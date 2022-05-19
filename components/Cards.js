import React from 'react'
import Image from 'next/image'
function Cards({city, distance, imgUrl}) {
    return (
        <div className=" bg-[#E5989B] transform cursor-pointer transition duration-100 ease-out
        hover:shadow-lg active:scale-95 h-full w-9/12 rounded-2xl overflow-hidden shadow-lg">
            <Image className="absolute" src={imgUrl} height="420" width="350" layout="responsive" alt="Card image" />
        
            <div className="p-3">
                <div className="font-bold text-white text-xl">
                    {city}
                </div>
                <p className="text-white text-base">
                    {distance}
                </p>
            </div>
        </div>
    )
}

export default Cards