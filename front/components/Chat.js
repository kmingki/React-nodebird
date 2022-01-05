import React, { useState, useEffect } from 'react';
import { Input, Button } from 'antd';
import { ArrowUpOutlined, LoadingOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { LOAD_ROOM_REQUEST } from '../reducers/chat';

const Chat = ({ roomId }) => {
    const dispatch = useDispatch();
    const { room, loadRoomLoading } = useSelector((state)=>state.chat);

    useEffect(()=>{
        if (roomId !== 'main') {
            dispatch({
                type: LOAD_ROOM_REQUEST,
                data: roomId
            });
        }
        
    }, [roomId])

    return (
        <>
        { roomId !== "main" ? 
        <div style={{ height:"100%", width:"100%"}}>
            
            {
                !room ?
                <LoadingOutlined spin/>:
                <div>
                <div style={{height: "10%", borderBottom: "solid thin #EFEEF5", display:"flex", alignItems:"center", justifyContent:"center"}}>
                <h2>{room.title}</h2>&nbsp;&nbsp;<h2 style={{color: "grey"}}>{room.participants.length}</h2>
                </div>
                
                <div style={{position:"fixed", height:"8%", width:"40%", bottom:"0", display:"flex", alignItems: "center",
            justifyContent:"space-between", borderTop: "solid thin #EFEEF5"}}>
                <Input bordered={false} style={{width:"90%"}}/>
                <Button type="primary" shape="circle" icon={<ArrowUpOutlined />} size="large" style={{marginRight: "5%"}}/>
            </div>
            </div>
            }
            
        </div>
         :  
        <div style={{display:"flex", justifyContent:"center", alignItems:"center", width:"100%", height:"100%"}}>
        <div style={{ height:"50%", width:"50%"}}>
        <h1>You don’t have a message selected</h1>
        <br />
        <p>Choose one from your existing messages, or start a new one.</p>
        </div>
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