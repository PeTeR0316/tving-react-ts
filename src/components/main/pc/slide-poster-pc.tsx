import React from "react";
import styled, { keyframes } from "styled-components";

import IMAGES from "../../../assets/images";
import SubtitlePC from "./subtitle-pc";

interface slidePosterProps {
    titleH2?: string,
    titleH3?: string,
    titleH4?: string,
    posters?: Array<string>
}

const slideAnimate = keyframes`
    25%{
        transform: translateX(0%);
    }

    25%{
        transform: translateX(-50%);
    }

    50%{
        transform: translateX(-75%);
    }

    75%{
        transform: translateX(-100%);
    }

    100%{
        transform: translateX(-25%);
    }
`

const SlidePosterPcStyle = styled.div`
    width: 100%;
    overflow: hidden;
    padding-bottom: 100px;

    .subtitle {
        width: 100%;
        text-align: center;
        padding-top: 100px;

        h2 {
            color: #e6e6e6;
        }

        h3 {
            color: #808080;
        }

        h4 {
            color: #5e5e5e;
        }
    }

    .slideContainer {
        width: ${window.innerWidth};
        position: relative;
        left: 50%;
        transform: translateX(-25%);
        display: flex;
        
        

        .slideImg {
            display: inline-block;
            height: 470px;

            :not(:first-child) {
                padding-left: 15px;
            }
        }
    }
`;

const SlidePosterPc = ({titleH2, titleH3, titleH4, posters}:slidePosterProps) => {

    return(
        <SlidePosterPcStyle>
            <div className="subtitle">
                <h2>{titleH2}</h2>
                <h3>{titleH3}</h3>
                <h4>{titleH4}</h4>
            </div>

            <div className="slideContainer">
                {IMAGES.POSTERS.map((src, index) => {
                    return (
                        <img className="slideImg" src={src} alt={`poster${index}`} />
                    )
                })}
            </div>
        </SlidePosterPcStyle>
    )
}

export default SlidePosterPc;