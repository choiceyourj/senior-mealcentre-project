import React, { useState } from "react";
import styled from "styled-components";
import MapContainer from "./MapContainer";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Title from './Title';

const SearchPlace = () => {

    const [ inputText, setInputText ] = useState("");
    const [ place, setPlace ] = useState("");

    const keywordChange = (e) => {
      e.preventDefault();
      setInputText(e.target.value);
  }

    const handleSubmit = (e) => {
        e.preventDefault();
        setPlace(inputText);
        setInputText("");
    };

    const valueChecker = () => {
      if(inputText === "") {
          alert('검색어를 입력해주세요');
      }
    }
  
    return (
  <SearchContainer>
       <Title
       mainText={'무료급식소 지도'}
       subText={'내 지도의 무료급식소'}
       />
    <div className="search-input">
    <Form className="d-flex" onSubmit={handleSubmit}>
          <label htmlFor="place" className="form__label">
             <Form.Control
              type="search"
              placeholder="검색어를 입력해주세요."
              className="me-2"
              aria-label="Search"
              onChange={ keywordChange }
            />
             </label>
            <Button variant="outline-success" type="submit" value="검색" onClick={ valueChecker } >검색하기</Button>
           </Form>
           </div>
      <MapContainer searchPlace={place} />
  </SearchContainer>
    )
};

export default SearchPlace;

const SearchContainer = styled.div`
  font-family: 'Spoqa Han Sans Neo', 'sans-serif';
  .form__label {
    width:500px;
  }

  .search-input {
    margin:0 auto;
    width:600px;
    margin-bottom:10px;
  }

  .btn-outline-success{
    width:200px;
    margin-left:10px;
    justifu-content:center;
    align-items:center;
    background-color:#ff6c00;
    color:#fff;
    border:none;
    padding:10px;
    border-radius:5px;
  }
  .recommend-place {
    display:flex;
       
      div {
        color:#ff6c00;
        margin-right:10px;
      }
      span {
        padding:0 10px 0 10px;
        cursur:poiner;
      }
  }
`



