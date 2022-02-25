import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import IMAGES from "../../assets/images";

const ClearanceMallStyle = styled.div`
    width: 100%;
    height: 570px;
    background-color: #faefef;

    .clearanceContainer {
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
                width: 275px;
                height: 20px;
                background-color: #f5dada;
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

const ClearanceMall = () => {
    return (
        <ClearanceMallStyle>
            <div className="clearanceContainer">
                <div className="titleArea">
                    <h2 className="title">클리어런스 세일</h2>
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
        </ClearanceMallStyle>
    )
};

export default ClearanceMall;