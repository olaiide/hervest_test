import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  background-color: rgba(243, 241, 241, 0.98);
  margin-left: 20%;
  overflow: hidden;
`;
export const Wrapper = styled.div`
  width: 93%;
  background: rgba(243, 241, 241, 0.98);
  margin: 0 auto;
`;
export const Header = styled.div`
  margin-top: 2.5rem;
  display: flex;
  margin-left: em;
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
`;
export const BalanceAmount = styled.p`
  color: rgba(250, 250, 250, 1);
  font-family: Montserrat;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: px;
  letter-spacing: 0.02em;
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
export const SaveWrapper = styled.div`
display: grid;
grid-template-columns:  repeat(3, 0.1fr);
margin: 0 auto;
height : 173px;
  width: 100%;
  background :;
  justify-content : center;
  row-gap : 30px;
  column-gap : 30px;
`;
export const SaveCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 100%;
  max-width: px ;
  height: 173px;
  background: rgba(255, 255, 255, 1);
  border-radius: 12px;
`;
export const FirstContent = styled.div`
  display: flex;
  align-items : flex-end;
  padding-left : 15px;
  background-color : ;
  div {
   
  }
  p {
    color: rgba(0, 0, 0, 1);
    font-family: Montserrat;
    font-size: 16px;
    font-style: normal;
    font-weight: 300;
    line-height: 24px;
    letter-spacing: 0.02em;
    padding-left: 10px;
    display : flex;
    justify-content :center;
    flex-direction : column;
  }
`;
export const SecondContent = styled.div`
background-color: ;
  padding: 15px;
  h3 {
    font-family: Montserrat;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 29px;
    letter-spacing: 0em;
  }
`;
