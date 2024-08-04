// Home.jsx

import './Home.css'
import avataars from '../../assets/avataaars.svg'

export default function Home() {
    return <>
        <div className='home'>
            <div className="container mx-auto flex justify-center items-center h-screen">
                <div>
                    <div className='heading'>
                        <img src={avataars} width={250} alt="" />
                        <h3 className='text-2xl font-bold mt-5'>Khaled Radwan</h3>
                        <div className='starIcon'>
                            <span></span>
                            <i className='fa-solid fa-star'></i>
                            <span></span>
                        </div>
                    </div>
                    <p className='text-white'>Graphic Artist - Web Designer - Illustrator</p>
                </div>
            </div>
        </div>
    </>
}