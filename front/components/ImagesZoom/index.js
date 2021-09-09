import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import { Overlay, Header, CloseBtn, SlickWrapper, ImgWrapper, Indicator, Global } from './styles';


const ImagesZoom = ({images, onClose}) => {
    
    const [currentSlide, setCurrentSlide] = useState(0);

    const settings = {
        initialSlide : 0,
        beforeChange : (slide, newSlide)=>setCurrentSlide(newSlide),
        arrows : false,
        infinite : true,
        slidesToShow : 1,
        slidesToScroll : 1
    };
    return(
        <Overlay>
            <Global />
            <Header>
                <h1>상세 이미지</h1>
                <CloseBtn onClick={onClose}/>
            </Header>
            <SlickWrapper>
                <div>
                    <Slider {...settings}>
                        {images.map((v)=>(
                            <ImgWrapper key={v.src}>
                                <img src={`http://localhost:3065/${v.src}`} alt={v.src} />
                            </ImgWrapper>
                        ))}
                    </Slider>
                    <Indicator>
                        <div>
                            {currentSlide+1}
                            {' '}
                            /
                            {images.length}
                        </div>
                    </Indicator>
                </div>
            </SlickWrapper>
        </Overlay>
    );
};

ImagesZoom.PropTypes = {
    images: PropTypes.arrayOf(PropTypes.shape({
        src:PropTypes.string,
    })).isRequired,
    onClose : PropTypes.func.isRequired,
};

export default ImagesZoom;
























