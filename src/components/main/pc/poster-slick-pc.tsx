import React from "react";
import styled from "styled-components";

interface PosterSlickProps {
    title: string;
    category: string;
}

const PosterSlickPcStyle = styled.div`
    .title {
        color: #ffffff;
    }
`;

const PosterSlickPc = ({title, category}: PosterSlickProps) => {
    return (
        <PosterSlickPcStyle>
            <h2 className="title">{title}</h2>
        </PosterSlickPcStyle>
    )
};

export default PosterSlickPc;