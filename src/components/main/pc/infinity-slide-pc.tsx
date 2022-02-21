import React from 'react';
import styled, { keyframes } from "styled-components";

import IMAGES from '../../../assets/images';

interface slidePosterProps {
    titleH2?: string,
    titleH3?: string,
    titleH4?: string,
}

const slideAnimate = keyframes`
    100%{
        transform: translateX(-50%);
    }
`

const InfinitySlidePcStyle = styled.div`
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

    .infinitySlideContainer {
        width: 100%;

        .infinitySlideFrame {
            width: 200%;
            display: flex;
            animation: ${slideAnimate} linear 10s infinite;

            .infinitySlide {
                width: 100%;
                display: flex;
                
                :last-child {
                    margin-left: 15px;
                }
    
                .infinitySlideList {
                    width: 25%;
                    display: inline-block;
                    
                    :not(:first-child) {
                        margin-left: 15px;
                    }
    
                    img {
                        width: 100%;
                        border-radius: 5px;
                    }
                }
            }
        }

        .infinitySlideFrameTwo {
            width: 200%;
            display: flex;
            animation: ${slideAnimate} linear 9.9s infinite;

            .infinitySlide {
                width: 100%;
                display: flex;
                
                :last-child {
                    margin-left: 15px;
                }
    
                .infinitySlideList {
                    width: 25%;
                    display: inline-block;
                    
                    :not(:first-child) {
                        margin-left: 15px;
                    }
    
                    img {
                        width: 100%;
                        border-radius: 5px;
                    }
                }
            }
        }
    }
`;

const InfinitySlidePc = ({titleH2, titleH3, titleH4}:slidePosterProps) => {
    return (
        <InfinitySlidePcStyle>
            <div className="subtitle">
                <h2>{titleH2}</h2>
                <h3>{titleH3}</h3>
                <h4>{titleH4}</h4>
            </div>

            <div className="infinitySlideContainer">
                <div className='infinitySlideFrame'>
                    <ul className="infinitySlide">
                        {IMAGES.INFINITY_SLIDE_1.map((src, index) => {
                            return (
                                <li className='infinitySlideList'>
                                    <img src={src} alt={`slideImg${index}`} />
                                </li>
                            )
                        })}
                    </ul>

                    <ul className="infinitySlide">
                        {IMAGES.INFINITY_SLIDE_1.map((src, index) => {
                            return (
                                <li className='infinitySlideList'>
                                    <img src={src} alt={`slideImg${index}`} />
                                </li>
                            )
                        })}
                    </ul>
                </div>

                <div className='infinitySlideFrameTwo'>
                    <ul className="infinitySlide">
                        {IMAGES.INFINITY_SLIDE_2.map((src, index) => {
                            return (
                                <li className='infinitySlideList'>
                                    <img src={src} alt={`slideImg${index}`} />
                                </li>
                            )
                        })}
                    </ul>

                    <ul className="infinitySlide">
                        {IMAGES.INFINITY_SLIDE_2.map((src, index) => {
                            return (
                                <li className='infinitySlideList'>
                                    <img src={src} alt={`slideImg${index}`} />
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </InfinitySlidePcStyle>
    )
}

export default InfinitySlidePc;