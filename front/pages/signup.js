import React, { useCallback, useState, useEffect } from 'react';
import Head from 'next/head';
import { Form, Input, Checkbox, Button } from 'antd';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';

import AppLayout from '../components/appLayout';
import useInput from '../hooks/useInput';
import { SIGN_UP_REQUEST, SIGN_UP_DONE, LOAD_MY_INFO_REQUEST} from '../reducers/user';
import wrapper from '../store/configureStore';
import axios from 'axios';
import { END } from 'redux-saga';
const ErrorMessage = styled.div`
color: red;
`;

//cors import 해주고 백엔드 서버 url로 바꿔줬더니 된다
//이슈 : 404error 발생

const Signup = () => {
    const dispatch = useDispatch();
    const {  signUpLoading, signUpDone, signUpError, me } = useSelector((state)=>state.user);

    //useEffect
    //리액트컴포넌트가 렌더링 될때마다 특정 작업을 실행할 수 있도록 하는 Hook
    useEffect(()=>{
        if ( me?.id ) { //optional chaining
            Router.replace('/');
        }
    },[me]);

    useEffect(()=>{
        if (signUpDone) {
            Router.replace('/');
        }
    }), [signUpDone];

    useEffect(()=>{
        if (signUpError) {
            alert(signUpError);
        }
    },[signUpError])


    const [email, onChangeEmail] = useInput('');
    const [nickname, onChangeNickname] = useInput('');
    const [password, onChangePassword] = useInput('');

    const [passwordCheck, setPasswordCheck] = useState('');
    const [passwordError, setPasswordError] = useState(false);//passwordError가 원래는 false였음
    const onChangePasswordCheck = useCallback((e)=>{
        setPasswordCheck(e.target.value);
        setPasswordError(e.target.value !== password);//다르면 password를 true로 set한다
    }, [password]);

    const [term, setTerm] = useState('');
    const [termError, setTermError] = useState(false);
    const onChangeTerm = useCallback((e) => {
        setTerm(e.target.checked);
        setTermError(false);
    }, []);

    const onSubmit = useCallback(()=>{
        if(password !== passwordCheck){
            return setPasswordError(true);
        }
        if(!term) {
            return setTermError(true);
        }
        
        dispatch({
            type: SIGN_UP_REQUEST,
            data: { email, password, nickname },
        });
        
    },[password,passwordCheck,term]);

    return (
        <AppLayout>
            <Head>
            <title>회원가입 | NodeBird</title>
            </Head> 
            <Form onFinish={onSubmit}>
                <div>
                    <label htmlFor="user-email">이메일</label>
                    <br />
                    <Input name="user-email" type="email" value={email} required onChange={onChangeEmail} />
                </div>
                <div>
                    <label htmlFor="user-nickname">닉네임</label>
                    <br />
                    <Input name="user-nickname" value={nickname} required onChange={onChangeNickname} />
                </div>
                <div>
                    <label htmlFor="user-password">비밀번호</label>
                    <br />
                    <Input name="user-password" type="password" value={password} required onChange={onChangePassword} />
                </div>
                <div>
                    <label htmlFor="user-password-check">비밀번호체크</label>
                    <br />
                    <Input 
                    name="user-password-check"
                    type="password"
                    value={passwordCheck}
                    required
                    onChange={onChangePasswordCheck}
                    />
                    {passwordError && <ErrorMessage>비밀번호가 일치하지 않습니다.</ErrorMessage>}
                </div>
                    <div>
                    <Checkbox name="user-term" checked={term} onChange={onChangeTerm}>제로초 말을 잘 들을 것을 동의합니다.</Checkbox>
                    {termError && <ErrorMessage>약관에 동의하셔야 합니다.</ErrorMessage>}
                    </div>
                    <div style={{marginTop: 10}}>
                        <Button type="primary" htmlType="submit">가입하기</Button>
                    </div>
            </Form>
        </AppLayout>
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

export default Signup;