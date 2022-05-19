import React from 'react'
import Footer from '../components/Footer';
import Header from '../components/Header'
export const ContactUs = () => {
    
    const refreshPage = () => {
        window.location.reload();
    }

    return (
        <div>
            <Header/>
        <div className="text-secondary font-[Poppins] bg-white">
            <h2 className=" font-extrabold text-4xl text-center pt-20">Contact Us</h2>
            <div className="pl-20">
                <p className="ml-20 mt-14 font-bold text-2xl">Contact us by sending an email:</p>
            </div>
            <form action="https://formsubmit.co/areejmalik1302@gmail.com" method="POST" className="bg-white font-[Poppins] flex w-[50%] justify-center flex-col flex-1 ml-20 justify center p-12 sm:px-14 lg:flex-none lg:px-20 xl:px-24">
                <h5 className="font-bold text-primary text-lg">
                    Contact form
                </h5>

                <label className="text-secondary font-semibold text-base pt-5">
                    Name
                </label>
                <input
                    type="text"
                    name="Name"
                    className="text-secondary text-xs font-light outline-none opacity-70 px-4 pt-2 flex bg-transparent border-0 border-b-2 border-gray-700 focus:ring-0 focus:border-b-primary"
                />
                <label className="text-secondary font-semibold text-base mt-5">
                    Email
                </label>
                <input
                    type="email"
                    name="Email"
                    className="text-secondary text-xs font-light outline-none opacity-70 px-4 pt-2 flex bg-transparent border-0 border-b-2 border-gray-700 focus:ring-0 focus:border-b-primary"
                />
                <label className="text-secondary font-semibold text-base mt-5">
                    Subject
                </label>
                <input
                    type="text"
                    name="Subject"
                    className="text-secondary text-xs font-light outline-none opacity-70 px-4 pt-2 flex bg-transparent border-0 border-b-2 border-gray-700 focus:ring-0 focus:border-b-primary"
                />
                <label className="text-secondary font-semibold text-base mt-5">
                    Description:
                </label>
                <textarea type="text"
                rows="5"
                    name="Description" className="mt-5 border-2 border-gray-700 focus:ring-0 focus:border-primary" ></textarea>
                <div className="text-center mt-5">
                    <button onClick={refreshPage} type="submit" className="text-primary text-base bg-white px-8 font-[Poppins] py-4 shadow-md inline-block
           rounded-full font-bold my-3 hover:bg-primary hover:text-white active:scale-90 transition duration-150"> Submit </button>
                </div>
            </form>
        </div>
        <Footer/>
        </div>
    );
};

export default ContactUs