import styles from "./styles.module.css";
import { useChat } from "../context/chatContext";
import ChatItem from "./ChatItem";
import ScrollableFeed from "react-scrollable-feed";
function ChatMessages() {
  const { messages } = useChat();
  return (
    <div className={styles.chatlist}>
      <ScrollableFeed forceScroll={true}>
        {messages.map((element, index) => (
          <ChatItem key={index} item={element} />
        ))}
      </ScrollableFeed>
    </div>
  );
}
export default ChatMessages;
