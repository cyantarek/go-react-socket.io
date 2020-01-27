import React from 'react';
import './App.css';
import Button from "@material-ui/core/Button";
import socketIOClient from "socket.io-client"
import Chat from "./components/Chat/Chat";
import TextField from "@material-ui/core/TextField";

function App() {
    let io = socketIOClient("ws://localhost:5300", {transports: ['websocket']});

    io.on("connect_error", function () {
        console.log("connection error")

    });

    io.on("connect", function () {
        console.log("connection established");
        io.send("hi");

        io.on("message", function (msg) {
            console.log(msg)
        });

        io.on("disconnect", function () {
            console.log("disconnected");
            io.close()
        });
    });

    return (
        <div className="App">
            <Chat/>
        </div>
    );
}

export default App;
