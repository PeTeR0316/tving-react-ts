import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import IMAGES from "../../../assets/images";
import ICONS from "../../../assets/icons";

interface ProductInfoType {
    name:string,
    imgSrc:string,
    price:number,
    discountRate:number
}

const DetailCategoryStyle = styled.div`
    .detailCategoryContainer {
        width: 1240px;
        margin: 0 auto;
        position: relative;

        .title {
            text-align: center;
        }

        .categoryGoodsSlideArea {
            width: 100%;
            height: 310xp;
            overflow: hidden;

            .slideshowFrame {
                .goodsList {
                    display: inline-block;
                    width: 310px;
                    vertical-align: top;
                    // padding-right: 60px;

                    .goodsListLink {
                        color: #202020;

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
        }

        .slideLeftBtn {
            background-color: #ffffff;
            border: none;
            position: absolute;
            top: 50%;
            left: -100px;
            transform: translateY(-50%);
            cursor: pointer;
        }
    
        .slideRightBtn {
            background-color: #ffffff;
            border: none;
            position: absolute;
            top: 50%;
            right: -100px;
            transform: translateY(-50%);
            cursor: pointer;
        }
    }
`;

const DetailCategory = () => {
    const [categoryGoodsCount , setCategoryGoodsCount] = useState<number>(
        Math.ceil(IMAGES.PRODUCT_SLIDESHOW_IMG_DUMMY.length / 4)
    );
    const [slideshowNum ,setSlideshowNum] = useState<number>(0);
    const [goodsCount, setGoodsCount] = useState<number>(0);


    return (
        <DetailCategoryStyle>
            <div className="detailCategoryContainer">
                <h2 className="title">카테고리 BEST & NEW</h2>
                <div className="categoryGoodsSlideArea">
                    <div className="slideshowFrame" 
                        style={{
                            width: `${categoryGoodsCount * 100}%`, 
                            marginLeft: `${-1240 * slideshowNum}px`,
                            transition: `0.5s ease 0s`
                        }}
                    >
                        {IMAGES.PRODUCT_SLIDESHOW_IMG_DUMMY.map((goodsInfo:ProductInfoType, index) => {
                            return(
                                <div className="goodsList">
                                    <Link to="/goods/view/" className="goodsListLink">
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
                                    </Link>
                                </div>
                            )
                        })}
                    </div>
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
                        if(slideshowNum !== categoryGoodsCount - 1) {
                            setSlideshowNum(slideshowNum + 1);
                        }
                    }}
                >
                    <img src={ICONS.PC_ARROW_RIGHT} alt="rightBtn" />
                </button>
            </div>
        </DetailCategoryStyle>
    )
};

export default DetailCategory;