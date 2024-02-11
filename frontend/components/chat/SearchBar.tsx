"use client"

import Image from 'next/image'
import React, { ReactNode, useState, useEffect, useRef} from 'react'
import { useRouter } from 'next/navigation'
import ChatPrompt from './ChatPrompt'
import TextBubble from './TextBubble'
// import { chillaxRegular } from '@/utils/localNextFont'
import useAI from '@/hooks/useAI'
import ChatBoxSkeleton from './ChatSkeleton'

const SearchBar = () => {
    const {getAmadeus,getGenres,getLocationBasedOnGenre, getCat, runPrompt} = useAI();
    const router = useRouter()

    type Message = {
        sender: string;
        message: string;
      };
    
    const INITIAL_SEARCH_STATE = "Where will you like to fly?";
    const [searchBarValue, setSearchBarValue] = useState("");
    const [messages, setMessages] = useState<Message[]>([]);
    const [replyStatus, setReplyStatus] = useState(false);

    const addMessage = (sender: string, message: string) => {
      setMessages((prevMessages: Message[]) => [...prevMessages, { sender, message }]);
    };

    const handleSearchBarChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchBarValue(event.target.value);
    };

    const messagesEndRef = useRef(null);

    useEffect(() => {
      if (messagesEndRef.current) {
        messagesEndRef.current.scrollIntoView({ behavior: "smooth", block: 'nearest', inline: 'start'  });
      }
    }, [messages]);


    return( 
        <form className="flex flex-col pl-5" onSubmit={async (event)=> {
            event.preventDefault();
            if (!searchBarValue.trim()) return; // Check if searchBarValue is empty or only contains whitespace
            setSearchBarValue(event.target.value);
            addMessage("user", searchBarValue);
            setReplyStatus(true)
            addMessage("AI", await runPrompt(searchBarValue));
            setSearchBarValue("");
            setReplyStatus(false)
        }}>
            {/*Honeypot field */}
            {/* <input name="_gotcha" type="hidden" className="hidden"/> */}
            <div className="flex flex-col h-[38rem] pb-6 px-5 gap-y-6 overflow-y-scroll">
                { 
                    messages.map((message, index) => {
                        return <TextBubble key={index} sender={message.sender} message={message.message}></TextBubble>
                    })
                }
                <div ref={messagesEndRef}></div>
            </div>
            <ChatBoxSkeleton replyStatus={replyStatus}/>
            <div className="grid grid-cols-2 gap-x-5 py-5 z-50">
                <div className="bg-violet-900 rounded-l-2xl h-14 w-[15%] flex flex-row">
                    <Image src="/icons/flight.svg" width={47} height={47} className="justify-center z-40 bg-violet-900 rounded-l-2xl" alt=""></Image>
                    <input
                        value={searchBarValue}
                        placeholder={INITIAL_SEARCH_STATE}
                        onChange={handleSearchBarChange}
                        autoFocus={true} 
                        name="_gotcha" 
                        type="" 
                        className="text-base text-violet-700 flex flex-col bg-violet-100 opacity-[85%] rounded-2xl h-14 w-[91%] z-30 absolute px-2 py-0 pl-14"
                    />
                </div>
            </div>
        </form>
    );
}

export default SearchBar;