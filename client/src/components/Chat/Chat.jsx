import React from "react"
import MessageBox from "../MessageBox/MessageBox";
import MessageList from "../MessageList/MessageList";
import useChat from "../../hooks/useChat/useChat";

function Chat(props) {
    const { messages, sendMessage } = useChat();

    return (
        <div className='chat'>
            <MessageList messages={messages}/>
            <MessageBox onSendMessage={sendMessage}/>
        </div>
    );
}

export default Chat