import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NoticeStyle = styled.div`
    display: flex;
    justify-content: space-between;
    padding : 75px 60px 0px;

    .noticeTitle {
        display: inline-block;

        .noticeCategory {
            color : #6e6e6e;
            margin-right: 15px;
        }

        .message {
            color : #dedede;
        }
    }

    .brandBtns {
        display: inline-block;
        color : #dedede;
        margin: 0;
        
    }
`;

const Notice = () => {
    return (
        <NoticeStyle>
            <div className="noticeTitle">
                <span className="noticeCategory">
                    <Link to="/notice">
                        공지사항
                    </Link>
                </span>
                <span className="message">
                    <Link to="/notice">
                        [안내] 2002 카타르 월드컵 최종예선 중계 서비스 안내 (1월 ~ 2월)
                    </Link>
                </span>
            </div>

            <ul className="brandBtns">
                <li className="brandBtn">브랜드 바로가기 +</li>
                <li className="groupBtn">그룹 계열사 바로가기</li>
            </ul>
        </NoticeStyle>
    )
};

export default Notice;

