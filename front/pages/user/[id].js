
import React, { useEffect, useState, useRef, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Avatar, Image, Button, Modal, Input, Badge, Form } from 'antd';
import { PlusCircleFilled } from '@ant-design/icons';
import { END } from 'redux-saga';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

import axios from 'axios';
import { LOAD_USER_POSTS_REQUEST } from '../../reducers/post';
import { LOAD_MY_INFO_REQUEST, LOAD_USER_REQUEST, UPLOAD_PHOTO_REQUEST, EDIT_USER_PROFILE_REQUEST } from '../../reducers/user';
import PostCard from '../../components/PostCard';
import wrapper from '../../store/configureStore';
import DesktopLayout from '../../components/layout/DesktopLayout';

const User = () => {
  const imageInput = useRef();
  const dispatch = useDispatch();
  const router = useRouter();
  const { id } = router.query;
  const { mainPosts, hasMorePosts, loadPostsLoading } = useSelector((state) => state.post);
  const { userInfo, me, photoPath } = useSelector((state) => state.user);
  const [modalVisible, setmodalVisible] = useState(false);
  const [ nickname, setNickname ] = useState('');

  useEffect(() => {
    const onScroll = () => {
      if (window.pageYOffset + document.documentElement.clientHeight > document.documentElement.scrollHeight - 300) {
        if (hasMorePosts && !loadPostsLoading) {
          dispatch({
            type: LOAD_USER_POSTS_REQUEST,
            lastId: mainPosts[mainPosts.length - 1] && mainPosts[mainPosts.length - 1].id,
            data: id,
          });
        }
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [mainPosts.length, hasMorePosts, id, loadPostsLoading]);

  const onChangeNickname = useCallback((e) => {
    setNickname(e.target.value);
  }, []);

  const onClickEditProfile = () => {
    setmodalVisible(true);
  }
  const onClickClose = () => {
    setmodalVisible(false);
  }

  const onClickEditProfilePhoto = useCallback(() => {
    imageInput.current.click();
  }, [imageInput.current]);

  const onChangePhoto = useCallback((e) => {
    console.log('images', e.target.files);
    const imageFormData = new FormData();
    imageFormData.append('photo', e.target.files[0]);
    dispatch({
      type: UPLOAD_PHOTO_REQUEST,
      data: imageFormData,
    });
  }, []);

  const onClickSave  = useCallback(() => {
    if (!nickname || !nickname.trim()) {
      return alert('게시글을 작성하세요.');
    }

    const formData = new FormData();
    imagePaths.forEach((p) => {
      formData.append('image', p);//req.body.image
    });
    formData.append('content', nickname);//req.body.content

    dispatch({
      type: EDIT_USER_PROFILE_REQUEST,
      data: formData,
    });
  }, [nickname]);

  return (
    <DesktopLayout>
      {userInfo && (
        <Head>
          <title>
            {userInfo.nickname}
            님의 글
          </title>
          <meta name="description" content={`${userInfo.nickname}님의 게시글`} />
          <meta property="og:title" content={`${userInfo.nickname}님의 게시글`} />
          <meta property="og:description" content={`${userInfo.nickname}님의 게시글`} />
          <meta property="og:image" content="https://nodebird.com/favicon.ico" />
          <meta property="og:url" content={`https://nodebird.com/user/${id}`} />
        </Head>
      )}
      {userInfo
        ? (
          <>
          <div style={{display:"flex", alignItems:"center", justifyContent: "space-between", margin:"20px"}}>
                <div style={{display: "flex", alignItems:"center", justifyContent: "center"}}>
                    <Avatar src={<Image src="https://joeschmoe.io/api/v1/random"/>} size={128}/>
                    <div style={{display: "inline-block"}}>
                        <h2>{userInfo.nickname}</h2>
                        <p>{userInfo.email}</p>
                    </div>
                </div>
                {me && me.id==userInfo.id ?
                <Button shape="round" onClick={onClickEditProfile}>Edit profile</Button>:
                null}
            </div>
            <div style={{display:"flex", margin:"20px"}}>
                <p>{userInfo.Followings} Following {userInfo.Followers} Followers</p>
            </div>
            <Modal
          visible={modalVisible}
          title="Edit profile"
          onCancel={onClickClose}
          footer={null}
        >
        <Form style={{ margin: '10px 0 20px' }} encType="multipart/form-data" onFinish={onClickSave}>
          <div onClick={onClickEditProfilePhoto} style={{cursor:"pointer"}}>
          <input type="file" name="photo" hidden ref={imageInput} onChange={onChangePhoto} />
          <Badge count={<PlusCircleFilled style={{ color: 'red' }} style={{fontSize:"25px"}}/>}  offset={[-10, 110]}>
          <Avatar src={`http://localhost:3065/profile/${photoPath}`} size={128}/>
          </Badge>
          </div>
          <Input placeholder="Nickname" style={{marginTop: "20px"}} value={nickname} onChange={onChangeNickname}/>
          <Button shape="round" htmlType="submit" style={{marginTop: "20px"}}>업로드</Button>
        </Form>

          
        </Modal>
          </>
        )
        : null}
      {mainPosts.map((post) => <PostCard key={post.id} post={post} />)}
    </DesktopLayout>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(async (context) => {
  const cookie = context.req ? context.req.headers.cookie : '';
  axios.defaults.headers.Cookie = '';
  if (context.req && cookie) {
    axios.defaults.headers.Cookie = cookie;
  }
  context.store.dispatch({
    type: LOAD_USER_POSTS_REQUEST,
    data: context.params.id,
  });
  context.store.dispatch({
    type: LOAD_MY_INFO_REQUEST,
  });
  context.store.dispatch({
    type: LOAD_USER_REQUEST,
    data: context.params.id,
  });
  context.store.dispatch(END);
  await context.store.sagaTask.toPromise();
  //console.log('getState', context.store.getState().post.mainPosts);
  return { props: {} };
});

export default User;
