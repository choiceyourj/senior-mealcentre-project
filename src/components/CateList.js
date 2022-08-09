import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import axios from 'axios';
import CateItem from './CateItem';
import styled from "styled-components";



const CateList = ({sigun_cd}) => {

    const [OdsnFreemlsvM, setRow] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const query = sigun_cd === 'all' ? '' : `&sigun_cd=${sigun_cd}`;
                const response = await axios.get(
                  `https://openapi.gg.go.kr/OdsnFreemlsvM?KEY=5380226c373a4d5aa15e23362ab440c3&pindex=1&pSize=200${query}&Type=json`,
                );
                setRow(response.data.OdsnFreemlsvM);
                console.log(response.data.OdsnFreemlsvM);
              } catch (e) {
                console.log(e);
              }
              setLoading(false);
            };
            fetchData();
     },[sigun_cd]);


    if(loading) {
        return <NewListBlock>Loading...</NewListBlock>
    }

    if (!OdsnFreemlsvM) {
        return null;
    }

    return (
    <NewListBlock>
        {OdsnFreemlsvM.map((sigun_cd,id) => (
            <CateItem key={id} sigun_cd={sigun_cd} />
        ))}
        </NewListBlock>
    )
}

export default CateList;

const NewListBlock = styled.div`
    box-sizing :border-box;
    padding-bottom:3rem;
    width:768px;
    margin:0 auto;
    margin-top:2rem;
    @media screen and (max-width:768px){
        width:100%;
        padding-left:1rem;
        padding-right:1rem;
    }
`;

const Category = styled(NavLink)`
    font-size:1.125rem;
    cursor:pointer;
    white-space:pre;
    text-decoration:none;
    color:inherit;
    padding-bottom:0.25rem;

    &:hover {
        color:#495057;
    }

    &.active{
        font-weight:600;
        border-bottom:2px solid #22b8cf;
        color: #22b8cf;
        $:hover {
            color:#3bc9db;
        }
    }

    & + & {
        margin-left: 1rem;
    }
`;