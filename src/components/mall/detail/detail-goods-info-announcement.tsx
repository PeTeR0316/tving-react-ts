import React from 'react';
import styled from 'styled-components';

const DetailGoodsInfoAnnouncementStyle = styled.div`
`

const DetailGoodsInfoAnnouncement = () => {
    return (
        <DetailGoodsInfoAnnouncementStyle>
            <table>
                <tbody>
                    <tr>
                        <th>품명 및 모델명</th>
                        <th>라켓보이즈 맨투맨</th>
                    </tr>
                    <tr>
                        <th>
                            법에 의한 인증,허가 등을 받았음을 확인할수 있는 경우 그에 대한 사항
                        </th>
                        <th>-</th>
                    </tr>
                    <tr>
                        <th>제조국 또는 원산지</th>
                        <th>대한민국</th>
                    </tr>
                    <tr>
                        <th>제조자,수입품의 경우 수입자를 함께 표기</th>
                        <th>CJ ENM</th>
                    </tr>
                    <tr>
                        <th>AS책임자와 전화번호 또는 소비자상담 관련 전화번호</th>
                        <th>tvN SHOP 고객센터 : 8080-000-8188</th>
                    </tr>
                </tbody>
            </table>
        </DetailGoodsInfoAnnouncementStyle>
    )
};

export default DetailGoodsInfoAnnouncement;