'use client'

import Image from 'next/image'
import { useEffect } from "react";


const navItems = new Map([
    ['Find Visas', { link: '/' }],
    ['About', { link: '/about' }],
    ['FAQ', { link: '/faq' }],
])

const NavBar = () => {
    console.log("Navbar loaded client side")
    useEffect(() => {
        async function getSampleApi() {
            const response = await fetch("http://localhost:8000/")
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json()
            console.log(data)
        }
        getSampleApi()
    })
    return (
        <div className={" absolute top-0 align-baseline w-screen space-x-12 md:space-x-96 2xl:space-x-[26rem] flex flex-row z-50"}>
            <Image src="/branding/SlayoverBrandingWhite.svg" width={350} height={350} alt="brand logo" className="mt-6"></Image>
        </div>
    );
}

export default NavBar;