import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import ICONS from '../assets/icons';

const FooterStyle = styled.footer`
    margin: 0px 60px;
    color: #c2c2c2;
    text-align: left;
    margin-top: 75px;
    padding-bottom: 75px;
    border-top: 1px solid #212121;

    .footerMenu {
        margin 10px 0px;

        .footerMenuList {
            display: inline-block;

            :not(:last-child) {
                margin-right: 15px;
            }

            :hover {
                color: #ffffff;
            }

            a {
                color: #c2c2c2;

                :hover {
                    color: #ffffff;
                }
            }
        }
    }

    .copyrightBox {
        margin-bottom: 30px;

        .copyrightArea {

            .copyrightText {
                display: inline-block;
                padding: 0px 10px;
                height: 11px;
                line-height: 11px;
    
                :not(:last-child) {
                    border-right: 1px solid #c2c2c2;
                }

                :first-child {
                    padding-left: 0px;
                }
    
                .businessBtn,
                .customerQna {
                    cursor: pointer;
                    text-decoration: underline;
                    color: #c2c2c2;
                    transition: 0.5s ease 0s;
    
                    :hover {
                        color: #ffffff;
                    }
                }
                
            }
        }
    }

    .sns {
        margin: 0px;
        .snsList {
            display: inline-block;
            
            :not(:last-child) {
                margin-right: 15px;
            }
        }
    }


    .copyright {
        margin-top: 24px;
    }
`

const Footer = () => {
    return (
        <FooterStyle>
            <ul className="footerMenu">
                <li className="footerMenuList">
                    <Link to="/help/notice">고객센터</Link>    
                </li>
                <li className="footerMenuList">
                    <Link to="/policy/terms">
                        <strong>이용약관</strong>
                    </Link>
                </li>
                <li className="footerMenuList">
                    <Link to="/policy/privacy">
                        <strong>개인전보 처리 방침</strong>
                    </Link>
                </li>
                <li className="footerMenuList">
                    <Link to="/policy/youth">
                        청소년 보호정책
                    </Link>
                </li>
                <li className="footerMenuList">
                    <Link to="/policy/legal">
                        법적고지
                    </Link>
                </li>
            </ul>

            <div className="copyrightBox">
                <ul className="copyrightArea">
                    <li className="copyrightText">대표이사 : YANG JIEUL</li>
                    <li className="copyrightText">
                        <a className='businessBtn' href="https://www.ftc.go.kr/bizCommPop.do?wrkr_no=1888801893&apv_perm_no=" target="_blank">
                            사업자정보확인
                        </a>
                    </li>
                    <li className="copyrightText">개인정보관리책임자 : 고창남</li>
                    <li className="copyrightText">사업자등록번호 : 188-88-01893</li>
                    <li className="copyrightText">통신판매신고번호 : 2020-서울마포-3641호</li>
                </ul>

                <ul className="copyrightArea">
                    <li className="copyrightText">사업장 : 서울특별시 마포구 상팜산로 34, DMC디지털큐브 15층(상암동)</li>
                    <li className="copyrightText">호스팅사업자 : 씨제이올리브네트웍스(주)</li>
                </ul>

                <ul className="copyrightArea">
                    <li className="copyrightText">
                        <Link to="/login" className='customerQna'>
                            고객문의 바로가기
                        </Link>
                    </li>
                    <li className="copyrightText">대표메일 : tving@cj.net</li>
                    <li className="copyrightText">티빙몰 문의 : tving.mall@cj.net</li>
                    <li className="copyrightText">고객센터 : 1670-1525 (평일/주말 09시~18시, 공휴일 휴무)</li>
                </ul>

                <ul className="copyrightArea">
                    <li className="copyrightText">ENM 시청자 상담실 (편성 문의 및 시청자 의견) : 080-080-0780</li>
                    <li className="copyrightText">Mnet 고객센터(방송편성문의) : 1855-1631</li>
                </ul>
            </div>

            <ul className="sns">
                <li className="snsList">유튜브</li>
                <li className="snsList">인스타그램</li>
                <li className="snsList">
                    <img src={ICONS.TWITTER_ICON} alt="TWITTER" />
                </li>
                <li className="snsList">
                    <img src={ICONS.FACEBOOK_ICON} alt="KAKAO" />
                </li>
            </ul>

            <p className="copyright">
                Copyright
                <span dangerouslySetInnerHTML={{ "__html": "&copy;" }} />
                주식회사 티빙 All right reserved.
            </p>
        </FooterStyle>
    )
};

export default Footer;
