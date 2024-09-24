import React from 'react'
import Link from 'next/link'
const Hero = () => {
    return (
        <>
            <div className='h-[534px] bg-[#F5F5F5]'>
                <div className='h-[100%] flex justify-center items-center flex-col gap-8'>
                    <h1 className='font-bold text-7xl text-shadow'>Title</h1>
                    <p className='text-[32px] text-[#757575]'>Subtitle</p>

                    <div>
                        <div className='flex gap-4'>
                            <Link href="#" className='bg-[#f0f0f0] font-normal border-black border rounded-md pt-[12px] pb-[12px] pl-[30px] pr-[30px]'>
                                <button>Button</button>
                            </Link>
                            <Link href="#" className='bg-[#2C2C2C] text-white font-normal rounded-md pt-[12px] pb-[12px] pl-[30px] pr-[30px] '>
                                <button className='text-base'>Button</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero