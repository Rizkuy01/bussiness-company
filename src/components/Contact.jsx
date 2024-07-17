import React from 'react';

const Contact = () => {
    return (
        <div className='w-full py-16 text-white px-4'>
            <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
                <div className='lg:col-span-2 my-4'>
                    <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>
                        Mempuyai Pertanyan Lebih Lanjut?
                    </h1>
                    <p>Chat Admin kami sekarang!</p>
                </div>
                <div className='my-4'>
                    <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                        <input
                            className='p-3 flex w-full rounded-md text-black'
                            type='text'
                            placeholder='Enter Your Phone Numbers'
                        />
                        <button className='bg-black text-gray-50 rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3'>
                            Notify Me
                        </button>
                    </div>
                    <p>
                        Admin kami akan membalas pesan anda maksimal setelah{' '}
                        <span className='text-[#ECF2FF]' >1 x 24 Jam</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Contact;