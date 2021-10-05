import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Menu, Input, Row, Col } from "antd";
import Router from 'next/router';
import LoginForm from './LoginForm';
import UserProfile from './UserProfile';
import { useSelector } from "react-redux";
import useInput from '../hooks/useInput';
import { StarOutlined, SendOutlined, UserOutlined, GlobalOutlined } from '@ant-design/icons';
import styled from 'styled-components';

const AppLayout = ({children}) => {
    const { me } = useSelector((state)=>state.user);
    const [searchInput, onChangeSearchInput] = useInput('');
    const onSearch = useCallback(()=>{
        Router.push(`/hashtag/${searchInput}`);
    }, [searchInput]);

    return(
        <div style={{marginLeft: "150px", marginRight: "150px"}}>
            <Row gutter={8} style={{backgroundColor: "white", height: "55px"}}>
                <Col xs={24} md={6}>
                <Link href="/main"><a><h1 style={{fontFamily: "Righteous, cursive", fontSize: "30px", marginLeft:"15px"}}>Chatter</h1></a></Link>
                </Col>
                <Col xs={24} md={12}>
                <Input.Search placeholder="검색" onSearch={onSearch} style={{ width: 200}} />
                </Col>
                <Col xs={24} md={6}>
                <Link href="/community"><a><GlobalOutlined style={{ fontSize: "25px", marginTop:"15px", color: "#2C2C2C"}}/></a></Link>
                <Link href="/message"><a><SendOutlined style={{ fontSize: "25px", marginTop:"15px", marginLeft:"15px", color: "#2C2C2C"}}/></a></Link>
                <Link href="/activity"><a><StarOutlined style={{ fontSize: "25px", marginTop:"15px", marginLeft:"15px", color: "#2C2C2C" }}/></a></Link>
                <Link href="/profile"><a><UserOutlined style={{ fontSize: "25px", marginTop:"15px", marginLeft:"15px", color: "#2C2C2C" }}/></a></Link>
                </Col>
            </Row>
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


/**
 * <ul className="nav-container" style={{navContainerStyle}}>
                <li className="search" style={listStyle}><Input.Search placeholder="input search text" onSearch={onSearch} style={{ width: 200 }} /></li>
                <li className="message" style={listStyle}><SendOutlined style={{display: "block"}}/></li>
                <li className="profile" style={listStyle}><UserOutlined style={{display: "block"}}/></li>
            </ul>
 */