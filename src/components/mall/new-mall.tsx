import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import IMAGES from "../../assets/images";

const NewMallStyle = styled.div`
    width: 100%;
    height: 570px;
    background-color: #eaf5f3;

    .newContainer {
        width: 1400px;
        height: 50px;
        padding-top: 50px;
        margin: 0px auto;

        .titleArea {
            position: relative;
            width: 1400px;
            height: 49px;
            
            .title {
                position: absolute;
                top: 0;
                left: 0;
                height: 49px;
                font-weight: 700;
                font-size: 36px;
                line-height: 49px;
                margin: 0px;
                z-index: 2;
            }

            .highlight {
                position: absolute;
                left: 0;
                bottom: 0;
                display: block;
                width: 212px;
                height: 20px;
                background-color: #d0eae5;
                z-index: 1;
            }

            .moreBtn {
                width: 66px;
                height: 32px;
                line-height: 32px;
                border: 1px solid #cccccc;
                border-radius: 18px;
                background-color: #ffffff;
                text-align: center;
                color: #000000;
                float: right;
                font-size: 12px;
                font-weight: 400;
                margin-top: 7px;
            }
        }

        .goodsSlideshowArea {
            margin-top: 50px;
            display: flex;
            justify-content: space-between;

            .goodsSlideshowImg {
                width: 256px;
                height: 256px;
                border-radius: 20px;
            }
        }
    }
`

const NewMall = () => {
    return (
        <NewMallStyle>
            <div className="newContainer">
                <div className="titleArea">
                    <h2 className="title">오늘의 신상</h2>
                    <span className="highlight"></span>

                    <Link to="goods" className="moreBtn">더보기</Link>
                </div>
                
                <div className="goodsSlideshowArea">
                    <img src={IMAGES.PRODUCT_SLIDESHOW_IMG[0]} alt="" className="goodsSlideshowImg" />
                    <img src={IMAGES.PRODUCT_SLIDESHOW_IMG[1]} alt="" className="goodsSlideshowImg" />
                    <img src={IMAGES.PRODUCT_SLIDESHOW_IMG[2]} alt="" className="goodsSlideshowImg" />
                    <img src={IMAGES.PRODUCT_SLIDESHOW_IMG[3]} alt="" className="goodsSlideshowImg" />
                </div>
            </div>
        </NewMallStyle>
    )
};

export default NewMall;