import React from 'react'
import styled from 'styled-components'

const SidemenuStyle = styled.div`
    .sideMenuContainer {
        display: inline-block;
        width: 125px;
        position: fixed;
        right: 0px;
        bottom: 50px;
        text-align: center;

        .sideMenu {
            width: inherit;
            border: 1px solid #e1e1e1;

            .sideBtn {
                width: inherit;
                height: 50px;
                line-height: 50px;
                background-color: #ffffff;
                font-size: 13px;

                :not(:last-child) {
                    border-bottom: 1px solid #e1e1e1;
                }

                :last-child {
                    height: 35px;
                    line-height: 35px;
                }

                :active {
                    background-color: #ea003d;
                    color: #ffffff;
                }
            }
        }
    }
`

const Sidemenu = () => {
    return (
        <SidemenuStyle>
            <div className="sideMenuContainer">
                <ul className="sideMenu">
                    <li className="sideBtn">히스토리</li>
                    <li className="sideBtn">브랜드샵</li>
                    <li className="sideBtn"
                        onClick={() => window.scrollTo(0,0)}
                    >
                        TOP
                    </li>
                </ul>
            </div>
        </SidemenuStyle>
    )
};

export default Sidemenu;