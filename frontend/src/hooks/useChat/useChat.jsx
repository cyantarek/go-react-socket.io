import { useEffect, useState, useRef } from "react"
import socketIOClient from "socket.io-client"

const backend = "ws://localhost:5300"

function useChat() {
    let socketRef = useRef();
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        socketRef.current = socketIOClient(backend, {transports: ['websocket']});
        setMessages(messages);

        socketRef.current.on("newChatMessage", function (msg) {
            console.log(msg);
            setMessages(messages => [...messages, msg.message])
        });

        return () => {
            socketRef.current.disconnect();
        }
    }, []);

    const sendMessage = (message) => {
        socketRef.current.emit("newChatMessage", {message})
    };

    return { messages, sendMessage }
}

export default useChat