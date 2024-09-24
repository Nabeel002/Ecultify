import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const ContentCard = ({ title, imageUrl, bodyText, btnUrl }) => {
    return (
        <div>
            <div class="w-[100%] h-auto p-6 bg-white border border-gray-200 rounded-lg shadow-md">
                <div className='md:flex items-center gap-6'>
                    <div class="flex mb-4">
                        <Image width={160} height={160} src={imageUrl} className='w-[100%] md:w-[unset]' />
                    </div>
                    <div className='flex flex-col gap-y-3'>
                        <h5 class="text-xl font-bold">{title}</h5>
                        <p class="text-gray-500">
                            {bodyText}
                        </p>
                        <Link href={btnUrl} >
                            <button className='bg-[#f0f0f0] font-normal border-[#afafaf] text-[#1e1e1e] border rounded-md pt-[8px] pb-[8px] pl-[12px] pr-[12px]'>Button</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContentCard