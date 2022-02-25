import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import ICONS from "../../assets/icons";

const FooterMallStyle = styled.div`
    .footerContainer {
        width: 100%;
        background-color: #212121;

        .footerMenuArea {
            width: 1240px;
            margin: 0 auto;
            color: #ffffff;
            padding: 18px; 0px;

            .footerMenu {
                margin: 0px;
                display: inline-block;

                .footerMenuList {
                    display: inline-block;
                    font-size: 14px;

                    :not(:last-child) {
                        padding-right: 18px;
                    }
                }
            }
        }

        .copyrightArea {
            width: 100%;
            border-top: 1px solid #97979769;
            color: #97979769;
            font-size : 13px;
            letter-spacing: -0.3px;
            padding: 22px 0px;

            .copyright {
                width: 1240px;
                margin: 0 auto;
                padding-bottom: 30px;

                .copyrightInfo {
                    padding-bottom: 2px;
                    margin: 0px;
                }
            }

            .copyrightText {
                width: 1240px;
                margin: 0 auto;
            }
        }
    }
`;

const FooterMall = () => {
    const [barndList, setBrandList] = useState<Array<string>>(
        ['tvN', 'OtvN', 'MNET', 'ONSTYLE', 'OLIVE', 'Xtvn', 'OCN', 'chCGV', 'SUPER ACTION', 'TOONIVERSE', '중화TV', 'OGN', 'CATCH ON']
    );

    const [companyList, setCompanyList] = useState<Array<string>>(
        ['CJ그룹', 'cj주식회사', '엔터테이먼트 & 미디어', 'CJ ENM', 'CJ CGV', 'CJ Hello', 'CJ파워캐스트']
    );

    return (
        <FooterMallStyle>
            <div className="footerContainer">
                <div className="footerMenuArea">
                    <ul className="footerMenu">
                        <li className="footerMenuList">
                            <Link to="/">
                                티빙소개
                            </Link>
                        </li>
                        <li className="footerMenuList">
                            <Link to="/">
                                고객센터
                            </Link>
                        </li>
                        <li className="footerMenuList">
                            <Link to="/">
                                공지사항
                            </Link>
                        </li>
                        <li className="footerMenuList">
                            <Link to="/">
                                FAQ
                            </Link>
                        </li>
                        <li className="footerMenuList">
                            <Link to="/">
                                이용약관
                            </Link>
                        </li>
                        <li className="footerMenuList">
                            <Link to="/">
                                개인정보처리방침
                            </Link>
                        </li>
                        <li className="footerMenuList">
                            <Link to="/">
                                청소년 보호정책
                            </Link>
                        </li>
                        <li className="footerMenuList">
                            <Link to="/">
                                제휴/입점/광고 문의
                            </Link>
                        </li>
                        <li className="footerMenuList">
                            <Link to="/">
                                티빙메인 바로가기
                            </Link>
                        </li>
                        <li className="footerMenuList">
                            <Link to="/">
                                <img src={ICONS.FOOTER_FACEBOOK_ICON} alt="facebookIcon" />
                            </Link>
                        </li>
                    </ul>

                    <select className="brandSelect" name="brandList">
                        {barndList.map((name, index) => {
                            return (
                                <option value={name}>{name}</option>
                            )
                        })}
                    </select>
                    <select className="companySelect" name="companyList" >
                        {companyList.map((name, index) => {
                            return (
                                <option value={name}>{name}</option>
                            )
                        })}
                    </select>
                </div>

                <div className="copyrightArea">
                    <div className="copyright">
                        <p className="copyrightInfo">
                            대표이사 :  YANG JIEUL | 사업자정보확인 | 개인정보 관리책임자 고창남 | 
                            사업자등록번호 188-88-01893 | 통신판매신고번호 2020서울마포3641호
                        </p>
                        <p className="copyrightInfo">
                            서울 마포구 상암산로 34 (상암동) 15층(상암동, DMC디지털큐브) 주식회사 티빙 |
                            호스팅제공자: CJ올리브네트웍스 | 고객센터 1670-1525(평일 09시 ~ 18시) | 
                            대표메일 tving.mall@cj.net

                        </p>
                    </div>

                    <p className="copyrightText">
                        Copyright (C) TVING All rights reserved.
                    </p>
                </div>
            </div>
        </FooterMallStyle>
    )
};

export default FooterMall;