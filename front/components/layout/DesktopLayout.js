import React, { useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Menu, Input, Row, Col, Button, Avatar, Dropdown } from "antd";
import Router from 'next/router';
import { useDispatch, useSelector } from "react-redux";
import useInput from '../../hooks/useInput';
import { StarOutlined, MailOutlined, UserOutlined, GlobalOutlined, HomeOutlined, SearchOutlined} from '@ant-design/icons';
import styled from 'styled-components';
import { LOG_OUT_REQUEST } from '../../reducers/user';
import { useRouter } from 'next/router';

const DesktopLayout = ({children, Side}) => {
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
        return router.push('/message/main');
    });

    const onClickProfile = useCallback(()=>{
        return router.push(`/user/${me.id}`);
    });


    const menu = (
        <Menu>
          <Menu.Item>
              <a onClick={onLogOut}>Log out</a> 
          </Menu.Item>
        </Menu>
    );
    
    return(
        <div style={{display:"flex", width:"80%", margin:"0 auto"}}>
            <div style={{display:"flex", flexFlow:"row wrap", width:"20%", alignContent: "flex-start"}}>
                <Button type="text" shape="round" style={{display: "block", margin: "10px 0", height: "50px", fontSize: "20px"}} icon={<HomeOutlined style={{color: "#2C2C2C"}}/>} onClick={toTop}>&nbsp;Home</Button>
                <Button type="text" shape="round" style={{display: "block", margin: "10px 0", height: "50px", fontSize: "20px"}} icon={<GlobalOutlined style={{color: "#2C2C2C"}}/>}>&nbsp;Explore</Button>
                <Button type="text" shape="round" style={{display: "block", margin: "10px 0", height: "50px", fontSize: "20px"}} icon={<MailOutlined style={{color: "#2C2C2C"}}/>} onClick={onClickMessages}>&nbsp;Messages</Button>
                <Button type="text" shape="round" style={{display: "block", margin: "10px 0", height: "50px", fontSize: "20px"}} icon={<StarOutlined style={{color: "#2C2C2C"}}/>}>&nbsp;Notification</Button>
                <Button type="text" shape="round" style={{display: "block", margin: "10px 0", height: "50px", fontSize: "20px"}} icon={<UserOutlined style={{color: "#2C2C2C"}}/>} onClick={onClickProfile}>&nbsp;Profile</Button>
                <Button type="text" shape="round" style={{display: "block", margin: "10px 0", height: "50px", fontSize: "20px"}} onClick={onLogOut}>&nbsp;Logout</Button>
            </div>
            <div style={{width:"50%", borderRight: "solid thin #EFEEF5", borderLeft: "solid thin #EFEEF5"}}>
            {children}
            </div>
            <div style={{width:"30%", borderRight: "solid thin #EFEEF5"}}>
            {Side}
            </div>
        </div>
    );
};

DesktopLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default DesktopLayout;