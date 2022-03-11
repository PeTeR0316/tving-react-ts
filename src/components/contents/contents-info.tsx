import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import { useParams  } from 'react-router-dom';
import axios from 'axios';

import Header from '../header';

import IMAGES from '../../assets/images';

interface ContentsProps {
    contentsId : string,
}

type ContentsInfo = {
    contents_code: string;
    contents_name: string;
}

const ContentsInfoStyle = styled.div`
    width: 100%;
    
    .contentsInfoContainer {
        width: 100%;
        padding: 0px 60px;

        .posterImg {
            width: 22rem;
        }
    }
`;

const ContentsInfo = () => {
    const {contentsId} = useParams();
    const posterUrl = 'https://tving-react-ts.s3.ap-northeast-2.amazonaws.com/main/popular-poster/';
    const [selectContentinfo, setSelectContentinfo] = useState([] as ContentsInfo[]);
    
    useEffect(() => {
        axios.get(`http://127.0.0.1:3001/contents/posterInfo/${contentsId}`)
        .then(response => setSelectContentinfo(response.data))
        .catch(err => console.log(err));
    },[]);

    return (
        <ContentsInfoStyle>
            <div className="contentsInfoContainer">
                <div>

                </div>
                <img 
                    className='posterImg'
                    src={`${posterUrl}${selectContentinfo[0].contents_name}`} 
                    alt="poster-img" 
                />
            </div>
        </ContentsInfoStyle>
    )
};

export default ContentsInfo;