import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

import ICONS from '../../assets/icons';

const ShareModalPopupStyle = styled.div`
    position: absolute;
    top: -450%;
    left: 50%;
    transform: translateX(-50%);
    background-color: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(50px);
    display: flex;
    
    padding: 1.25rem 1.5rem;

    :after {
        content: "";
        position: absolute;
        width: 1rem;
        height: 1rem;
        background-color: inherit;
        backdrop-filter: blur(50px);
        bottom: -0.5rem;
        transform: rotate(45deg);
        right: 50%;
    }

    .snsList {
        display: inline-block;
        background-color: inherit;
        border: none;
        margin-right: 5px;

        img {
            width: 3rem;
            height: 3rem;
        }
    }
`;

const ShareModalPopup = () => {
    const [snsListName, setSnsListName] = useState<Array<string>>(['TWITTER_ICON','FACEBOOK_ICON', 'KAKAO_ICON', 'INSTARGRAM_ICON'])
    
    return (
        <ShareModalPopupStyle>
            <button className='snsList'><img src={ICONS.TWITTER_ICON} alt="" /></button>
            <button className='snsList'><img src={ICONS.FACEBOOK_ICON} alt="" /></button>
            <button className='snsList'><img src={ICONS.KAKAO_ICON} alt="" /></button>
            <button className='snsList'><img src={ICONS.INSTARGRAM_ICON} alt="" /></button>
        </ShareModalPopupStyle>
    )
};

export default ShareModalPopup;