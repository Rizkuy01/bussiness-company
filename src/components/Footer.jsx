import React from 'react'
import {FaWhatsapp, FaFacebookSquare, FaGithubSquare, FaInstagram, FaTwitterSquare,} from 'react-icons/fa'

const  Footer = () => {
    return (
        <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-black'>
        <div>
            <h1 className='w-full text-3xl font-bold text-[#3fa6eb]'>JELAJAH WARUNG</h1>
            <p className='py-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id odit ullam iste repellat consequatur libero reiciendis, blanditiis accusantium.</p>
            <div className='flex justify-between md:w-[75%] my-6'>
                <FaWhatsapp size={30} />
                <FaInstagram size={30} />
                <FaGithubSquare size={30} /> 
                <FaFacebookSquare size={30} />
                <FaTwitterSquare size={30} />
            </div>
        </div>
        <div className='lg:col-span-2 flex justify-between mt-6'>
        <div>
            <h6 className='font-medium text-black'>Lorem Ipsum</h6>
            <ul>
                <li className='py-2 text-sm'>Lorem</li>
                <li className='py-2 text-sm'>Lorem</li>
                <li className='py-2 text-sm'>Lorem</li>
                <li className='py-2 text-sm'>Lorem</li>
            </ul>
        </div>
        <div>
            <h6 className='font-medium text-black'>Lorem Ipsum</h6>
            <ul>
                <li className='py-2 text-sm'>Lorem</li>
                <li className='py-2 text-sm'>Lorem</li>
                <li className='py-2 text-sm'>Lorem</li>
                <li className='py-2 text-sm'>Lorem</li>
            </ul>
        </div>
        <div>
            <h6 className='font-medium text-black'>Lorem Ipsum</h6>
            <ul>
                <li className='py-2 text-sm'>Lorem</li>
                <li className='py-2 text-sm'>Lorem</li>
                <li className='py-2 text-sm'>Lorem</li>
                <li className='py-2 text-sm'>Lorem</li>
            </ul>
        </div>
        <div>
            <h6 className='font-medium text-black'>Lorem Ipsum</h6>
            <ul>
                <li className='py-2 text-sm'>Lorem</li>
                <li className='py-2 text-sm'>Lorem</li>
                <li className='py-2 text-sm'>Lorem</li>
            </ul>
        </div>
        </div>
    </div>
    )
}

export default Footer;