import React , {useCallback }from 'react';
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

const SideMenu = () => {
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
            <Button type="text" shape="round" style={{display: "block", margin: "10px auto", height: "60px", width: "60px"}} icon={<HomeOutlined style={{color: "#2C2C2C", fontSize: "24px"}}/>} onClick={toTop}></Button>
            <Button type="text" shape="round" style={{display: "block", margin: "10px auto", height: "60px", width: "60px"}} icon={<GlobalOutlined style={{color: "#2C2C2C", fontSize: "24px"}}/>}></Button>
            <Button type="text" shape="round" style={{display: "block", margin: "10px auto", height: "60px", width: "60px"}} icon={<MailOutlined style={{color: "#2C2C2C", fontSize: "24px"}}/>} onClick={onClickMessages}></Button>
            <Button type="text" shape="round" style={{display: "block", margin: "10px auto", height: "60px", width: "60px"}} icon={<StarOutlined style={{color: "#2C2C2C", fontSize: "24px"}}/>}></Button>
            <Button type="text" shape="round" style={{display: "block", margin: "10px auto", height: "60px", width: "60px"}} icon={<UserOutlined style={{color: "#2C2C2C", fontSize: "24px"}}/>} onClick={onClickProfile}></Button>
        </div>
    );
};

SideMenu.propTypes = {
    children: PropTypes.node.isRequired,
};

export default SideMenu;