import React from "react";
import styled from "styled-components";

import HeaderMall from "../../components/mall/header-mall";
import NavMall from "../../components/mall/nav-mall";

const MallPageStyle = styled.div`
    background-color: #ffffff;
`

const MallPage = () => {
    return (
        <MallPageStyle>
            <HeaderMall />
            <NavMall />
        </MallPageStyle>
    )
}

export default MallPage;