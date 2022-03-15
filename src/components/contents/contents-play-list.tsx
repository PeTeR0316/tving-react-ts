import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import { useParams  } from 'react-router-dom';
import axios from 'axios';

import IMAGES from '../../assets/images';

const ContentsPlayListStyle = styled.div`
    width: 100%;

    .contentsPlayListContainer {
        width: 100%;
        margin: 30px 60px;

        .playListInfoArea {
            width: 100%;
            padding-bottom: 10px;
            .playListInfo {
                .title {
                    color: #ffffff;
                }
            }
        }

        .playListArea {
            width: 100%;

            .playList {
                display: inline-block;
                width: 22.5rem;
                color: #ffffff;
                word-break: keep-all;
                padding-right: 10px;
                border-radius: 5px;
                overflow: hidden;

                .thumbnail {
                    width: 100%;
                    iframe {
                        width: 100%;
                        height: 12.8rem;
                    }
                }
            }
        }
    }
`;

const ContentsPlayList = () => {
    return (
        <ContentsPlayListStyle>
            <div className="contentsPlayListContainer">
                <div className="playListInfoArea">
                    <div className='playListInfo'>
                        <span className="title">
                            어쩌다 사장2
                        </span>
                    </div>
                </div>

                <div className="playListArea">
                    <div className="playList">
                        <div className="thumbnail">
                            <iframe src="https://www.youtube.com/embed/GfQGTiZCFw0" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                            {/* <video preload="auto" playsInline  id="tving-player-357" src="https://poc-clip-xcdn.tving.com/CLIP/ADDCLIP/C000085077/0001_RM67384286_t34.mp4?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJwYXRoIjoiL0NMSVAvQUREQ0xJUC9DMDAwMDg1MDc3LzAwMDFfUk02NzM4NDI4Nl90MzQubXA0IiwiaXNzIjoidHZpbmcuY29tIiwiZXhwIjoxNjQ3MzM1OTE5fQ.kUETTajhHlkSYVzGGu3gLomcBVh_UnR6IGu_2aEsD_c&amp;content_type=PRERELEASECLIP" style={{opacity: 1}} /> */}
                        </div>
                        <p>어쩌다사장2 EP.4</p>
                        <p>Fox라더니 완전 장꾸였어 너~? 웃음이 멈출 줄 모르는 웃수저 김우빈X이광수ㅋㅋ #highlight </p>
                    </div>
                    <div className="playList">
                        <div className="thumbnail">
                            <iframe src="https://www.youtube.com/embed/GfQGTiZCFw0" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                            {/* <video preload="auto" playsInline  id="tving-player-357" src="https://poc-clip-xcdn.tving.com/CLIP/ADDCLIP/C000085077/0001_RM67384286_t34.mp4?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJwYXRoIjoiL0NMSVAvQUREQ0xJUC9DMDAwMDg1MDc3LzAwMDFfUk02NzM4NDI4Nl90MzQubXA0IiwiaXNzIjoidHZpbmcuY29tIiwiZXhwIjoxNjQ3MzM1OTE5fQ.kUETTajhHlkSYVzGGu3gLomcBVh_UnR6IGu_2aEsD_c&amp;content_type=PRERELEASECLIP" style={{opacity: 1}} /> */}
                        </div>
                        <p>어쩌다사장2 EP.4</p>
                        <p>Fox라더니 완전 장꾸였어 너~? 웃음이 멈출 줄 모르는 웃수저 김우빈X이광수ㅋㅋ #highlight </p>
                    </div>
                    <div className="playList">
                        <div className="thumbnail">
                            <iframe src="https://www.youtube.com/embed/GfQGTiZCFw0" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                            {/* <video preload="auto" playsInline  id="tving-player-357" src="https://poc-clip-xcdn.tving.com/CLIP/ADDCLIP/C000085077/0001_RM67384286_t34.mp4?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJwYXRoIjoiL0NMSVAvQUREQ0xJUC9DMDAwMDg1MDc3LzAwMDFfUk02NzM4NDI4Nl90MzQubXA0IiwiaXNzIjoidHZpbmcuY29tIiwiZXhwIjoxNjQ3MzM1OTE5fQ.kUETTajhHlkSYVzGGu3gLomcBVh_UnR6IGu_2aEsD_c&amp;content_type=PRERELEASECLIP" style={{opacity: 1}} /> */}
                        </div>
                        <p>어쩌다사장2 EP.4</p>
                        <p>Fox라더니 완전 장꾸였어 너~? 웃음이 멈출 줄 모르는 웃수저 김우빈X이광수ㅋㅋ #highlight </p>
                    </div>
                    <div className="playList">
                        <div className="thumbnail">
                            <iframe src="https://www.youtube.com/embed/GfQGTiZCFw0" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                            {/* <video preload="auto" playsInline  id="tving-player-357" src="https://poc-clip-xcdn.tving.com/CLIP/ADDCLIP/C000085077/0001_RM67384286_t34.mp4?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJwYXRoIjoiL0NMSVAvQUREQ0xJUC9DMDAwMDg1MDc3LzAwMDFfUk02NzM4NDI4Nl90MzQubXA0IiwiaXNzIjoidHZpbmcuY29tIiwiZXhwIjoxNjQ3MzM1OTE5fQ.kUETTajhHlkSYVzGGu3gLomcBVh_UnR6IGu_2aEsD_c&amp;content_type=PRERELEASECLIP" style={{opacity: 1}} /> */}
                        </div>
                        <p>어쩌다사장2 EP.4</p>
                        <p>Fox라더니 완전 장꾸였어 너~? 웃음이 멈출 줄 모르는 웃수저 김우빈X이광수ㅋㅋ #highlight </p>
                    </div>
                    <div className="playList">
                        <div className="thumbnail">
                            <iframe src="https://www.youtube.com/embed/GfQGTiZCFw0" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                            {/* <video preload="auto" playsInline  id="tving-player-357" src="https://poc-clip-xcdn.tving.com/CLIP/ADDCLIP/C000085077/0001_RM67384286_t34.mp4?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJwYXRoIjoiL0NMSVAvQUREQ0xJUC9DMDAwMDg1MDc3LzAwMDFfUk02NzM4NDI4Nl90MzQubXA0IiwiaXNzIjoidHZpbmcuY29tIiwiZXhwIjoxNjQ3MzM1OTE5fQ.kUETTajhHlkSYVzGGu3gLomcBVh_UnR6IGu_2aEsD_c&amp;content_type=PRERELEASECLIP" style={{opacity: 1}} /> */}
                        </div>
                        <p>어쩌다사장2 EP.4</p>
                        <p>Fox라더니 완전 장꾸였어 너~? 웃음이 멈출 줄 모르는 웃수저 김우빈X이광수ㅋㅋ #highlight </p>
                    </div>
                </div>
            </div>
        </ContentsPlayListStyle>
    )
};

export default ContentsPlayList;