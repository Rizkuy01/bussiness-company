import React from 'react';
// import Typed from 'react-typed';
import model from '../assets/model-nobg.png';

const Main = () => {
    return (
        <div className='text-white'>
            <div className='max-w-[1240px] mt-[-96px] w-full h-screen mx-auto flex flex-col md:flex-row justify-center items-center'>
                <div className='text-center md:text-left flex flex-col justify-center md:w-1/2'>
                    <p className='text-black font-bold p-2'>BUSSINESS COMPANY HIMSIKA 2024</p>
                    <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-4'>Growth With Tech.</h1>
                    <div className='flex justify-center md:justify-start items-center'>
                        <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4 italic'>Visioner, Berkualitas, Terpercaya</p>
                        {/* <Typed className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2' strings={['BTB', 'BTC', 'SaSS']} typeSpeed={120} backSpeed={140} loop /> */}
                    </div>
                    <p className='md:text-xl text-md text-gray-200'>Lapaknya Mahasiswa Sistem Informasi Universitas Singaperbangsa Karawang</p>
                    <button className='bg-black text-[#fff] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Get Started</button>
                </div>
                <div className='md:w-1/2 flex justify-center md:justify-end'>
                    <img className='w-[500px] h-auto' src={model} alt='Sample' />
                </div>
            </div>
        </div>
    );
};

export default Main;
