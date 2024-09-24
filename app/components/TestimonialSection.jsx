import React from 'react'
import TestimonialCard from './TestimonialCard'

const TestimonialSection = () => {
    const testiMonialData = [
        {
            imageUrl: "/images/profile-img.png",
            title: "Title",
            description: "Description",
            quoteText: "Quote"
        },
        {
            imageUrl: "/images/profile-img.png",
            title: "Title",
            description: "Description",
            quoteText: "Quote"
        },
        {
            imageUrl: "/images/profile-img.png",
            title: "Title",
            description: "Description",
            quoteText: "Quote"
        },
        {
            imageUrl: "/images/profile-img.png",
            title: "Title",
            description: "Description",
            quoteText: "Quote"
        },
        {
            imageUrl: "/images/profile-img.png",
            title: "Title",
            description: "Description",
            quoteText: "Quote"
        },
        {
            imageUrl: "/images/profile-img.png",
            title: "Title",
            description: "Description",
            quoteText: "Quote"
        },
    ]
    return (
        <section className='w-[82%] ml-[auto] mr-[auto] mt-[50px]'>
            <h2 className='text-2xl font-semibold mb-[8px]'>
                Heading
            </h2>
            <h3 className='text-xl'>
                Subheading
            </h3>

            <div className='grid grid-rows-2  grid-cols-[repeat(auto-fit,minmax(350px,1fr))]  justify-center items-center gap-y-5  gap-x-10 mt-[48px]' >
                {testiMonialData.map((item, index) => (
                    <TestimonialCard imageUrl={item.imageUrl} title={item.title} content={item.description} quote={item.quoteText} key={index}/>
                ))}
              
            </div>

        </section>

    )
}

export default TestimonialSection