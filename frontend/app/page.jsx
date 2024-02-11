import NavBar from "@/components/Navbar";
import ChatBox from "@/components/chat/ChatBox";
import React from "react";
import useSpotify from "/hooks/useSpotify";

export default function Home() {
  const {getToken} = useSpotify();
  const token = getToken();
  console.log(token)
  return (
    <main>
      <div className="bg-violet-500 grid grid-cols-2 h-screen pl-24">  
        <div className={"flex flex-col"}>
          <NavBar/>

        </div>
        <div className="flex flex-row -pt-24">
          <ChatBox/>
        </div>
      </div>
    </main>
  );
}