import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import IMAGES from "../../assets/images";
import ICONS from "../../assets/icons";

const HeaderMallStyle = styled.header`
    .headerContainer {
        width: 1240px;
        padding-top: 60px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;

        .mallLogo {
            padding-right: 60px;
        }

        .searchInput {
            width: 650px;
            height: 42px;
            border : 1px solid #d8d8d8;
            border-radius: 25px;
            padding-left: 20px;
        }

        .userArea {
            display: inline-block;
        }
    }
`

const HeaderMall = () => {
    return (
        <HeaderMallStyle>
            <div className="headerContainer">
                <Link to="/mall">
                    <img className="mallLogo" src={IMAGES.TVING_MALL_LOGO} alt="LOGO" />
                </Link>

                <input type="text" className="searchInput" name="search" placeholder="검색어를 입력해 주세요" />

                <div className="userArea">
                    <span className="userName">박지호님</span>
                    <img src={ICONS.CART_ICON} alt="cart" />
                </div>
            </div>
        </HeaderMallStyle>

    )
}

export default HeaderMall;