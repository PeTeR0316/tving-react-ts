import React from 'react';
import styled from 'styled-components';

import ICONS from '../assets/icons';

const NavStyle = styled.nav`
    color: #fefefe;
    display: inline-block;
    height: 90px;
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
                    실시간
                </li>
                <li className="mainMenuList">TV프로그램</li>
                <li className="mainMenuList">영화</li>
                <li className="mainMenuList">티빙몰</li>
            </ul>
        </NavStyle>
    )
}

export default Nav;