import React, { useState, useEffect } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Button, List, Avatar, Modal, Input, Tag } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { SEARCH_USER_REQUEST } from '../reducers/user';
import { CREATE_CHAT_REQUEST } from '../reducers/chat';
import styles from './Room.module.css'

import CheckBox from './CheckBox';

const Room = ({ height, socket, setRoom }) => {
    //서버사이드렌더링 - pre rendering 해야할 필요가 있을까?
    const dispatch = useDispatch();
    const { searchUserResult, me } = useSelector((state) => state.user);
    const [ visible, onChangeVisible ] = useState(false);
    const [ groupChat, setGroupChat ] = useState({});
    const [ RoomList, setRoomList ] = useState(me.participateRoom);

    useEffect(()=>{
        socket.on('newRoom', (data)=>{
            setRoomList([...RoomList, data])
            //console.log(data);
      });
    }, []);

    const showModal = () => {
        onChangeVisible(true);
    }

    const handleCancel = () => {
        onChangeVisible(false);
    }

    const handleOk = () => {

        const users =[];
        Object.entries(groupChat).forEach(v=>{
            if (v[1] === true) {
                users.push(v[0]);
            }
        });

        dispatch({
            type: CREATE_CHAT_REQUEST,
            data: { "users": users }
        });
    }

    const onSearch = (e) => {
        dispatch({
            type: SEARCH_USER_REQUEST,
            data: e
        });
    }
    const handleChange = ({ target: { label, checked }}) => {
        setGroupChat({ ...groupChat, [label]: checked })
    }

    //채팅방 클릭했을때 채팅방 보이기
    const onClickRoom = (room) => {
        setRoom(room);
    }

    return (
        <div>
        <div className="test">

        </div>
        <div className="messageTitle" style={{height: "50px", borderBottom: "solid thin #EFEEF5", display: "flex"}}>
            <div style={{width: "600px", display:"flex"}}>
                <div style={{display:"flex", alignItems:"center", flexGrow: "1"}}>
                    <div>
                        <h2 style={{margin:"0"}}>&nbsp;&nbsp;Messages</h2>
                    </div>
                </div>
                <div style={{display:"flex", alignItems:"center", flexGrow: "0"}}>
                    <div>
                        <Button type="text" shape="circle" onClick={showModal} icon={<PlusOutlined />} style={{margin: "0 15px"}} size="large"></Button>
                    </div>
                    <Modal
                    visible={visible}
                    title="New Messages"
                    onOk={handleOk}
                    onCancel={handleCancel}
                    bodyStyle={{height: "500px"}}
                    footer={[
                        <Button key="submit" type="primary" onClick={handleOk}>
                        Next
                        </Button>,
                        ]}
                    >
                    <Input.Search placeholder="Search People" onSearch={onSearch} bordered={false}  />

                
                    <div style={{display:"flex", flexDirection:"column"}}>
                    {searchUserResult.map(user => (
                        <div className={styles.userList}>
                        <CheckBox 
                        user={user}
                        handleChange={handleChange}
                        label={user.id}
                        value={groupChat[user.id]}
                        />
                        </div>))}
                    </div>

                    </Modal>
                </div>
            </div>
        </div>

        <div id="scrollableDiv" style={{height: height-50 , overflow: 'auto'}}>
        <List
        itemLayout="vertical"
        dataSource={RoomList}
        renderItem={item => (
        <div className={styles.roomList} onClick={()=>onClickRoom(item)}>
        <List.Item
            key={item.id}>
            <List.Item.Meta
            title={item.title}
            />
        {item.title}
      </List.Item>
      </div>
      )}
      />
        </div>

        </div>
    );
}

export default Room;
