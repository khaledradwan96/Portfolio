// Footer.jsx
/* eslint-disable no-unused-vars */

import React , { useState , useEffect} from 'react'
import './footer.css'
import style from './Footer.module.css'

export default function Footer() {
    const [Count, setCount] = useState(0)
    useEffect(()=>{

    }, [])
    return <>
        <footer>
            <div></div>
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