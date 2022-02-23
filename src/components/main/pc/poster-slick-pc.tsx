import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
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

    .titleArea {
        height: 70px;
        line-height: 70px;
        display: flex;
        justify-content: space-between;

        .title {
            color: #ffffff;
            margin-left: 60px;
            display: inline-block;
        }

        .totalListBtn {
            color: #ffffff;
            padding-right: 0px 60px;
        }
    }

    .posterContainer {
        padding-top: 30px;
        text-align: left;

        :first-child {
            margin-left: 60px;
        }

        .posterImg {
            width: 245px;
            border-radius: 5px;
        }

        .posterTitle {
            color: #ffffff;
            display: inline-block;
            padding-top: 10px;
        }
    }
`;

const SliderStyle = styled(Slider)`
    padding-right: 60px;
`

const PosterSlickPc = ({title, category}: PosterSlickProps) => {
    const settings = {
        infinite: false,
        // centerPadding: "60px",
        slidesToShow: 6,
        speed: 500,
        slidesPerRow: 1,
    };

    return (
        <PosterSlickPcStyle>
            <div className="titleArea">
                <h2 className="title">{title}</h2>
                <Link to="/list" className="totalListBtn">
                    전체보기
                </Link>
            </div>

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