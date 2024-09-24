import React from 'react'
import Image from 'next/image'

const TestimonialCard = ({ imageUrl, title, content }) => {
    return (
        <div className="w-[100%] h-[auto] p-6 bg-white border border-gray-200 rounded-lg shadow-md">
            <div className="flex mb-4">
                <h1 className='text-2xl font-semibold'>"Quote"</h1>
            </div>
            <div>
                <div className='flex gap-x-2 items-center'>
                    <div>
                        <Image src={imageUrl} width={40} height={40} alt={title} />
                    </div>
                    <div>
                        <h3 className='text-[#757575] text-base font-semibold'>
                            {title}
                        </h3>
                        <p className="text-gray-500">
                            {content}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TestimonialCard
