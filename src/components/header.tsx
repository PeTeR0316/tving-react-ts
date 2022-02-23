import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

import Nav from './nav';

// const slideAnimate = keyframes`
// 100%{
//     transform: translateX(0%);
// `

const HeaderStyle = styled.header`
    width: 100%;

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
        vertical-align: top;
        float: right;
        

        .search {
            border: none;
            margin-right: 10px;
        }

        .userImg {
            width: 36px;
            height: 36px;
            background-color: #ffffff;
            display: inline-block;
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
                    <button className="search">검색</button>
                    <div className="userImg"></div>
                </div>
            </div>
        </HeaderStyle>
    )
}

export default Header;