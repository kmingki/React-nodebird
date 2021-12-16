import React from 'react';

const Chat = ({ room }) => {

    return (
        <>
        {room ? <div style={{height: "50px", borderBottom: "solid thin #EFEEF5", display:"flex", alignItems:"center", justifyContent:"center"}}>
            <h2>{room.title}</h2>&nbsp;&nbsp;<h2 style={{color: "grey"}}>{room.participants.length}</h2>
        </div> :  
        <div>
        <h1>You don’t have a message selected</h1>
        <br />
        <p>Choose one from your existing messages, or start a new one.</p>
        </div>}
        </>
    );
}

export default Chat;

/*
<div>
        <h1>You don’t have a message selected</h1>
        <br />
        <p>Choose one from your existing messages, or start a new one.</p>
        </div>
 */