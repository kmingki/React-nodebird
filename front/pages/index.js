import React, { useEffect, useCallback } from 'react';
import { Form, Input, Button, message } from 'antd';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { LOG_IN_REQUEST } from '../reducers/user';
import useInput from '../hooks/useInput';

const contentStyle = {
  border: '1px solid #E0E0E0',
  height: '450px',
  width: '500px',
  margin: 'auto',
  marginTop: '100px',
  background: 'white',
};

const Home = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { me, logInError } = useSelector((state) => state.user); // connect() 대신 useSelector 사용
  const [email, onChangeEmail] = useInput('');
  const [password, onChangePassword] = useInput('');

  const onSubmitForm = useCallback(() => {
    dispatch({
      type: LOG_IN_REQUEST,
      data: { email, password },
    });
  }, [email, password]);

  useEffect(() => {
    if (logInError) {
      message.info(logInError);
    }
  }, [logInError]);

  useEffect(() => {
    if (me && me.id) {
      router.push('/main');
    }
  }, [me, me?.id]);

  return (
    <div style={contentStyle}>
      <h1 style={{ textAlign: 'center', margin: '50px 0', fontFamily: 'Righteous, cursive', fontSize: '50px' }}>Chatter</h1>

      <div className="loginForm" style={{ width: '300px', margin: '10px auto' }}>
        <Form onFinish={onSubmitForm}>
          <div>
            <Input
              name="user-email"
              type="email"
              placeholder="이메일"
              size="large"
              style={{ width: '300px', margin: '10px auto' }}
              value={email}
              onChange={onChangeEmail}
              required
            />
          </div>
          <div>
            <Input.Password
              name="user-password"
              type="password"
              placeholder="비밀번호"
              size="large"
              style={{ width: '300px', margin: '10px auto' }}
              value={password}
              onChange={onChangePassword}
              required
            />
          </div>

          <Button type="primary" htmlType="submit" style={{ width: '300px', margin: '10px auto' }}>로그인</Button>
          <Link href="/findPassWord"><a><p style={{ textAlign: 'center' }}>비밀번호를 잊으셨나요?</p></a></Link>

          계정이 없으신가요?&nbsp;&nbsp;
          <Link href="/signup"><a>회원가입</a></Link>

        </Form>
      </div>
    </div>
  );
};

export default Home;
