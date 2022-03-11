import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from "axios";

import IMAGES from "../../../assets/images";
import ICONS from "../../../assets/icons";

interface PosterSlickProps {
    title: string;
    category: string;
}

type ContentsInfo = {
    contents_code: string;
    contents_name: string;
}

const PopularPosterSlideStyle = styled.div`
    width: 100%;
    position: relative;

    .titleArea {
        height: 70px;
        line-height: 70px;
        display: flex;
        justify-content: space-between;

        .title {
            color: #ffffff;
            margin: 0px 60px;
            display: inline-block;
        }

        .totalListBtn {
            color: #ffffff;
            margin: 0px 60px;
        }
    }

    .posterContainer {
        width: 100%;
        overflow: hidden;

        .posterFrame {
            width: 300%;

            .posterArea {
                text-align: left;
                display: inline-block;
                padding-right: 10px;
                width: 245px;
                vertical-align: top;
        
                :first-child {
                    margin-left: 60px;
                }
        
                .posterImg {
                    width: 100%;
                    border-radius: 5px;
                }
        
                .posterTitleArea {
                    width: 100%;
                    overflow: hidden;

                    .posterNumber {
                        color: #ffffff;
                        font-size: 3.6em;
                        font-weight: 500;
                        margin-right: 10px;
                    }

                    .posterTitle {
                        color: #ffffff;
                        padding-top: 10px;
                        margin: 0px;
                    }
                }
            }
        }
    }

    .leftBtn {
        width: 50px;
        height: 50px;
        border: none;
        background-image: url(${ICONS.PC_ARROW_LEFT_WHITE});
        background-size: 100%;
        background-repeat: no-repeat;
        background-color: transparent;
        opacity: 0;
        position: absolute;
        top: 50%;
        left: 0px;
        transform: translateY(-50%);
        z-index: 3;
    }

    .rightBtn {
        width: 50px;
        height: 50px;
        border: none;
        background-image: url(${ICONS.PC_ARROW_RIGHT_WHITE});
        background-size: 100%;
        background-repeat: no-repeat;
        background-color: transparent;
        opacity: 0;
        position: absolute;
        top: 50%;
        right: 0px;
        transform: translateY(-50%);
        z-index: 3;
    }

    .visible {
        opacity: 1;
        transition: 1s ease 0s;
    }
`;

const PopularPosterSlide = ({title, category}: PosterSlickProps) => {
    const [slideshowNum, setSlideshowNum] = useState<number>(0);
    const [displayValue, setDisplayValue] = useState<boolean>(false);
    const slideUrl = 'https://tving-react-ts.s3.ap-northeast-2.amazonaws.com/main/popular-poster/';
    const [slideshowImgName, setSlideshowImgName] = useState([] as ContentsInfo[]);

    useEffect(() => {
        axios.get(`http://127.0.0.1:3001/contents/posterList`)
        .then(response => setSlideshowImgName(response.data))
        .catch(err => console.log(err));
    },[]);


    return (
        <PopularPosterSlideStyle
            onMouseOver={() => setDisplayValue(true)}
            onMouseOut={() => setDisplayValue(false)}
        >
            <div className="titleArea">
                <h2 className="title">{title}</h2>
                <Link to="/list" className="totalListBtn">
                    전체보기
                </Link>
            </div>

            <div className="posterContainer">
                <div className="posterFrame"
                    style={{
                        marginLeft: `${-100 * slideshowNum}%`,
                        transition: `0.5s ease 0s`
                    }}
                >
                    {slideshowImgName.map((contentsInfo, index) => {
                        return(
                            <Link to={`/contents/${contentsInfo.contents_code}`} className="posterArea" key={index}>
                            <img src={`${slideUrl}${contentsInfo.contents_name}`} alt={`poster${index}`} className="posterImg" />
                            <div className="posterTitleArea">
                                <span className="posterNumber">
                                    {index + 1}
                                </span>
                                <span className="posterTitle">
                                    {contentsInfo.contents_name.slice(0,10)}...
                                </span>
                            </div>
                        </Link>
                        )
                    })}
                </div>
            </div>
            
            <button type="button"
                className={`leftBtn ${displayValue === true ? "visible" : ""}`}
                onClick={() => {
                    if(slideshowNum !== 0) {
                        setSlideshowNum(slideshowNum - 1)
                    }
                }}
            />
            <button type="button"
                className={`rightBtn ${displayValue === true ? "visible" : ""}`}
                onClick={() => setSlideshowNum(slideshowNum + 1)}
            />
        </PopularPosterSlideStyle>
    )
};

export default PopularPosterSlide;