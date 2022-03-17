import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import { useParams  } from 'react-router-dom';
import axios from 'axios';

import ShareModalPopup from './share-modal-popup';

import IMAGES from '../../assets/images';
import { StringForNextToken } from 'aws-sdk/clients/s3control';

interface ContentsProps {
    contentsId : string,
}

type ContentsInfoType = {
    age: string;
    broadcasting_time: string;
    cast: string;
    contents_code: string;
    contents_name: string;
    contents_type: string;
    explanation: string;
    producer: string;
    provider: string;
    running_time: string;
};

const ContentsInfoStyle = styled.div`
    width: 100%;
    
    .contentsInfoContainer {
        margin: 0px 60px;
        padding-top: 100px;
        padding-bottom: 60px;
        border-bottom: 1px solid #212121;
        position: relative;
        display: flex;
        justify-content: space-between;
        font-size: 1.25rem;

        .contentsInfoArea {
            display: inline-block;
            color: #bbb7b4;
            width: 40rem;

            .categoryArea {
                padding-top: 8px;

                .categoryList {
                    display: inline-block;
                    border: 1px solid #bbb7b4;
                    border-radius: 5px;
                    padding: 3px;
                    margin-right: 8px;
                }
            }

            .contentsBtn {
                li {
                    display: inline-block;
                }

                .subscribe {
                    background-color: #ffffff;
                    color: #000000;
                    font-size: 1.5rem;
                    font-weight: 700;
                    border-radius: 6px;
                    border: none;
                    padding: 1.5rem 5rem;
                    margin-right: 1.333rem;
                }

                .like, .share {
                    margin-right: 1.333rem;
                    color: #dfdfdf;
                    position: relative;

                    :hover {
                        color: #ffffff;
                    }
                }
            }

            .productInfo {
                margin: 0px;
            }

            .contentsExplanation {
                margin-top: 16px;
                word-break: keep-all;
                font-size: 1.5rem;
            }
        }

        .posterImg {
            width: 22rem;
            height: 32.1rem;
            padding-right: 60px;
        }
    }
`;

const ContentsInfo = () => {
    const {contentsId} = useParams();
    const posterUrl = 'https://tving-react-ts.s3.ap-northeast-2.amazonaws.com/main/popular-poster/';
    const [selectContentinfo, setSelectContentinfo] = useState<Array<ContentsInfoType>>([{
        age: '',
        broadcasting_time: '',
        cast: '',
        contents_code: '',
        contents_name: '',
        contents_type: '',
        explanation: '',
        producer: '',
        provider: '',
        running_time: ''
    }]);
    const [shareValue, setShareValue] = useState<boolean>(false);
    
    const readInfo = async () => {
        await axios.get(`http://127.0.0.1:3001/contents/posterInfo/${contentsId}`)
            .then((response) => (setSelectContentinfo(response.data)))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        readInfo();
    },[]);

    return (
        <ContentsInfoStyle>
            <div className="contentsInfoContainer">
                <div className="contentsInfoArea">
                    <p>{selectContentinfo[0].contents_name.split('.')[0]}</p>
                    
                    <ul className='categoryArea'>
                        {selectContentinfo[0].age !== "" ? <li className='categoryList'>{selectContentinfo[0].age}</li> : ""}
                        {selectContentinfo[0].broadcasting_time !== "" ? <li className='categoryList'>{selectContentinfo[0].broadcasting_time}</li> : ""}
                        {selectContentinfo[0].contents_type !== "" ? <li className='categoryList'>{selectContentinfo[0].contents_type}</li> : ""}
                        {selectContentinfo[0].running_time !== "" ? <li className='categoryList'>{selectContentinfo[0].running_time}</li> : ""}
                        {selectContentinfo[0].provider !== "" ? 
                            <span>
                                {selectContentinfo[0].provider.split(',').map((providerName) => {
                                    return(
                                        <li className='categoryList'>{providerName}</li>
                                    )
                                })}
                            </span> 
                            : ""
                        }
                        
                    </ul>

                    <ul className="contentsBtn">
                        <li className="subscribe">
                            이용권 구독하기
                        </li>
                        <li className="like">
                            찜
                        </li>
                        <li className="share"
                            onClick={() => setShareValue(!shareValue)}
                        >
                            공유
                            {shareValue === true ? <ShareModalPopup /> : ""}
                        </li>
                    </ul>

                    <p className="productInfo">
                        {selectContentinfo[0].producer !== "" ? <span>연출 {selectContentinfo[0].producer}</span> : ""}
                    </p>
                    <p className="productInfo">
                        {selectContentinfo[0].cast !== "" ? <span>출연 {selectContentinfo[0].cast}</span> : ""}
                    </p>

                    <p className="contentsExplanation">
                        {selectContentinfo[0].explanation !== "" ? `${selectContentinfo[0].explanation}` : ""}
                    </p>
                </div>

                <img 
                    className='posterImg'
                    src={`${posterUrl}${selectContentinfo[0].contents_name}`} 
                    alt="poster-img" 
                />

                {/* <img className='posterImg' src={IMAGES.CONTENT_POSTER[0].src} alt="" /> */}
            </div>
        </ContentsInfoStyle>
    )
};

export default ContentsInfo;