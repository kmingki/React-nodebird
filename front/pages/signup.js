import React, { useCallback, useState, useEffect } from 'react';
import Head from 'next/head';
import { Form, Input, Button, message } from 'antd';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import Link from 'next/link';
import axios from 'axios';
import { END } from 'redux-saga';
import useInput from '../hooks/useInput';
import { SIGN_UP_REQUEST, LOAD_MY_INFO_REQUEST } from '../reducers/user';
import wrapper from '../store/configureStore';

const ErrorMessage = styled.div`
color: red;
`;

const contentStyle = {
  border: '1px solid #E0E0E0',
  height: '500px',
  width: '500px',
  margin: 'auto',
  marginTop: '100px',
  background: 'white',
};

const Signup = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { signUpDone, signUpError, me } = useSelector((state) => state.user);

  useEffect(() => {
    if ((!signUpDone) && me?.id) {
      message.info('이미 로그인 하셨습니다.');
      router.push('/main');
    }
  }, [me?.id, signUpDone]);

  // 회원가입하고 나서
  useEffect(() => {
    if (signUpDone) {
      router.push('/');
    }
  }, [signUpDone]);

  useEffect(() => {
    if (signUpError) {
      message.info(signUpError);
    }
  }, [signUpError]);

  const [email, onChangeEmail] = useInput('');
  const [nickname, onChangeNickname] = useInput('');
  const [password, onChangePassword] = useInput('');

  const [passwordCheck, setPasswordCheck] = useState('');
  const [passwordError, setPasswordError] = useState(false);

  const onChangePasswordCheck = useCallback((e) => {
    setPasswordCheck(e.target.value);
    setPasswordError(e.target.value !== password);
  }, [password]);

  const onSubmit = useCallback(() => {
    if (password !== passwordCheck) {
      setPasswordError(true);
    } else {
      dispatch({
        type: SIGN_UP_REQUEST,
        data: { email, password, nickname },
      });
    }
  }, [password, passwordCheck]);

  return (
    <>
      <Head>
        <title>Chatter에 가입하기</title>
      </Head>
      <div style={contentStyle}>
        <h1 style={{ textAlign: 'center', margin: '10px 0', fontFamily: 'Righteous, cursive', fontSize: '50px' }}>Chatter</h1>
        <h2 style={{ textAlign: 'center', fontWeight: 'bolder', color: 'grey' }}>새 계정 만들기</h2>
        <div className="loginForm" style={{ width: '300px', margin: '10px auto' }}>
          <Form onFinish={onSubmit}>
            <div>
              <Input
                name="user-email"
                type="email"
                placeholder="이메일"
                size="large"
                style={{ width: '300px', margin: '5px auto' }}
                value={email}
                onChange={onChangeEmail}
                required
              />
            </div>
            <div>
              <Input
                name="user-nickname"
                placeholder="닉네임"
                size="large"
                style={{ width: '300px', margin: '5px auto' }}
                value={nickname}
                onChange={onChangeNickname}
                required
              />

            </div>
            <div>
              <Input.Password
                name="user-password"
                type="password"
                placeholder="비밀번호"
                size="large"
                style={{ width: '300px', margin: '5px auto' }}
                value={password}
                onChange={onChangePassword}
                required
              />
            </div>
            <div>
              <Input.Password
                name="user-password-check"
                type="password"
                placeholder="비밀번호 확인"
                size="large"
                style={{ width: '300px', margin: '5px auto' }}
                value={passwordCheck}
                onChange={onChangePasswordCheck}
                required
              />
              {passwordError && <ErrorMessage>비밀번호가 일치하지 않습니다.</ErrorMessage>}
            </div>
            <br />
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Button type="primary" htmlType="submit">가입하기</Button>
            </div>
            <br />
            <div style={{ textAlign: 'center' }}>
              <Link href="/"><a>이미 계정이 있으신가요?</a></Link>
            </div>

          </Form>
        </div>
      </div>
    </>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(async (context) => {
  const cookie = context.req ? context.req.headers.cookie : '';
  axios.defaults.headers.Cookie = '';
  if (context.req && cookie) {
    axios.defaults.headers.Cookie = cookie;
  }

  // myinfo + pre render 된 html을 보내준다. 첫화면부터
  context.store.dispatch({
    type: LOAD_MY_INFO_REQUEST,
  });

  context.store.dispatch(END); // REQUEST가 SUCCESS가 될때까지 기다려준다.
  await context.store.sagaTask.toPromise();
});

export default Signup;
