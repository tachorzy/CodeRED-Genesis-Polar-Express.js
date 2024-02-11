import Image from 'next/image'

const NavBar = () => {
    return (
        <div className={" absolute top-0 align-baseline flex flex-row z-50"}>
            <Image src="/branding/SlayoverBrandingWhite.svg" width={350} height={350} alt="brand logo" className="mt-6"></Image>
        </div>
    );
}

export default NavBar;