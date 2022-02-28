import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from 'axios';

import IMAGES from "../../assets/images";

const MainSlideShowMallStyle = styled.div`
    padding: 60px 0px 80px;

    .slideshowContainer {
        .slideshowFrame {
            width: 1400px;
            height: 540px;
            border-radius: 30px;
            overflow: hidden;
            margin: 0px auto;

            .slideImg {
                width: 100%;
            }
        }
    }
`;

const MainSlideShowMall = () => {
    const [slideshow, setSlideshow] = useState<Array<string>>([
        // 'slide-img1.jpg',
        // 'slide-img2.jpg',
        // 'slide-img3.jpg',
        // 'slide-img4.jpg',
        // 'slide-img5.jpg',
        // 'slide-img6.jpg',
        // 'slide-img7.jpg'
    ]);
    const slideUrl = 'https://tving-react-ts.s3.ap-northeast-2.amazonaws.com/mall/slideshow/'

    // useEffect(() => {
    //     const slideEl = document.querySelector(".slideImg");
    //     console.log(slideEl?.clientHeight)
    // });

    useEffect(() => {
        axios.get(`http://127.0.0.1:3001/slideshow/mall`)
            .then(response => console.log(response))
            .catch(err => console.log(err))
    },[]);

    return (
        <MainSlideShowMallStyle>
            <div className="slideshowContainer">
                <div className="slideshowFrame">
                    <img className="slideImg" src={IMAGES.SLIDESHOW_IMG[0]} alt="slide-img" />
                    {/* {slideshow.map((imgName, index) => {
                        return (
                            <img className="slideImg" src={`${slideUrl}${imgName}`} alt="slide-img" key={index} />
                        )
                    })} */}
                </div>
            </div>
        </MainSlideShowMallStyle>
    )
};

export default MainSlideShowMall;