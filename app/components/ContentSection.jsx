import React from 'react'
import ContentCard from './ContentCard'

const ContentSection = () => {
    const contentCardData = [
        {
            title: "Title",
            imageUrl: "https://via.placeholder.com/160x160",
            content: "Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very short story.",
            url: "#"
        },
        {
            title: "Title",
            imageUrl: "https://via.placeholder.com/160x160",
            content: "Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very short story.",
            url: "#"
        },
        {
            title: "Title",
            imageUrl: "https://via.placeholder.com/160x160",
            content: "Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very short story.",
            url: "#"
        },
        {
            title: "Title",
            imageUrl: "https://via.placeholder.com/160x160",
            content: "Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very short story.",
            url: "#"
        },
        {
            title: "Title",
            imageUrl: "https://via.placeholder.com/160x160",
            content: "Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very short story.",
            url: "#"
        },
        {
            title: "Title",
            imageUrl: "https://via.placeholder.com/160x160",
            content: "Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very short story.",
            url: "#"
        }
    ]
    return (
        <section className='mt-[50px]'>
            <div className='md:w-[82%] ml-auto mr-auto'>
                <h2 className='text-2xl font-semibold mb-[8px]'>
                    Heading
                </h2>
                <h3 className='text-xl'>
                    Subheading
                </h3>
                <div className='flex flex-col gap-y-8 mt-[48px]'>
                    {contentCardData.map((cont, index) => (
                        <ContentCard title={cont.title}  imageUrl={cont.imageUrl} bodyText={cont.content} btnUrl={cont.url} key={index} />
                    ))}
                </div>

            </div>

        </section>
    )
}

export default ContentSection