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
                </tbody>
            </table>
        </DetailGoodsInfoAnnouncementStyle>
    )
};

export default DetailGoodsInfoAnnouncement;