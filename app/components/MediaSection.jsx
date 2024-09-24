import React from 'react'
import MediaCard from './MediaCard'

const MediaSection = () => {
    const mediaData = [
        {
            title: 'Title',
            imageUrl: 'https://via.placeholder.com/160x160',
            bodyText: "Body text for whatever you'd like to say.Add main takeaway points, quotes, anecdotes, or even a very short story."
        },
        {
            title: 'Title',
            imageUrl: 'https://via.placeholder.com/160x160',
            bodyText: "Body text for whatever you'd like to say.Add main takeaway points, quotes, anecdotes, or even a very short story."
        },
        {
            title: 'Title',
            imageUrl: 'https://via.placeholder.com/160x160',
            bodyText: "Body text for whatever you'd like to say.Add main takeaway points, quotes, anecdotes, or even a very short story."
        },
        {
            title: 'Title',
            imageUrl: 'https://via.placeholder.com/160x160',
            bodyText: "Body text for whatever you'd like to say.Add main takeaway points, quotes, anecdotes, or even a very short story."
        },
        {
            title: 'Title',
            imageUrl: 'https://via.placeholder.com/160x160',
            bodyText: "Body text for whatever you'd like to say.Add main takeaway points, quotes, anecdotes, or even a very short story."
        },
        {
            title: 'Title',
            imageUrl: 'https://via.placeholder.com/160x160',
            bodyText: "Body text for whatever you'd like to say.Add main takeaway points, quotes, anecdotes, or even a very short story."
        }
    ];

    return (
        <section className='w-[82%] ml-[auto] mr-[auto] mt-[50px]'>
            <h2 className='text-2xl font-semibold mb-[8px]'>
                Heading
            </h2>
            <h3 className='text-xl'>
                Subheading
            </h3>

            <div className='grid grid-rows-2 grid-cols-[repeat(auto-fit,minmax(350px,1fr))] justify-center items-center gap-y-5 gap-x-10 mt-[48px]'>
                {mediaData.map((media, index) => (
                    <MediaCard
                        key={index}
                        title={media.title}
                        imageUrl={media.imageUrl}
                        bodyText={media.bodyText}
                    />
                ))}
            </div>
        </section>
    )
}

export default MediaSection
