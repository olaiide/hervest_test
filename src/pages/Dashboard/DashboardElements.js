import styled, { css } from "styled-components";
export const Container = styled.div`
  min-height: 100vh;
  background-color: #faf9f6;
  margin-left: 20%;
  overflow: hidden;
  @media screen and (max-width : 768px){
    margin-left: 0% ;
  }
`;
export const Wrapper = styled.div`
  width: 93%;
  margin: 0 auto;
  padding-bottom: 100px;
`;
export const Header = styled.div`
  margin-top: 2.5rem;
  display: flex;
  .wrap {
    padding: 15px;
  }
  .name {
    font-family: Montserrat;
    font-size: 28px;
    font-style: normal;
    font-weight: 700;
    color: #b4b5c1;
  }
  .text {
    font-family: Montserrat;
    font-size: 16px;
    font-style: normal;
    font-weight: 300;
    color: rgba(180, 181, 193, 1);
  }
`;
export const BalanceWrapper = styled.div`
  background-color: rgba(226, 105, 141, 1);
  margin: 0 auto;
  height: 200px;
  width: 100%;
  border-radius: 12px;
  display: grid;
  grid-template-columns: repeat(4, 0.3fr);
  justify-content: center;
  position:relative;
  overflow:hidden;
  @media screen and (max-width : 768px){
    grid-template-columns : repeat(2, 0.3fr);
    height : 400px;
  }
  .balanceimg{
    background-size: cover;
    width: 400px;
    height: 400px;
    background-position: center;
    top: -147px;
    right: 232px;
    position: absolute;
  }
  .balanceimg2{
    width: 400px;
    height: 400px;
    background-position: center;
    bottom: -219px;
    left: -96px;
    position: absolute;
    transform: rotate(180deg);
  }
  .balanceimg3{
    position : absolute;
    background-position : cover;
    top : 76px;
    right : 130px;
    @media screen and (max-width : 768px){
     display : none;

    }
  }
`;

export const Balance = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  margin: 0 auto;
`;
export const BalanceTitle = styled.p`
  font-family: Montserrat;
  font-size: 14px;
  font-style: normal;
  font-weight: 300;
  line-height: px;
  letter-spacing: 0em;
  color: rgba(250, 250, 250, 1);
  z-index : 1;
`;
export const BalanceAmount = styled.p`
  color: rgba(250, 250, 250, 1);
  font-family: Montserrat;
  font-size: 20px;
  font-style: normal;
  font-weight: 800;
  letter-spacing: 0.02em;
  padding : 5px;
  z-index : 1;
`;
export const Plans = styled.div``;
export const PlansTitle = styled.div`
  h2 {
    color: rgba(180, 181, 193, 1);
    font-family: Montserrat;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: 39px;
    letter-spacing: -0.02em;
  }
  h4 {
    color: rgba(180, 181, 193, 1);
    font-family: Montserrat;
    font-size: 16px;
    font-style: normal;
    font-weight: 300;
    line-height: 24px;
    letter-spacing: 0.02em;
  }
`;
export const SaveContainer = styled.div`
  .arrow {
    position: relative;
    bottom: 130px;
    right: -35px;
    display: flex;
    justify-content: flex-end;
    cursor: pointer;
    @media screen and (max-width : 768px){
      display: none;
    }
  }
`;
export const SaveWrapper = styled.div`
  display: flex;
  justify-content: space-between;
 @media screen and (max-width : 768px){
   flex-direction: column;
   justify-content: space-around;
   height : 600px;
 }
`;
export const SaveCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 32%;
  height: 173px;
  background: rgba(255, 255, 255, 1);
  border-radius: 12px;
  @media screen and (max-width : 768px){
   width : 100%;
 }
`;
export const FirstContent = styled.div`
  display: flex;
  align-items: flex-end;
  padding-left: 15px;
  p {
    color: rgba(0, 0, 0, 1);
    font-family: Montserrat;
    font-size: 16px;
    font-style: normal;
    font-weight: 300;
    line-height: 24px;
    letter-spacing: 0.02em;
    padding-left: 10px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    position: relative;
    top: 4px;
  }
`;
export const SecondContent = styled.div`
  padding: 15px;
  h3 {
    font-family: Montserrat;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 29px;
    letter-spacing: 0em;
  }
  .progress {
    color: #000;
    background: rgba(242, 241, 243, 1);
  }
  .progress__bar {
    height: 4px;
    width: 40%;
    color: #fff !important;
    background-color: rgba(38, 88, 89, 1);
    border-radius: 2px;
  }
`;

export const DataWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom:  20px;
  margin-top:-70px;
  padding-bottom: 20px;
  @media screen and (max-width:768px) {
    flex-direction : column;
    justify-content: space-between;
    margin-top : 8px;
    height : 610px;
  }
`;
export const DataCard = styled.div`
  display: flex;
  justify-content: center;
  height: 190px;
  ${(props) =>
    props.text === "first" &&
    css`
      background-color: #e2698d;
    `}
  ${(props) =>
    props.text === "second" &&
    css`
      background-color: #265859;
    `}
  ${(props) =>
    props.text === "third" &&
    css`
      background-color: #f2f1f3;
    `}
  border-radius : 12px;
  width: 32%;
  @media screen and (max-width : 768px){
   width : 100%;
 }
`;
export const LeftContent = styled.div`
  padding: 10px;
  h3 {
    font-family: Montserrat;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 20px;
    letter-spacing: -0.11008000373840332px;
    color: #fff;
    ${(props) =>
      props.text === "third" &&
      css`
        color: #e2698d;
      `}
  }
  p {
    font-family: Montserrat;
    font-size: 10px;
    font-style: normal;
    font-weight: 300;
    line-height: 12px;
    letter-spacing: -0.23999999463558197px;
    color: white;
    ${(props) =>
      props.text === "first" &&
      css`
        color: #fbeaef;
      `}
    ${(props) =>
      props.text === "third" &&
      css`
        color: #37474f;
      `}
  }
  .codeWrap {
    display: flex;
    width: 110px;
    justify-content: space-between;
    align-items: center;
    margin-top: 50px;
  }
  .code {
    ${(props) =>
      props.text === "third" &&
      css`
        background-color: #e2698d;
        padding: 4px 7px;
        border-radius: 8px;
        font-family: Montserrat;
        font-size: 12px;
        font-style: normal;
        font-weight: 700;
        line-height: 20px;
        letter-spacing: 0.02em;
        color: #fbeaef;
      `}
  }
  .share {
    font-family: Montserrat;
    font-size: 14px;
    font-style: normal;
    font-weight: 300;
    line-height: 18px;
    letter-spacing: 0px;
    color: #265859;
  }
`;

export const RightContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 40%;
  padding: 5px;
`;