"use client"

import Image from 'next/image'
import React, { ReactNode, useState, useEffect, useRef} from 'react'
import { useRouter } from 'next/navigation'
import ChatPrompt from './ChatPrompt'
import TextBubble from './TextBubble'
import SearchBar from './SearchBar'
// import { chillaxRegular } from '@/utils/localNextFont'

const ChatBox = () => {
    return( 
        //chillaxRegular.className + 
        <div className={" absolute h-screen w-[46.65%] bg-[#FCFFFF]"}>
            <SearchBar/>
            <div className="flex flex-row -mt-3 pl-5">
                    <ChatPrompt></ChatPrompt>
            </div>
        </div>
    );
}

export default ChatBox;