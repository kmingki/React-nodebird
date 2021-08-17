import React, { useMemo }from 'react';
import { Form , Input } from 'antd';
import { useDispatch } from 'react-redux';
import { CHANGE_NICKNAME_REQUEST } from '../reducers/user'; 

const NicknameEditForm = () => {
    const dispatch = useDispatch();
    const style = useMemo(()=>({ marginBottom: '20px', border:'1px solid #d9d9d9', padding: '20px'}),[]);

    const onclickEditButton = (value) => {
        dispatch({
            type: CHANGE_NICKNAME_REQUEST,
            data: value
        });
    }


    return(
        <Form style={style}>
            <Input.Search addonBefore="닉네임" enterButton="수정" onSearch={onclickEditButton}/>
        </Form>
    );
};

export default NicknameEditForm;