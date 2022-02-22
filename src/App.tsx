import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from 'styled-components'

import MainPage from './pages/main';

const AppStyled = styled.div`
    width: 100%;
    box-sizing: border-box;
    background-color: #000000;

    a {
        text-decoration: none;
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
                </Routes>
            </AppStyled>
        </BrowserRouter>
    );
}

export default App;
