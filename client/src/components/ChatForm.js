import { useState } from "react";
import styles from "./styles.module.css";
import { sendMessage } from "../socketApi";
import { useChat } from "../context/chatContext";
function ChatForm() {
  const { messages, setMessages } = useChat();
  console.log(messages);
  const [message, setMessage] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessages((prevState) => [...prevState, { message, fromMe: true }]);
    sendMessage(message);
    setMessage("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        className={styles.textInput}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
    </form>
  );
}
export default ChatForm;
