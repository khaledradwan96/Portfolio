// Layout.jsx
/* eslint-disable no-unused-vars */

import React , { useState , useEffect} from 'react'
import style from './Layout.module.css'
import NavBar from '../NavBar/NavBar'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'

export default function Layout() {
    const [Count, setCount] = useState(0)
    useEffect(()=>{

    }, [])
    return <>
        <NavBar/>
        <div className='mx-auto'>
            <Outlet/>
        </div>
        <Footer/>
    </>
}