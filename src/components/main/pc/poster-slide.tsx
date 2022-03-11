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

const PosterSlideStyle = styled.div`
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
                position: relative;
        
                :first-child {
                    margin-left: 60px;
                }
        
                .imgArea {
                    overflow: hidden;
                    
                    .posterImg {
                        width: 100%;
                        border-radius: 5px;
                    }
            
                    .explanationArea {
                        width: 245px;;
                        height: 353px;
                        position: absolute;
                        top: 0px;
                        background-color: #181919;
                        overflow: hidden;
                        border-radius: 3px;
                        opacity: 0;
    
                        .explanationTitle {
                            color: #ffffff;
                        }
    
                        .explanationText {
                            color: rgba(255,255,255,.64);
                        }
                    }

                    .explanationVisible {
                        opacity: 1;
                        transition: 0.5s ease 0s;
                    }
                }

                .posterTitleArea {
                    width: 100%;
                    overflow: hidden;

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

const PosterSlide = ({title, category}: PosterSlickProps) => {
    const [slideshowNum, setSlideshowNum] = useState<number>(0);
    const [displayValue, setDisplayValue] = useState<boolean>(false);
    const [explanationVisibleValue, setExplanationVisibleValue] = useState<boolean>(false);
    const slideUrl = 'https://tving-react-ts.s3.ap-northeast-2.amazonaws.com/main/popular-poster/';
    const [slideshowImgName, setSlideshowImgName] = useState([] as ContentsInfo[]);

    useEffect(() => {
        axios.get(`http://127.0.0.1:3001/contents/posterList`)
        .then(response => setSlideshowImgName(response.data))
        .catch(err => console.log(err));
    },[]);

    return (
        <PosterSlideStyle
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
                            <Link to={`/contents/${contentsInfo.contents_code}`} 
                                className="posterArea" 
                                key={index}
                                onMouseOver={() => setExplanationVisibleValue(true)}
                                onMouseOut={() => setExplanationVisibleValue(false)}
                            >
                                
                                    <div className="imgArea">
                                        <img className="posterImg" src={`${slideUrl}${contentsInfo.contents_name}`} alt={`poster${index}`} />

                                        <div className={`explanationArea ${explanationVisibleValue === true ? "explanationVisible" : ""}`}>
                                            <p className="explanationTitle">
                                                어쩌다, 결혼
                                            </p>
                                            <p className="explanationText">
                                                ‘척’만 하자고요...‘척’만!
                                                재산을 물려받기 위해서는 결혼을 꼭 해야만 하는 ‘성석’(김동욱)
                                                엄마와 세 오빠의 결혼 압박에서 벗어나 나만의 인생을 찾고 싶은 ‘해주’(고성희)
                                                부모님의 등쌀에 못 이겨 나간 맞선 자리에서 만나게 된 둘은
                                                각자의 목적을 달성하기 위해 딱! 3년간만 결혼하는 ‘척’하기로 계약한다.

                                                하지만 두 사람의 결혼 준비가 진행될수록
                                                방해꾼들은 늘어만 가고,
                                                넘어야 할 산이 한두 개가 아닌데...

                                                결혼하는 척, 같이 사는 척, 딱! 3년만 하는 척! 척!
                                                과연 두 사람의 ‘하는 척’은 성공할 수 있을까?
                                            </p>
                                        </div>
                                    </div>

                                    <div className="posterTitleArea">
                                        <span className="posterTitle">
                                            {contentsInfo.contents_name}
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
        </PosterSlideStyle>
    )
};

export default PosterSlide;