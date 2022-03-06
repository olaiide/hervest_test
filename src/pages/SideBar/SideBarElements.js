import styled, { css } from "styled-components";

export const SidebarContainer = styled.div`
`;

export const Logo = styled.div`
  /* margin-left: 3rem;
  padding-top: 1em;
  margin-bottom: 2.3rem; */
  margin-top : 1rem;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const Menu = styled.div`
  color: #828282;
  font-family: Montserrat;
  font-size: 20px;
  font-style: normal;
  font-weight: 300;
  line-height: 17px;
  letter-spacing: 0em;
  margin-top : 30px;
  margin-bottom : 30px;
  @media screen and (max-width : 768px){
    padding : 0;
  }
`;
export const SidebarItems = styled.ul`
  list-style: none;
  width: 15%;
  transition: width 0.5s;
  min-height: 100vh;
  background-color: #fff;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 99;
  overflow: hidden;
  margin-top: 0rem;
  
  transition: all 0.3s cubic-bezier(0.42, 0, 0.58, 1);
  .closebtn {
    display: none;
    @media screen and (max-width: 768px) {
      display: block;
      color: black;
      /* margin-left: 11rem;
      margin-top: 20px;
      margin-bottom: 0.5rem; */
      position : relative;
      top : 20px;
      left : 130px;
      width: 30px;
      height: 27px;
      bottom: 10px;
      padding-bottom: 20px;
      cursor: pointer;
      transition: all 0.3s cubic-bezier(0.42, 0, 0.58, 1);
    }

  }
  @media screen and (max-width: 768px) {
    left: ${(props) => (props.click ? "0" : "-110%")} !important;
    width: 210px !important;
    transition: ${(props) =>
      props.click ? " all 0.7s ease" : "all 0.7s ease"};
    /* position: fixed;
    left: 0;
    bottom: 0; */
    overflow-x: auto;
    height: 100%;
  }
`;

export const SidebarList = styled.li`
  display: flex;
  /* align-items: center;
  justify-content: space-around; */
  color: #626375;
  width: 80%;
  border-radius: 10px;
  padding: 13px;
  line-height: 22px;
  font-weight: 600;
  ${(props) =>
    props.title === "Dashboard" &&
    css`
    background-color:#fdf6f8;
    `}
  cursor: pointer;
  /* &:hover {
    background: #fdf6f8;
    border-radius: 5px;
  } */
  @media screen and (max-width: 768px) {
    transition: 2.5s;
   margin-right:60px ;
  
  }
`;

export const SidebarListIcon = styled.div`
  flex: 30%;
  display: grid;
  place-items: center;
`;
export const SidebarListTitle = styled.div`
  flex: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding:0px;
  font-family: Montserrat;
  font-size: 12px;
  font-style: normal;
  font-weight: 300;
  line-height: 17px;
  letter-spacing: 0em;
  transition: all 0.3s cubic-bezier(0.42, 0, 0.58, 1);
`;

export const MobileTopBar = styled.div`
  display: none;
  @media screen and (max-width : 768px){
    color : black;
    display : block;
  //  background-color : rgba(243, 241, 241, 0.98);
    display : flex;
    justify-content : space-between;
    margin : 0 auto;
    padding : 15px 13px 10px 13px;
    width : 92%;
    margin-top : em;
  
  }
`
export const Bars = styled.div`
width : 24px;
cursor : pointer;
color : black;
.bars{
  width : 24px;
  height : 1.86px;
  background : black;
  margin : 8px 0;
}
`
export const Logoo = styled.div`
//  margin : 0 auto;
`