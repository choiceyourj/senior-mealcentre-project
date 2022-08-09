import { useHistory } from "react-router-dom";
import styled from "styled-components";

const Main = () => {

  const history = useHistory();

  function handleClick() {
    history.push("/");
  }

    return (
      <Container>
      <section className="main">
        <div className="section-div">
          <div className="sub-div">
        <span>목적</span>
          <p className="one-title">거동이 불편하시거나 가정형편이 어려워, 결식 우려가
           있는 어르신에게 무료급식(경로식당, 식사배달, 밑반찬배달) 서비스를 제공하여 
           기본적 영양보장 및 지역밀착형 어르신 복지서비스를 제공하고자 함.</p>
           </div>
           <div className="sub-div">
           <span>대상</span>
           <p>가정형편이 어렵거나 부득이한 사정으로 식사를 거를 우려가 있는 60세 이상 노인 → 기초수급자, 차상위계층, 저소득 노인</p>
           </div>
           <div className="sub-div">
          <span>신청방법</span>
          <p>급식기관 및 구군 담당부서</p>
          </div>
        <div>
          <div className="sub-title">경기도 내 무료 급식시설의 현황과 이용정보를 찾으실 수 있습니다 </div>
            <button onClick={handleClick}>
              내가 사는 시도 내 알아보기
              </button>
        </div>
        </div>
      </section>
      </Container>
    );
  };
  
  export default Main;

  const Container = styled.div`
  text-align:center;
  font-family: 'Spoqa Han Sans Neo', 'sans-serif';
  
    section {
      padding:50px;
      margin:50px;
      display:flex;
      align-items: center;
      flex-direction: row;
      justify-content: center; 
    }
      .section-div {
        margin: 0 auto;
      }
      .sub-div {
        margin-bottom:50px;

        span {
          font-size:2vw;
          font-weight:bold;
          font-family: 'Spoqa Han Sans Neo', 'sans-serif';
          border-bottom:2px solid #ff6c00;
        }
        p {
          position:relative;
          margin-top:10px;
          font-size: 1.4vw;
          font-family: 'Spoqa Han Sans Neo', 'sans-serif';
        }
      }
      .sub-title {
        margin:50px 0 50px 0;
        font-weight:bold;
        font-size:2vw;
        font-family: 'Spoqa Han Sans Neo', 'sans-serif';
      }
     
      h1 {

        font-size: 2.5vh;
      }
  .sec-title{
    position:relative;
    justify-content: center;
    align-items: center;
  }
      button {
        margin:50px 0 50px 0;
        background-color:#ff6c00;
        color:#fff;
        border:none;
        padding:10px;
        border-radius:5px;
        font-size: 1.5vw;
      }
  `