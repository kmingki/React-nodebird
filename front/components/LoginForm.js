import React, { useCallback, useEffect } from 'react';//useCallback-특정함수를 새로만들지않고 재사용
import { Form, Input, Button } from "antd";
import Link from 'next/link';
import styled from 'styled-components';
import useInput from '../hooks/useInput';
import { useDispatch, useSelector } from 'react-redux';

import { LOG_IN_REQUEST } from '../reducers/user';

const ButtonWrapper = styled.div`
    margin-top: 10px;
`;

/*
const FormWrapper = styled(Form)`
    padding: 10px;
`;
*/
const LoginForm = () => {
    const dispatch = useDispatch();
    const { logInLoading, logInError } = useSelector((state)=>state.user);
    const [email, onChangeEmail] = useInput('');  
    const [password, onChangePassword] = useInput('');

    useEffect(()=>{
        if(logInError){
            alert(logInError);
        }
    }, [logInError])

    const onSubmitForm = useCallback(() => {
        dispatch({
            type: LOG_IN_REQUEST,
            data: { email, password },
        });
      }, [email, password]);

    //button의 submit실행되면 onFinish 실행된다.
    return (
        <Form style={{padding: "10px"}} onFinish={onSubmitForm}>
            <div>
                <label htmlFor="user-email">이메일</label>
                <br />
                <Input name="user-email" type="email" value={email} onChange={onChangeEmail} required />
            </div>
            <div>
                <label htmlFor="user-password">비밀번호</label>
                <br />
                <Input 
                    name="user-password" 
                    type="password" 
                    value={password} 
                    onChange={onChangePassword} 
                    required />
            </div>
            <ButtonWrapper>
                <Button type="primary" htmlType="submit" loading={logInLoading}>로그인</Button>
                <Link href="/signup"><a><Button>회원가입</Button></a></Link>
            </ButtonWrapper>
        </Form>
    )
}

export default LoginForm;