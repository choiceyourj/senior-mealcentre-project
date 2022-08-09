import React from 'react';
import styled from "styled-components";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import { FcDepartment,FcPhone,FcApprove,FcCalendar,FcClock,FcExpired,FcWebcam,FcCheckmark } from 'react-icons/fc';


const CateItem = ({sigun_cd}) => {

    const {row} = sigun_cd;

    return (
        <NewsItemBlock>
            {row && (row.map((row,id)=> (
            <div className="cateDiv" 
              key={id}>   
             <div className="cateItem">
            
            <Tabs
             defaultActiveKey="basic"
             transition={false}
             id="noanim-tab-example"
             className="mb-3"
            >
              <Tab eventKey="basic" title="기본 정보">
              <div className='basic_info'>
             <span><FcDepartment/>&nbsp;&nbsp;시설명 : {row.FACLT_NM}</span>
             <span><FcPhone/>&nbsp;&nbsp;문의 및 안내 : {row.MANAGE_INST_TELNO}</span>
             <span><FcWebcam/>&nbsp;&nbsp;도로명 주소 : {row.REFINE_LOTNO_ADDR}</span>
             <span><FcCheckmark/>&nbsp;&nbsp;동 주소 : {row.REFINE_ROADNM_ADDR}</span>
             </div>  
             </Tab>      
              <Tab eventKey="info" title="이용 안내">
              <div className='use_info'>
             <span><FcApprove/>&nbsp;&nbsp;제공 대상 : {row.MEALSRV_TARGET_INFO}</span>
             <span><FcClock/>&nbsp;&nbsp;운영 시간 : {row.RESTDAY_INFO.replace(/\+/g, "")}</span>
             <span><FcExpired/>&nbsp;&nbsp;운영 마감 : {row.OPERT_END_DE} 시설 안내 전화로 문의</span>
             <span><FcCalendar/>&nbsp;&nbsp;운영 시작 날짜 : {row.OPERT_BEGIN_DE} ~ 운영중</span>
             </div>
             </Tab>
            </Tabs>
          </div>
        </div> 
        )))}
        </NewsItemBlock>
    )
}

export default React.memo(CateItem);

const NewsItemBlock = styled.div`
.cateDiv {
   height:auto;
}
    .cateItem {
        float:right;
        border:1px solid #;
        width:100%;
        height:250px;
        margin:3px;
        margin-bottom:30px;
        border: 1px solid rgb(224, 227, 231);
        background-color: rgb(255, 255, 255);
        border-radius: 10px;
        font-family: 'Spoqa Han Sans Neo', 'sans-serif';

       .basic_info {
        margin-top:20px;
        margin-left:20px;
        display:inline-block;
        white-space:nowrap;
       }
       .use_info {
        margin-top:20px;
        margin-left:20px;
        display:inline-block;
        white-space:nowrap;
       }
        span{
                font-size:14px;
                display:block;
                white-space:normal;
                line-height:2.3;
            }
       
    }
    .contents {
        h2 {
            margin:0;
            a{
                color:block;
            }
        }
        p{
            margin:0;
            line-height:1.5;
            margin-top:0.5rem;
            white-space:normal;
        }
    }
    & + & {
        margin-top:3rem;
    }
    .nav-link {
        color:#ff6c00;
    }
`;


