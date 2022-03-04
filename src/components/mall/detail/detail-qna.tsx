import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const DetailQnaStyle = styled.div`
    width: 1240px;
    margin: 0 auto;
    text-align: center;
`;

const DetailQna = () => {
    return (
        <DetailQnaStyle>
            <h2>상품 Q&A</h2>
        </DetailQnaStyle>
    )
};

export default DetailQna;