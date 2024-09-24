import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const footerData = [
    {
        title: 'Use Cases',
        links: [
            { text: 'UI Design', href: '#' },
            { text: 'Wireframing', href: '#' },
            { text: 'Diagramming', href: '#' },
            { text: 'Brainstorming', href: '#' },
            { text: 'Online whiteboard', href: '#' },
            { text: 'Team collaboration', href: '#' },
        ],
    },
    {
        title: 'Resources',
        links: [
            { text: 'Blog', href: '#' },
            { text: 'Case Studies', href: '#' },
            { text: 'Help Center', href: '#' },
            { text: 'Contact Us', href: '#' },
        ],
    },
    {
        title: 'Company',
        links: [
            { text: 'About Us', href: '#' },
            { text: 'Careers', href: '#' },
            { text: 'Press', href: '#' },
            { text: 'Privacy Policy', href: '#' },
            { text: 'Terms of Service', href: '#' },
        ],
    },
];

const Footer = () => {
    return (
        <>
            <section className='flex flex-col items-center md:items-start md:flex-row  justify-center ml-[50px] mr-[50px] md:ml-auto md:mr-auto md:justify-between flex-wrap md:w-[82%] mt-[100px] '>
                <div className='mb-4 md:mb-0'>
                    <Image src='/images/main-Icon.svg' width={23} height={20} />
                    <div className='flex gap-4'>
                        <Image src='/images/X-Logo.svg' width={23} height={20} />
                        <Image src='/images/Instagram.svg' width={23} height={20} />
                        <Image src='/images/YouTube.svg' width={34} height={34} />
                        <Image src='/images/LinkedIn.svg' width={30} height={30} />
                    </div>
                </div>

                {footerData.map((section, index) => (
                    <div key={index} className='flex text-center md:text-start flex-col gap-3'>
                        <div>
                            <p className='font-semibold text-[#1e1e1e] mb-[17px]'>{section.title}</p>
                        </div>
                        {section.links.map((link, linkIndex) => (
                            <Link key={linkIndex} href={link.href}>
                                <p>{link.text}</p>
                            </Link>
                        ))}
                    </div>
                ))}
            </section>
        </>
    );
};

export default Footer;
