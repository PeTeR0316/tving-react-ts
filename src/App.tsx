import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from 'styled-components'

import MainPage from './pages/main';
import LivePage from './pages/live';
import MallPage from './pages/mall';
import GoodsDetailMall from './pages/mall/goods-detail-mall';
import Contents from './components/contents';

const AppStyled = styled.div`
    width: 100%;
    box-sizing: border-box;
    background-color: #000000;

    a {
        text-decoration: none;
        color : #ffffff;
    }

    ul {
        list-style: none;
        padding-left: 0px;
    }
`

function App() {
    return (
        <BrowserRouter>
            <AppStyled className="App">
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/live" element={<LivePage />} />
                    <Route path="/mall" element={<MallPage />} />
                    <Route path="/goods/view/" element={<GoodsDetailMall />} />
                    <Route path="/contents/:contentsId" element={<Contents />} />
                    {/* <Route path="/contents/*">
                        <Route path=":contentsId" element={<Contents />} />
                    </Route> */}
                </Routes>
            </AppStyled>
        </BrowserRouter>
    );
}

export default App;
