import ChatForm from "./ChatForm";
import ChatMessages from "./ChatMessages";
import { useEffect } from "react";
import { init, subscribeChat, subscribeMessageList } from "../socketApi";
import { useChat } from "../context/chatContext";
function Container() {
  const { setMessages } = useChat();
  useEffect(() => {
    init();
    subscribeMessageList((messages) => {
      setMessages(messages);
    });
    subscribeChat((message) => {
      setMessages((prevState) => [...prevState, { message }]);
    });
  }, []);
  return (
    <>
      <ChatMessages />
      <ChatForm />
    </>
  );
}
export default Container;
