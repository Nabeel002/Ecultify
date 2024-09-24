import React from 'react'
import Image from 'next/image'
const SubHero = () => {
    const SubHeroData = [

        {
            imageUrl: "https://via.placeholder.com/512x350"
        },
        {
            imageUrl: "https://via.placeholder.com/512x350"
        }




    ]
    return (
        <>
            <div className='flex-col md:flex-row mt-[50px] flex gap-12 justify-center items-center ml-auto mr-auto'>
                {SubHeroData.map((data, index) => (
                    <div key={index}><Image width={512} height={512} src={data.imageUrl} /></div>
                ))}

            </div>



        </>

    )
}

export default SubHero