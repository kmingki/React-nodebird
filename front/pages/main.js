import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { END } from 'redux-saga';
import { message } from 'antd';
import PostForm from '../components/PostForm';
import PostCard from '../components/PostCard';
import { LOAD_POSTS_REQUEST } from '../reducers/post';
import { LOAD_MY_INFO_REQUEST } from '../reducers/user';
import wrapper from '../store/configureStore';
import Layout from '../components/Layout';

const Main = () => {
  const dispatch = useDispatch();
  const { me } = useSelector((state) => state.user);
  const { mainPosts, hasMorePosts,
    loadPostsLoading, loadPostsError, retweetError } = useSelector((state) => state.post);
  useEffect(() => {
    if (retweetError) {
      return alert(retweetError);
    }
  }, [retweetError]);

  useEffect(() => {
    function onScroll() {
      // scrollY:스크롤을 얼마나 내렸는지 clientHeight: 화면길이
      if (window.scrollY + document.documentElement.clientHeight
        > document.documentElement.scrollHeight - 300) {
        if (hasMorePosts && !loadPostsLoading) {
          dispatch({
            type: LOAD_POSTS_REQUEST,
            data: mainPosts[mainPosts.length - 1]?.id, // 마지막 post의 id
          });
        }
      }
    }
    window.addEventListener('scroll', onScroll);

    return (window.removeEventListener('scroll', onScroll)); // 메모리누수로 인한 스크롤 이벤트 지우기
  }, [mainPosts, hasMorePosts, loadPostsLoading]);

  useEffect(() => {
    dispatch({
      type: LOAD_MY_INFO_REQUEST,
    });
  }, []);

  useEffect(() => {
    if (loadPostsError) {
      message.info(loadPostsError);
    }
  }, [loadPostsError]);

  const mainContents = (
    <>
      { me && <PostForm />}
      {mainPosts.map((post) => (<PostCard key={post.id} post={post} />))}
    </>
  );

  return (
    <>
      <Layout>{mainContents}</Layout>
    </>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(async (context) => {
  /*
  const cookie = context.req ? context.req.headers.cookie : '';
  axios.defaults.headers.Cookie = '';
  if (context.req && cookie) {
    axios.defaults.headers.Cookie = cookie;
  }
  */
  context.store.dispatch({
    type: LOAD_POSTS_REQUEST,
  });

  context.store.dispatch(END); // REQUEST가 SUCCESS가 될때까지 기다려준다.
  await context.store.sagaTask.toPromise();
});

export default Main;
