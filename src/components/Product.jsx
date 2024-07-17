import React from 'react';
import jaket from '../assets/6.png';
import gelang from '../assets/7.png';
import kasys from '../assets/8.png';
import { FaArrowRight } from 'react-icons/fa';

const Product = () => {
    return (
        <div className='w-full py-[10rem] px-4 bg-[#D6BD98]'>
            <div className='max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8'>
                <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-[#485B45]'>
                    <h2 className='text-2xl font-bold text-center py-8 text-[#D6BD98]'>KAOS INFORSYS</h2>
                    <img className='w-[200px] mx-auto mt-[-3rem]' src={kasys} alt="kaos inforsys" />
                    <p className='text-center text-4xl font-bold'>Rp99.000</p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-8'>Bahan Berkualitas</p>
                        <p className='py-2 border-b mx-8'>Stylish untuk kuliah</p>
                        <p className='py-2 border-b mx-8'>Free Sticker</p>
                    </div>
                    <button className='bg-[#D6BD98] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Buy Now!</button>
                </div>
                <div className='w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
                    <h2 className='text-2xl font-bold text-center py-8'>JAKET HIMPUNAN</h2>
                    <img className='w-[200px] mx-auto mt-[-3rem] bg-transparent' src={jaket} alt="jaket himpunan" />
                    <p className='text-center text-4xl font-bold'>Rp175.000</p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-8'>Type semi-Parka</p>
                        <p className='py-2 border-b mx-8'>Model Unisex</p>
                        <p className='py-2 border-b mx-8'>Identitas Mahasiswa Sistem Informasi</p>
                        <p className='py-2 border-b mx-8'>Memperlancar ngoding!</p>
                    </div>
                    <button className='bg-[#485B45] text-gray-100 w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Buy Now!</button>
                </div>
                <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-[#485B45]'>
                    <h2 className='text-2xl font-bold text-center py-8 text-[#D6BD98]'>GELANG</h2>
                    <img className='w-[200px] mx-auto mt-[-3rem]' src={gelang} alt="gelang" />
                    <p className='text-center text-4xl font-bold'>Rp15.000</p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-8'>Tidak Ketat di Pergelangan Tangan</p>
                        <p className='py-2 border-b mx-8'>Desain Modern & Sebagai Identitas</p>
                        <p className='py-2 border-b mx-8'>Stylish</p>
                    </div>
                    <button className='bg-[#D6BD98] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Buy Now!</button>
                </div>
            </div>
            <div className='flex justify-center mt-8'>
                <button className='bg-[#485B45] text-white w-[200px] rounded-md font-medium py-3 flex items-center justify-center'>
                    Produk Lainnya <FaArrowRight className='ml-2' />
                </button>
            </div>
        </div>
    );
};

export default Product;
