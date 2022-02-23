import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Header from '../../components/header';
import Footer from '../../components/footer';
import PosterSlickPc from '../../components/main/pc/poster-slick-pc';
import Notice from '../../components/live/notice';

const LiveStyle = styled.div`
    background-color: #000000;
`;

const LivePage = () => {
    return (
        <LiveStyle>
            <Header />

            <PosterSlickPc title="티빙에서 꼭 봐야하는 콘텐츠" category="recommend" />
            <PosterSlickPc title="인기 프로그램" category="best" />
            <PosterSlickPc title="좋아할만한 영화" category="like" />
            <PosterSlickPc title="이번주 업데이트 영화" category="new" />
            <PosterSlickPc title="추억과 힙 사이, 그 때 그 시절" category="history" />
            <PosterSlickPc title="#TV프로그램 #휴머니즘" category="hashtag" />

            <Notice />

            <Footer />
        </LiveStyle>
    )
};

export default LivePage;