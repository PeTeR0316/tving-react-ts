import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import IMAGES from '../../assets/images';
import Header from '../../components/header';
import Footer from '../../components/footer';
import SlidePosterPc from '../../components/main/pc/slide-poster-pc';
import InfinitySlidePc from '../../components/main/pc/infinity-slide-pc';
import QuestionPc from '../../components/main/pc/question-pc';

import SubtitlePC from '../../components/main/pc/subtitle-pc';
import Subtitle from '../../components/main/mobile/subtitle';


const FirstPageStyle = styled.div`
    width: 100%;

    .playContainer {
        width: 100%;
        position: relative;
        
        .poster{
            width: 100%;
        }
    
        .gradationImg {
            width: 100%;
            position: absolute;
            z-index: 3;
            top: 0px;
            left: 0px;
        }

        .textContainer {
            
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            text-align: center;
            z-index: 4;

            .playText {
                color: #ffffff;
                font-weight: bold;
            }

            .joinText {
                color: #9e9e9e;
            }

            .joinBtn {
                width: 380px;
                height: 60px;
                border: none;
                border-radius: 10px;
                background-color: #fe153c;
                color: #ffffff;
                font-size: 1.5rem;
                font-weight: bold;
            }
        }

    }
`

const FirstPage = () => {
    return (
        <FirstPageStyle>
            <Header />
            
            <div className='playContainer'>
                <img className="poster" src={IMAGES.POST_PC} alt="poster-img" />
                <img className="gradationImg" src={IMAGES.GRADATION_IMG} alt="gradation-img" />

                <div className='textContainer'>
                    <p className="playText">티빙 오리지널 콘테츠,</p>
                    <p className="playText">방송, 영화, 해외시리즈까지!</p>
                    <p className="playText">재미를 플레이해보세요.</p>
                    
                    <p className="joinText">간편하게 가입하고, 원하실 때 해지할 수 있어요.</p>
                    
                    <Link to="/join">
                        <button className="joinBtn" type='button'>
                            티빙 시작하기
                        </button>
                    </Link>
                </div>
            </div>

            {/* {window.innerWidth < 640 ? 
                <Subtitle /> : 
                <SubtitlePC />
            } */}

            <SlidePosterPc 
                titleH2="티빙에만 있는 재미"
                titleH3="오리지널 콘텐츠를 만나보세요!"
                titleH4="차별화된 웰메이드 오리지널 콘텐츠"
                posters= {IMAGES.POSTERS}
            />

            <InfinitySlidePc 
                titleH2="내가 찾던 재미"
                titleH3="보고 싶은 콘텐츠를 발견하세요!"
                titleH4="최신, 인기 TV프로그램,영화,해외시리즈"
            />
            
            <video src="blob:https://www.tving.com/a4410543-4b8c-4364-81f8-185f6cdfba53"></video>

            <QuestionPc />

            <Footer />
        </FirstPageStyle>
    )
};

export default FirstPage;