import React from 'react';
import { Form, Input, Button } from 'antd';
import useInput from '../hooks/useInput';
import Link from 'next/link';

const Home = () => {
    
    const [email, onChangeEmail] = useInput('');
    const [password, onChangePassword] = useInput('');
    
    const onSubmitForm = () => {

    };

    const contentStyle = { 
        border: "1px solid #E0E0E0", 
        height: "450px", 
        width: "500px", 
        margin: "auto", 
        marginTop: "100px", 
        background:"white"
    };

    return (
        <div style={contentStyle}>
            <h1 style={{textAlign: "center", margin: "30px 0"}}>Chatter</h1>
            
            <div className="loginForm" style={{width:"300px", margin:"10px auto"}}>
                <Form onFinish={onSubmitForm}>
                    <div>
                        <Input 
                        name="user-email" 
                        type="email"
                        placeholder="이메일"
                        size="large"
                        style={{width:"300px", margin:"10px auto"}} 
                        value={email} 
                        onChange={onChangeEmail} 
                        required />
                    </div>
                    <div>
                        <Input.Password
                            name="user-password" 
                            type="password"
                            placeholder="비밀번호"
                            size="large"
                            style={{width : "300px", margin: "10px auto"}} 
                            value={password} 
                            onChange={onChangePassword} 
                            required />
                    </div>
                    
                    <Button type="primary" htmlType="submit" style={{width : "300px", margin: "10px auto"}}>로그인</Button>
                    <Link href="/findPassWord"><a><p style={{textAlign: "center"}}>비밀번호를 잊으셨나요?</p></a></Link>
                    
                    
                    계정이 없으신가요?  
                    <Link href="/signup"><a>회원가입</a></Link>
                
                </Form>
            </div>
        </div>
    );
};



export default Home;