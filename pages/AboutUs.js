import React from 'react'
import About from '../components/About'
import Header from '../components/Header'
import Footer from '../components/Footer'
function AboutUs() {
  return (
    <div>
        <Header/>
        <About/>
        <div className="grid grid-cols-2 font-[Poppins] p-16 text-secondary">
            <div className="font-extrabold text-[40px] pl-3 pr-20 space-y-20">
                <p>We have a place <br/> for everyone</p>
                <p>We want to make your  travel experience better </p>
            </div>
            <div className="font-medium pr-5 pb-5 pt-5 space-y-20">
                <p>We started connecting hosts to families and group of friends or a single person. We takes diversity and inclusion seriously because we believe that family is everything.No matter how it takes shape.</p>
                <p>We trying to provide best services to  customers for their travel experiences better. We will try to provide best services in your budget.</p>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default AboutUs