// NavBar.jsx

import './NavBar.css'
import { NavLink } from 'react-router-dom'

export default function NavBar() {
    function showNavLinks(){
        let navLinks = document.querySelector('.navBar .navLinks')
        navLinks.classList.toggle('hidden')
    }
    return <>
        <nav className='navBar md:fixed top-0 left-0 right-0 z-50'>
            <div className='container p-4 mx-auto flex flex-row flex-wrap justify-between items-center'>
                <div className='logo'>
                    <h3><NavLink to=''>Khaled Radwan</NavLink></h3>
                </div>
                <span className='md:hidden' onClick={showNavLinks}>
                    <i className='fa-solid fa-bars'></i>
                </span>
                <div className='navLinks hidden md:block w-full md:w-72'>
                    <ul className='md:flex flex-col md:flex-row'>
                        <li><NavLink to='about'>About</NavLink></li>
                        <li><NavLink to='portfolio'>Portfolio</NavLink></li>
                        <li><NavLink to='contact'>Contact</NavLink></li>
                    </ul>
                </div>
            </div>
        </nav>

    </>
}