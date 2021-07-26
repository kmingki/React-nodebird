import React, {useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { PlusOutlined } from '@ant-design/icons';

import ImagesZoom from './ImagesZoom';
 
const PostImages = ({ images }) => {
    
    const [ showImagesZoom, setShowImagesZoom ] = useState(false);
    
    const onZoom= useCallback(()=>{
        setShowImagesZoom(true);
    },[]);

    const onClose = useCallback(()=>{
        setShowImagesZoom(false);
    },[]);

    if (images.length === 1 ) {
        return (
            <>
            <img role="presentation" src={images[0].src} onClick={onZoom} />
            {showImagesZoom && <ImagesZoom images={images} onClose={onClose} />}
            </>
        );
    }
    if (images.length === 2 ) {
        return (
            <>
            <div style={{display : 'inline-block'}} >
            <img role="presentation" src={images[0].src} width="50%" onClick={onZoom} />
            <img role="presentation" src={images[1].src} width="50%" onClick={onZoom} />
            </div>
            {
            //어떤이미지만 확대? onclose 되는순간 false 로 변해서 실행안됨
            showImagesZoom && <ImagesZoom images={images} onClose={onClose} />}
            </>
        );
    }
    return(
        <>
        <div>
            <img role="presentation" src={images[0].src} width="50%" onClick={onZoom} />
            <div
            role="presentation"
            style={{ display: 'inline-block', width: '50%', textAlign: 'center', verticalAlign: 'middle'}}
            onClick={onZoom}>
                <PlusOutlined />
                <br />
                {images.length-1}
                개의 사진 더보기
            </div>
        </div>
        {showImagesZoom && <ImagesZoom images={images} onClose={onClose}/>}
        </>
    );
};

PostImages.propTypes = {
    images: PropTypes.arrayOf(PropTypes.shape({
        src: PropTypes.string,
    })).isRequired,
};

export default PostImages;
