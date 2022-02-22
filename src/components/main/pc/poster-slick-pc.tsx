import React from "react";
import styled from "styled-components";
import Slider, { Settings } from 'react-slick';

import '../../../assets/slick/slick.css';
import '../../../assets/slick/slick-theme.css'; 

import IMAGES from "../../../assets/images";

interface PosterSlickProps {
    title: string;
    category: string;
}

const PosterSlickPcStyle = styled.div`
    width: 100%;

    .title {
        color: #ffffff;
        margin-left: 60px;
    }

    .posterContainer {
        text-align: left;

        :first-child {
            margin-left: 60px;
        }

        .posterImg {
            width: 245px;
        }

        .posterTitle {
            color: #ffffff;
        }
    }
`;

const SliderStyle = styled(Slider)`
    padding-right: 60px;
`

const PosterSlickPc = ({title, category}: PosterSlickProps) => {
    const settings = {
        infinite: false,
        centerPadding: "60px",
        slidesToShow: 6,
        speed: 500,
        slidesPerRow: 1
    };

    return (
        <PosterSlickPcStyle>
            <h2 className="title">{title}</h2>
            <SliderStyle {...settings}>
                {IMAGES.CONTENT_POSTER.map((poster, index) => {
                    return (
                        <div className="posterContainer" key={index}>
                            <img src={poster.src} alt={`poster${index}`} className="posterImg" />
                            <span className="posterTitle">
                                {poster.title}
                            </span>
                        </div>
                    )
                })}
            </SliderStyle>
        </PosterSlickPcStyle>
    )
};

export default PosterSlickPc;