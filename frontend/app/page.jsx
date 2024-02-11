import NavBar from "@/components/Navbar";
import ChatBox from "@/components/chat/ChatBox";
import React from "react";
import useSpotify from "/hooks/useSpotify";
import Infographics from "@/components/Infographics";

export default function Home() {
  const {getAmadeus,getGenres,getLocationBasedOnGenre, getCat,runPrompt} = useAI()
  console.log(runPrompt("get me a flight from Mexico to the US"))
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
