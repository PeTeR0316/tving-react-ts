import React from 'react';
import styled from 'styled-components';

import Header from '../header';
import Footer from '../footer';
import ContentsInfo from './contents-info';

const ContentsStyle = styled.div`
`;

const Contents = () => {
    return (
        <ContentsStyle>
            <Header />
            <ContentsInfo />

            <Footer />
        </ContentsStyle>
    )
};

export default Contents;