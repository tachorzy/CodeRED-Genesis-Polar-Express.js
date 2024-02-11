"use client"

import Image from 'next/image'
import React, { useState } from 'react'
// import { chillaxRegular } from '@/utils/localNextFont'

const TextBubble = (props: {sender: string}) => {
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
    let alignment = "mr-auto"
    
    if (props.sender === "user") {
        alignment = "ml-auto"
    }
    return( 
        <div className={` ${alignment} min-h-24 w-1/2 rounded-2xl bg-violet-200 p-3`}>
            <h1 className="text-xs font-semibold text-violet-700">{"blah blah blah blah blah blah blah blah"}</h1>

            {props.sender == "AI" 
                ? 
                <svg width="70" height="70" className={"absolute mt-4 rotate-90 rounded"}>
                    <polygon points="50, 50, 100, 100, 0, 100" fill="#ddd6fe" className="ml-16"/>
                </svg>
                :  
                <svg width="70" height="70" className={"absolute mt-0.5 ml-[14.25rem] rotate-45 rounded"}>
                    <polygon points="50, 50, 100, 100, 0, 100" fill="#ddd6fe" className="ml-16"/>
                </svg>
                }

        </div>

    );
}

export default TextBubble;