import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import IMAGES from "../../../assets/images";

const DetailTitleStyle = styled.div`
    .detailTitleContainer {
        width: 1240px;
        margin: 0 auto;
        text-align: center;
    }
`;

const DetailTitle = () => {
    return (
        <DetailTitleStyle>
            <div className="detailTitleContainer">
                <p className="goodsNotice">
                제조사 제작 이슈로 인해, 출고가 지연된 점 양해 부탁드립니다. 해당 상품은 11월 30일부터 배송 예정입니다.
                </p>

                <p className="goodsTitle">
                    라켓보이즈 맨투맨[출고 지연 상품]
                </p>

                <p className="goodsPrice">49,000<span>원</span></p>
            </div>
        </DetailTitleStyle>
    )
};

export default DetailTitle;