'use client'

import React, { useState } from 'react'
import Link from 'next/link'

const Header = () => {
    const headerData = [
        {
            links: [
                { text: 'Products', href: '#' },
                { text: 'Solutions', href: '#' },
                { text: 'Community', href: '#' },
                { text: 'Resources', href: '#' },
                { text: 'Pricing', href: '#' },
                { text: 'Contact', href: '#' },
            ],
        },
    ];

    const [isMenuOpen, setVisibility] = useState(false);

    const toggleMenuMobile = () => {
        setVisibility(!isMenuOpen);
    };

    return (
        <header className='flex justify-between items-center m-[32px]'>
            <div className="logo-wrapper">
                <div>
                    <svg width="40" height="39" viewBox="0 0 40 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 2H14.1667C12.6196 2 11.1358 2.61458 10.0419 3.70854C8.94791 4.80251 8.33333 6.28624 8.33333 7.83333C8.33333 9.38043 8.94791 10.8642 10.0419 11.9581C11.1358 13.0521 12.6196 13.6667 14.1667 13.6667M20 2V13.6667M20 2H25.8333C26.5994 2 27.3579 2.15088 28.0656 2.44404C28.7734 2.73719 29.4164 3.16687 29.9581 3.70854C30.4998 4.25022 30.9295 4.89328 31.2226 5.60101C31.5158 6.30875 31.6667 7.06729 31.6667 7.83333C31.6667 8.59938 31.5158 9.35792 31.2226 10.0657C30.9295 10.7734 30.4998 11.4164 29.9581 11.9581C29.4164 12.4998 28.7734 12.9295 28.0656 13.2226C27.3579 13.5158 26.5994 13.6667 25.8333 13.6667M20 13.6667H14.1667M20 13.6667H25.8333M20 13.6667V25.3333M14.1667 13.6667C12.6196 13.6667 11.1358 14.2812 10.0419 15.3752C8.94791 16.4692 8.33333 17.9529 8.33333 19.5C8.33333 21.0471 8.94791 22.5308 10.0419 23.6248C11.1358 24.7188 12.6196 25.3333 14.1667 25.3333M25.8333 13.6667C25.0673 13.6667 24.3087 13.8175 23.601 14.1107C22.8933 14.4039 22.2502 14.8335 21.7085 15.3752C21.1669 15.9169 20.7372 16.5599 20.444 17.2677C20.1509 17.9754 20 18.734 20 19.5C20 20.266 20.1509 21.0246 20.444 21.7323C20.7372 22.4401 21.1669 23.0831 21.7085 23.6248C22.2502 24.1665 22.8933 24.5961 23.601 24.8893C24.3087 25.1824 25.0673 25.3333 25.8333 25.3333C26.5994 25.3333 27.3579 25.1824 28.0656 24.8893C28.7734 24.5961 29.4164 24.1665 29.9581 23.6248C30.4998 23.0831 30.9295 22.4401 31.2226 21.7323C31.5158 21.0246 31.6667 20.266 31.6667 19.5C31.6667 18.734 31.5158 17.9754 31.2226 17.2677C30.9295 16.5599 30.4998 15.9169 29.9581 15.3752C29.4164 14.8335 28.7734 14.4039 28.0656 14.1107C27.3579 13.8175 26.5994 13.6667 25.8333 13.6667ZM14.1667 25.3333C12.6196 25.3333 11.1358 25.9479 10.0419 27.0419C8.94791 28.1358 8.33333 29.6196 8.33333 31.1667C8.33333 32.7138 8.94791 34.1975 10.0419 35.2915C11.1358 36.3854 12.6196 37 14.1667 37C15.7138 37 17.1975 36.3854 18.2915 35.2915C19.3854 34.1975 20 32.7138 20 31.1667V25.3333M14.1667 25.3333H20" stroke="#1E1E1E" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>
            </div>

            <div className='md:hidden' onClick={toggleMenuMobile}>
                <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 24 24" fill="none">
                    <path d="M4 18L20 18" stroke="#000000" strokeWidth="2" strokeLinecap="round" />
                    <path d="M4 12L20 12" stroke="#000000" strokeWidth="2" strokeLinecap="round" />
                    <path d="M4 6L20 6" stroke="#000000" strokeWidth="2" strokeLinecap="round" />
                </svg>
            </div>

            <div className="link-wrapper md:flex gap-6 items-center hidden">
                {headerData[0].links.map((link, index) => (
                    <Link href={link.href} key={index}>
                        <p>{link.text}</p>
                    </Link>
                ))}

                <Link href="#" className='bg-[#f0f0f0] font-normal border-black border rounded-md pt-[5px] pb-[5px] pl-[12px] pr-[12px]'>
                    <button>Sign In</button>
                </Link>

                <Link href="#" className='bg-[black] text-white font-medium rounded-md pt-[5px] pb-[5px] pl-[12px] pr-[12px]'>
                    <button>Register</button>
                </Link>
            </div>


            <div className={`link-wrapper md:hidden gap-6 items-center flex h-screen fixed right-0 flex-col top-[103px] w-[75vw] bg-white pt-[53px] ${isMenuOpen ? 'translate-x-[0%]' : 'translate-x-[100%]'}  transition-all ease-in-out duration-500`}>
                <span className='absolute top-[20px] right-[20px]' onClick={toggleMenuMobile}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" fill="none">
                        <path d="M19 5L5 19M5.00001 5L19 19" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </span>
                {headerData[0].links.map((link, index) => (
                    <Link href={link.href} key={index}>
                        <p>{link.text}</p>
                    </Link>
                ))}

                <Link href="#" className='bg-[#f0f0f0] font-normal border-black border rounded-md pt-[5px] pb-[5px] pl-[12px] pr-[12px]'>
                    <button>Sign In</button>
                </Link>

                <Link href="#" className='bg-[black] text-white font-medium rounded-md pt-[5px] pb-[5px] pl-[12px] pr-[12px]'>
                    <button>Register</button>
                </Link>
            </div>
        </header>
    );
};

export default Header;
