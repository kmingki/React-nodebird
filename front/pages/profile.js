import React, { useEffect } from 'react';
import Head from 'next/head';
import AppLayout from '../components/AppLayout';
import Router from 'next/router';
import NicknameEditForm from '../components/NicknameEditForm';
import FollowList from '../components/FollowList';

import { useSelector, useDispatch } from 'react-redux';

const Profile = () => {

    const { me } = useSelector((state)=>state.user);

    useEffect(()=>{

        if (!me){
            alert('로그인 해주세요');
            Router.replace('/');
        }
    }, [me]);

    const followerList = [{ nickname:'제로초'}, {nickname:'바보'},{nickname:'노드버드'}]
    const followingList = [{ nickname:'제로초'}, {nickname:'바보'},{nickname:'노드버드'}]

    return (
        <>
            <Head>
                <title>내 프로필 | NodeBird</title>   
            </Head>
        <AppLayout>
            <NicknameEditForm />
            <FollowList header="팔로잉 목록" data={followingList} />
            <FollowList header="팔로워 목록" data={followerList} />
        </AppLayout>
        </>
    );
}

export default Profile;