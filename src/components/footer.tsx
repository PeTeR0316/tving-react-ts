import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const FooterStyle = styled.footer`
    color: #c2c2c2;
    text-align: center;
    padding-bottom: 75px;

    .sns {
        margin: 0px;
        .snsList {
            display: inline-block;
            
            :not(:last-child) {
                margin-right: 15px;
            }
        }
    }

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

    .copyright {
        margin: 0px;
    }
`

const Footer = () => {
    return (
        <FooterStyle>
            <ul className="sns">
                <li className="snsList">유튜브</li>
                <li className="snsList">인스타그램</li>
                <li className="snsList">트위터</li>
                <li className="snsList">페이스북</li>
            </ul>

            <ul className="footerMenu">
                <li className="footerMenuList">
                    <Link to="/policy/terms">이용약관</Link>    
                </li>
                <li className="footerMenuList">
                    <Link to="/policy/privacy">
                        <strong>개인전보 처리 방침</strong>
                    </Link>
                </li>
                <li className="footerMenuList">사업자정보</li>
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