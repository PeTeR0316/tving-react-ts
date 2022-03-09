import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from 'axios';

interface GoodsInfo {
    code_number: number,
    goods_name: string,
    price: number,
    discount_price?: number;
    discount_rate?: number;
    brand: string,
    ship_information: string
};

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

                    .countArea {
                        height: 36px;
                        border: 1px solid #dddddd;
                        background-color: #ffffff;

                        .countInput {
                            width: 30px;
                            height: 28px;
                            border: none;
                            text-align: center;
                            outline: none;

                            ::-webkit-outer-spin-button,
                            ::-webkit-inner-spin-button {
                                -webkit-appearance: none;
                                -moz-appearance: textfield;
                                margin: 0;
                            }
                        }
    
                        .minus {
                            width: 36px;
                            height: 36px;
                            border: none;
                            background-color: #ffffff;
                            border-right: 1px solid #dddddd;
                            font-size: 16px;
                            color: #999999;
                        }
    
                        .plus {
                            width: 36px;
                            height: 36px;
                            border: none;
                            background-color: #ffffff;
                            border-left: 1px solid #dddddd;
                            font-size: 16px;
                            color: #999999;
                        }
                    }
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
    const [goodsInformation, setGoodsInformation] = useState({} as GoodsInfo);

    useEffect(() => {
        axios.get(`http://127.0.0.1:3001/info/goods`)
        .then(response => setGoodsInformation(response.data[0]))
        .catch(err => console.log(err));
    },[]);

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
                                {goodsInformation.code_number}
                            </span>
                        </li>
                        <li className="infoList">
                            <span className="infoTitle">
                                배송정보
                            </span>
                            <span>
                                {goodsInformation.ship_information}
                            </span>
                        </li>
                        <li className="infoList">
                            <span className="infoTitle">
                                브랜드
                            </span>
                            <span>
                                {goodsInformation.brand}
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
                            {goodsInformation.goods_name}
                        </p>
                        <div className="priceArea">
                            <div className="countArea">
                                <button className="minus" 
                                    type="button"
                                    onClick={() => {
                                        if(purchaseCount > 1) {
                                            setPurchaseCount(purchaseCount - 1)
                                        } else {
                                            alert("최소 구매 수량은 1 이상입니다.")
                                        }
                                    }}
                                >
                                    -
                                </button>
                                <input type="number" 
                                    className="countInput" 
                                    value={purchaseCount} 
                                    onChange={({target}) => setPurchaseCount(parseInt(target.value))}
                                />
                                <button className="plus" 
                                    type="button"
                                    onClick={() => setPurchaseCount(purchaseCount + 1)}
                                
                                >
                                    +
                                </button>
                            </div>
                            
                            <span className="totalPrice">{purchaseCount * goodsInformation.price}</span>
                        </div>
                    </div>
                    
                    <p className="totalPriceArea">
                        <span>총 상품가</span>
                        <span>{purchaseCount * goodsInformation.price}원</span>
                    </p>

                    <div className="purchaseBtn">
                        <button type="button" className="cartBtn"
                            onClick={() => alert(setGoodsInformation.name)}
                        >
                            장바구니
                        </button>
                        <button type="button" className="purchaseBtn">
                            바로구매
                        </button>
                    </div>
                </div>
            </div>
        </DetailPurchaseInfoStyle>
    )
};

export default DetailPurchaseInfo;