import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const OriginalGoodsMallStyle = styled.div`
    width: 100%;
    background-color: #ffffff;

    .originalGoodsContainer {
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
                width: 240px;
                height: 20px;
                background-color: #d1eaf4;
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
    }
`;

const OriginalGoodsMall = () => {
    return (
        <OriginalGoodsMallStyle>
            <div className="originalGoodsContainer">
                <div className="titleArea">
                    <h2 className="title">오리지널 굿즈</h2>
                    <span className="highlight"></span>

                    <Link to="goods" className="moreBtn">더보기</Link>
                </div>
                
            </div>
        </OriginalGoodsMallStyle>
    )
};

export default OriginalGoodsMall;