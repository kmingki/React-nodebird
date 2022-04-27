import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { Menu, Button } from 'antd';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { StarOutlined, MailOutlined, UserOutlined, GlobalOutlined, HomeOutlined, SearchOutlined } from '@ant-design/icons';

import { LOG_OUT_REQUEST } from '../../reducers/user';

const SideMenu = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const toTop = () => {
    router.push('/main');
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  };

  const onLogOut = useCallback(() => {
    dispatch({
      type: LOG_OUT_REQUEST,
    });
  }, [LOG_OUT_REQUEST]);

  const onClickMessages = useCallback(() => router.push('/messages'));

  const onClickProfile = useCallback(() => router.push('/profile'));

  const menu = (
    <Menu>
      <Menu.Item>
        <a onClick={onLogOut}>Log out</a>
      </Menu.Item>
    </Menu>
  );

  return (
    <div>
      <Button type="text" shape="round" style={{ display: 'block', margin: '10px auto', height: '60px', width: '60px' }} icon={<HomeOutlined style={{ color: '#2C2C2C', fontSize: '24px' }} />} onClick={toTop} />
      <Button type="text" shape="round" style={{ display: 'block', margin: '10px auto', height: '60px', width: '60px' }} icon={<GlobalOutlined style={{ color: '#2C2C2C', fontSize: '24px' }} />} />
      <Button type="text" shape="round" style={{ display: 'block', margin: '10px auto', height: '60px', width: '60px' }} icon={<MailOutlined style={{ color: '#2C2C2C', fontSize: '24px' }} />} onClick={onClickMessages} />
      <Button type="text" shape="round" style={{ display: 'block', margin: '10px auto', height: '60px', width: '60px' }} icon={<StarOutlined style={{ color: '#2C2C2C', fontSize: '24px' }} />} />
      <Button type="text" shape="round" style={{ display: 'block', margin: '10px auto', height: '60px', width: '60px' }} icon={<UserOutlined style={{ color: '#2C2C2C', fontSize: '24px' }} />} onClick={onClickProfile} />
    </div>
  );
};

SideMenu.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SideMenu;
