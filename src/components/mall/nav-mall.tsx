import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import IMAGES from "../../assets/images";

const NavMallStyle = styled.nav`
    .navContainer {'
        width: 1240px;
        padding-top: 60px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
    

        .hashtagMenu {
            display: inline-block;
            border-right: 1px solid #1e1e1e;

            .hashtagMenuList {
                display: inline-block;
            }
        }

        .mallMainMenu {
            display: inline-block;

            .mallMainMenuList {
                display: inline-block;
            }
        }
    }
`;
const NavMall = () => {
    return(
        <NavMallStyle>
            <div className="navContainer">
                <ul className="hashtagMenu">
                    <li className="hashtagMenuList">PROGRAM</li>
                    <li className="hashtagMenuList">#내과박원장</li>
                    <li className="hashtagMenuList">#여고추리반2</li>
                    <li className="hashtagMenuList">#EMERGENCY</li>
                </ul>

                <ul className="mallMainMenu">
                    <li className="mallMainMenuList">
                        <img src={IMAGES.TIVING_ORIGINAL_MALL_LOGO} alt="originalLogo" />
                    </li>
                    <li className="mallMainMenuList">드라마</li>
                    <li className="mallMainMenuList">예능</li>
                    <li className="mallMainMenuList">애니/캐릭터</li>
                    <li className="mallMainMenuList">아티스트</li>
                </ul>
            </div>
        </NavMallStyle>
    )
}

export default NavMall;