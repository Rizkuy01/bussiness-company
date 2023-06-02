import React from 'react'
import jaket from '../assets/jaket.png'
import lanyard from '../assets/lanyard.png'
import totebagg from '../assets/totebagg.png'

const Cards = () => {
    return (
        <div className='w-full py-[10rem] px-4 bg-[#ECF2FF]'>
            <div className='max-w-[1240px] mx-auto grid grid-cols-3 gap-8'>
                <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                    <h2 className='text-2xl font-bold text-center py-8'>TOTE BAG</h2>
                    <img className='w-[200px] mx-auto mt-[-3rem] ' src={totebagg} alt="logo" />
                    <p className='text-center text-4xl font-bold'>Rp40.000</p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-8'>Bahan Berkualitas</p>
                        <p className='py-2 border-b mx-8'>Stylish untuk kuliah</p>
                        <p className='py-2 border-b mx-8'>Free Sticker</p>
                    </div>
                    <button className='bg-[#93C6E7] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Buy Now!</button>
                </div>
                <div className='w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
                    <h2 className='text-2xl font-bold text-center py-8'>JAKET HIMPUNAN</h2>
                    <img className='w-[200px] mx-auto mt-[-3rem] bg-transparent' src={jaket} alt="/" />
                    <p className='text-center text-4xl font-bold'>Rp170.000</p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-8'>Type semi-Parka</p>
                        <p className='py-2 border-b mx-8'>Model Unisex</p>
                        <p className='py-2 border-b mx-8'>Identitas Mahasiswa Sistem Informasi</p>
                        <p className='py-2 border-b mx-8'>Memperlancar ngoding!</p>
                    </div>
                    <button className='bg-black text-[#93C6E7] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Buy Now!</button>
                </div>
                <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                    <h2 className='text-2xl font-bold text-center py-8'>LANYARD</h2>
                    <img className='w-[200px] mx-auto mt-[-3rem]' src={lanyard} alt="logo" />
                    <p className='text-center text-4xl fornt-bold'>Rp15.000</p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-8'>Lanyard Serbaguna</p>
                        <p className='py-2 border-b mx-8'>Desain Modern & Sebagai Identitas</p>
                        <p className='py-2 border-b mx-8'>Tidak berat dileher</p>
                    </div>
                    <button className='bg-[#93C6E7] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Buy Now!</button>
                </div>
            </div>
        </div>
    )
}

export default Cards;