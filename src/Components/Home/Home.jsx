// Home.jsx
/* eslint-disable no-unused-vars */

import React , { useState , useEffect} from 'react'
import style from './Home.module.css'
import './Home.css'
import avataars from '../../assets/avataaars.svg'

export default function Home() {
    const [Count, setCount] = useState(0)
    useEffect(()=>{

    }, [])
    return <>
        <div className='home'>
            <div className="container mx-auto flex justify-center items-center h-screen">
                <div className='content'>
                    <img src={avataars} width={250} alt="" />
                    <h3 className='text-2xl font-bold mt-5'>Khaled Radwan</h3>
                    <div className='starIcon'>
                        <span></span>
                        <i className='fa-solid fa-star'></i>
                        <span></span>
                    </div>
                    <p>Graphic Artist - Web Designer - Illustrator</p>
                </div>
            </div>
        </div>
    </>
}