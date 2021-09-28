import React, { useCallback, useEffect } from 'react';
import { Card, Avatar, Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
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
            <div key="twit"><Link href={`/user/${me.id}`}><a>짹짹<br />{me.Posts.length}</a></Link></div>,
            <div key="followings"><Link href={'/profile'}><a>팔로잉<br />{me.Followings.length}</a></Link></div>,
            <div key="followers"><Link href={'/profile'}><a>팔로워<br />{me.Followers.length}</a></Link></div>
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