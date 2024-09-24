import React from 'react'
import Image from 'next/image'

const MediaCard = ({ title, imageUrl, bodyText }) => {
    return (
        <div className="w-[100%] h-[400px] p-6 bg-white border border-gray-200 rounded-lg shadow-md">
            <div className="flex mb-4">
                <Image width={160} height={160} src={imageUrl} alt={title} />
            </div>
            <h5 className="text-xl font-bold mb-2">{title}</h5>
            <p className="text-gray-500">
                {bodyText}
            </p>
        </div>
    )
}

export default MediaCard
