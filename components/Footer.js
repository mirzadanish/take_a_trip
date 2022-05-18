import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
function Footer() {
    return (
        <div className="bg-[#ebeaea] font-[Poppins]">
            <div className=" pt-3 sm:grid-flow-row lg:grid grid-cols-3 text-center text-secondary">
                <div className="font-bold space-y-6 my-20">
                    <h5>
                        <Link href="">Help Center</Link>
                    </h5>
                    <h5>
                        <Link href="/Contactpage">Contact Us</Link>
                    </h5>
                </div>
                <div className="font-bold space-y-6 my-20">
                    <h5>
                        <Link href="">Try hosting</Link>
                    </h5>
                    <h5>
                        <Link href="/AboutUs">About</Link>
                    </h5>
                </div>
                <div className="font-bold space-y-6 my-20">
                    <h5>
                        <Link href="/CancellationPolicy">Cancellation options</Link>
                    </h5>
                    <h5>
                        <Link href="">Our COVID-19 Response</Link>
                    </h5>
                </div>
            </div>
            <div className="flex items-end justify-center pb-5 gap-4">
                <Image src="/facebook.png" alt="facebookIcon" height="30px" width="30px" />
                <Image src="/instagram.png" alt="insta icon" height="30px" width="30px" />
                <Image src="/twitter.png" alt="twitter icon" height="30px" width="30px" />
            </div>
            <div className="flex items-end justify-center pb-10 text-secondary">
                <p>© 2022 Take a Trip</p>
            </div>
        </div>
    );
}

export default Footer