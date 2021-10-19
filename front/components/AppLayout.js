import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Menu, Input, Row, Col, Button, Avatar } from "antd";
import Router from 'next/router';
import LoginForm from './LoginForm';
import UserProfile from './UserProfile';
import { useSelector } from "react-redux";
import useInput from '../hooks/useInput';
import { StarOutlined, SendOutlined, UserOutlined, GlobalOutlined, HomeOutlined, SearchOutlined, ConsoleSqlOutlined} from '@ant-design/icons';
import styled from 'styled-components';

const AppLayout = ({children}) => {
    const { me } = useSelector((state)=>state.user);
    const [searchInput, onChangeSearchInput] = useInput('');
    const onSearch = useCallback(()=>{
        Router.push(`/hashtag/${searchInput}`);
    }, [searchInput]);

    const toTop = () => {
        window.scrollTo({top:0, left:0, behavior:'auto'});
    };

    return(
        <div>
            <Row style={{clear: "both"}}>
                <Col xs={0} md={2} >
                </Col>
                <Col xs={3} md={0} >
                <div style={{position: "fixed"}}>
                <Button type="text" shape="circle" style={{display: "block", margin: "10px 5px", height: "50px", width: "50px"}} icon={<HomeOutlined style={{color: "#2C2C2C", fontSize: "23px", fontWeight: "100"}}/>} onClick={toTop}></Button>
                <Button type="text" shape="circle" style={{display: "block", margin: "10px 5px", height: "50px", width: "50px"}} icon={<SearchOutlined style={{color: "#2C2C2C", fontSize: "23px"}}/>}></Button>
                <Button type="text" shape="circle" style={{display: "block", margin: "10px 5px", height: "50px", width: "50px"}} icon={<SendOutlined style={{color: "#2C2C2C", fontSize: "23px"}}/>}></Button>
                <Button type="text" shape="circle" style={{display: "block", margin: "10px 5px", height: "50px", width: "50px"}} icon={<StarOutlined style={{color: "#2C2C2C", fontSize: "23px"}}/>}></Button>
                <Button type="text" shape="circle" style={{display: "block", margin: "10px 5px", height: "50px", width: "50px"}} icon={<UserOutlined style={{color: "#2C2C2C", fontSize: "23px"}}/>}></Button>
                <Button type="text" shape="circle" style={{display: "block", margin: "10px 5px", height: "50px", width: "50px"}} icon={<Avatar style={{color: "white", fontSize: "23px", backgroundColor:"green"}}>{me.nickname[0]}</Avatar>}></Button>
                </div>
                </Col>

                <Col xs={0} md={4} >
                <Link href="/main"><a><h1 style={{fontFamily: "Righteous, cursive", fontSize: "30px", marginLeft:"15px"}}>Chatter</h1></a></Link>
                <div style={{margin: "50px 0"}}>
                <Button type="text" shape="round" style={{display: "block", margin: "10px 0", height: "50px", width: "200px", fontSize: "20px"}} icon={<HomeOutlined style={{color: "#2C2C2C"}}/>}>Home</Button>
                <Button type="text" shape="round" style={{display: "block", margin: "10px 0", height: "50px", width: "200px", fontSize: "20px"}} icon={<GlobalOutlined style={{color: "#2C2C2C"}}/>}>Explore</Button>
                <Button type="text" shape="round" style={{display: "block", margin: "10px 0", height: "50px", width: "200px", fontSize: "20px"}} icon={<SendOutlined style={{color: "#2C2C2C"}}/>}>Message</Button>
                <Button type="text" shape="round" style={{display: "block", margin: "10px 0", height: "50px", width: "200px", fontSize: "20px"}} icon={<StarOutlined style={{color: "#2C2C2C"}}/>}>Notification</Button>
                <Button type="text" shape="round" style={{display: "block", margin: "10px 0", height: "50px", width: "200px", fontSize: "20px"}} icon={<UserOutlined style={{color: "#2C2C2C"}}/>}>Profile</Button>
                </div>
                <br />
                <br />
                <Button type="text" shape="round" style={{display: "block", margin: "10px auto", height: "50%", width: "70%", fontSize: "20px"}} icon={<Avatar>{me.nickname[0]}</Avatar>}>
                    &nbsp;<div style={{display: "inline-block"}}><p style={{fontSize: "15px"}}>{me.nickname}{me.email}</p></div></Button>
                </Col>

                <Col xs={21} md={12} >
                <div style={{borderStyle: "solid", borderWidth: "thin", borderColor: "#e2e2e2"}}>
                <Link href="/main"><a><h1 style={{fontSize: "30px", marginLeft:"15px"}}>Home</h1></a></Link>
                {children}
                </div>
                </Col>

                <Col xs={0} md={6}>
                <Input.Search placeholder="검색" onSearch={onSearch}/>
                </Col>
                <Col xs={0} md={2} >
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