import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const DetailPurchaseInfoStyle = styled.div`
    .detailPurchaseInfoContainer {
        width: 1240px;
        margin: 0 auto;
        background-color: #f7f7f7;
        padding: 38px 40px;
        display: flex;
        justify-content: space-between;

        .goodsInfoArea {
            width: 520px;
        }

        .totalPriceArea {
            width: 520px;

            .purchaseCountArea {
                border: 1px solid #ddd;
                background: #f3f2ee;
                padding: 20px;

                .priceArea {
                    display: flex;
                    justify-content: space-between;
                }
            }

            .totalPriceArea {
                display: flex;
                justify-content: space-between;
            }

            .purchaseBtn {
                .cartBtn {
                    width: 50%;
                    height: 56px;
                    border: none;
                    background-color: #999999;
                    color: #ffffff;
                    font-size: 20px;
                }

                .purchaseBtn {
                    width: 50%;
                    height: 56px;
                    border: none;
                    background-color: #212121;
                    color: #ffffff;
                    font-size: 20px;
                }
            }
        }
    }
`;

const DetailPurchaseInfo = () => {
    const [purchaseCount, setPurchaseCount] = useState<number>(1);

    return (
        <DetailPurchaseInfoStyle>
            <div className="detailPurchaseInfoContainer">
                <div className="goodsInfoArea">
                    <ul className="infoList">
                        <li className="infoList">
                            <span className="infoTitle">
                                상품번호
                            </span>
                            <span>
                                873982
                            </span>
                        </li>
                        <li className="infoList">
                            <span className="infoTitle">
                                배송정보
                            </span>
                            <span>
                                40,000원 이상 무료 미만 3,000원
                            </span>
                        </li>
                        <li className="infoList">
                            <span className="infoTitle">
                                브랜드
                            </span>
                            <span>
                                tvN SHOP
                            </span>
                        </li>
                        <li className="infoList">
                            <span className="infoTitle">
                                CJ ONE 포인트
                            </span>
                            <span>
                                <strong>490</strong>P (CJ ONE 포인트 회원 아이디로 구매 시에만 적립 가능)
                            </span>
                        </li>
                    </ul>
                    <div className="reviewArea">
                        <div className="review">
                            <span className="reviewText">
                                REVIEW()
                            </span>
                            <div className="starPoint">

                            </div>
                        </div>
                    </div>
                </div>

                <div className="totalPriceArea">
                    <div className="purchaseCountArea">
                        <p className="goodsTitle">
                            라켓보이즈 맨투맨[출고 지연 상품]
                        </p>
                        <div className="priceArea">
                            <input type="number" 
                                className="countInput" 
                                value={purchaseCount} 
                                onChange={({target}) => setPurchaseCount(parseInt(target.value))}
                            />
                            <span className="totalPrice">{purchaseCount * 98000}</span>
                        </div>
                    </div>
                    
                    <p className="totalPriceArea">
                        <span>총 상품가</span>
                        <span>{purchaseCount * 98000}원</span>
                    </p>

                    <div className="purchaseBtn">
                        <button type="button" className="cartBtn">장바구니</button>
                        <button type="button" className="purchaseBtn">바로구매</button>
                    </div>
                </div>
            </div>
        </DetailPurchaseInfoStyle>
    )
};

export default DetailPurchaseInfo;