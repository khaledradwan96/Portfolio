// Portfolio.jsx

import './Portfolio.css'
import poert1 from '../../assets/poert1.png'
import poert2 from '../../assets/port2.png'
import poert3 from '../../assets/port3.png'
import { useState } from 'react'

export default function Portfolio() {
    let [fullScreenImg, setFullScreenImg] = useState(null)
    let handleImageClick  = (imgSrc) => {
        setFullScreenImg(imgSrc);
        // console.log(imgSrc)
    }
    let handleClose = () => {
        setFullScreenImg(null)
    }
    return <>
        <div className='portfolio md:pt-20 min-h-screen'>
            <div className="container p-4 mx-auto">
                <div className='heading'>
                    <h3 className='text-2xl font-bold mt-5'>Portfolio</h3>
                    <div className='starIcon'>
                        <span></span>
                        <i className='fa-solid fa-star'></i>
                        <span></span>
                    </div>
                </div>
                    <div className='cards-group mt-5 grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                        <div className='card' onClick={()=> handleImageClick(poert1)}>
                            <img src={poert1} alt="" />
                            <div className='layer'>
                                <i className="text-white fa-solid fa-plus fa-6x"></i>
                            </div>
                        </div>
                        <div className='card' onClick={()=> handleImageClick(poert2)}>
                            <img src={poert2} alt="" />
                            <div className='layer'>
                                <i className="text-white fa-solid fa-plus fa-6x"></i>
                            </div>
                        </div>
                        <div className='card' onClick={()=> handleImageClick(poert3)}>
                            <img src={poert3} alt="" />
                            <div className='layer'>
                                <i className="text-white fa-solid fa-plus fa-6x"></i>
                            </div>
                        </div>
                        <div className='card' onClick={()=> handleImageClick(poert1)}>
                            <img src={poert1} alt="" />
                            <div className='layer'>
                                <i className="text-white fa-solid fa-plus fa-6x"></i>
                            </div>
                        </div>
                        <div className='card' onClick={()=> handleImageClick(poert2)}>
                            <img src={poert2} alt="" />
                            <div className='layer'>
                                <i className="text-white fa-solid fa-plus fa-6x"></i>
                            </div>
                        </div>
                        <div className='card' onClick={()=> handleImageClick(poert3)}>
                            <img src={poert3} alt="" />
                            <div className='layer'>
                                <i className="text-white fa-solid fa-plus fa-6x"></i>
                            </div>
                        </div>
                    </div>
                    {fullScreenImg && (
                    <div className='fullscreen-modal' onClick={handleClose}>
                        <img src={fullScreenImg} alt="Full Screen" className='fullscreen-image' />
                    </div>
                )}
            </div>
        </div>
    </>
}