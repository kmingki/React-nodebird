import React, { useEffect } from 'react';
import Head from 'next/head';
import AppLayout from '../components/AppLayout';
import Router from 'next/router';
import NicknameEditForm from '../components/NicknameEditForm';
import FollowList from '../components/FollowList';

import { useSelector, useDispatch } from 'react-redux';
import { LOAD_FOLLOWERS_REQUEST, LOAD_FOLLOWINGS_REQUEST } from '../reducers/user';

const Profile = () => {
    const dispatch = useDispatch();
    const { me } = useSelector((state)=>state.user);

    useEffect(()=>{

        if (!me){
            alert('로그인 해주세요');
            Router.replace('/');
        }

        dispatch({
            type: LOAD_FOLLOWERS_REQUEST,
        });

        dispatch({
            type: LOAD_FOLLOWINGS_REQUEST,
        });

    }, [me]);

    const followingList = [{ nickname:'제로초'}, {nickname:'바보'},{nickname:'노드버드'}]

    return (
        <>
            <Head>
                <title>내 프로필 | NodeBird</title>   
            </Head>
        <AppLayout>
            <NicknameEditForm />
            <FollowList header="팔로잉 목록" data={followingList} />
            <FollowList header="팔로워 목록" data={me.followers} />
        </AppLayout>
        </>
    );
}

export default Profile;