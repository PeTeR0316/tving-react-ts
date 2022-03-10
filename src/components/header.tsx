import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

import Nav from './nav';

import ICONS from '../assets/icons';

// const slideAnimate = keyframes`
// 100%{
//     transform: translateX(0%);
// `

const HeaderStyle = styled.header`
    width: 100%;
    position: relative;

    .container {
        width: 100%;
        height: 90px;
        line-height: 90px;
        background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0));
        position: fixed;    
        padding: 0px 60px;
        z-index: 99;
    }
    

    .backgroundColorBlack {
        background-color: #000000;
        opacity: 0.9;
        transition: 0.5s linear;
    }

    .title {
        color: #ffffff;
        margin: 0;
        display: inline-block;
    }

    .userMenu {
        display: inline-block;
        height: 90px;
        position: absolute;
        right: 200px;

        .search {
            width: 2.333rem;
            height: 2.333rem;
            border: none;
            margin-right: 10px;
            background-image: url(${ICONS.SEARCH_ICON_WHITE});
            background-size: 100%;
            background-repeat: no-repeat;
            background-color: transparent;
            opacity: 0.7;
            margin-right: 2.333rem;
        }

        .userImg {
            width: 2.333rem;
            height: 2.333rem;
            background-image: url(${ICONS.USER_ICON});
            background-size: 100%;
            background-repeat: no-repeat;
            display: inline-block;
            border-radius: 5px;
        }
    }
`

const Header = () => {
    const [scroll, setScroll] = useState<number>(0);

    window.addEventListener(
        "scroll", 
        () => setScroll(window.scrollY)
    );

    return (
        <HeaderStyle>
            <div className={`container ${scroll > 0 ? 'backgroundColorBlack' : ''}`}>
                <Link to="/">
                    <h1 className='title'>TVING</h1>
                </Link>

                <Nav />

                <div className="userMenu">
                    <button className="search"></button>
                    <div className="userImg"></div>
                </div>
            </div>
        </HeaderStyle>
    )
}

export default Header;