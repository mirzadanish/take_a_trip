import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

function CancellationPolicy() {
    return (
        <div>
            <Header />
            <div className="font-[Poppins] space-y-2 text-secondary pt-10 pb-10 pl-20 pr-20">
                <div>
                    <p className="font-bold">Covid Policy</p>
                    <p>If COVID-19 affects your travel plan, you can cancel your reservation and can refund your payment.
                        Depending on your condition, you can:</p>
                        <ul className="list-disc pl-5">
                       <li> A return according to your Host’s cancellation policy.</li>
                        <li>A full cash return after submitting official documentation for review.</li>
                        </ul>
                </div>
                <br/>
                <div>
                    <p className="font-bold">Summary</p>
                    <p>
                        If guest cancel their reservation before check-in date then their payment can be return according to their host cancellation policies but if guest cancel after or at their reservation date then their payment will not be return.
                        If COVID-19 affects your travel plan, you can cancel your reservation and can refund your payment.

                    </p>
                </div>
                <br/>
                <div>
                    <p className="font-bold">What reservations are covered</p>
                    <p>Cancellation policies will vary from host to host. For updated information, you must read cancellation policies before you book.
                        To view host’s cancellation policies, follow these steps:
                       <ul className="list-disc pl-5"> <li>Select policies on a property listing page.</li>
                       <li>Read the policies in cancellation policy section.</li>
                       </ul>

                        If guest cancel their reservation before check-in date then their payment can be return according to their host cancellation policies but if guest cancel after or at their reservation date then their payment will not be return.
                    </p>
                </div>
                <br/>
                <div>
                    <p className="font-bold">How it works</p>
                    <p>If you are a guest, you can cancel  your reservation and refund it but by according to cancellation policies of your host.
                        If you are a host, you’ll find data in your hosting details page.
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default CancellationPolicy