import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from 'axios';

import IMAGES from "../../assets/images";
import ICONS from "../../assets/icons";

const MainSlideShowMallStyle = styled.div`
    padding: 60px 0px 80px;
    position: relative;

    .slideshowContainer {
        width: 1400px;
        height: 540px;
        border-radius: 30px;
        overflow: hidden;
        margin: 0px auto;

        .slideshowFrame {
            transition
            
            .slideImg {
                display: inline-block;
            }
        }
    }

    .slideshowLeftBtn {
        background-color: #ffffff;
        border: none;
        position: absolute;
        top: 50%;
        left: 180px;
        transform: translateY(-50%);
    }

    .slideshowRightBtn {
        background-color: #ffffff;
        border: none;
        position: absolute;
        top: 50%;
        right: 180px;
        transform: translateY(-50%);
    }
`;

const MainSlideShowMall = () => {
    //버킷 슬라이드쇼 이미지 주소
    const slideUrl = 'https://tving-react-ts.s3.ap-northeast-2.amazonaws.com/mall/slideshow/';
    const [slideshowImgName, setSlideshowImgName] = useState<Array<string>>([]);
    const [slideshowCount, setSlideshowCount] = useState<number>(1);
    const [slideshowNum, setSlideshowNum] = useState<number>(0)

    //s3 버킷에서 슬라이드쇼 이미지 파일명 요청
    useEffect(() => {
        axios.get(`http://127.0.0.1:3001/slideshow/mall`)
            .then(response => {
                setSlideshowImgName(response.data.filter((src:string) => src !== ''));
                setSlideshowCount(response.data.length - 2);
            })
            .catch(err => console.log(err))
    },[]);

    //슬라이드쇼 함수
    useEffect(() => {
        const slideIndex =setInterval(() => {
            if(slideshowNum === 6) {
                setSlideshowNum(0);
            } else {
                setSlideshowNum(slideshowNum + 1);
            }
        },4000);

        return () => clearInterval(slideIndex);
    });

    return (
        <MainSlideShowMallStyle>
            <div className="slideshowContainer">
                <div className="slideshowFrame" 
                    style={{ 
                        width: `${slideshowCount * 100}%`,
                        marginLeft: `${-1400 * slideshowNum}px`
                    }}>
                    {/* <img className="slideImg" src={IMAGES.SLIDESHOW_IMG[0]} alt="slide-img" /> */}
                    {slideshowImgName.map((imgName, index) => {
                        return (
                            <img className="slideImg" src={`${slideUrl}${imgName}`} alt="slide-img" key={index} />
                        )
                    })}
                </div>
            </div>
            <button type="button" 
                className="slideshowLeftBtn"
                onClick={() => {
                    if(slideshowNum === 0) {
                        setSlideshowNum(6);
                    } else {
                        setSlideshowNum(slideshowNum - 1);
                    }
                }}
            >
                <img src={ICONS.PC_ARROW_LEFT} alt="leftBtn" />
            </button>
            <button type="button" 
                className="slideshowRightBtn"
                onClick={() => {
                    if(slideshowNum === 6) {
                        setSlideshowNum(0);
                    } else {
                        setSlideshowNum(slideshowNum + 1);
                    }
                }}
            >
                <img src={ICONS.PC_ARROW_RIGHT} alt="rightBtn" />
            </button>
        </MainSlideShowMallStyle>
    )
};

export default MainSlideShowMall;