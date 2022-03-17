import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import Header from '../header';
import Footer from '../footer';
import ContentsInfo from './contents-info';
import ContentsPlayList from './contents-play-list';
import PopularPosterSlide from '../main/pc/popular-poster-slide';

const ContentsStyle = styled.div`
`;

const Contents = () => {
    return (
        <ContentsStyle>
            <Header />
            <ContentsInfo />
            <ContentsPlayList />
            <PopularPosterSlide title="인기 프로그램" category="best" />
            <PopularPosterSlide title="함께 즐겨보는 TV프로그램" category="best" />
            <PopularPosterSlide title="TVING ORIGINAL & ONLY" category="best" />
            <PopularPosterSlide title="티빙 오리지널, 지금 스트리밍하세요!" category="best" />
            <Footer />
        </ContentsStyle>
    )
};

export default Contents;