import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import IMAGES from "../../../assets/images";

const DetailThumbnailStyle = styled.div`
    .thumbnailContainer {
        width: 1240px;
        margin: 0 auto;
        text-align: center;

        .thumbnail {
            width: 450px;
            height: 450px;
        }
    }
`;

const DetailThumbnail = () => {
    return (
        <DetailThumbnailStyle>
            <div className="thumbnailContainer">
                <img className="thumbnail" src={IMAGES.PRODUCT_SLIDESHOW_IMG_DUMMY[1].imgSrc} alt="thumbnail" />
            </div>
        </DetailThumbnailStyle>
    )
};

export default DetailThumbnail;
