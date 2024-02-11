"use client"

import Image from 'next/image'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
// import { chillaxRegular } from '@/utils/localNextFont'

const ChatBox = () => {
    const router = useRouter()

    const [contactInfo, setContactInfo] = useState({
        name: "",
        email: "",
        message: ""
    })

    // const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    //     event.preventDefault(); //prevent page refresh
    //     const formData = new FormData(event.target as HTMLFormElement);
    //     const req = await fetch(`https://getform.io/f/${process.env.GETFORM_KEY}`, { method: 'POST', body: formData });
    //     if(req.status == 200)
    //         router.push("/success")
    //     setContactInfo({ name: "", email: "", message: "" })
    // };

    // const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    //     const { name, value } = e.target;
    //     setContactInfo((prevContactInfo) => ({
    //       ...prevContactInfo,
    //       [name]: value,
    //     }));
    // };

    return( 
        //chillaxRegular.className + 
        <div className={" absolute h-screen w-[46.3%] bg-[#FCFFFF]"}>
            <form className="flex flex-col px-5">
                {/*Honeypot field */}
                <input name="_gotcha" type="hidden" className="hidden"/>
                <div className="h-[31.5rem]">

                </div>
                <div className="grid grid-cols-2 gap-x-5 py-5">
                    <div className="bg-violet-900 rounded-l-2xl h-16 w-[17%] flex flex-row">
                        <Image src="/icons/flight.svg" width={47} height={47} className="justify-center" alt=""></Image>
                        <input name="_gotcha" type="" className="text-base text-violet-700 flex flex-col bg-violet-100 opacity-[85%] rounded-r-2xl h-16 relative px-2 py-0"/>
                    </div>
                    <div className="bg-violet-900 rounded-l-2xl h-16 w-[17%] flex flex-row">
                        <Image src="/icons/flight.svg" width={47} height={47} className="justify-center" alt=""></Image>
                    <input name="_gotcha" type="" className="text-base text-violet-700 flex flex-col bg-violet-100 opacity-[85%] rounded-r-2xl h-16 relative px-2 py-0"/>
                    </div>
                </div>
                
                <input name="_gotcha" type="" className="text-violet-700 flex flex-col bg-violet-100 opacity-[85%] rounded-2xl h-16 w-full relative px-2 py-0"/>
            </form>
        </div>
    );
}

export default ChatBox;