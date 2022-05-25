import React from 'react'
import Header from '../components/Header';
import { useRouter } from 'next/router';

function Hosting() {
  const router = useRouter()

  const viewProperty = ()=>{
    
  }
  return (
    <div className="font-[Poppins] text-secondary">
      <Header /> 
      <div  className="mt-8  ml-5">
      
      <div className="flex space-x-5">
      <button onClick={()=>{viewProperty}} className="text-md bg-[#b5838d] px-6 font-[Poppins] py-2 shadow-md inline-block rounded-full font-bold text-white ">
        View Your Property
      </button>      
      </div>

      <h1 className='font-bold text-2xl'>
        Your Reservations
      </h1>
      </div>

    </div>
  )
}

export default Hosting