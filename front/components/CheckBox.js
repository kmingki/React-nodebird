/* eslint-disable */
import React from 'react';
import { Checkbox, Avatar } from 'antd';

const CheckBox = ({ user, handleChange, label, value }) => {

    //console.log(user);

    return (
        <>
        <div>
        <Checkbox
        label={label}
        checked={value}
        onChange={handleChange}
        style={{display:"flex", alignItems:"center", justifyContent: "flex-start"}}
        >
            {user.photo? <Avatar src={`http://localhost:3065/profile/${user.photo}`} /> :
            <Avatar>{user.nickname[0]}</Avatar>}
            &nbsp;{user.nickname}
            <div>
            {user.email}
            </div>
        </Checkbox>
        </div>
        </>
    );
}

export default CheckBox;