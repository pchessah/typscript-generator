import CodeDisplay from "./components/CodeDisplay";
import MessagesDisplay from "./components/MessagesDisplay";
import { useState } from "react";
interface IChatData {
  role: string;
  content: string;
}

function App() {

  const [chats, setChat] = useState<IChatData[]>([]);
  const [value, setValue] = useState<string>("");

  const clearChat = () =>{
    setValue("")
    setChat([])
  }

  const getQuery = async () => {
    if(value.length > 0) {
      try {
        const options = {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            message: value
          })
        }
        const response = await fetch("http://localhost:8000/completions", options);
        const data = await response.json();
        const userMessage = {
          role: "user",
          content:value
        }
        setChat(oldChat => [...oldChat, data, userMessage]);
      } catch (error) {
        console.error(error);
      }
    } else {
      alert("Enter text to generate query")
    }
  }

  const filteredUserMessages = chats.filter(message => message.role == "user");
  const latestCode = chats.filter(message => message.role == "assistant").pop();

 
  return (
    <div className="app">
      <MessagesDisplay userMessages={filteredUserMessages} />
      <input onChange={e => setValue(e.target.value)} value={value} title="sql-entry" />
      <CodeDisplay text={latestCode?.content || ""} />
      <div className="button-container">
        <button onClick={getQuery} id="get-query">Get Query</button>
        <button onClick={clearChat} id="clear-chat">Clear Chat</button>
      </div>
    </div>
  );
}

export default App;

