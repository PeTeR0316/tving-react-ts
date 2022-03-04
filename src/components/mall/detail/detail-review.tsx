import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const DetailReviewStyle = styled.div`
    width: 1240px;
    margin: 0 auto;
    text-align: center;
`;

const DetailReview = () => {
    return (
        <DetailReviewStyle>
            <h2>상품후기</h2>
        </DetailReviewStyle>
    )
};

export default DetailReview;