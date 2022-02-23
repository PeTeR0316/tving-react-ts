import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import IMAGES from "../../../assets/images";

const MainEventStyle = styled.div`
    padding: 60px;

    .titleArea {
        width: 100%;
        height: 70px;
        line-height: 70px;
        display: flex;
        justify-content: space-between;

        .title {
            color: #ffffff;
            display: inline-block;
        }

        .totalListBtn {
            color: #ffffff;
        }
    }

    .eventArea {
        width: 100%;
        display: flex;
        justify-content: space-between;
        
        .eventList {
            display: inline-block;
            width: 25%;

            :not(:last-child) {
                padding-right: 10px;
            }

            .eventImg {
                width: 100%;
            }
        }
    }
`;

const MainEvent = () => {
    return (
        <MainEventStyle>
            <div className="titleArea">
                <h2 className="title">이벤트</h2>
                <Link to="/eventList" className="totalListBtn">
                    전체보기
                </Link>
            </div>

            <ul className="eventArea">
                {IMAGES.MAIN_EVENT.map((eventSrc, index) => {
                    return (
                        <li className="eventList" key={index}>
                            <img src={eventSrc} className="eventImg" alt="event-img"/>
                        </li>
                    )
                })}
            </ul>
        </MainEventStyle>
    )
};

export default MainEvent