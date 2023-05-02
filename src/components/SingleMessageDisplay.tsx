import React from "react";

interface MessageDisplayProps {
  message: { role: string; content: string };
}

function SingleMessageDisplay({ message }: MessageDisplayProps) {
  return (
    <>
      <div className="single-message">
        <p id="icon">X</p>
        {/* <p>{message.role}</p> */}
        <p>{message.content}</p>
      </div>
    </>
  );
}

export default SingleMessageDisplay;
