import NavBar from "@/components/Navbar";
import ChatBox from "@/components/chat/ChatBox";
import React from "react";
import Infographics from "@/components/Infographics";
<<<<<<< HEAD
// import { useSpotify } from "@/hooks/useSpotify";


export default function Home() {
  // const {getToken} = useSpotify();
  // const token = getToken();
  // console.log(token)
=======
import useAI from "@/hooks/useAI"
export default function Home() {
>>>>>>> e57a8e4 (section)
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
