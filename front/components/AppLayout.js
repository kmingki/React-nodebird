import React, { useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Menu, Input, Row, Col, Button, Avatar, Dropdown } from "antd";
import Router from 'next/router';
import { useDispatch, useSelector } from "react-redux";
import useInput from '../hooks/useInput';
import { StarOutlined, SendOutlined, UserOutlined, GlobalOutlined, HomeOutlined, SearchOutlined, ConsoleSqlOutlined} from '@ant-design/icons';
import styled from 'styled-components';
import { LOG_OUT_REQUEST } from '../reducers/user';


const AppLayout = ({children}) => {
    const dispatch = useDispatch();
    const { me } = useSelector((state)=>state.user);
    const [searchInput, onChangeSearchInput] = useInput('');

    const onSearch = useCallback(()=>{
        Router.push(`/hashtag/${searchInput}`);
    }, [searchInput]);

    const toTop = () => {
        window.scrollTo({top:0, left:0, behavior:'auto'});
    };

    const onLogOut = useCallback(()=>{
        dispatch({
            type: LOG_OUT_REQUEST,
        });

    }, [LOG_OUT_REQUEST]);

    const menu = (
        <Menu>
          <Menu.Item>
              <a onClick={onLogOut}>Log out</a> 
          </Menu.Item>
        </Menu>
    );
    
    return(
        <div>
            <Row style={{clear: "both"}}>
                <Col xs={0} md={2} >
                </Col>
                <Col xs={3} sm={3} md={0}>
                <div style={{height: "100%", position: "fixed", borderRight: "solid thin #e2e2e2"}}>
                <Button type="text" shape="circle" style={{display: "block", margin: "10px 5px", height: "50px", width: "50px"}} icon={<HomeOutlined style={{color: "#2C2C2C", fontSize: "23px", fontWeight: "100"}}/>} onClick={toTop}></Button>
                <Button type="text" shape="circle" style={{display: "block", margin: "10px 5px", height: "50px", width: "50px"}} icon={<SearchOutlined style={{color: "#2C2C2C", fontSize: "23px"}}/>}></Button>
                <Button type="text" shape="circle" style={{display: "block", margin: "10px 5px", height: "50px", width: "50px"}} icon={<SendOutlined style={{color: "#2C2C2C", fontSize: "23px"}}/>}></Button>
                <Button type="text" shape="circle" style={{display: "block", margin: "10px 5px", height: "50px", width: "50px"}} icon={<StarOutlined style={{color: "#2C2C2C", fontSize: "23px"}}/>}></Button>
                <Button type="text" shape="circle" style={{display: "block", margin: "10px 5px", height: "50px", width: "50px"}} icon={<UserOutlined style={{color: "#2C2C2C", fontSize: "23px"}}/>}></Button>
                <Button type="text" shape="circle" style={{display: "block", margin: "10px 5px", height: "50px", width: "50px"}} icon={<Avatar style={{color: "white", fontSize: "23px", backgroundColor:"green"}}>{me.nickname[0]}</Avatar>}></Button>
                </div>
                </Col>

                <Col xs={0} sm={0} md={4} >
                <div style={{margin: "50px 0"}}>
                <Button type="text" shape="circle" style={{display: "block", margin: "10px 5px", height: "50px", width: "50px"}} icon={<img src="twitter.png" width="50px" height="50px"/>} onClick={toTop}></Button>
                <Button type="text" shape="round" style={{display: "block", margin: "10px 0", height: "50px", fontSize: "20px"}} icon={<HomeOutlined style={{color: "#2C2C2C"}}/>}>&nbsp;Home</Button>
                <Button type="text" shape="round" style={{display: "block", margin: "10px 0", height: "50px", fontSize: "20px"}} icon={<GlobalOutlined style={{color: "#2C2C2C"}}/>}>&nbsp;Explore</Button>
                <Button type="text" shape="round" style={{display: "block", margin: "10px 0", height: "50px", fontSize: "20px"}} icon={<SendOutlined style={{color: "#2C2C2C"}}/>}>&nbsp;Message</Button>
                <Button type="text" shape="round" style={{display: "block", margin: "10px 0", height: "50px", fontSize: "20px"}} icon={<StarOutlined style={{color: "#2C2C2C"}}/>}>&nbsp;Notification</Button>
                <Button type="text" shape="round" style={{display: "block", margin: "10px 0", height: "50px", fontSize: "20px"}} icon={<UserOutlined style={{color: "#2C2C2C"}}/>}>&nbsp;Profile</Button>
                </div>
                <Dropdown overlay={menu}>
                <Button type="text" shape="round" style={{display: "block", margin: "10px 0", height: "50px", fontSize: "20px"}} icon={<Avatar>{me.nickname[0]}</Avatar>}>
                    &nbsp;<div style={{display: "inline-block"}}><p style={{fontSize:"18px"}}>&nbsp;&nbsp;{me.email}</p></div></Button>
                </Dropdown>
                
                </Col>

                <Col xs={21} sm={12} md={12} >
                <div>
                <div style={{top: "0", position: "fixed", width: "50%", borderBottom: "solid thin #e2e2e2", backgroundColor:"white", zIndex: "1", cursor: "pointer"}} onClick={toTop}>
                <h1 style={{fontSize: "25px", marginLeft:"15px"}}>Home</h1>
                </div>
                <div style={{marginTop: "50px"}}>
                {children}
                </div>
                </div>
                </Col>

                <Col xs={0} sm={4} md={4} >
                <Input.Search placeholder="검색" onSearch={onSearch} style={{marginTop: "10px", marginLeft: "10px"}}/>
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
