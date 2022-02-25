import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import IMAGES from '../../assets/images';
import ICONS from '../../assets/icons';

const BestReviewMallStyle = styled.div`
    width: 100%;
    height: 732px;
    background-color: #f4f4f4;

    .bestReviewContainer {
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
                background-color: #e6e6e6;
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

    .reviewListArea {
        display: flex;
        justify-content: space-between;
        margin-top: 50px;

        .reviewList {
            width: 325px;
            height: 495px;
            border-radius: 14px;
            background-color: #ffffff;
            display: inline-block;
            overflow: hidden;

            .thumbnailArea {
                width: 100%;
                height: 203px;
                overflow: hidden;

                .reviewImg {
                    width: 100%;
                    position: relative;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%)
                }
            }
        }
    }

    .reviewTextArea {
        padding: 20px 30px 12px 30px;
        border-bottom: 1px solid #e5e5e5;
    }
`;

const BestReviewMall = () => {
    return (
        <BestReviewMallStyle>
            <div className="bestReviewContainer">
                <div className="titleArea">
                    <h2 className="title">베스트 리뷰</h2>
                    <span className="highlight"></span>

                    <Link to="goods" className='moreBtn'>더보기</Link>
                </div>

                <div className="reviewListArea">
                    {IMAGES.REVIEW_IMG.map((reviewImgSrc, index) => {
                        return (
                            <div className='reviewList'>
                                <div className="thumbnailArea">
                                    <img className='reviewImg' src={reviewImgSrc} alt="review-img" />
                                </div>
                                
                                <div className="reviewTextArea">
                                    <div className="startScoreArea">
                                        <img src={ICONS.STAR} alt="별점" />
                                        <img src={ICONS.STAR} alt="별점" />
                                        <img src={ICONS.STAR} alt="별점" />
                                        <img src={ICONS.STAR} alt="별점" />
                                        <img src={ICONS.STAR} alt="별점" />
                                    </div>

                                    <p className="reviewTile">상품후기</p>
                                    <p className="reviewText">
                                        교복에 교표 대신 달고 다니고 싶을 만큼 너무 예뻐요...
                                    </p>
                                    <p className="writeName">고**</p>
                                </div>

                                <div className="reviewGoodsArea">
                                    
                                </div>
                            </div>
                        )
                    })}
                </div>
                
            </div>
        </BestReviewMallStyle>
    )
};

export default BestReviewMall;