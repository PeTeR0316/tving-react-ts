import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Slider, { Settings } from 'react-slick';

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
    position: relative;

    .bannerContainer {
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
    }

    .playBtn {
    }

    .detailBtn {
        width: 200px;
        height: 70px;
        border: 1px solid #ffffff;
        border-radius: 5px;
        background-color: rgba(255,255,255,0.3);
        color: #ffffff;
        font-size: 1.2rem;
        font-weight: bold;
        z-index: 2;
        position: absolute;
        right: 30px;
        bottom: 30px;
    }
`

const SliderStyle = styled(Slider)`
    .slick-dots {
        display: inline-block; 

        li {
            display: inline-block; 

            button {
                ::before{
                    color: #ffffff;
                    
                }
            }
        }
    }
`

const MainBanner = () => {
    const [autoSlideValue, setAutoSlideValue] = useState<boolean>(true)

    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        autoplay: autoSlideValue,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        loop: true,
    };

    return (
        <MainBannerStyle>
            <SliderStyle {...settings}>
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
            </SliderStyle>

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

            <Link to="/join">
                <button className="detailBtn" type='button'>
                    자세히보기
                </button>
            </Link>
        </MainBannerStyle>
    )
};

export default MainBanner;