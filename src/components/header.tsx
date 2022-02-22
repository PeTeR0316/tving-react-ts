import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

import Nav from './nav';

// const slideAnimate = keyframes`
// 100%{
//     transform: translateX(0%);
// `

const HeaderStyle = styled.header`
    width: 100%
    height: 90px;
    line-height: 90px;
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0));
    position: fixed;
    top: 0px;
    padding: 0px 60px;
    z-index: 99;
    
    .backgroundColorBlack {
        background-color: #000000;
        opacity: 0.9;
    }

    .title {
        color: #ffffff;
        margin: 0;
        display: inline-block;
    }

    .visible {
        opacity: 0.9;
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

    useEffect(() => {
        setScroll(window.scrollY);
        console.log(window.scrollY);
    }, [scroll])

    return (
        <HeaderStyle className={scroll > 0 ? 'backgroundColorBlack' : ''}>
            <Link to="/">
                <h1 className='title'>TVING</h1>
            </Link>

            <Nav />

            <div className="userMenu">
                <button className="search">검색</button>
                <div className="userImg"></div>
            </div>
        </HeaderStyle>
    )
}

export default Header;