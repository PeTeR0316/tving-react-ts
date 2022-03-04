import React from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from 'axios';

import HeaderMall from '../../components/mall/header-mall';
import NavMall from '../../components/mall/nav-mall';
import FooterMall from '../../components/mall/footer-mall';
import DetailThumbnail from '../../components/mall/detail/detail-thumbnail';
import DetailTitle from '../../components/mall/detail/detail-title';
import DetailPurchaseInfo from '../../components/mall/detail/detail-purchase-info';
import DetailCategory from '../../components/mall/detail/detail-category';
import DetailGoodsInfoImage from '../../components/mall/detail/detail-goods-info-image';
import DetailReview from '../../components/mall/detail/detail-review';
import DetailQna from '../../components/mall/detail/detail-qna';
import DetailGoodsInfo from '../../components/mall/detail/detail-goods-info';
import Sidemenu from '../../components/sidemenu';

const GoodsDetailMallStyle = styled.div`
    background-color: #ffffff;
`;

const GoodsDetailMall = () => {
    return (
        <GoodsDetailMallStyle>
            <HeaderMall />
            <NavMall />
            <DetailThumbnail />
            <DetailTitle />
            <DetailPurchaseInfo />
            <DetailCategory />
            <DetailGoodsInfoImage />
            <DetailReview />
            <DetailQna />
            <DetailGoodsInfo />
            <FooterMall />
            <Sidemenu />
        </GoodsDetailMallStyle>
    )
}

export default GoodsDetailMall;