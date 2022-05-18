import React from 'react'
import Image from 'next/image';
function HouseCard({ img, location, price, title, description }) {
    return (
        <div className="flex py-7 px-2 pr-4 border-b cursor-pointer
        hover:opacity-80 hover:shadow-lg transition duration-200
        ease-out first:border-t">
            <div className="relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0">
                <Image
                    src={img}
                    layout="fill"
                    objectFit="cover"
                    alt="house image"
                />
            </div>
            <div className="flex flex-col flex-grow pl-5">
                <p>{location}</p>
                <h2>{title}</h2>
                <p>{description}</p>
                <p>{price}</p>
            </div>
        </div>
    )
}

export default HouseCard