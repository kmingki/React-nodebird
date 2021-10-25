import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { Input } from 'antd';
import useInput from '../hooks/useInput';

const SideBar = () => {
    
    const [searchInput, onChangeSearchInput] = useInput('');

    const onSearch = useCallback(()=>{
        Router.push(`/hashtag/${searchInput}`);
    }, [searchInput]);

    return (
        <Input.Search placeholder="검색" onSearch={onSearch} style={{marginTop: "10px", marginLeft: "10px"}}/>
    );
};

SideBar.propTypes = {
  };

export default SideBar;
