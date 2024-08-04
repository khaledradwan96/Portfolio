// Contact.jsx
/* eslint-disable no-unused-vars */

import React , { useState , useEffect} from 'react'
import './Contact.css'

export default function Contact() {
    const [Count, setCount] = useState(0)
    useEffect(()=>{

    }, [])
    return <>
        <div className='contact md:pt-20 h-screen'>
            <div className="container p-4 mx-auto">
                <div className='heading'>
                    <h3 className='text-2xl font-bold mt-5'>Contact Section</h3>
                    <div className='starIcon'>
                        <span></span>
                        <i className='fa-solid fa-star'></i>
                        <span></span>
                    </div>
                </div>
                    <form action="">
                        <div className='flex flex-col w-full md:w-72 mx-auto'>
                            <input type="text" placeholder='userName' />
                            <input type="number" placeholder='userAge' />
                            <input type="email" placeholder='userEmail' />
                            <input type="password" placeholder='userPassword' />
                            <input type="submit"/>
                        </div>
                    </form>
            </div>
        </div>
    </>
}