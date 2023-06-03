import React from 'react'
import jwlogo from '../assets/jwlogo.png'

const Desc = () => {
    return (
        <div className='w-full bg-[#ECF2FF] py-16 px-4'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
                <img className='w-[250px] mx-auto my-4' src={jwlogo} alt='logo' />
                <div className='flex flex-col jusutify-center'>
                    <p className='text-[#3fa6eb] font-bold'>DESKRIPSI PROGRAM KERJA</p>
                    <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-'>
                        JELAJAH WARUNG HIMSIKA
                    </h1>
                    <p className='my-2'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis fugit deleniti minus enim incidunt ipsam in. Eum vitae, dolorum quibusdam maxime unde itaque fugiat.
                    </p>
                    <button className='bg-[#93C6E7] text-black w-[200px] rounded-md font-medium my-4 mx-auto md:mx-0 py-3 ' href='https://drive.google.com/file/d/16fa57h3LRgCHQrRaR6VPxLEa_BWkg8Cu/view?usp=drivesdk'>Cek Grand Design</button>
                </div>
            </div>
        </div>
    )
}

export default Desc