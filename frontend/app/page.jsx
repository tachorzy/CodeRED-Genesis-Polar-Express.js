import NavBar from "@/components/Navbar";
import ChatBox from "@/components/chat/ChatBox";
import React from "react";
import Infographics from "@/components/Infographics";
import useAI from "@/hooks/useAI"

export default function Home() {
  return (
    <main>
      <div className="bg-violet-500 grid grid-cols-2 h-screen pl-24">  
        <div className={"flex flex-col"}>
          <NavBar/>
          <Infographics/>
        </div>
        <div className="flex flex-row -pt-24">
          <ChatBox/>
        </div>
      </div>

    </main>
  );
}
