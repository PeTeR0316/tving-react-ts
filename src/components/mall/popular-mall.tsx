import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import IMAGES from "../../assets/images";
import ICONS from "../../assets/icons";

interface ProductInfoType {
    name:string,
    imgSrc:string,
    price:number,
    discountRate:number

}

const PopularMallStyle = styled.div`
    width: 100%;
    height: 570px;
    background-color: #f8f6ea;
    position: relative;

    .popularContainer {
        width: 1400px;
        height: 50px;
        margin-top: 70px;
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
                background-color: #f0eac5;
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
            overflow: hidden;
            
            .goodsSlideshowFrame {
                margin-top: 50px;

                .goodsList {
                    display: inline-block;
                    width: 232px;
                    vertical-align: top;

                    :not(:nth-child(5n)) {
                        padding-right: 60px;
                    }
    
                    .goodsSlideshowImg {
                        width: 232px;
                        height: 232px;
                        border-radius: 20px;
                    }
    
                    .goodsName {
                        word-break: keep-all;
                        margin: 10px 0;
                    }
    
                    .goodsPrice {
                        font-size: 20px;
                        font-weight: 800;
                        margin: 0px;
    
                        .discountRateText {
                            color: #ff153c;
                            font-weight: 900;
                            padding-right: 5px;
                        }
                    }
    
                    .discountPrice {
                        font-size: 14px;
                        font-weight: 400;
                        color: #999999;
                        text-decoration: line-through;
                        margin: 0px;
                    }
    
                }
            }
        }

        .slideNumDotted {
            text-align: center;

            .dotted{
                display: inline-block;
                width: 7px;
                height: 7px;
                border: 1px solid #000000;
                border-radius: 7px;
                background-color: #000000;
                margin-right: 10px;
            }

            .currentDotted {
                display: inline-block;
                width: 7px;
                height: 7px;
                border: 1px solid #c7c7c7;
                border-radius: 7px;
                background-color: #ffffff;
                margin-right: 10px;
            }
        }

        .slideLeftBtn {
            background-color: #f8f6ea;
            border: none;
            position: absolute;
            top: 50%;
            left: 180px;
            transform: translateY(-50%);
            cursor: pointer;
        }
    
        .slideRightBtn {
            background-color: #f8f6ea;
            border: none;
            position: absolute;
            top: 50%;
            right: 180px;
            transform: translateY(-50%);
            cursor: pointer;
        }
    }
`

const PopularMall = () => {
    const [slideshowCount, setSlideshowCount] = useState<number>(5);
    const [slideshowNum, setSlideshowNum] = useState<number>(0);
    const [goodsCount, setGoodsCount] = useState<number>(0);

    useEffect(() => setGoodsCount(Math.ceil(IMAGES.PRODUCT_SLIDESHOW_IMG_DUMMY.length / 5)),[]);

    const dottedFn = () => {
        let dottedEl = [];

        for(let startNum = 0; startNum < goodsCount; startNum++) {
            dottedEl.push(
                <div className={slideshowNum === startNum ? "dotted" : "currentDotted"}
                    onClick = {() => setSlideshowNum(startNum)}
                    key={startNum}
                >
                </div>
            );
        }

        return dottedEl;
    }

    return (
        <PopularMallStyle>
            <div className="popularContainer">
                <div className="titleArea">
                    <h2 className="title">인기 급상승</h2>
                    <span className="highlight"></span>

                    <Link to="goods" className="moreBtn">더보기</Link>
                </div>
                
                <div className="goodsSlideshowArea">
                    <div className="goodsSlideshowFrame"
                        style={{
                            width: `${slideshowCount * 100}%`, 
                            marginLeft: `${-1400 * slideshowNum}px`,
                            transition: `0.5s ease 0s`
                        }}
                    >
                        {IMAGES.PRODUCT_SLIDESHOW_IMG_DUMMY.map((goodsInfo:ProductInfoType, index) => {
                            return(
                                <div className="goodsList">
                                    <img src={goodsInfo.imgSrc} className="goodsSlideshowImg" alt="" />
                                    <p className="goodsName">
                                        {
                                            goodsInfo.name.length < 33 ? goodsInfo.name :
                                            `${goodsInfo.name.slice(0,33)}...`
                                        }
                                    </p>
                                    <p className="goodsPrice">
                                        {goodsInfo.discountRate !== 0 ? 
                                            <span className="discountRateText">{goodsInfo.discountRate}%</span> : ""
                                        }
                                        {goodsInfo.price - goodsInfo.price * (goodsInfo.discountRate / 100)}
                                    </p>
                                    {goodsInfo.discountRate !== 0 ? 
                                        <p className="discountPrice">{goodsInfo.price * (goodsInfo.discountRate / 100)}</p> : 
                                        ""
                                    }
                                </div>
                            )
                        })}
                    </div>
                </div>

                <div className="slideNumDotted">
                        {dottedFn()}
                </div>

                <button type="button" 
                    className="slideLeftBtn"
                    onClick={() => {
                        if(slideshowNum !== 0) {
                            setSlideshowNum(slideshowNum - 1);
                        }
                    }}
                >
                    <img src={ICONS.PC_ARROW_LEFT} alt="leftBtn" />
                </button>

                <button type="button" 
                    className="slideRightBtn"
                    onClick={() => {
                        if(slideshowNum !== goodsCount - 1) {
                            setSlideshowNum(slideshowNum + 1);
                        }
                    }}
                >
                    <img src={ICONS.PC_ARROW_RIGHT} alt="rightBtn" />
                </button>
            </div>
        </PopularMallStyle>
    )
};

export default PopularMall;