import React from 'react';
import Title from '../components/Title';
import Categories from '../components/Categories';
import CateList from '../components/CateList';


const NewPage = ({match}) => {
    
    const sigun_cd = match.params.sigun_cd || 'all';
   
    return (
        <div>
            <Title
            mainText={'경기도 내 무료급식소 찾아보기'}
            subText={'선택하시면 각 해당 구에서 운영중인 급식소가 전체 조회 됩니다'}
            />
            <Categories sigun_cd={sigun_cd}/>
            <CateList sigun_cd={sigun_cd}/>
        </div>
    )
}

export default NewPage;


