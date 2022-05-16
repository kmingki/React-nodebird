import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { StarOutlined, MailOutlined, UserOutlined, GlobalOutlined, HomeOutlined } from '@ant-design/icons';
import { LOG_OUT_REQUEST } from '../../reducers/user';

const DesktopLayout = ({ children, Side }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { me } = useSelector((state) => state.user);

  /*
  const toTop = () => {
    router.push('/main');
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  };
  */

  const onLogOut = useCallback(() => {
    dispatch({
      type: LOG_OUT_REQUEST,
    });
  }, [LOG_OUT_REQUEST]);

  const onClickMessages = useCallback(() => router.push('/message/main'));

  const onClickProfile = useCallback(() => router.push(`/user/${me.id}`));

  return (
    <div style={{ display: 'flex', height: '100%', width: '100%', margin: '0 auto' }}>
      <div style={{ width: '20%', position: 'fixed', left: '0' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignContent: 'flex-start' }}>
          <Button type="text" shape="round" style={{ margin: '10px 0', paddingLeft: '0px', height: '50px', fontSize: '20px' }} icon={<HomeOutlined style={{ color: '#2C2C2C' }} />}>&nbsp;Home</Button>
          <Button type="text" shape="round" style={{ margin: '10px 0', paddingLeft: '0px', height: '50px', fontSize: '20px' }} icon={<GlobalOutlined style={{ color: '#2C2C2C' }} />}>&nbsp;Explore</Button>
          <Button type="text" shape="round" style={{ margin: '10px 0', paddingLeft: '0px', height: '50px', fontSize: '20px' }} icon={<MailOutlined style={{ color: '#2C2C2C' }} />} onClick={onClickMessages}>&nbsp;Message</Button>
          <Button type="text" shape="round" style={{ margin: '10px 0', paddingLeft: '0px', height: '50px', fontSize: '20px' }} icon={<StarOutlined style={{ color: '#2C2C2C' }} />}>&nbsp;Bookmarks</Button>
          <Button type="text" shape="round" style={{ margin: '10px 0', paddingLeft: '0px', height: '50px', fontSize: '20px' }} icon={<UserOutlined style={{ color: '#2C2C2C' }} />} onClick={onClickProfile}>&nbsp;Profile</Button>
          <Button type="text" shape="round" style={{ margin: '10px 0', paddingLeft: '0px', height: '50px', fontSize: '20px' }} onClick={onLogOut}>&nbsp;Logout</Button>
        </div>
      </div>
      <div style={{ paddingLeft: '20%', display: 'flex' }}>
        <div style={{ height: '100%', width: '60%', borderRight: 'solid thin #EFEEF5', borderLeft: 'solid thin #EFEEF5' }}>
          {children}
        </div>
        <div style={{ height: '100%', width: '40%' }}>
          {Side}
        </div>
      </div>
    </div>
  );
};

DesktopLayout.propTypes = {
  children: PropTypes.node.isRequired,
  Side: PropTypes.element.isRequired,
};

export default DesktopLayout;
