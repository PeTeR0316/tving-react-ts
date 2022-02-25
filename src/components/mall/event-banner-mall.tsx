import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import IMAGES from "../../assets/images";

const EventBannerMallStyle = styled.div`
    .eventContainer {
        .imgArea {
            display: flex;

            .eventImg{
                width: 50%;
            }
        }

        .reviewArea {
            width: 100%;
            height: 28px;
            padding: 16px 0px;
            text-align: center;
            background-color: #3f94a5;
        }
    }
`;

const EventBannerMall = () => {
    return (
        <EventBannerMallStyle>
            <div className="eventContainer">
                <div className="imgArea">
                    <img src={IMAGES.COUPON_01} alt="" className="eventImg" />
                    <img src={IMAGES.COUPON_02} alt="" className="eventImg" />
                </div>

                <div className="reviewArea">
                    <Link to="/review">
                        리뷰 쓰러 가기
                    </Link>
                </div>
            </div>
        </EventBannerMallStyle>
    )
};

export default EventBannerMall;