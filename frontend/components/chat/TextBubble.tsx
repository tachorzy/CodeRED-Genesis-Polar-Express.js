"use client"

import Image from 'next/image'
import React, { useState } from 'react'
// import { chillaxRegular } from '@/utils/localNextFont'

const TextBubble = (props: {sender: string, message: string}) => {
    // const [isVisible, setIsVisible] = useState(true);


    // //replace this to return nothing later once I make a tray component of all the prompts
    // if (!isVisible) {
    //     return (
    //         <div>
    //             <button onClick={() => setIsVisible(true)}>
    //                 <Image src="/icons/add.svg" width={28} height={28} className={"bg-violet-200 hover:bg-violet-300 rounded-lg h-6 p-2"} alt={"add"}></Image>
    //             </button>
    //         </div>
    //     )
    // }
    let textQualities = "mr-auto bg-violet-200 text-violet-700 "
    
    if (props.sender === "user") {
        textQualities = "ml-auto bg-violet-400 text-violet-50 "
    }
    return( 
        <div className={`flex flex-col ${textQualities} w-1/2 rounded-2xl p-3`}>
            <h1 className="text-xs font-semibold leading-relaxed">{props.message}</h1>
        </div>

    );
}

export default TextBubble;