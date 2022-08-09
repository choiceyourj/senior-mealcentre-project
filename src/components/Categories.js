import React from 'react';
import styled from "styled-components";
import { NavLink } from 'react-router-dom';


const categories = [
    {
        name:'all',
        text:'전체보기'
    },
    {
        name:41820,
        text :'가평군',
    },
    {
        name:41280,
        text: '고양시',
    },
    {
        name:41290,
        text: '과천시',
    },
    {
        name:41210,
        text: '광명시',
    },
    {
        name:41610,
        text: '광주시',
    },
    {
        name:41310,
        text: '구리시',
    },
    {
        name:41410,
        text: '군포시',
    },
    {
        name:41570,
        text: '김포시',
    },
    {
        name:41360,
        text: '남양주시',
    },
    {
        name:41250,
        text: '동두천시',
    },
    {
        name:41190,
        text: '부천시',
    },
    {
        name:41130,
        text: '성남시',
    },
    {
        name:41110,
        text: '수원시',
    },
    {
        name:41390,
        text: '시흥시',
    },
    {
        name:41270,
        text: '안산시',
    },
    {
        name:41550,
        text: '안성시',
    },
    {
        name:41170,
        text: '안양시',
    },
    {
        name:41630,
        text: '양주시',
    },
    {
        name:41670,
        text: '여주시',
    },
    {
        name:41370,
        text: '오산시',
    },
    {
        name:41460,
        text: '용인시',
    },
    {
        name:41430,
        text: '의왕시',
    },
    {
        name:41150,
        text: '의정부시',
    },
    {
        name:41500,
        text: '이천시',
    },
    {
        name:41480,
        text: '파주시',
    },
    {
        name:41220,
        text: '평택시',
    },
    {
        name:41650,
        text: '포천시',
    },
    {
        name:41450,
        text: '하남시',
    },
    {
        name:41590,
        text: '화성시',
    }
];


function Categories ()  {
    
    return(
            <CategoriesBlock>
                {categories.map((c) => (
                    <Category
                        key = {c.name}
                        activeClassName="active"
                        exact={c.name === 'all'}
                        to= {c.name === 'all' ? '/' : `/${c.name}`}
                    >{c.text}
                    </Category>
                ))}
            </CategoriesBlock>
    )
            };

export default React.memo(Categories);


const CategoriesBlock = styled.div`
    padding :1rem;
    width:768px;
    margin: 10px auto;
    font-family: 'Spoqa Han Sans Neo', 'sans-serif';
    border-bottom: 2px solid #d2d2d2;

    @media screen and (max-width:768px){
        width:100%;
        overflow-x:auto;
    }
    
`;

const Category = styled(NavLink)`
    line-height:2.5rem;
    font-size:1.2vw;
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
        border-bottom:2px solid #ff6c00;
        color: #ff6c00;
        $:hover {
            color:#ff6c00;
        }
    }

    & + & {
        margin-left: 1rem;
    }
`;