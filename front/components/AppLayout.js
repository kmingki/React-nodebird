import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Menu, Input, Row, Col } from "antd";
import Router from 'next/router';
import LoginForm from './LoginForm';
import UserProfile from './UserProfile';
import { useSelector } from "react-redux";
import useInput from '../hooks/useInput';
import { NodeExpandOutlined, SendOutlined, UserOutlined } from '@ant-design/icons';
import styled from 'styled-components';

const navContainerStyle={
    backgroundColor: "blue",
    listStyleType: "none", /*목록 기호 제거 */
    margin: "0",
    padding: "0",
    overflow: "hidden",
    zIndex: "100000",
}

const listStyle =  {
    float: "left",
    display: "block",
    padding: "8px",
    textDecoration: "none",
}

const AppLayout = ({children}) => {
    const { me } = useSelector((state)=>state.user);
    const [searchInput, onChangeSearchInput] = useInput('');
    const onSearch = useCallback(()=>{
        Router.push(`/hashtag/${searchInput}`);
    }, [searchInput]);

    return(
        <div>
            <ul className="nav-container" style={{navContainerStyle}}>
                <li className="home" style={listStyle}><Link href="/main"><a><h1 style={{fontFamily: "Playfair Display, serif"}}>Chatter</h1></a></Link></li>
                <li className="search" style={listStyle}><Input.Search placeholder="input search text" onSearch={onSearch} style={{ width: 200 }} /></li>
                <li className="message" style={listStyle}><SendOutlined /></li>
                <li className="profile" style={listStyle}><UserOutlined /></li>
            </ul>
            <Row gutter={8} style={{clear: "both"}}>
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