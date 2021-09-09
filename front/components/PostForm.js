import React, { useCallback, useState, useRef, useEffect } from 'react';
import { Form, Input, Button } from 'antd';
import { useSelector, useDispatch } from 'react-redux';

import { ADD_POST_REQUEST, UPLOAD_IMAGES_REQUEST } from '../reducers/post';

const PostForm = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState('');//컴포넌트의 state
  const { imagePaths, addPostDone }=useSelector((state) => state.post);
    
  const imageInput = useRef();
  
  const onChangeImages = useCallback((e)=>{
    //console.log('images', e.target.files); 유사배열
    //multi-part FormData
    const imageFormData = new FormData();
    [].forEach.call(e.target.files, (f)=>{
      imageFormData.append('image', f);
    });
    dispatch({
      type: UPLOAD_IMAGES_REQUEST,
      data: imageFormData,
    })
  }, []);

  const onClickImageUpload = useCallback(()=>{
    imageInput.current.click();
    //click() - element를 마우스로 클릭한 것으로 한다.
}, [imageInput.current]);
  
  useEffect(() => { 
    if(addPostDone) {
      setText('');
    }
  },[addPostDone]);

  const onSubmitForm = useCallback(() => {
    dispatch({
      type: ADD_POST_REQUEST,
      data: text
    });
  }, [text]); //[text] 안써서 text가 undefined

  //useCallback컴포넌트가 리렌더링 될때마다 함수들이 새로 생성되는 것을 방지
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
            <input type="file" name="image" multiple hidden ref={imageInput} onChange={onChangeImages} />
            <Button onClick={onClickImageUpload}>이미지 업로드</Button>
            <Button type="primary" style={{ float: 'right' }} htmlType="submit">짹짹</Button>
          </div>
          <div>
            {imagePaths.map((v) => {
              return (
                <div key={v} style={{ display: 'inline-block' }}>
                  <img src={`http://localhost:3065/${v}`} style={{ width: '200px' }} alt={v} />
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