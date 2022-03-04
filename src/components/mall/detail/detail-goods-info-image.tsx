import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import IMAGES from "../../../assets/images";

const DetailGoodsInfoImageStyle = styled.div`
    .detailImageContainer {
        width: 100%;
        text-align: center;
    }
`;

const DetailGoodsInfoImage = () => {
    return (
        <DetailGoodsInfoImageStyle>
            <div className="detailImageContainer">
                <img src={IMAGES.GOODS_DETAIL_IMG} alt="" />
            </div>
        </DetailGoodsInfoImageStyle>
    )
};

export default DetailGoodsInfoImage;