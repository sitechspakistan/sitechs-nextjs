"use client"
import React, { useState } from 'react'

const SavingsCalculator = () => {
    const [employees, setEmployees] = useState(10)
    const [hoursPerWeek, setHoursPerWeek] = useState(10)
    const [hourlyCost, setHourlyCost] = useState(25)

    const hoursPerMonth = employees * hoursPerWeek * 4.30
    const savingsPerMonth = hoursPerMonth * hourlyCost
    const savingsPerYear = savingsPerMonth * 12

    const formatNumber = (num) => Math.round(num).toLocaleString('en-US')


    return (
        <section className='savings_calculator bg-white pt-50 pb-50' id='calculator'>
            <div className='container container-1320'>
                <div className='box text-center pb-5'>
                    <span>Do The Math</span>
                    <h2>Calculate Your Potential Savings</h2>
                    <p>See how much time and money you can save with AI automation.</p>
                </div>

                <div className='calculator_card '>
                    <div className='row'>
                        {/* Left side - Inputs */}
                        <div className='col-lg-6'>
                            <div className='form_group'>
                                <label>Employees Involved in Manual Work</label>
                                <input
                                    type='number'
                                    className='form-control'
                                    value={employees}
                                    onChange={(e) => setEmployees(Number(e.target.value))}
                                    min='0'
                                />
                            </div>

                            <div className='form_group'>
                                <label>Hours Wasted Per Week (Per Employee)</label>
                                <input
                                    type='number'
                                    className='form-control'
                                    value={hoursPerWeek}
                                    onChange={(e) => setHoursPerWeek(Number(e.target.value))}
                                    min='0'
                                />
                            </div>

                            <div className='form_group'>
                                <label>Average Hourly Cost (USD)</label>
                                <input
                                    type='number'
                                    className='form-control'
                                    value={hourlyCost}
                                    onChange={(e) => setHourlyCost(Number(e.target.value))}
                                    min='0'
                                />
                            </div>
                        </div>

                        {/* Right side - Results */}
                        <div className='col-lg-6 results_col'>
                            <div className='result_box'>
                                <h3>{formatNumber(hoursPerMonth)}</h3>
                                <p>Hours / Month</p>
                            </div>

                            <div className='result_box'>
                                <h3>${formatNumber(savingsPerMonth)}</h3>
                                <p>Potential Savings / Month</p>
                            </div>

                            <div className='result_box'>
                                <h3>${formatNumber(savingsPerYear)}</h3>
                                <p>Potential Savings / Year</p>
                            </div>

                            <small>Results are estimates based on average calculations.</small>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SavingsCalculator