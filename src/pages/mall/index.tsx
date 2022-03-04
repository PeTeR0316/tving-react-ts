import React from "react";
import styled from "styled-components";

import HeaderMall from "../../components/mall/header-mall";
import NavMall from "../../components/mall/nav-mall";
import PopularMall from "../../components/mall/popular-mall";
import NewMall from "../../components/mall/new-mall";
import BestMall from "../../components/mall/best-mall";
import OriginalGoodsMall from "../../components/mall/original-goods-mall";
import ProgramGoodsMall from "../../components/mall/program-goods-mall";
import ClearanceMall from "../../components/mall/clearance-mall";
import EventBannerMall from "../../components/mall/event-banner-mall";
import BestReviewMall from "../../components/mall/best-review-mall";
import SnsMall from "../../components/mall/sns-mall";
import FooterMall from "../../components/mall/footer-mall";
import MainSlideShowMall from "../../components/mall/main-slideshow-mall";
import Sidemenu from "../../components/sidemenu";

const MallPageStyle = styled.div`
    background-color: #ffffff;
`

const MallPage = () => {
    return (
        <MallPageStyle>
            <HeaderMall />
            <NavMall />
            <MainSlideShowMall />
            <PopularMall />
            <NewMall />
            <BestMall />
            <OriginalGoodsMall />
            <ProgramGoodsMall />
            <ClearanceMall />
            <EventBannerMall />
            <BestReviewMall />
            <SnsMall />
            <FooterMall />
            <Sidemenu />

            {/* <div className="sideMenuContainer">
                <ul className="sideMenu">
                    <li className="sideBtn">히스토리</li>
                    <li className="sideBtn">브랜드샵</li>
                    <li className="sideBtn"
                        onClick={() => window.scrollTo(0,0)}
                    >
                        TOP
                    </li>
                </ul>
            </div> */}
        </MallPageStyle>
    )
}

export default MallPage;