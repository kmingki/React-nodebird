import React from 'react';
import { Checkbox, Avatar } from 'antd';

const CheckBox = ({ user, handleChange, label, value }) => {
    return (
        <>
        <Checkbox
        label={label}
        checked={value}
        onChange={handleChange}>
            <Avatar src={`http://localhost:3065/profile/${user.avatar}`} />
            &nbsp;{user.nickname}
            &nbsp;{user.email}
        </Checkbox>
        </>
    );
}

export default CheckBox;