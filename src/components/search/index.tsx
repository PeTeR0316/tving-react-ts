import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import axios from 'axios';

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

const SearchStyle = styled.div`
    background-color: (25, 25, 25, 0.99);
    color: #ffffff;

    .searchContainer {
        
        padding: 100px;

        .searchBar {
            width: 100%;
            height: 4rem;
            border: none;
            border-bottom: 1px solid #ffffff;
            background-color: inherit;
            color: #ffffff;
            font-size: 2rem;
            margin-bottom: 30px;
        }

        .searchPoster {
            width: 14rem;
            border-radius: 5px;
        }
    }
`;

const Search = () => {
    const s3Url = 'https://tving-react-ts.s3.ap-northeast-2.amazonaws.com/main/popular-poster/';
    const [searchKeyword, setSearchKeyword] = useState<string>("");
    const [searchResult, setSearchResult] = useState<Array<ContentsInfoType>>([
        {
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
        }
    ]);

    useEffect(() => {
        axios.get(`http://127.0.0.1:3001/search/${searchKeyword}`)
            .then(response => {setSearchResult(response.data)})
            .catch(err => console.log(err));
    },[searchKeyword]);

    return (
        <SearchStyle>
            <div className="searchContainer">
                <input type="text" 
                    className='searchBar' 
                    placeholder='TV프로그램, 영화 제목 및 출연진으로 검색해보세요' 
                    onChange = {({target}) => {setSearchKeyword(target.value);}}
                />

                {/* {searchResult.map((info, index) => {
                    return (
                        <p>{info.contents_name}</p>
                    )
                })} */}

                {searchResult.map((result, index) => {
                    return (
                        <div className="resultArea">
                            <img className='searchPoster' src={`${s3Url}${result.contents_name}`} alt="poster-img" />    
                            <p>{result.contents_name.split('.')[0]}</p>
                        </div>
                    )
                })}
            </div>
        </SearchStyle>
    )
};

export default Search;




