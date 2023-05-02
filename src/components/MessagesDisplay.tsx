import React from "react";
import SingleMessageDisplay from "./SingleMessageDisplay";

interface MessageDisplayProps {
  userMessages: IChatData[];
}

interface IChatData {
  role: string;
  content: string;
}

function MessagesDisplay({ userMessages }: MessageDisplayProps) {
  return (
    <>
      <div className="messages-display">
        {userMessages.map((userMessage, _index) => {
          return <SingleMessageDisplay message={userMessage} />;
        })}
      </div>
    </>
  );
}

export default MessagesDisplay;
