/* eslint-disable */
import React, { useEffect, useState, useRef } from 'react';
import { Input, Button } from 'antd';
import { ArrowUpOutlined, LoadingOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';
import { socket } from '../utils/io';
import _ from 'lodash';

const Chat = ({ roomId }) => {
    const { me } = useSelector((state)=>state.user);
    const [room, setRoom] = useState({}); //왜 다른 페이지인데 안바뀌냐?
    const [isLoading, setIsLoading] = useState(true);
    const [message, setMessage] = useState(''); //입력 메세지
    const [messages, setMessages] = useState([]); //채팅방 메세지 기록
    const chattingContent = useRef(null);

    console.log('chat component rendered')
    //dynamic page parameter 바뀔때마다 rerendering된다. 
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
            
            /*
            setRoom(room => ({...room,
            Chats: _.cloneDeep(roomData.Chats),
            User: _.cloneDeep(roomData.User),
            UserId: roomData.UserId,
            createdAt: roomData.createdAt,
            id : roomData.id,
            max: roomData.max,
            participants: _.cloneDeep(roomData.participants),
            title: roomData.title,
            updatedAt: roomData.updatedAt
            }));
            */
           
            setRoom(roomData);
            setMessages(roomData.Chats);
           
            /*
            setRoom({...room, roomData});
            const chats = roomData.Chats;
            setMessages({...messages, chats});
            */

            setIsLoading(false);
        
        });

        return () => {
            socket.off('roomData');
        };
        
    }, []);

    useEffect(()=>{
        
        socket.on('newMessage', (fullChats) => {
            /* fullChats
            [{
                id: 29,
                chat: '2시 9분',
                createdAt: 2022-01-27T05:09:02.000Z,
                updatedAt: 2022-01-27T05:09:02.000Z,
                UserId: 3,
                RoomId: 74
              },]
            */

            setMessages(fullChats);
        });

        return () => {
            socket.off('newMessage');
        };

    }, []);

    
    useEffect(()=> {

        console.log('ref object changed');
        console.log(chattingContent.current);
        //[id]바뀔때 컴포넌트 리렌더링은 되지만, mount도 매번 된다
        //ref 객체는 리렌더링이 되어도 변경되지 않는다.
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

    const updateScroll = () => {
        chattingContent.current.scrollTop = chattingContent.current.scrollHeight;
    } ///처음 채팅방을 눌렀을때, 챗이 왔을때 ? 고민좀
    return (
        <>
        { roomId !== "main" ? 
        isLoading ?  <LoadingOutlined spin /> : 
        <div style={{width:"100%", height:"100%"}}>
            <div style={{height: "50px", borderBottom: "solid thin #EFEEF5", display:"flex", alignItems:"center", justifyContent:"center"}}>
            <h2>{room.title}</h2>&nbsp;&nbsp;<h2 style={{color: "grey"}}>{room.participants.length}</h2>
            </div>

            <div className="chatContainer" ref={chattingContent} style={{ height:"calc(100% - 110px)", width:"100%", overflow:'auto'}}>
            { messages && messages.map((m, i)=><div key={i} style={{height:"30px"}}>{m.chat}</div>)}
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

/*
<div>
        <h1>You don’t have a message selected</h1>
        <br />
        <p>Choose one from your existing messages, or start a new one.</p>
        </div>
 */