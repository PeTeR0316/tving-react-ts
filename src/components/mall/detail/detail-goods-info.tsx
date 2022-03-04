import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import DetailDeliveryInfo from './detail-delivery-info'
import DetailGoodsInfoAnnouncement from './detail-goods-info-announcement'

const DetailGoodsInfoStyle = styled.div`
    .goodsInfoContainer{
        width: 1240px;
        margin: 0 auto;
        
        .selectInfoArea {
            text-align: center;
        }
    }
`;

const DetailGoodsInfo = () => {
    const [selectInfo, setSelectInfo] = useState<string>("delivery");
    return (
        <DetailGoodsInfoStyle>
            <div className="goodsInfoContainer">
                <div className="selectInfoArea">
                    <span onClick={() => setSelectInfo("delivery")}>
                        배송/교환/환불 안내
                    </span>
                    <span>|</span>
                    <span onClick={() => setSelectInfo("info")}>
                        상품정보제공고시
                    </span>
                </div>

                {selectInfo === "delivery" ? <DetailDeliveryInfo /> : <DetailGoodsInfoAnnouncement />}
            </div>
        </DetailGoodsInfoStyle>
    )
};

export default DetailGoodsInfo;