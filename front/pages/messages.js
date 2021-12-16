import React, { useState } from 'react';
import Room from '../components/Room';
import Chat from '../components/Chat';

import DesktopLayout from '../components/layout/DesktopLayout';
import io from 'socket.io-client';

const socket = io.connect('http://localhost:3065/room', {
    withCredentials: true,
});

/*
// client-side
const io = require("socket.io-client");
const socket = io("https://api.example.com", {
  withCredentials: true,
  extraHeaders: {
    "my-custom-header": "abcd"
  }
});
*/ 

const Messages = () => {
    const [room, setRoom ] = useState(null);

    return(
        <DesktopLayout Side={<Room height={document.documentElement.clientHeight} socket={socket} setRoom={setRoom}/>}>
            <Chat room={room}/>
        </DesktopLayout>
    );
}


export default Messages;