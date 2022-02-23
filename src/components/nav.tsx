import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import ICONS from '../assets/icons';

const NavStyle = styled.nav`
    width: 500px;
    height: 90px;
    color: #fefefe;
    display: inline-block;
    vertical-align: top;

    .mainMenu {
        display: inline-block;
        margin: 0px;

        .mainMenuList {
            display: inline-block;
            margin: 0px 10px;
            
            .live {
                ::before {
                    content: '';
                    background-image: url ${ICONS.ICON_MENU_LIVE}
                }
            }
        }
    }

`;

const Nav = () => {
    return (
        <NavStyle>
            <ul className="mainMenu">
                <li className="mainMenuList live">
                    {/* <img className='live-icon' src={ICONS.ICON_MENU_LIVE} alt="live-icon" /> */}
                    <Link to="/live">
                        실시간
                    </Link>
                </li>
                <li className="mainMenuList">
                    <Link to="/tv">
                        TV프로그램
                    </Link>
                </li>
                <li className="mainMenuList">
                    <Link to="/movie">
                        영화
                    </Link>
                </li>
                <li className="mainMenuList">
                    <Link to="/mall">
                        티빙몰
                    </Link>
                </li>
            </ul>
        </NavStyle>
    )
}

export default Nav;