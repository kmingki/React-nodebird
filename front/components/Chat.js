/* eslint-disable */
import React, { useEffect, useState, useRef } from 'react';
import { Input, Button } from 'antd';
import { ArrowUpOutlined, LoadingOutlined, UserAddOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';
import { socket } from '../utils/io';
import _ from 'lodash';
import styled from 'styled-components';

const ChatWrapper = styled.div`
max-width: 50%;
border: solid 1px #4C4C51;
border-radius: 5%;
align-self: ${({sender}) => sender==='me'?'flex-end':'flex-start'};
padding: 2%;
margin: 1% 0;
word-wrap: break-word;
`;

const Chat = ({ roomId }) => {
    const { me } = useSelector((state)=>state.user);
    const [room, setRoom] = useState({})
    const [isLoading, setIsLoading] = useState(true);
    const [message, setMessage] = useState(''); //Input 입력 메세지
    const [messages, setMessages] = useState([]); //채팅방 메세지 기록
    const chattingContent = useRef(null);

    useEffect(()=>{
        if (roomId !== "main" && isLoading) {
            socket.emit('loadRoom', {
                roomId : parseInt(roomId, 10),
                socketId : socket.id,
            });
        }
    }, [roomId]);

    useEffect(()=>{
        
        socket.on('roomData', (roomData)=>{
           
            setRoom(roomData);
            setMessages(roomData.Chats);

            setIsLoading(false);
        
        });

        return () => {
            socket.off('roomData');
        };
        
    }, []);

    useEffect(()=>{
        
        socket.on('newMessage', (newChat) => {
           console.log('new Message event on');
           setMessages((prev)=> { return [...prev, newChat]});
        });

        return () => {
            socket.off('newMessage');
        };

    }, []);

    
    useEffect(()=> {

        chattingContent.current && updateScroll();
        
    });

    const onChangeMessage = (e) => {
        setMessage(e.target.value);
    }

    const onClickSubmit = () => {
        if (message.length > 0) {
            console.log(`send ${message} to server`);
            
            socket.emit('sendMessage', {
                roomId : parseInt(roomId, 10),
                message,
                userId: me.id
            });
            
            setMessage('');
        }
    };

    // 채팅창 밑부분부터 보여지게 scroll update 부분
    const updateScroll = () => {
        chattingContent.current.scrollTop = chattingContent.current.scrollHeight;
    } 
    return (
        <>
        { roomId !== "main" ? 
        isLoading ?  <LoadingOutlined spin /> : 
        <div style={{width:"100%", height:"100%"}}>
            <div style={{height: "50px", borderBottom: "solid thin #EFEEF5", display:"flex", alignItems:"center", justifyContent:"center"}}>
            <h2>{room.title}</h2>&nbsp;&nbsp;<h2 style={{color: "grey"}}>{room.participants.length}</h2>
            </div>

            <div className="chatContainer" ref={chattingContent} style={{ height:"calc(100% - 110px)", width:"100%", overflow:'auto', display:'flex', flexDirection: 'column', paddingRight: '5%', paddingLeft:'5%'}}>
            { messages && messages.map((m, i)=><ChatWrapper key={i} sender={m.User.id === me.id? "me" : "other"}>{m.chat}</ChatWrapper>)}
            </div>

            <div className="input" style={{position:"absolute", height:"60px", width:"100%",left:'0', right:'0', bottom:"0", display:"flex", alignItems: "center",
            justifyContent:"space-between", borderTop: "solid thin #EFEEF5", backgroundColor:'white'}}>
                <Input bordered={false} style={{width:"90%"}} onChange={onChangeMessage} value={message}/>
                <Button type="primary" shape="circle" icon={<ArrowUpOutlined />} size="large" style={{marginRight: "5%"}} onClick={onClickSubmit}/>
            </div>
        </div>
         :  
        <div style={{display:"flex", flexDirection: "column", justifyContent:"center", alignItems:"center", width:"100%", height:"100%", }}>
        <div>You don’t have a message selected</div>
        <div>Choose one from your existing messages, or start a new one.</div>
        </div>}
        </>
    );
}

export default Chat;
