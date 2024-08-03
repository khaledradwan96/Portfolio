/* eslint-disable no-unused-vars */
// Portfolio.jsx

import './Portfolio.css'
import poert1 from '../../assets/poert1.png'
import poert2 from '../../assets/port2.png'
import poert3 from '../../assets/port3.png'
import { useEffect, useState } from 'react'

export default function Portfolio() {
    let [cardImg, setCardImg] = useState(0)
    return <>
        <div className='portfolio md:pt-20 h-screen'>
            <div className="container p-4 mx-auto flex justify-center items-center">
                <div className='content'>
                    <h3 className='text-2xl font-bold mt-5'>Portfolio</h3>
                    <div className='starIcon'>
                        <span></span>
                        <i className='fa-solid fa-star'></i>
                        <span></span>
                    </div>
                    <div className='cards-group mt-5 grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                        <div className='card'>
                            <img src={poert1} alt="" />
                            <div className='layer'>
                                <i className="text-white fa-solid fa-plus fa-6x"></i>
                            </div>
                        </div>
                        <div className='card'>
                            <img src={poert2} alt="" />
                            <div className='layer'>
                                <i className="text-white fa-solid fa-plus fa-6x"></i>
                            </div>
                        </div>
                        <div className='card'>
                            <img src={poert3} alt="" />
                            <div className='layer'>
                                <i className="text-white fa-solid fa-plus fa-6x"></i>
                            </div>
                        </div>
                        <div className='card'>
                            <img src={poert1} alt="" />
                            <div className='layer'>
                                <i className="text-white fa-solid fa-plus fa-6x"></i>
                            </div>
                        </div>
                        <div className='card'>
                            <img src={poert2} alt="" />
                            <div className='layer'>
                                <i className="text-white fa-solid fa-plus fa-6x"></i>
                            </div>
                        </div>
                        <div className='card'>
                            <img src={poert3} alt="" />
                            <div className='layer'>
                                <i className="text-white fa-solid fa-plus fa-6x"></i>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </>
}