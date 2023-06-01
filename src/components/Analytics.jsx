import React from 'react'
import logo from '../assets/logo.png'

const Analytics = () => {
    return (
        <div className='w-full bg-white py-16 px-4'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
                <img className='w-[150px] mx-auto my-4' src={logo} alt='logo' />
                <div className='flex flex-col jusutify-center'>
                    <p className='text-[#00df9a] font-bold'>DATA ANALYTICS DASHBOARD.</p>
                    <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-'>
                        Manage Data Analytics Centrally
                    </h1>
                    <p className=''>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam itaque voluptatum delectus doloribus recusandae rerum?
                    </p>
                    <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 '>Get Started</button>
                </div>
            </div>
        </div>
    )
}

export default Analytics