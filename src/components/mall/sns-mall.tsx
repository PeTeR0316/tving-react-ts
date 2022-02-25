import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import ICONS from "../../assets/icons";

const SnsMallStyle = styled.div`
    width: 100%;
    height: 60px;
    text-align: center;
    padding: 80px 0px;

    .snsContainer {
        display: inline-block;
        width: 430px;
        height: 60px;
        line-height: 60px;
        border: 1px solid #cccccc;
        border-radius: 60px;
        background-color: #ffffff;
        
        .snsIcon {
            vertical-align: middle;
            padding-right: 10px;
        }

        .snsBtn {
            color: #202020;
            font-weight: bold;
        }
    }
`;

const SnsMall = () => {
    return (
        <SnsMallStyle>
            <div className="snsContainer">
                <img className="snsIcon"  src={ICONS.INSTARGRAM_ICON} alt="instagramIcon" />
                <a className="snsBtn" 
                    href="https://www.instagram.com/challenge/?next=/tvingmall.official/"
                    target="_blank"
                >
                    티빙몰 인스타그램 바로가기
                </a>
            </div>
        </SnsMallStyle>
    )
};

export default SnsMall;