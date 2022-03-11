import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

import IMAGES from "../../../assets/images";

const ThinBannerStyle = styled.div`
    padding: 60px;
    margin-bottom: 60px;
    
    .thinBannerContainer {
        width: 100%;
        position: relative;

        .thinBanner {
            width: 100%;
            transition: 0.5s ease 0s;
            position: absolute;
        }
    }
`;

const ThinBanner = () => {
    const [bannerMarginValue, seBannerMarginValue] = useState<number>(0);

    return (
        <ThinBannerStyle>
            <div className="thinBannerContainer">
                <img className="thinBanner" 
                    src={IMAGES.THIN_BANNER} 
                    onMouseOver={() => seBannerMarginValue(-30)}
                    onMouseOut={() => seBannerMarginValue(0)}
                    style={{marginTop:`${bannerMarginValue}px`}}
                    alt="thin-banner-img" 
                />
            </div>
        </ThinBannerStyle>
    )
}

export default ThinBanner;