import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { END } from 'redux-saga';
import axios from 'axios';
import Router from 'next/router';
import { useMediaQuery } from 'react-responsive';
import { message } from 'antd';
import PostForm from '../components/PostForm';
import PostCard from '../components/PostCard';
import { LOAD_POSTS_REQUEST } from '../reducers/post';
import { LOAD_MY_INFO_REQUEST } from '../reducers/user';
import wrapper from '../store/configureStore';
import MobileLayout from '../components/layout/MobileLayout';
import DesktopLayout from '../components/layout/DesktopLayout';
import TabletLayout from '../components/layout/tabletLayout';
import SideBar from '../components/SideBar';
import Title from '../components/layout/Title';
import Menu from '../components/layout/Menu';
import SideMenu from '../components/layout/SideMenu';

const Main = () => {
  const dispatch = useDispatch();
  const { me } = useSelector((state) => state.user);
  const { mainPosts, hasMorePosts,
    loadPostsLoading, loadPostsError, retweetError } = useSelector((state) => state.post);
  const isMobile = useMediaQuery({ maxWidth: 500 }); // ~500
  const isTablet = useMediaQuery({ minWidth: 501, maxWidth: 1023 }); // 501~1023
  const isDesktop = useMediaQuery({ minWidth: 1024 });

  useEffect(() => {
    if (retweetError) {
      return alert(retweetError);
    }
  }, [retweetError]);

  useEffect(() => {
    function onScroll() {
      // scrollY:스크롤을 얼마나 내렸는지 clientHeight: 화면길이
      if (window.scrollY + document.documentElement.clientHeight > document.documentElement.scrollHeight - 300) {
        if (hasMorePosts && !loadPostsLoading) {
          dispatch({
            type: LOAD_POSTS_REQUEST,
            data: mainPosts[mainPosts.length - 1]?.id, // 마지막 post의 id
          });
        }
      }
    }
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [mainPosts, hasMorePosts, loadPostsLoading]);

  useEffect(() => {
    if (loadPostsError) {
      message.info(loadPostsError);
    }
  }, [loadPostsError]);

  /*
  useEffect(() => {
    if (!me) {
      return Router.push('/');
    }
  }, [me]);
*/
  const mainContents = (
    <>
      { me && <PostForm />}
      {mainPosts.map((post) => (<PostCard key={post.id} post={post} />))}
    </>
  );

  return (
    <>
      { isDesktop && (
      <DesktopLayout Side={<SideBar />}>
        {mainContents}
      </DesktopLayout>
      )}
      { isTablet && (
      <TabletLayout SideMenu={<SideMenu />} Side={<SideBar />}>
        {mainContents}
      </TabletLayout>
      )}
      { isMobile && (
      <MobileLayout Header={<Title />} Menu={<Menu />}>
        {mainContents}
      </MobileLayout>
      )}
    </>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(async (context) => {
  const cookie = context.req ? context.req.headers.cookie : '';
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

  context.store.dispatch(END); // REQUEST가 SUCCESS가 될때까지 기다려준다.
  await context.store.sagaTask.toPromise();
});

export default Main;
