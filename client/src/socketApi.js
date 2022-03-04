import io from "socket.io-client";

let socket;

export const init = () => {
  console.log("connecting to server");
  socket = io("http://localhost:3001/", {
    transports: ["websocket"],
  });
  socket.on("connect", () => {
    console.log("succesfully connected to the server");
  });
};

export const subscribeChat = (cb) => {
  socket.on("receive-message", (message) => {
    console.log(message);
    cb(message);
  });
};

export const sendMessage = (message) => {
  socket.emit("new-message", message);
};

export const subscribeMessageList = (cb) => {
  socket.on("message-list", (data) => {
    console.log("data");
    cb(data);
  });
};
