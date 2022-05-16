import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { Input } from 'antd';
import useInput from '../hooks/useInput';

const SideBar = () => {
  console.log('side bar rendering');
  const [searchInput, onChangeSearchInput] = useInput('');

  const onSearch = useCallback(() => {
    Router.push(`/hashtag/${searchInput}`);
  }, [searchInput]);

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Input.Search placeholder="검색" onSearch={onSearch} style={{ margin: '10px', width: '80%' }} />
    </div>

  );
};

SideBar.propTypes = {
};

export default SideBar;
