import React from 'react'

const bookingBenefits = [
    {
        id: 1,
        iconClass: "fa-regular fa-clock",
        lineOne: "24/7",
        lineTwo: "Availability",
    },
    {
        id: 2,
        iconClass: "fa-solid fa-calendar-xmark",
        lineOne: "No More",
        lineTwo: "Missed Bookings",
    },
    {
        id: 3,
        iconClass: "fa-solid fa-chart-line",
        lineOne: "Higher",
        lineTwo: "Conversions",
    },
    {
        id: 4,
        iconClass: "fa-solid fa-heart",
        lineOne: "Better Customer",
        lineTwo: "Experience",
    },
    {
        id: 5,
        iconClass: "fa-solid fa-coins",
        lineOne: "Save Time &",
        lineTwo: "Reduce Costs",
    },
];

const BookingAgent = () => {
    return (
        <section className='book_agent pt-40 pb-40'>
            <div className='container container-1320'>

                <h2 className='text-center'>Why Businesses Love Our Booking Ai Agents</h2>

                <div className='booking_system'>
                    {bookingBenefits.map((item) => (
                        <div className='booking_agent' key={item.id}>
                            <i className={item.iconClass}></i>
                            <div className='agent_content'>
                                <span>{item.lineOne}<br />{item.lineTwo}</span>
                                {/* <span></span> */}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default BookingAgent