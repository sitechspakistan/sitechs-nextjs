"use client"
import Link from 'next/link'
import React from 'react'
import PhoneInput from "react-phone-input-2"
import 'react-phone-input-2/lib/style.css'


function ContactForm() {

    return (
        <section className='tp-contact-form pt-200'>
            <div className="container">
                <div className="row">
                    <div className='col-lg-4'>
                        <h1>Let's Discuss <br />Your Next Project!</h1>
                        <p>Got a project, an idea, or just want to brainstorm something cool? Ping us - we are all ears and always ready to turn thoughts into tech magic!</p>

                        <div className='pt-20 d-flex flex-column gap-3'>
                            <div className="tp-footer-2-contact-item">
                                <span><i className="fa fa-phone "></i> +92 342 3543100</span>
                            </div>
                            <div className="tp-footer-2-contact-item">
                                <span><i className="fa fa-envelope mt-2"></i> info@sitechs.co</span>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-8'>
                        <form>
                            <div className='row'>
                                <div className='col-lg-6'>
                                    <input type='text' id='name' name='name' placeholder='First Name*' required></input>
                                </div>
                                <div className='col-lg-6'>
                                    <input type='text' id='lname' name='lname' placeholder='Last Name*' required></input>
                                </div>
                                <div className='col-lg-12'>
                                    <input type='text' id='company' name='company' placeholder='Company Name (Optional)'></input>
                                </div>
                                <div className='col-lg-6'>
                                    <input type='email' id='email' name='email' placeholder='Email*' required></input>
                                </div>
                                <div className='col-lg-6'>
                                    {/* <input type='tel' id='phone' name='phone' placeholder='Phone Number (Optional)' ></input> */}
                                    <PhoneInput
                                        country={"pk"}
                                        placeholder='Phone Number (Optional)'
                                    />
                                </div>
                                <div className='col-lg-12'>
                                    <div className='budget'>
                                        <span className='text-dark fs-6 fw-600'>My Budget:</span>
                                        <div>
                                            <div className="budget-options">
                                                <input type="radio" name="budget" value="under-1500" id="under-1500" defaultChecked />
                                                <label htmlFor="under-1500">Under $1500</label>

                                                <input type="radio" name="budget" value="3000-5000" id="3000-5000" />
                                                <label htmlFor="3000-5000">$3000 - $5000</label>

                                                <input type="radio" name="budget" value="5000-7000" id="5000-7000" />
                                                <label htmlFor="5000-7000">$5000 - $7000</label>

                                                <input type="radio" name="budget" value="7000-10000" id="7000-10000" />
                                                <label htmlFor="7000-10000">$7000 - $10000</label>

                                                <input type="radio" name="budget" value="10000" id="10000" />
                                                <label htmlFor="10000">$10000+</label>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div className='col-lg-12'>
                                    <textarea cols={8} rows={4} placeholder='Describe your project goal in few sentences'></textarea>
                                </div>
                            </div>
                            <div className='submitbtn'>
                                <Link href={"#"} className='tf-btn tp-btn-border-sm btn-dark'>Submit</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactForm
