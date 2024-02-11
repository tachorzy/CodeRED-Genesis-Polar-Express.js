import React from 'react';

const ChatBoxSkeleton = (props:{replyStatus: boolean}) => {
  return (
    <div className="w-64 h-1 my-0.5 pl-0.5">
        {props.replyStatus == true && 
            <h1 className="animate-pulse text-violet-300 font-medium">DJ Slayover is typing...</h1>
        }
    </div>
  );
};

export default ChatBoxSkeleton;