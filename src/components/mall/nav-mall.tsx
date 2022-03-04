import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import IMAGES from "../../assets/images";

const NavMallStyle = styled.nav`
    .navContainer {
        width: 1240px;
        padding-top: 60px;
        margin: 0 auto;
        
        .hashtagMenu {
            display: inline-block;
            width: 620px;
            border-right: 1px solid #1e1e1e;
            
            .hashtagMenuList {
                display: inline-block;
                width: 115px;
                padding: 0px 20px;
            }
        }

        .mallMainMenu {
            display: inline-block;
            width: 618px;

            .mallMainMenuList {
                display: inline-block;
                padding: 0px 20px;
            }
        }

        .subMenu {
            width: 1240px;
            height: 600px;
            background-color: #ffffff;
            position: absolute;
            z-index: 99;
        }
    }

    .displayNone {
        display: none;
    }

    .displayBlock {
        display: block;
    } 
`;
const NavMall = () => {
    const [visible, setVisible] = useState<boolean>(false)
    return(
        <NavMallStyle>
            <div className="navContainer" 
                onMouseOver={() => setVisible(true)}
                onMouseOut={() => setVisible(false)}
            >
                <ul className="hashtagMenu" 
                >
                    <li className="hashtagMenuList">PROGRAM</li>
                    <li className="hashtagMenuList">#내과박원장</li>
                    <li className="hashtagMenuList">#여고추리반2</li>
                    <li className="hashtagMenuList">#EMERGENCY</li>
                </ul>

                <ul className="mallMainMenu">
                    <li className="mallMainMenuList">
                        <img src={IMAGES.TVING_ORIGINAL_MALL_LOGO} alt="originalLogo" />
                    </li>
                    <li className="mallMainMenuList">드라마</li>
                    <li className="mallMainMenuList">예능</li>
                    <li className="mallMainMenuList">애니/캐릭터</li>
                    <li className="mallMainMenuList">아티스트</li>
                </ul>

                <div className={`subMenu ${visible === false ? 'displayNone' : 'displayBlock'}`}>
                </div>
            </div>
        </NavMallStyle>
    )
}

export default NavMall;