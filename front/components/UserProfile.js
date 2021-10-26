import React, { useCallback, useEffect } from 'react';
import { Card, Avatar, Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import { LOG_OUT_REQUEST } from '../reducers/user';

const UserProfile = () => {
    const { me, logOutLoading } = useSelector((state)=>state.user);
    const dispatch = useDispatch();

    return (
        <div>
            <Avatar src={<Image src="https://joeschmoe.io/api/v1/random" style={{ width: 32 }} />} />
        </div>
    );
};

export default UserProfile;