import React from 'react';
import styled from 'styled-components';

const SubtitlePcStyle = styled.div`
    .subtitle {
        width: 100%;
        text-align: center;
        padding-top: 100px;

        h2 {
            color: #e6e6e6;
        }

        h3 {
            color: #808080;
        }

        h4 {
            color: #5e5e5e;
        }
    }
`;

const SubtitlePC = () => {
    return (
        <SubtitlePcStyle>
            <div className="subtitle">
                <h2>티빙에만 있는 재미</h2>
                <h3>오리지널 콘텐츠를 만나보세요!</h3>
                <h4>차별화된 웰메이드 오리지널 콘텐츠</h4>
            </div>
        </SubtitlePcStyle>
    )
}

export default SubtitlePC;