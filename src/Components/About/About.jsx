// About.jsx


import './about.css'

export default function About() {
    return <>
        <div className='about'>
            <div className="container mx-auto p-4 flex justify-center items-center h-screen">
                <div>
                    <div className='heading'>
                    <h3 className='text-2xl font-bold mt-5'>About Component</h3>
                    <div className='starIcon'>
                        <span></span>
                        <i className='fa-solid fa-star'></i>
                        <span></span>
                    </div>
                    </div>
                    <div className='flex flex-col md:flex-row gap-5 text-white'>
                        <p>
                            Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
                        </p>
                        <p>
                            Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </>
}