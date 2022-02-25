import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

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
    return (
        <MainSlideShowMallStyle>
            <div className="slideshowContainer">
                <div className="slideshowFrame">
                    <img className="slideImg" src={IMAGES.SLIDESHOW_IMG[0]} alt="slide-img" />
                </div>
            </div>
        </MainSlideShowMallStyle>
    )
};

export default MainSlideShowMall;