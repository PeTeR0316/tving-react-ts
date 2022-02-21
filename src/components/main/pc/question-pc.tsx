import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const QuestionPcStyle = styled.div`
    width: 100%;
    color: #c2c2c2;
    padding-bottom: 100px;

    .title {
        color: #ffffff;
        font-size: 40px;
        font-weight: bold;
        text-align: center;
    }

    .questionArea {
        padding: 0px 54px;
        
        .questionList {
            padding: 30px 0px;
            font-size: 24px;
            font-weight: bold;


            :not(:last-child) {
                border-bottom: 1px solid #c2c2c2;
            }
        }
    }

    .couponBtn {
        width: 30%;
        height: 64px;
        background-color: #dedede;
        position: relative;
        left: 50%;
        transform: translateX(-50%);
        border: none;
        border-radius: 10px;
        color: #000000;
        font-weight: bold;
        font-size: 24px;
        line-height: 64px;
        margin: 50px 0px;
    }
`

const QuestionPc = () => {
    return (
        <QuestionPcStyle>
            <h2 className='title'>자주 찾는 질문</h2>

            <ul className='questionArea'>
                <li className="questionList">티빙 회원가입 방법이 궁금해요.</li>
                <li className="questionList">티빙 로그인 방법이 궁금해요.</li>
                <li className="questionList">티빙 이용권 별 혜택이 궁금해요.</li>
                <li className="questionList">정기결제 서비스가 궁금해요.</li>
                <li className="questionList">티빙 오리지널 콘테츠가 무엇인가요?</li>
                <li className="questionList">티빙 오리지널 콘텐츠는 어떤 이용권으로 시청할 수 있나요?</li>
                <li className="questionList">모바일 상품권을 구매했는데 어떻게 등록 하나요?</li>
            </ul>

            <Link to="/coupon">
                <button className="couponBtn" type='button'>
                    쿠폰 등록하기
                </button>
            </Link>
        </QuestionPcStyle>
    )
};

export default QuestionPc;