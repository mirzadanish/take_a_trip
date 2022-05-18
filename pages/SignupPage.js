import React, {useState} from 'react'
import Image from "next/image";
import axios from 'axios';
import Swal from 'sweetalert2';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function SignupPage() {
    
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')
    const [phoneNumber, setPhoneNumber] = useState(0)
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const router = useRouter()

    const handleSubmit = async (event) => {

        event.preventDefault()

        if(password !== confirmPassword){
            await Swal.fire('Password does not match!', '', 'error')
        }
        else{

            // const newPhone= parseInt(phoneNumber)
            const respnose = await axios.post('http://localhost:5000/api/traveler/signup', {
                name, email, address, phoneNumber, password, confirmPassword
    
            },
            {
                'Content-Type': 'application/json'
              }
            )
            await Swal.fire('Successfully Saved!','', 'success')
            console.log(respnose)
            router.push('/Loginpage')
        }
    }
    return (
        <div className="flex h-full">
            <div className="relative flex-1 hidden lg:block ">
                <Image
                    src="/LoginPic.jpg"
                    alt="login"
                    layout="fill"
                    className="absolute object-fill h-full w-full "
                />
                <div className="relative pt-4 pl-8">
                    <Image src="/logo.png" alt="logo" height="50px" width="50px" className="absolute object-contain" />
                </div>
            </div>

            <div className="bg-white font-[Poppins] flex w-[50%]  flex-col flex-1 justify-center p-12 sm:px-14 lg:flex-none lg:px-20 xl:px-24">
                <h5 className="font-bold text-primary text-lg text-center">
                    Sign Up
                </h5>
                <form onSubmit={handleSubmit} className="bg-white font-[Poppins] flex flex-col flex-1 justify-start sm:px-14 lg:flex-none lg:px-20 xl:px-24">
                <label className="text-secondary font-semibold text-base mt-10">
                    Name
                    <input
                        type="text"
                        value={name}
                        required
                        onChange={ (event) => setName(event.target.value) }
                        placeholder="Enter your Name"
                        className="text-xs w-80 font-light outline-none opacity-70 flex bg-transparent border-0 border-b-2 border-gray-700 focus:ring-0 focus:border-b-primary"
                    />
                </label>

                <label className="text-secondary font-semibold text-base mt-5">
                    Email
                    <input
                        type="email"
                        value={email}
                        required

                        onChange={ (event) => setEmail(event.target.value) }
                        placeholder="Enter your email address"
                        className="text-xs w-80 font-light outline-none opacity-70 px-4 pt-2 flex bg-transparent border-0 border-b-2 border-gray-700 focus:ring-0 focus:border-b-primary"
                    />
                </label>

                <label className="text-secondary font-semibold text-base mt-5">
                    Address
                    <input
                        type="text"
                        value={address}
                        required

                        onChange={ (event) => setAddress(event.target.value) }
                        placeholder="Enter your address"
                        className="text-xs w-80 font-light outline-none opacity-70 px-4 pt-2 flex bg-transparent border-0 border-b-2 border-gray-700 focus:ring-0 focus:border-b-primary"
                    />
                </label>

                <label className="text-secondary font-semibold text-base mt-5">
                    Phone no.
                    <input
                        type="number"
                        value={phoneNumber}
                        required

                        onChange={ (event) => setPhoneNumber(event.target.value) }
                        placeholder="Enter your phone number"
                        className="text-xs w-80 font-light outline-none opacity-70 px-4 pt-2 flex bg-transparent border-0 border-b-2 border-gray-700 focus:ring-0 focus:border-b-primary"
                    />
                </label>

                <label className="text-secondary font-semibold text-base mt-5">
                    Password
                    <input
                        type="password"
                        value={password}
                        required

                        onChange={ (event) => setPassword(event.target.value) }
                        placeholder="Enter your Password"
                        className="outline-none w-80 text-xs font-light opacity-70 px-4 pt-2 flex bg-transparent border-0 border-b-2 border-gray-700 focus:ring-0 focus:border-b-primary"
                    />
                </label>

                <label className="text-secondary font-semibold text-base mt-5">
                    Confirm Password
                    <input
                    type="password"
                    value={confirmPassword}
                    required
                    onChange={ (event) => setConfirmPassword(event.target.value) }
                    placeholder="Confirm your Password"
                    className="outline-none w-80 text-xs font-light opacity-70 px-4 pt-2 flex bg-transparent border-0 border-b-2 border-gray-700 focus:ring-0 focus:border-b-primary"
                />
                </label>
                <div className="text-center mt-5">
                    <button type='submit' className="text-primary text-base bg-white px-8 font-[Poppins] py-4 shadow-md inline-block
           rounded-full font-bold my-3 hover:bg-primary hover:text-white active:scale-90 transition duration-150">Sign Up</button>
                </div>
                </form>
                
            </div>
        </div>
    )
}