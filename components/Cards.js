import React from 'react'
import Image from 'next/image'
function Cards({city, distance, imgUrl}) {
    return (
        <div className="relative bg-[#E5989B] transform cursor-pointer transition duration-100 ease-out
        hover:shadow-lg active:scale-95 h-96 w-9/12 divide-y-2 divide-transparent rounded-2xl overflow-hidden shadow-lg">
            <Image className="absolute" src={imgUrl} height="420" width="350" alt="Card image" />
        
            <div className="px-6 py-4">
                <div className="font-bold text-white text-xl mb-2">
                    {city}
                </div>
                <p className="text-white text-base pb-2">
                    {distance}
                </p>
            </div>
        </div>
    )
}

export default Cards