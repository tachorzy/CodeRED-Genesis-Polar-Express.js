"use client"

import Image from 'next/image'
import React, { useState } from 'react'
// import { chillaxRegular } from '@/utils/localNextFont'

const ChatPrompt = () => {
    const [isVisible, setIsVisible] = useState(true);


    //replace this to return nothing later once I make a tray component of all the prompts
    if (!isVisible) {
        return (
            <div>
                <button onClick={() => setIsVisible(true)}>
                    <Image src="/icons/add.svg" width={28} height={28} className={"bg-violet-200 hover:bg-violet-300 rounded-lg p-2"} alt={"add"}></Image>
                </button>
            </div>
        )
    }

    return( 
        <div className={"flex flex-row bg-violet-500 h-6 min-w-32 rounded-lg py-0.5 pl-2"}>
            <h1 className="text-sm text-violet-50">{"Suggestion"}</h1>
            <button onClick={() => setIsVisible(false)}>
                <Image src="/icons/delete.svg" width={20} height={20} className={"hover:bg-violet-300 rounded-full ml-5 h-5 right-0"} alt={"delete"}></Image>
            </button>
        </div>
    );
}

export default ChatPrompt;