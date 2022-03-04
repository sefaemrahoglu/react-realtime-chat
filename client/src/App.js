import "./App.css";
import { ChatProvider } from "./context/chatContext";
import Container from "./components/Container";

function App() {
 
  return (
    <ChatProvider>
      <Container />
    </ChatProvider>
  );
}

export default App;
