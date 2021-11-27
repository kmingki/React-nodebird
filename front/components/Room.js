import React, { useState, useEffect } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Button, List, Avatar, Modal, Input, Tag } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { SEARCH_USER_REQUEST } from '../reducers/user';
import styles from './Room.module.css'

const Room = ({ height }) => {
    //서버사이드렌더링 - pre rendering 해야할 필요가 있을까?
    const dispatch = useDispatch();
    const { searchUserResult } = useSelector((state) => state.user);
    const [ visible, onChangeVisible ] = useState(false);
    const [ groupChat, onChangeGroupChat ] = useState([]);

    const listData = searchUserResult.map((v, i) => ({ 
        idx: i,
        uid: v.id,
        title: v.nickname,
        content: v.email,
        avatar: v.photo,
      }));

    const showModal = () => {
        onChangeVisible(true);
    }

    const handleCancel = () => {
        onChangeVisible(false);
    }

    const handleOk = () => {
        console.log('ok');
    }

    const onSearch = (e) => {
        dispatch({
            type: SEARCH_USER_REQUEST,
            data: e
        });
    }

    const onClickUser = (e) => {
        
        for (var i = 0; i < groupChat.length; i++) {
            if (groupChat[i].uid === e.uid){
                return
            }
        }

        onChangeGroupChat(groupChat => [...groupChat, e]);
    } 

    const onClose = (e) => {
        console.log(e.uid);
        groupChat.forEach((p)=>console.log(p));
        onChangeGroupChat(groupChat => groupChat.filter(p => (p.uid !== e.uid)));
        console.log(groupChat);
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
                    {groupChat.map((p)=>(<Tag
                    color="#2db7f5"
                    closable onClose={()=>{onClose(p)}}>
                        {p.avatar? <Avatar src={`http://localhost:3065/profile/${p.avatar}`} />: <Avatar>{p.title[0]}</Avatar>}
                        &nbsp;{p.title}</Tag>))}
                    <List
                    itemLayout="vertical"
                    dataSource={listData}
                    renderItem={item => (
                    <div className={styles.userList} onClick={()=>{ onClickUser(item); }}>
                    <List.Item
                        key={item.title}
                        >
                        <List.Item.Meta
                        avatar={item.avatar? <Avatar src={`http://localhost:3065/profile/${item.avatar}`} /> : <Avatar>{item.title[0]}</Avatar>}
                        title={<a href={item.href}>{item.title}</a>}
                        />
                    {item.content}
                    </List.Item>
                    </div>
                    )}
                    />
                    </Modal>
                </div>
            </div>
        </div>

        <div id="scrollableDiv" style={{height: height-50 , overflow: 'auto'}}>
        <List
        itemLayout="vertical"
        dataSource={listData}
        renderItem={item => (
        <List.Item
            key={item.title}>
            <List.Item.Meta
            avatar={<Avatar src={item.avatar} />}
            title={<a href={item.href}>{item.title}</a>}
            />
        {item.content}
      </List.Item>
      )}
      />
        </div>

        </div>
    );
}

export default Room;
