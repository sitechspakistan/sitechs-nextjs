import React from 'react'
import { Stethoscope, Ellipsis, PawPrint, Utensils, Scissors, Dumbbell, UserRound } from 'lucide-react';

const defaultIndustries = [
    { id: 1, icon: Stethoscope, color: "#3B82F6", text: "Clinics & Healthcare" },
    { id: 2, iconClass: "fas fa-tooth", color: "#A855F7", text: "Dental Clinics" },
    { id: 3, icon: PawPrint, color: "#10B981", text: "Veterinary Clinics" },
    { id: 4, icon: Utensils, color: "#F97316", text: "Restaurants & Cafes" },
    { id: 5, icon: Scissors, color: "#EC4899", text: "Salons & Spas" },
    { id: 6, icon: Dumbbell, color: "#3B82F6", text: "Gyms & Fitness" },
    { id: 7, icon: UserRound, color: "#F97316", text: "Consultants & Coaches" },
    { id: 8, icon: Ellipsis, color: "#22C55E", text: "And Many More..." },
];

const PerfectIndustry = () => {
    return (
        <section className="perfect-industry pt-40 pb-40">
            <div className='container-fluid text-center'>
                <span>BUILT FOR EVERY APPOINTMENT-BASED BUSINESS</span>
                <h2>Perfect for Industries That Run on Appointments</h2>
            </div>
            <div className={`container container-1320 industries-container`}>
                {defaultIndustries.map((item) => {
                    const IconComponent = item.icon;
                    return (
                        <div className="industry-item" key={item.id}>
                            <div className="icon-box" style={{ backgroundColor: `${item.color}20` }}>
                                {IconComponent ? (
                                    <IconComponent size={50} color={item.color} />
                                ) : (
                                    <i className={item.iconClass} style={{ color: item.color, fontSize: '50px' }}></i>
                                )}
                            </div>
                            <p className="industry-text">{item.text}</p>
                        </div>
                    );
                })}
            </div>
        </section>
    )
}

export default PerfectIndustry