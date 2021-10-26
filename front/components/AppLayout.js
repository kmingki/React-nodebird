import React, { useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Menu, Input, Row, Col, Button, Avatar, Dropdown } from "antd";
import Router from 'next/router';
import { useDispatch, useSelector } from "react-redux";
import useInput from '../hooks/useInput';
import { StarOutlined, MailOutlined, UserOutlined, GlobalOutlined, HomeOutlined, SearchOutlined} from '@ant-design/icons';
import styled from 'styled-components';
import { LOG_OUT_REQUEST } from '../reducers/user';
import { useRouter } from 'next/router';

const AppLayout = ({children, SideBar, HomeBar}) => {
    const router = useRouter();
    const dispatch = useDispatch();
    const { me } = useSelector((state)=>state.user);

    const toTop = () => {
        router.push('/main');
        window.scrollTo({top:0, left:0, behavior:'auto'});
    };

    const onLogOut = useCallback(()=>{
        dispatch({
            type: LOG_OUT_REQUEST,
        });

    }, [LOG_OUT_REQUEST]);

    const onClickMessages = useCallback(()=>{
        return router.push('/messages');
    });

    const onClickProfile = useCallback(()=>{
        return router.push('/profile');
    });

    const menu = (
        <Menu>
          <Menu.Item>
              <a onClick={onLogOut}>Log out</a> 
          </Menu.Item>
        </Menu>
    );
    
    return(
        <div>
            <Row>

                <Col xs={3} sm={4} md={0} style={{height: "100%", position: "fixed", borderRight: "solid thin #EFEEF5", zIndex: "2", backgroundColor:"white"}}>
                <div>
                <Button type="text" shape="circle" style={{display: "block", margin: "10px 5px", height: "50px", width: "50px"}} icon={<img src="twitter.png" width="50px" height="50px"/>} onClick={toTop}></Button>
                <Button type="text" shape="circle" style={{display: "block", margin: "10px 5px", height: "50px", width: "50px"}} icon={<HomeOutlined style={{color: "#2C2C2C", fontSize: "23px", fontWeight: "100"}}/>} onClick={toTop}></Button>
                <Button type="text" shape="circle" style={{display: "block", margin: "10px 5px", height: "50px", width: "50px"}} icon={<SearchOutlined style={{color: "#2C2C2C", fontSize: "23px"}}/>}></Button>
                <Button type="text" shape="circle" style={{display: "block", margin: "10px 5px", height: "50px", width: "50px"}} icon={<MailOutlined style={{color: "#2C2C2C", fontSize: "23px"}}/>}></Button>
                <Button type="text" shape="circle" style={{display: "block", margin: "10px 5px", height: "50px", width: "50px"}} icon={<StarOutlined style={{color: "#2C2C2C", fontSize: "23px"}}/>}></Button>
                <Button type="text" shape="circle" style={{display: "block", margin: "10px 5px", height: "50px", width: "50px"}} icon={<UserOutlined style={{color: "#2C2C2C", fontSize: "23px"}}/>}></Button>
                <Button type="text" shape="circle" style={{display: "block", margin: "10px 5px", height: "50px", width: "50px"}} icon={<Avatar style={{color: "white", fontSize: "23px", backgroundColor:"green"}}>{me.nickname[0]}</Avatar>}></Button>
                </div>
                </Col>

                <Col xs={0} sm={0} md={4} offset={2} style={{position: "fixed"}}>
                <div>
                <Button type="text" shape="circle" style={{display: "block", margin: "10px 5px", height: "50px", width: "50px"}} icon={<img src="twitter.png" width="50px" height="50px"/>} onClick={toTop}></Button>
                <Button type="text" shape="round" style={{display: "block", margin: "10px 0", height: "50px", fontSize: "20px"}} icon={<HomeOutlined style={{color: "#2C2C2C"}}/>} onClick={toTop}>&nbsp;Home</Button>
                <Button type="text" shape="round" style={{display: "block", margin: "10px 0", height: "50px", fontSize: "20px"}} icon={<GlobalOutlined style={{color: "#2C2C2C"}}/>}>&nbsp;Explore</Button>
                <Button type="text" shape="round" style={{display: "block", margin: "10px 0", height: "50px", fontSize: "20px"}} icon={<MailOutlined style={{color: "#2C2C2C"}}/>} onClick={onClickMessages}>&nbsp;Messages</Button>
                <Button type="text" shape="round" style={{display: "block", margin: "10px 0", height: "50px", fontSize: "20px"}} icon={<StarOutlined style={{color: "#2C2C2C"}}/>}>&nbsp;Notification</Button>
                <Button type="text" shape="round" style={{display: "block", margin: "10px 0", height: "50px", fontSize: "20px"}} icon={<UserOutlined style={{color: "#2C2C2C"}}/>} onClick={onClickProfile}>&nbsp;Profile</Button>
                </div>
                <Dropdown overlay={menu} trigger={['click']} overlayStyle={{position: "fixed"}}>
                <Button type="text" shape="round" style={{display: "block", margin: "10px 0", height: "50px", fontSize: "20px"}} icon={<Avatar>{me.nickname[0]}</Avatar>}>
                    &nbsp;<div style={{display: "inline-block"}}><p style={{fontSize:"18px"}}>&nbsp;&nbsp;{me.email}</p></div></Button>
                </Dropdown>
                
                </Col>

                <Col xs={21} sm={0} md={0} style={{marginLeft: "12.5%"}}>
                <div style={{top: "0", position: "fixed", width: "100%", borderBottom: "solid thin #EFEEF5", backgroundColor:"white", zIndex: "1", cursor: "pointer"}} onClick={toTop}>
                <h1 style={{fontSize: "25px"}}>&nbsp;&nbsp;&nbsp;Home</h1>
                </div>
                <div style={{marginTop: "50px"}}>
                {children}
                </div>
                </Col>

                <Col xs={0} sm={20} md={0} offset={2}>
                <div style={{top: "0", position: "fixed", width: "100%", borderBottom: "solid thin #EFEEF5", backgroundColor:"white", zIndex: "1", cursor: "pointer"}} onClick={toTop}>
                <h1 style={{fontSize: "25px"}}>&nbsp;&nbsp;&nbsp;Home</h1>
                </div>
                <div style={{marginTop: "50px", zIndex: "-1"}}>
                {children}
                </div>
                </Col>

                <Col xs={0} sm={0} md={10} offset={6} style={{height: "100%", borderLeft: "solid thin #EFEEF5", borderRight: "solid thin #EFEEF5"}}>
                <div>
                {children}
                </div>
                </Col>

                <Col xs={0} sm={0} md={6} offset={16} style={{position: "fixed", borderRight: "solid thin #EFEEF5"}}>
                {SideBar}
                </Col>

            </Row>
        </div>
    );
};

AppLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AppLayout;
