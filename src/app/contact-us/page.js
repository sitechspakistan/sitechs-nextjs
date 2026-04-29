import React from 'react'
// import { headers } from 'next/headers'
import ContactForm from '../components/ContactForm'
import Faqs from '../components/Faqs'

export default async function ContactUs() {
    // const headersList = await headers()
    // const country = headersList.get('x-vercel-ip-country')?.toLowerCase() || 'us'

    return (
        <>
            <ContactForm />
            <Faqs />
        </>
    )
}