// Footer.jsx
/* eslint-disable no-unused-vars */

import React , { useState , useEffect} from 'react'
import './footer.css'
import style from './Footer.module.css'

export default function Footer() {
    return <>
        <footer>
            <div className='footer-body'>
                <div className='card-group flex flex-col md:flex-row justify-center gap-10'>
                    <div className="card md:w-1/3">
                        <h3>Location</h3>
                        <p>2215 John Daniel Drive</p>
                        <p>Clark, MO 65243</p>
                    </div>
                    <div className="card md:w-1/3">
                        <h3>Around The Web</h3>
                        <div className='icons'>
                            <i className='fa-brands fa-facebook-f'></i>
                            <i className='fa-brands fa-twitter'></i>
                            <i className='fa-brands fa-linkedin-in'></i>
                            <i className='fa-solid fa-globe'></i>
                        </div>
                    </div>
                    <div className="card md:w-1/3">
                        <h3>About freelancer</h3>
                        <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                    </div>
                </div>
            </div>
            <div className='bg-teal-600 text-white text-center p-3'>
                <p className='font-bold text-lg'>Coding with love ♡ by <span className='myName'>Khaled Radwan</span> @ August 2024</p>
                <div className="mySocial">
                    <a href="https://github.com/khaledradwan96" target="_blank">
                        <i className="fa-brands fa-github"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/khaledradwan96/" target="_blank">
                        <i className="fa-brands fa-linkedin"></i>
                    </a>
                    <a href="https://www.facebook.com/khaldradwan96/" target="_blank">
                        <i className="fa-brands fa-facebook-f"></i>
                    </a>
                </div>
            </div>
        </footer>
    </>
}