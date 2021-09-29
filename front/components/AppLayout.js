import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Menu, Input, Row, Col } from "antd";
import Router from 'next/router';
import LoginForm from './LoginForm';
import UserProfile from './UserProfile';
import { useSelector } from "react-redux";
import useInput from '../hooks/useInput';

const AppLayout = ({children}) => {
    const { me } = useSelector((state)=>state.user);
    const [searchInput, onChangeSearchInput] = useInput('');
    const onSearch = useCallback(()=>{
        Router.push(`/hashtag/${searchInput}`);
    }, [searchInput]);

    return(
        <div>
            <Menu mode="horizontal">
                <Menu.Item key="home">
                    <Link href="/"><a>노드</a></Link>
                </Menu.Item>
                <Menu.Item key="profile">
                    <Link href="/profile"><a>프로필</a></Link>
                </Menu.Item>
                <Menu.Item key="search">
                    <Input.Search enterButton style={{verticalAlign:'middle'}} value={searchInput} onChange={onChangeSearchInput} onSearch={onSearch}/>
                </Menu.Item>
                <Menu.Item>
                    <Link href="/signup"><a>회원가입</a></Link>
                </Menu.Item>
            </Menu> 
            <Row gutter={8}>
                <Col xs={24} md={6}>
                    {me ? <UserProfile /> : <LoginForm />}
                </Col>
                <Col xs={24} md={12}>
                {children}
                </Col>
                <Col xs={24} md={6}>
                <a href="https://www.naver.com" target="_blank" rel="noreferrer noopener">Made by Minji</a>
                </Col>
            </Row>
        </div>
    );
};

AppLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AppLayout;