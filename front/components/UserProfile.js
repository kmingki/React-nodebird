import React, { useCallback, useEffect } from 'react';
import { Card, Avatar, Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import { LOG_OUT_REQUEST } from '../reducers/user';

const UserProfile = () => {
    const { me, logOutLoading } = useSelector((state)=>state.user);
    const dispatch = useDispatch();

    const onLogOut = useCallback(()=>{
        dispatch({
            type: LOG_OUT_REQUEST,
        });
    },[LOG_OUT_REQUEST]);

    return (
        <Card actions={[
            <div key="twit">짹짹<br />{me.Posts.length}</div>,
            <div key="followings">팔로잉<br />0</div>,
            <div key="followers">팔로워<br />0</div>
        ]}
        >
            <Card.Meta avatar={<Avatar>{me.nickname[0]}</Avatar>}
            title={me.nickname}
            />
            <Button onClick={onLogOut} loading={logOutLoading}>로그아웃</Button>
        </Card>      
    );
};

export default UserProfile;