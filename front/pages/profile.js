import React, { useEffect } from 'react';
import Head from 'next/head';
import AppLayout from '../components/AppLayout';
import { useRouter } from 'next/router';
import NicknameEditForm from '../components/NicknameEditForm';
import FollowList from '../components/FollowList';

import { useSelector, useDispatch } from 'react-redux';
import { LOAD_FOLLOWERS_REQUEST, LOAD_FOLLOWINGS_REQUEST, LOAD_MY_INFO_REQUEST } from '../reducers/user';

import wrapper from '../store/configureStore';
import axios from 'axios';
import { END } from 'redux-saga';

const Profile = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    const { me } = useSelector((state)=>state.user);

    useEffect(()=>{

        dispatch({
            type: LOAD_FOLLOWERS_REQUEST,
        });

        dispatch({
            type: LOAD_FOLLOWINGS_REQUEST,
        });

    }, []);

    if (!me) {
        alert('로그인 해주세요');
        return router.push('/');
    }

    return (
        <>
            <Head>
                <title>내 프로필 | NodeBird</title>   
            </Head>
        <AppLayout>
            <NicknameEditForm />
            <FollowList header="팔로잉 목록" data={me.Followings} />
            <FollowList header="팔로워 목록" data={me.Followers} />
        </AppLayout>
        </>
    );
}

export const getServerSideProps = wrapper.getServerSideProps(async (context)=>{
    const cookie = context.req? context.req.headers.cookie : '';
    axios.defaults.headers.Cookie = '';
    if (context.req && cookie) {
        axios.defaults.headers.Cookie = cookie;
    }

    context.store.dispatch({
        type: LOAD_MY_INFO_REQUEST,
    });
    
    context.store.dispatch(END); //REQUEST가 SUCCESS가 될때까지 기다려준다.
    await context.store.sagaTask.toPromise();
});

export default Profile;