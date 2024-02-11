"use client"

import Image from 'next/image'
import React, { useState } from 'react'
// import { chillaxRegular } from '@/utils/localNextFont'

const TextBubble = (props: {sender: string, message: string}) => {
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