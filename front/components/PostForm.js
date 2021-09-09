import React, { useCallback, useState, useRef, useEffect } from 'react';
import { Form, Input, Button } from 'antd';
import { useSelector, useDispatch } from 'react-redux';

import { ADD_POST_REQUEST, UPLOAD_IMAGES_REQUEST, REMOVE_IMAGE } from '../reducers/post';

const PostForm = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState('');//컴포넌트의 state
  const { imagePaths, addPostDone }=useSelector((state) => state.post);
    
  const imageInput = useRef();
  

  /*이미지를 ajax로 업로드 할때 form 전송 필요
  같은 key를 가진 값을 여러개 넣을수 있다.
  값은 문자열로 자동변환*/

  const onChangeImages = useCallback((e)=>{
    //console.log('images', e.target.files); 유사배열, File객체
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

  const onSubmit = useCallback(() => {
    if (!text || !text.trim()) {
      return alert('게시글을 작성하세요.');
    }

    const formData = new FormData();
    imagePaths.forEach((p) => {
      formData.append('image', p);//req.body.image
    });
    formData.append('content', text);//req.body.content

    dispatch({
      type: ADD_POST_REQUEST,
      data: formData,
    });
  }, [text, imagePaths]); 

  const onRemoveImage = useCallback((index) => () => {
    dispatch({
      type: REMOVE_IMAGE,
      data: index,
    })
  });
  //useCallback컴포넌트가 리렌더링 될때마다 함수들이 새로 생성되는 것을 방지
  //e.target - 특정 이벤트가 발생하는 태그
  //e.target.name - 태그의 이름
  //e.target.value - 태그에 입력된느 값
  const onChangeText = useCallback((e) => {
    setText(e.target.value);
  }, []);
  
    return (
        <Form style={{ margin: '10px 0 20px' }} encType="multipart/form-data" onFinish={onSubmit}>
          <Input.TextArea value={text} onChange={onChangeText} maxLength={140} placeholder="어떤 신기한 일이 있었나요?" />
          <div>
            <input type="file" name="image" multiple hidden ref={imageInput} onChange={onChangeImages} />
            <Button onClick={onClickImageUpload}>이미지 업로드</Button>
            <Button type="primary" style={{ float: 'right' }} htmlType="submit">짹짹</Button>
          </div>
          <div>
            {imagePaths.map((v, i) => {
              return (
                <div key={v} style={{ display: 'inline-block' }}>
                  <img src={`http://localhost:3065/${v}`} style={{ width: '200px' }} alt={v} />
                  <div>
                    <Button onClick={onRemoveImage(i)}>제거</Button>
                  </div>
                </div>
              )
            })}
          </div>
        </Form>
      );
};

export default PostForm;