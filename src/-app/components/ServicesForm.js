import Link from 'next/link'
import React from 'react'

const ServicesForm = () => {
    return (
        <div className="service_form">
            <h2>Any Project In Mind?</h2>
            <form>
                <div className="row">
                    <div className="col-lg-4">
                        <input type="text" id="name" name="name" placeholder="Name"></input>
                    </div>
                    <div className="col-lg-4">
                        <input type="email" id="email" name="email" placeholder="E-mail"></input>
                    </div>
                    <div className="col-lg-4">
                        <input type="tel" id="tel" name="tel" placeholder="Phone Number"></input>
                    </div>
                    <div className="col-lg-12 mt-3">
                        <label>Message:</label>
                        <textarea rows={5} cols={50} placeholder="Project Brief"></textarea>
                    </div>
                </div>
                <div className="d-flex justify-content-end">
                    <Link href="/" className="tp-btn-border-sm w-100 text-center mt-3">Submit</Link>
                </div>
            </form>
        </div>
    )
}

export default ServicesForm
