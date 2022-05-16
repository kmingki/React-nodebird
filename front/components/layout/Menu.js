import React from 'react';
import { useRouter } from 'next/router';
import { Button } from 'antd';
import { HomeOutlined, SearchOutlined, MailOutlined, StarOutlined } from '@ant-design/icons';

const Menu = () => {
  const router = useRouter();

  const onClickHome = () => router.push('/main');
  const onClickSearch = () => router.push('/search');
  const onClickMessages = () => router.push('/message/main');
  const onClickNotification = () => router.push('/notification');

  return (
    <>
      <Button type="text" shape="circle" icon={<HomeOutlined style={{ color: '#2C2C2C', fontSize: '23px' }} />} onClick={onClickHome} />
      <Button type="text" shape="circle" icon={<SearchOutlined style={{ color: '#2C2C2C', fontSize: '23px' }} />} onClick={onClickSearch} />
      <Button type="text" shape="circle" icon={<MailOutlined style={{ color: '#2C2C2C', fontSize: '23px' }} />} onClick={onClickMessages} />
      <Button type="text" shape="circle" icon={<StarOutlined style={{ color: '#2C2C2C', fontSize: '23px' }} />} onClick={onClickNotification} />
    </>
  );
};

export default Menu;
