// Layout.jsx

import NavBar from '../NavBar/NavBar'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'

export default function Layout() {
    return <>
        <NavBar/>
        <div className='mx-auto'>
            <Outlet/>
        </div>
        <Footer/>
    </>
}