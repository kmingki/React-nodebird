import React, { useEffect } from 'react';
import { useDispatch , useSelector } from 'react-redux';
import { END } from 'redux-saga';
import PostForm from '../components/PostForm';
import PostCard from '../components/PostCard';
import { LOAD_POSTS_REQUEST } from '../reducers/post';
import { LOAD_MY_INFO_REQUEST } from '../reducers/user';
import wrapper from '../store/configureStore';
import axios from 'axios';
import Router from 'next/router';
import MobileLayout from '../components/layout/MobileLayout.js';
import DesktopLayout from '../components/layout/DesktopLayout.js';
import TabletLayout from '../components/layout/tabletLayout';
import SideBar from '../components/SideBar';
import Title from '../components/layout/Title';
import Menu from '../components/layout/Menu';
import SideMenu from '../components/layout/SideMenu';

import { useMediaQuery } from 'react-responsive';

const Main = () => {
    const dispatch = useDispatch();
    const { me } = useSelector((state)=>state.user);
    const { mainPosts, hasMorePosts, loadPostsLoading, retweetError } = useSelector((state)=>state.post);
    const isMobile = useMediaQuery({ maxWidth: 500 }); //~500
    const isTablet = useMediaQuery({ minWidth: 501, maxWidth: 1023}); //501~1023
    const isDesktop = useMediaQuery({ minWidth: 1024 });
    //const isBigDesktop = useMediaQuery({ minWidth: 1280 });

    //useEffect : 컴포넌트가 렌더링 될때마다 특정 작업을 실행할 수 있도록 하는 Hook
    //component가 mount 됬을때, component가 unmount 됐을때, component가 update됬을때(특정 props, stat가 바뀔때)
    useEffect(()=>{
        if (retweetError){
            return alert(retweetError);
        }
    }, [retweetError]);

    useEffect(()=>{
        function onScroll(){
            //scrollY:스크롤을 얼마나 내렸는지 clientHeight: 화면길이
            if(window.scrollY + document.documentElement.clientHeight > document.documentElement.scrollHeight - 300) {
                if( hasMorePosts && !loadPostsLoading ){
                    dispatch({
                        type: LOAD_POSTS_REQUEST,
                        data: mainPosts[mainPosts.length - 1]?.id //마지막 post의 id
                    });
                }
            }
        }
        window.addEventListener('scroll', onScroll);
        return () => {
            window.removeEventListener('scroll', onScroll);
        };
    }, [mainPosts, hasMorePosts, loadPostsLoading]);
    
    useEffect(()=>{
        if (!me) {
            return Router.push('/');
        }
    }, [me]);
    
    return (
        <>
        { isDesktop && (<DesktopLayout Side={<SideBar />}>
                    { me && <PostForm />}
                    {mainPosts.map((post) => {
                        return (<PostCard key={post.id} post={post} />);
                    })}
                    </DesktopLayout>)
        }
        { isTablet && (<TabletLayout SideMenu={<SideMenu />} Side={<SideBar />}>
        { me && <PostForm />}
        {mainPosts.map((post) => {
            return (<PostCard key={post.id} post={post} />);
        })}
        </TabletLayout>)
        }
        { isMobile && (<MobileLayout Header={<Title />} Menu={<Menu />}>
            { me && <PostForm />}
            {mainPosts.map((post) => {
                return (<PostCard key={post.id} post={post} />);
            })}
            </MobileLayout>)
            }
        </>
    );
};

export const getServerSideProps = wrapper.getServerSideProps(async (context)=>{
    
    const cookie = context.req? context.req.headers.cookie : '';
    axios.defaults.headers.Cookie = '';
    if (context.req && cookie) {
        axios.defaults.headers.Cookie = cookie;
    }

    context.store.dispatch({
        type: LOAD_MY_INFO_REQUEST,
    });
    context.store.dispatch({
        type: LOAD_POSTS_REQUEST,
    });
    
    context.store.dispatch(END); //REQUEST가 SUCCESS가 될때까지 기다려준다.
    await context.store.sagaTask.toPromise();
});

export default Main;
