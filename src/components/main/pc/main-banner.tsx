import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Slider, { Settings } from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css'; 

import IMAGES from "../../../assets/images";

interface itemsProps {
    item: string,
    name: string
}

const MainBannerStyle = styled.div`
    width: 100%;

    .playContainer {
        width: 100%;
        position: relative;
        
        .poster{
            width: 100%;
        }

        .gradationImg {
            width: 100%;
            position: absolute;
            z-index: 3;
            top: 0px;
            left: 0px;
        }

        .textContainer {
            
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            text-align: center;
            z-index: 4;

            .playText {
                color: #ffffff;
                font-weight: bold;
            }

            .joinText {
                color: #9e9e9e;
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
            }
        }

    }

    .bannerImg {
        width: 100%;
    }

    .slick-dots {
        display: inline-block; 

        li {
            button {
                ::before{
                    color: #ffffff;
                }
            }
        }
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
    }
`

const MainBanner = () => {
    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        loop: true,
    };

    return (
        <MainBannerStyle>
            <Slider {...settings}>
                {/* {children} */}
                {IMAGES.INFINITY_SLIDE_1.map((poster, index) => {
                    return (
                        <div key={index}>
                            <img src={poster} alt={`banner${index}`} className="bannerImg" />
                        </div>
                    )
                })}

                    <Link to="/join">
                        <button className="detailBtn" type='button'>
                            자세히보기
                        </button>
                    </Link>
            </Slider>

            {/* <div className='playContainer'>
                <img className="poster" src={IMAGES.POST_PC} alt="poster-img" />
                <img className="gradationImg" src={IMAGES.GRADATION_IMG} alt="gradation-img" />

                <div className='textContainer'>
                    <p className="playText">티빙 오리지널 콘테츠,</p>
                    <p className="playText">방송, 영화, 해외시리즈까지!</p>
                    <p className="playText">재미를 플레이해보세요.</p>
                    
                    <p className="joinText">간편하게 가입하고, 원하실 때 해지할 수 있어요.</p>
                    
                    <Link to="/join">
                        <button className="detailBtn" type='button'>
                            자세히보기
                        </button>
                    </Link>
                </div>
            </div> */}

        </MainBannerStyle>
    )
};

export default MainBanner;