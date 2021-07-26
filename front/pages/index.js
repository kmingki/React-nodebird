import React, { useEffect } from 'react';
import { useDispatch , useSelector } from 'react-redux';

import PostForm from '../components/PostForm';
import PostCard from '../components/PostCard';
import AppLayout from '../components/AppLayout.js';
import { LOAD_POSTS_REQUEST } from '../reducers/post';

const Home = () => {

    const dispatch = useDispatch();
    const { me } = useSelector((state)=>state.user);
    const { mainPosts, hasMorePosts, loadPostsLoading } = useSelector((state)=>state.post);

    //컴포넌트가 렌더링 될때마다 특정 작업을 실행할 수 있도록 하는 Hook
    //component가 mount 됬을때, component가 unmount 됐을때, component가 update됬을때(특정 props, stat가 바뀔때)
    useEffect(()=>{
        dispatch({
            type: LOAD_POSTS_REQUEST,
        });
    }, [LOAD_POSTS_REQUEST]);

    useEffect(()=>{
        function onScroll(){
            //scrollY:스크롤을 얼마나 내렸는지 clientHeight: 화면길이
            if(window.scrollY+document.documentElement.clientHeight > document.documentElement.scrollHeight - 300) {
                if( hasMorePosts && !loadPostsLoading ){
                    dispatch({
                        type: LOAD_POSTS_REQUEST,
                        data: mainPosts[mainPosts.length - 1].id //마지막 post의 id????
                    });
                }
            }
        }
        window.addEventListener('scroll', onScroll);
        return () => {
            window.removeEventListener('scroll', onScroll);
        };
    }, [mainPosts, hasMorePosts, loadPostsLoading]);

    return (//AppLayout 사이에 있는것이 children으로 전달됨
        <AppLayout>
            { me && <PostForm />}
            {mainPosts.map((c) => {
        return (<PostCard key={c.id} post={c} />);
      })}
        </AppLayout>   
    );
};

export default Home;