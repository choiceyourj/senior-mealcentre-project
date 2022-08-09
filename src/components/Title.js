import React from 'react';
import styled from "styled-components";

const Title = ({mainText, subText}) => {
  return (
          <MainTitle>
             <h1>{mainText}</h1>
            <span>{subText}</span>
            </MainTitle>
  )
}

export default React.memo(Title);

const MainTitle = styled.div`
    width:100%;
    text-align:center;
    justify-content: center;
    margin:50px 0 50px 0;
    font-family: 'Spoqa Han Sans Neo', 'sans-serif';

    h1{
      font-size:2vw;
      font-family: 'Spoqa Han Sans Neo', 'sans-serif';
    }
    span {
      margin-top:10px;
      font-size:1vw;
      color:#ff6c00;
    }
`