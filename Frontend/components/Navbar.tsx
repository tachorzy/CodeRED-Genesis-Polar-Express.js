import Image from 'next/image'
import Link from 'next/link'
import { chillaxRegular, chillaxMedium, chillaxBold } from '@/utils/localNextFont'

const navItems = new Map([
    ['Find Visas', { link: '/'}],
    ['About', { link: '/about'}],
    ['FAQ', { link: '/faq'}],
])

const NavBar = () => {
      
    return(
        <div className={" absolute top-0 align-baseline h-20 w-screen space-x-12 md:space-x-96 2xl:space-x-[26rem] flex flex-row z-50"}>
            <Image src="/branding/SlayoverLogoGradient.svg" width={350} height={350} alt="brand logo" className="mt-6"></Image>
        </div>
    );
}

export default NavBar;