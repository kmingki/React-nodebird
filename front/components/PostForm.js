import React, { useCallback, useState, useRef, useEffect } from 'react';
import { Form, Input, Button } from 'antd';
import { useSelector, useDispatch } from 'react-redux';

import { ADD_POST_REQUEST } from '../reducers/post';

const PostForm = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState('');//컴포넌트의 state
  //useSelector : 리덕스의 상태값을 조회하기 위한 hook함수
  const { imagePaths, addPostLoading, addPostDone }=useSelector((state) => state.post);//user or post할때 post인듯
    
  const imageInput = useRef();  
  const onClickImageUpload = useCallback(()=>{
    imageInput.current.click();
}, [imageInput.current]);
  
  useEffect(() => {
    //post가 완료되어야 text를 set '' 
    if(addPostDone) {
      setText('');
    }
  },[addPostDone]);

  const onSubmitForm = useCallback(() => {
    dispatch({
      type: ADD_POST_REQUEST,
      data: text
    });
  }, []);

  //컴포넌트가 리렌더링 될때마다 함수들이 새로 생성되는 것을 방지
  //e.target - 특정 이벤트가 발생하는 태그
  //e.target.name - 태그의 이름
  //e.target.value - 태그에 입력된느 값
  const onChangeText = useCallback((e) => {
    setText(e.target.value);
  }, []);
  
    return (
        <Form style={{ margin: '10px 0 20px' }} encType="multipart/form-data" onFinish={onSubmitForm}>
          <Input.TextArea value={text} onChange={onChangeText} maxLength={140} placeholder="어떤 신기한 일이 있었나요?" />
          <div>
            <input type="file" multiple hidden ref={imageInput} />
            <Button onClick={onClickImageUpload}>이미지 업로드</Button>
            <Button type="primary" style={{ float: 'right' }} htmlType="submit">짹짹</Button>
          </div>
          <div>
            {imagePaths.map((v) => {
              return (
                <div key={v} style={{ display: 'inline-block' }}>
                  <img src={'http://localhost:3000/' + v} style={{ width: '200px' }} alt={v} />
                  <div>
                    <Button>제거</Button>
                  </div>
                </div>
              )
            })}
          </div>
        </Form>
      );
};

export default PostForm;