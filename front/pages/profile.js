import React, { useCallback, useEffect, useState } from 'react';
import Head from 'next/head';
import AppLayout from '../components/AppLayout';
import { useRouter } from 'next/router';
import NicknameEditForm from '../components/NicknameEditForm';
import FollowList from '../components/FollowList';
import useSWR from 'swr';
import { useSelector, useDispatch } from 'react-redux';
import { LOAD_MY_INFO_REQUEST } from '../reducers/user';

import wrapper from '../store/configureStore';
import axios from 'axios';
import { END } from 'redux-saga';

const fetcher = (url) => axios.get(url, { withCredentials: true}).then((result)=>result.data);

const Profile = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    const { me } = useSelector((state)=>state.user);
    const [ followersLimit, setfollowersLimit ] = useState(3);
    const [ followingsLimit, setfollowingsLimit ] = useState(3);
    //data와 error가 둘다 없으면 로딩중

    const { data: followersData , error: followersError } = useSWR(`http://localhost:3065/user/loadFollowers?limit=${followersLimit}`, fetcher);
    const { data: followingsData , error: followingsError } = useSWR(`http://localhost:3065/user/loadFollowings?limit=${followingsLimit}`, fetcher);
    
    useEffect(()=>{
        if (!(me && me.id)) {
            alert('로그인 해주세요');
            return router.push('/');
        }
    }, [me?.id]);

    const loadMoreFollowings = useCallback(()=>{
        setfollowingsLimit((prev)=>prev+3);
    }, []);

    const loadMoreFollowers = useCallback(()=>{
        setfollowersLimit((prev)=>prev+3);
    }, []);

    if (!me) {
        return '내 정보 로딩중 ...';
    }
    
    if (followersError || followingsError) {
        console.error(followersError || followingsError);
        return <div>팔로잉/팔로워 로딩 중 에러가 발생합니다.</div>;
    }

    return (
        <>
            <Head>
                <title>내 프로필 | NodeBird</title>    
            </Head>
        <AppLayout>
            <NicknameEditForm />
            <FollowList header="팔로잉 목록" data={followingsData} onClickMore={loadMoreFollowings} loading={!followingsData && !followingsError}/>
            <FollowList header="팔로워 목록" data={followersData} onClickMore={loadMoreFollowers} loading={!followersData && !followersError}/>
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