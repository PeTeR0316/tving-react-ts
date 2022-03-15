import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

import '../../../assets/slick/slick.css';
import '../../../assets/slick/slick-theme.css'; 

import IMAGES from "../../../assets/images";
import ICONS from "../../../assets/icons";

interface itemsProps {
    item: string,
    name: string
}

const MainBannerStyle = styled.div`
    width: 100%;

    .bannerContainer {
        width: 100%;
        position: relative;
        overflow: hidden;
        
        .slideshowFrame {

            .slideImgArea {
                width: ${window.innerWidth}px;
                max-width: 1903px;
                display: inline-block;
                position: relative;

                .bannerImg {
                    width: 100%;
                }
        
                .bannerSubtitle {
                    color: #dddddd;
                    font-size: 24px;
                    position: absolute;
                    left: 70px;
                    bottom: 200px;
                }

                .detailBtn {
                    width: 200px;
                    height: 70px;
                    border: 1px solid #9aacae;
                    border-radius: 5px;
                    color: #ffffff;
                    font-size: 1.2rem;
                    font-weight: bold;
                    z-index: 2;
                    position: absolute;
                    right: 60px;
                    bottom: 60px;
                    backdrop-filter: blur(30px);
                    opacity: 0.6;
                    background-color: transparent;
            
                    :hover {
                        border: 1px solid #ffffff;
                    }
                }
            }
        }

        .slideNumDotted {
            text-align: center;
            position: absolute;
            bottom: 50px;
            left: 60px;

            .dotted{
                display: inline-block;
                width: 10px;
                height: 10px;
                border: none;
                border-radius: 7px;
                background-color: rgba(255, 255, 255, 0.3);
                margin-right: 10px;
            }

            .currentDotted {
                display: inline-block;
                width: 10px;
                height: 10px;
                border: none;
                border-radius: 7px;
                background-color: #ffffff;
                margin-right: 10px;
            }
        }
    }

    .playBtn {
    }

    .slideshowContainer {
        width: 1400px;
        height: 540px;
        border-radius: 30px;
        overflow: hidden;
        margin: 0px auto;
        position: relative;
    }
`

const MainBanner = () => {
    const [autoSlideValue, setAutoSlideValue] = useState<boolean>(true);
    const slideUrl = 'https://tving-react-ts.s3.ap-northeast-2.amazonaws.com/main/main-slide-img/';
    const [slideshowImgName, setSlideshowImgName] = useState<Array<string>>([]);
    const [slideshowCount, setSlideshowCount] = useState<number>(1);
    const [slideshowNum, setSlideshowNum] = useState<number>(0);
    const [goodsCount, setGoodsCount] = useState<number>(0);

    //s3 버킷에서 슬라이드쇼 이미지 파일명 요청
    useEffect(() => {
        axios.get(`http://127.0.0.1:3001/slideshow/main`)
            .then(response => {
                setSlideshowImgName(response.data.filter((src:string) => src !== ''));
                setSlideshowCount(response.data.length - 1);
            })
            .catch(err => console.log(err));
    },[]);

    //자동 슬라이드쇼 함수
    useEffect(() => {
        const slideIndex =setInterval(() => {
            if(slideshowNum === slideshowCount - 1) {
                setSlideshowNum(0);
            } else {
                setSlideshowNum(slideshowNum + 1);
            }
        },4000);

        return () => clearInterval(slideIndex);
    },[]);

    const dottedFn = () => {
        let dottedEl = [];

        for(let startNum = 0; startNum < slideshowCount; startNum++) {
            dottedEl.push(
                <div className={slideshowNum === startNum ? "currentDotted" : "dotted"}
                    onClick = {() => setSlideshowNum(startNum)}
                    key={startNum}
                >
                </div>
            );
        }

        return dottedEl;
    }

    return (
        <MainBannerStyle>
            {/* <SliderStyle {...settings}>
                {IMAGES.MAIN_BANNER.map((banner, index) => {
                    return (
                        <div className="bannerContainer" key={index}>
                            <img src={banner.src} alt={`banner${index}`} className="bannerImg" />
                            <span className="bannerSubtitle">
                                {banner.subTitle}
                            </span>
                        </div>
                    )
                })}
            </SliderStyle> */}


            <div className="bannerContainer">
                <div className="slideshowFrame" 
                    style={{ 
                        width: `${slideshowCount * window.innerWidth + 50}px`,
                        marginLeft: `${-100 * slideshowNum}%`,
                        transition: `0.5s ease 0s`
                    }}>
                    {slideshowImgName.map((imgName, index) => {
                        return (
                            <div className="slideImgArea" key={index}>
                                <img className="bannerImg" src={`${slideUrl}${imgName}`} alt={`banner${index}`} />
                                {/* <span className="bannerSubtitle">
                                    {banner.subTitle}
                                </span> */}

                                <Link to={`/contents/${imgName}`}>
                                    <button className="detailBtn" type='button'>
                                        자세히보기
                                    </button>
                                </Link>
                            </div>
                        )
                    })}
                </div>

                <div className="slideNumDotted">
                    {dottedFn()}
                </div>
            </div>

            {/* <button type="button" 
                onClick={() => {
                    alert("click");
                    setAutoSlideValue(!autoSlideValue);
                }}
            >
                <img className="playBtn" 
                    src={ICONS.ICON_PLAY_AROW} 
                    alt="play" 
                />
            </button> */}

            {/* <Link to="/join">
                <button className="detailBtn" type='button'>
                    자세히보기
                </button>
            </Link> */}
        </MainBannerStyle>
    )
};

export default MainBanner;