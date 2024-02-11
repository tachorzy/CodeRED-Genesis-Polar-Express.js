import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {

    return(
        <div className="grid grid-cols-2 bg-violet-900">
            <div>
                <div className={" flex flex-row bg-violet-900 h-52 py-8 md:pl-28"}>
                    <span className="md:ml-12 text-violet-200">
                        <Image src="/branding/SlayoverBrandingWhite.svg" width={150} height={150} alt="brand logo" className=""></Image>
                        <div className={"max-md:w-full w-56 leading-snug"}>Slayover is here to help you slay your layover game with the hottest international hits and cheapest international deals.</div>
                    </span>
                </div>
                <div className={"bg-violet-900 md:pl-28 pb-4"}>
                    <span className={"md:ml-12 text-violet-200 text-xs mt-10 md:mt-16"}>© {new Date().getFullYear()} Slayover.com. All rights reserved.</span>
                </div> 
            </div>
            <div className="flex flex-row col-span-3 h-full md:pl-40">
                <div className="flex flex-row">
                    <h1 className={"text-8xl font-extrabold text-violet-800 pb-3"}>These b*tches<br/>could never.</h1>
                    <div className="flex flex-row flex-wrap gap-x-0 gap-y-0 select-none w-[rem] ml-4 mt-16 scale-[70%]">
                        <Image src="/thebitchesthatcouldnever/Expedia.svg" width={45} height={45} alt="brand logo" className=""></Image>
                        <Image src="/thebitchesthatcouldnever/Kayak.com.svg" width={110} height={110} alt="brand logo" className=""></Image>
                        <Image src="/thebitchesthatcouldnever/GoogleFlights.svg" width={150} height={150} alt="brand logo" className=""></Image>
                        <Image src="/thebitchesthatcouldnever/Momondo.svg" width={120} height={120} alt="brand logo" className=""></Image>
                        <Image src="/thebitchesthatcouldnever/Skyscanner.svg" width={60} height={60} alt="brand logo" className=""></Image>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Footer;