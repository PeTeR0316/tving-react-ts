import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import IMAGES from '../../assets/images';
import Header from '../../components/header';
import Footer from '../../components/footer';
import MainBanner from '../../components/main/pc/main-banner';
import PosterSlickPc from '../../components/main/pc/poster-slick-pc';
import MainEvent from '../../components/main/pc/main-event';
import PopularPosterSlide from '../../components/main/pc/popular-poster-slide';
import ThinBanner from '../../components/main/pc/thin-banner';
import PosterSlide from '../../components/main/pc/poster-slide';

const MainPageStyle = styled.div`
    width: 100%;
    background-color: #000000;
`

const MainPage = () => {
    return (
        <MainPageStyle>
            <Header />

            <MainBanner />

            <PosterSlickPc title="티빙에서 꼭 봐야하는 콘텐츠" category="recommend" />
            
            <PopularPosterSlide title="인기 프로그램" category="best" />

            <PosterSlide title="이번주 업데이트 영화" category="new" />

            {/* <PosterSlickPc title="인기 프로그램" category="best" />
            <PosterSlickPc title="좋아할만한 영화" category="like" />
            <PosterSlickPc title="이번주 업데이트 영화" category="new" />
            <PosterSlickPc title="추억과 힙 사이, 그 때 그 시절" category="history" />
            <PosterSlickPc title="#TV프로그램 #휴머니즘" category="hashtag" /> */}

            <ThinBanner />

            <MainEvent />

            <Footer />
        </MainPageStyle>
    )
};

export default MainPage;